"use client";
import React from 'react';
import Navbar from '@/app/components/navbar';
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

export default function Page() {
  const data = Doc as unknown as Record<string, Section>;

  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <div >
          <Navbar />
        </div>
      </div>
      <div className="felx flex-row">
        <header className="p-10">
          <h1 className="text-4xl font-bold text-center">Modern Air Situation Display</h1>
          <h3 className="text-2xl text-center">(User Guide)</h3>
          <p className="text-xl mb-5">
            Software has provided various functions to enhance user experience in monitoring and managing aircraft. Please follow this guide for using each function.
          </p>
          <ul className="list-disc pl-5">
            {Object.entries(data).map(([sectionName]) => (
              <li key={sectionName}>
                <Link href={`/pages/${sectionName}`} className="hover:text-gray-300">
                  {sectionName}
                </Link>
              </li>
            ))}
          </ul>
        </header>

        {/* Contact Me Section */}
        <section id="contact-me" className="bg-gray-300 p-10 mt-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold mb-5">Contact Support</h2>
          <p>If you have any issues, please fill out the form below, and we will get back to you via email as soon as possible.</p>
          <Link
            href="https://forms.gle/PtLNDGzJF5hr2cTW6"
            target="_blank"
            className="text-2xl text-blue-600 hover:text-blue-800 mt-5"
          >
            Click here to contact support
          </Link>
        </section>
      </div>
    </div>
  );
}
