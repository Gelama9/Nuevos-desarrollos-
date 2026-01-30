
export enum PaletteType {
  TRADITIONAL = 'TRADITIONAL',
  MODERN = 'MODERN'
}

export interface PaletteColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  bg: string;
  buttonText: string;
}

export interface Testimonial {
  stars: number;
  text: string;
  author: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}
