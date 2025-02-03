export type LinkItem = {
    type: "link";
    label: string;
    href: string;
    className?: string;
};

export type DropdownItem = {
    type: "dropdown";
    label: string;
    items: { label: string; href: string; isButton?: boolean }[];
};

export type MenuItem = LinkItem | DropdownItem;

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}