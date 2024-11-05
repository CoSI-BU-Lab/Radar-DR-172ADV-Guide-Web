"use client";
import React from 'react';
import Doc from '@/data/data.json';

interface Feature {
  name: string;
  description: string;
  image?: string;
  features?: Feature[];
}

interface Section {
  description: string;
  features: Feature[];
}

function FeatureList({ features }: { features: Feature[] }) {
  return (
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
}

function SectionDisplay({ title, section }: { title: string; section: Section }) {
  return (
    <section id={title} className="bg-gray-100 p-10">
      <div className="bg-gray-400 p-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="list-inside p-5">{section.description}</p>
        <ul className="list-disc pl-5">
          {section.features.map((feature) => (
            <li key={feature.name}>
              <a href={`#${feature.name}`} className="text-gray-600 hover:text-black my-5">
                {feature.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-200 p-8">
        <FeatureList features={section.features} />
      </div>
    </section>
  );
}

export default function Page() {
  const data = Doc as unknown as Record<string, Section>;

  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white font-bold">
        <ul className="flex space-x-4">
          {Object.keys(data).map((sectionName) => (
            <li key={sectionName}>
              <a href={`#${sectionName}`} className="hover:text-gray-300">
                {sectionName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <header className="bg-gray-100 p-10">
        <h1 className="text-4xl font-bold my-5">Radar DR-172ADV</h1>
        <p>
          Software has provided various functions to enhance user experience in monitoring and managing aircraft. Please follow this guide for using each function.
        </p>
      </header>
      {Object.entries(data).map(([sectionName, section]) => (
        <SectionDisplay key={sectionName} title={sectionName} section={section} />
      ))}
    </div>
  );
}
