//FakingSystem

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
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

const selectedSection = 'FakingSystem';

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
      <div className="bg-gray-400 flex flex-col ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
        <p className="list-inside my-5 text-base md:text-lg lg:text-xl">{section.description}</p>
      </div>

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
  const sectionToDisplay = data[selectedSection];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="nav">
        <div className="flex justify-between items-center">
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
        <ul className={`flex flex-wrap md:flex-row md:space-x-4 mt-4 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          {Object.entries(data).map(([sectionName]) => (
            <li key={sectionName}>
              <Link href={`/pages/${sectionName}`} className="hover:text-gray-300">
                {sectionName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {sectionToDisplay && <SectionDisplay key={selectedSection} title={selectedSection} section={sectionToDisplay} />}
    </div>
  );
}
