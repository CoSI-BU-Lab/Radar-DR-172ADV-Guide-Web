// Import necessary packages
import React from 'react';

// Fetch data from the server
async function getdata(): Promise<DataResponse> {
  const res = await fetch('http://localhost:3000/data');
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}

// Define interfaces for your data
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

interface DataResponse {
  MapOperation: Section;
  SystemSettings: Section;
  MapSettings: Section;
  AreaManagement: Section;
  SymbolsManagement: Section;
  FakingSystem: Section;
  MeasurementTools: Section;
  AircraftMonitoring: Section;
}

// Component to display a list of features
function FeatureList({ features }: { features: Feature[] }) {
  return (
    <ul>
      {features.map((feature, index) => (
        <div className='p-5 my-5' key={index}>
          <li id={feature.name}>
            <h3 className='text-2xl font-bold'>{feature.name}</h3>
            <ul className='list-inside p-5'>{feature.description}</ul>
            {feature.image && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={feature.image}
                  alt={feature.name}
                  style={{ maxWidth: '90%', height: 'auto' }}
                />
              </div>
            )}
            {feature.features && <FeatureList features={feature.features} />}
          </li>
        </div>
      ))}
    </ul>
  );
}

// Component to display each section
function SectionDisplay({ title, section }: { title: string; section: Section }) {
  return (
    <div id={title}>
      <div className="bg-gray-400 p-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <ul className="list-inside p-5">{section.description}</ul>
        <ul className="list-disc pl-5">
          {section.features.map((feature, index) => (
            <li key={index}>
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
    </div>
  );
}

// Main Page component
export default async function Page() {
  const data = await getdata();
  return (
    <div>
      <nav className='nav'>
        <ul className="flex space-x-4">
          {Object.keys(data).map((sectionName) => (
            <li key={sectionName}>
              <a
                href={`#${sectionName}`}
                className="text-white font-bold hover:text-gray-300"
              >
                {sectionName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bg-gray-100 p-10">
        <h1 className="text-4xl font-bold my-5">Radar DR-172ADV</h1>
        <ul className="my-5">
          Software has provided various functions to enhance user experience in monitoring and managing aircraft. Please follow this guide for using each function
        </ul>
      </div>
      
      {Object.entries(data).map(([sectionName, section]) => (
        <div className="bg-gray-100 p-10" key={sectionName}>
          <SectionDisplay
            key={sectionName}
            title={sectionName}
            section={section as Section}
          />
        </div>
      ))}
    </div>
  );
}
