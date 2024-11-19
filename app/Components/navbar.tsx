/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState } from "react";

type LinkItem = {
    type: "link";
    label: string;
    href: string;
    className?: string;
};

type DropdownItem = {
    type: "dropdown";
    label: string;
    items: { label: string; href: string; isButton?: boolean }[];
};

type MenuItem = LinkItem | DropdownItem;

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

function NavLink({ href, children, className = "" }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`block rounded-lg px-4 py-2 text-sm font-medium ${className} hover:bg-gray-100 hover:text-gray-700`}
        >
            {children}
        </Link>
    );
}

interface DropdownProps {
    label: string;
    items: { label: string; href: string; isButton?: boolean }[];
    isOpen: boolean;
    onToggle: () => void;
}

function Dropdown({ label, items, isOpen, onToggle }: DropdownProps) {
    return (
        <div>
            <div
                onClick={onToggle}
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
                <span className="text-sm font-bold">{label}</span>
                <span className="shrink-0 transition duration-300 transform">
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 12.707a1 1 0 011.414 0L10 9.414l3.293 3.293a1 1 0 111.414-1.414l-4-4a1 1 0 01-1.414 0l-4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                                />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </span>
            </div>
            <ul className={`mt-2 space-y-1 px-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.isButton ? (
                            <form action="#">
                                <button
                                    type="submit"
                                    className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    {item.label}
                                </button>
                            </form>
                        ) : (
                            <NavLink href={item.href}>{item.label}</NavLink>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function UserProfile() {
    return (
        <Link className="flex items-center gap-4 bg-white p-4" href={""}>
            <img
                className="size-10 rounded-full object-cover"
                alt="Profile"
                src="Icon_Dark.png"
            /> 
            <div >
                <p className="text-sm">
                    <strong className="block font-bold py-2">Center of Specialty Innovation</strong>
                    <Link
                        href="mailto:bumit.lab@gmail.com"
                        className=" font-bold text-blue-600 border border-blue-600 rounded-lg bg-transparent px-3 py-1 hover:bg-blue-600 hover:text-white transition"
                    >
                        Contact us
                    </Link>
                </p>
            </div>
        </Link>
    );
}

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleDropdownToggle = (label: string) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    const menuItems: MenuItem[] = [
        { type: "link", label: "Home", href: "#", className: "bg-gray-100 font-bold" },
        {
            type: "dropdown",
            label: "Map Operations",
            items: [
                { label: "Zoom (In - Out)", href: "#" },
                { label: "Capture Map", href: "#" },
                { label: "Map Type", href: "#" },
                { label: "Map Preferences", href: "#" },
                { label: "Pin", href: "#" },
                { label: "Area and Symbols", href: "#" },
            ]
        },
        {
            type: "dropdown",
            label: "System Settings",
            items: [
                { label: "Display Unit", href: "#" },
                { label: "Measurement Unit", href: "#" },
                { label: "Quick Measument Setting", href: "#" },
                { label: "Max Speed for CPC", href: "#" },
                { label: "Radar Radius Setting", href: "#" },
                { label: "Send-Receive Port Data", href: "#" },
            ]
        },
        {
            type: "dropdown",
            label: "Map Settings",
            items: [
                { label: "Radar Location", href: "#" },
                { label: "Radar", href: "#" },
            ]
        },
        {
            type: "dropdown",
            label: "Area Management",
            items: [
                { label: "Create Area", href: "#" },
                { label: "Edit Area", href: "#" },
                { label: "Delete Area", href: "#" },
            ]
        },
        {
            type: "dropdown",
            label: "Symbol Management",
            items: [
                { label: "Create Symbol", href: "#" },
                { label: "Edit Symbol", href: "#" },
                { label: "Delete Symbol", href: "#" },
            ]
        },
        {
            type: "dropdown",
            label: "Faking System",
            items: [
                { label: "Add Faker Aircraft", href: "#" },
                { label: "Faker Information", href: "#" },
                { label: "Edit Faker Status", href: "#" },
                { label: "Delete Faker Aircraft", href: "#" },
            ]
        },
        {
            type: "dropdown",
            label: "Measurement Tools",
            items: [
                { label: "Calculate Collision", href: "#" },
                { label: "Measure Distance", href: "#" },
            ]
        },
        {
            type: "dropdown",
            label: "Aircraft Monitoring",
            items: [
                { label: "Select Aircraft", href: "#" },
                { label: "Aircraft Information", href: "#" },
            ]
        },
    ];

    return (
        <div className="flex w-64 h-screen flex-col justify-between border-e bg-white select-none">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                    Logo
                </span>

                <ul className="mt-6 space-y-1">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.type === "link" ? (
                                <NavLink href={item.href} className={item.className || ""}>
                                    {item.label}
                                </NavLink>
                            ) : (
                                <Dropdown
                                    label={item.label}
                                    items={item.items}
                                    isOpen={openDropdown === item.label}
                                    onToggle={() => handleDropdownToggle(item.label)}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <UserProfile />
            </div>
        </div>
    );
}