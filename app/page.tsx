"use client";
import React from 'react';
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
    <div>
      <nav className='nav'>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          {Object.entries(data).map(([sectionName, section]) => (
            <li key={sectionName}>
              <Link href={`/pages/${sectionName}`} className="hover:text-gray-300">
                {sectionName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <header className="bg-gray-100 p-10">
        <h1 className="text-4xl font-bold my-5 text-center ">Radar DR-172ADV</h1>
        <p className='text-1xl mb-5'>
          Software has provided various functions to enhance user experience in monitoring and managing aircraft. Please follow this guide for using each function.
        </p>
        <ul className="list-disc pl-5">
          {Object.entries(data).map(([sectionName, section]) => (
            <li key={sectionName}>
              <Link href={`/pages/${sectionName}`} className="hover:text-gray-300">
                {sectionName}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      {/* Contact Me Section */}
      <section id="contact-me" className="bg-gray-200 p-10 mt-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold mb-5">Contact Support</h2>
        <p>If you have any issues, please fill out the form below, and we will get back to you via email as soon as possible.</p>
        <ul className="list-disc pl-5 mt-5">
            <a 
              href="https://forms.gle/your-google-form-link" 
              target="_blank" 
              className="text-2xl text-blue-600 hover:text-blue-800 flex items-center space-x-2 cursor-pointer">
              <span>Click here to contact support</span>
            </a>
        </ul>
      </section>
    </div>
  );
}
