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

      <header className="p-10">
        <h1 className="text-4xl font-bold my-5 text-center">Radar DR-172ADV</h1>
        <p className="text-xl mb-5">
          Radar DR-172ADV เป็นซอฟต์แวร์ที่มีฟังก์ชันงานต่าง ๆ เพื่อเพิ่มประสบการณ์และประสิทธิภาพ สำหรับการตรวจสอบและจัดการเครื่องบิน โดยมีฟังก์ชันงานที่สามารถทำงานร่วมกันดังนี้
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
        <p>หากพบปัญหา ต้องการความช่วยเหลือ หรือมีข้อเสนอแนะเพิ่มเติม สามารถกรอกฟอร์มด้านล่างนี้ และเราจะติดต่อกลับผ่านทางอีเมลโดยเร็วที่สุด</p>
        <a
          href="https://forms.gle/PtLNDGzJF5hr2cTW6"
          target="_blank"
          className="text-2xl text-blue-600 hover:text-blue-800 mt-5"
        >
          คลิกที่นี่เพื่อติดต่อฝ่ายสนับสนุน
        </a>
      </section>
    </div>
  );
}
