"use client";
import { Link } from "@/i18n/routing";
import { Feature, Section } from "@/types/doc";
import Doc from '@/data/data.json';
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import React from "react";

export default function dataLayout({
    contents,
}: {
    contents: string;
}) {
    const locale = useLocale();
    const [sectionToDisplay, setSectionToDisplay] = useState<Section | null>(null);

    useEffect(() => {
        const loadSection = async () => {
            // @ts-ignore - We're assuming the data structure is dynamic with `locale` keys
            const data = Doc[locale] as Record<string, Section>;
            const decodedContents = decodeURIComponent(contents);
            const section = data[decodedContents] || null;
            setSectionToDisplay(section);
        };

        loadSection();
    }, [locale, contents]); // Dependencies include `locale` and `contents`

    const FeatureList = ({ features }: { features: Feature[] }) => (
        <ul>
            {features.map((feature) => (
                <li className="p-5 my-5" id={feature.name} key={feature.name}>
                    <h3 className="text-2xl font-bold">{feature.name}</h3>
                    <p className="list-inside p-5">{feature.description}</p>
                    {feature.image && (
                        <div className="flex justify-center">
                            <img src={feature.image} alt={feature.name} className="max-w-[90%] h-auto" />
                        </div>
                    )}
                    {feature.features && <FeatureList features={feature.features} />}
                </li>
            ))}
        </ul>
    );

    const SectionDisplay = ({ title, section }: { title: string; section: Section }) => (
        <section id={title} className="py-10 px-8 mx-96">
            <div className="p-6">
                <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
                    <p className="list-inside my-5 text-base md:text-lg lg:text-xl">{section.description}</p>
                </div>
            </div>
            <div className="p-0">
                <FeatureList features={section.features} />
            </div>
        </section>
    );

    if (!sectionToDisplay) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SectionDisplay title={decodeURIComponent(contents)} section={sectionToDisplay} />
        </div>
    );
}
