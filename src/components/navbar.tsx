/* eslint-disable @next/next/no-img-element */
"use client";

import { MenuItem, NavLinkProps } from "@/types/navbar";
import React, { use, useEffect, useState } from "react";
import Doc from '@/data/data.json';
import { Section } from "@/types/doc";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { usePathname, useRouter } from "next/navigation";

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
                className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 ${isOpen ? "dark:text-gray-200" : "dark:text-gray-300/50"} hover:bg-gray-100 hover:text-gray-700`}
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
                                    className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700"
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

function UserProfile({ t, pathname, router }: { t: any, pathname: string, router: any }) {
    return (
        <div>
            <div className="flex">
                <div
                    // href="#"
                    onClick={() => handleLanguageChange('th', pathname, router)}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    TH
                </div>
                <div
                    // href="#"
                    onClick={() => handleLanguageChange('en', pathname, router)}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    EN
                </div>
            </div>
            <div className="flex items-center gap-4 p-4">
                <img className="size-10 rounded-full object-cover dark:invert" alt="Profile" src="/Icon_Dark.png" />
                <div>
                    <p className="text-sm">
                        <strong className="mb-2 block font-bold py-2">{t("Center of Specialty Innovation")}</strong>
                        <Link
                            href="mailto:bumit.lab@gmail.com"
                            className="font-bold mt-2 text-blue-600 border border-blue-600 rounded-lg bg-transparent px-3 py-1 hover:bg-blue-600 hover:text-white transition"
                        >
                            {t("Contact us")}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

const handleLanguageChange = (lang: string, pathname: string, router: any) => {
    router.replace(`/${lang.toLowerCase()}`);
}

export default function Navbar() {
    const locale = useLocale();
    const t = useTranslations('HomePage');
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [data, setData] = useState<{} | null>();
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        { type: "link", label: t("home"), href: "/", className: "font-bold" }
    ]);
    const pathname = usePathname();

    const router = useRouter();

    const handleDropdownToggle = (label: string) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    const jsonToMenuItems = (data: any): MenuItem[] => {
        const menuItems: MenuItem[] = [];

        Object.keys(data).forEach((key) => {
            const section = data[key];
            const items = section.features.map((feature: any) => {
                if (feature.features) {
                    // Handle nested features (e.g., Areas and Symbols)
                    return { label: feature.name, href: "/" + key + "#" + feature.name };
                }
                return { label: feature.name, href: "/" + key + "#" + feature.name };
            });

            menuItems.push({
                type: "dropdown",
                label: key.replace(/([A-Z])/g, ' $1').trim(), // Convert camelCase to Title Case
                items
            });
        });

        return menuItems;
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (locale) {
                // @ts-ignore
                setData(Doc[locale as string] as unknown as Record<string, any>);
            }
        }
    }, []);

    useEffect(() => {
        if (data) {
            setMenuItems((prev) => [...prev, ...jsonToMenuItems(data)]);
        }
    }, [data]);

    return (
        <div className="flex w-64 h-screen flex-col justify-between border-e dark:border-gray-800 select-none">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg text-xs text-gray-600 dark:text-gray-100 dark:bg-gray-800">
                    {t("logo")}
                </span>

                <ul className="mt-6 space-y-1">
                    {menuItems.length > 0 &&
                        menuItems.map((item, index) => (
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

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-800">
                <UserProfile
                    t={t}
                    pathname={pathname}
                    router={router}
                />
            </div>
        </div>
    );
}