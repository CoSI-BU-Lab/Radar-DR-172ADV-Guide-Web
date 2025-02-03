export interface Feature {
    name: string;
    description: string;
    image?: string;
    features?: Feature[];
}

export interface Section {
    description: string;
    features: Feature[];
}