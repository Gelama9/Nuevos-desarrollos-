
import { PaletteType, PaletteColors, Testimonial, ServiceItem } from './types';

export const COLORS: Record<PaletteType, PaletteColors> = {
  [PaletteType.TRADITIONAL]: {
    primary: '#4b3621',   // Marrón oscuro
    secondary: '#f5f5dc', // Beige
    accent: '#8e2323',    // Rojo Pacha y Sazón
    text: '#2d1e12',
    bg: '#fdfcf0',
    buttonText: '#ffffff'
  },
  [PaletteType.MODERN]: {
    primary: '#1a1a1a',   // Casi negro para mejor contraste
    secondary: '#ffffff', // Blanco
    accent: '#8e2323',    // Rojo Pacha y Sazón
    text: '#1a1a1a',
    bg: '#ffffff',
    buttonText: '#ffffff'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    title: 'Especialidades Huancas',
    description: 'El auténtico sabor de nuestra tierra, preparado con ingredientes frescos de la feria al momento.',
    icon: 'fa-fire-alt'
  },
  {
    title: 'Menú del Día',
    description: 'Opciones equilibradas y caseras que cambian a diario. ¡Pídelo antes de que se agote!',
    icon: 'fa-bowl-food'
  },
  {
    title: 'Atención con Cariño',
    description: 'Ambiente acogedor para tu familia o delivery rápido para tu oficina en el centro.',
    icon: 'fa-heart'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { stars: 5, text: 'Excelente sazón huanca. El menú de hoy estuvo buenísimo y llegó calientito a mi oficina.', author: 'Marisol T. - Huancayo Centro' },
  { stars: 5, text: 'La mejor opción cerca al parque. Me atendieron por WhatsApp al toque y reservé mi mesa.', author: 'Ricardo G. - Vecino' },
  { stars: 5, text: 'Sabor natural de verdad, nada de condimentos fuertes. Súper recomendado.', author: 'Elena R. - Cliente frecuente' }
];

export const CONTACT_INFO = {
  name: 'Pacha y Sazón',
  tagline: 'Sabor Natural y Saludable',
  city: 'Huancayo, Perú',
  address: 'Cerca al Centro Histórico',
  hours: 'Lunes a Domingo · 11:00 a.m. a 9:00 p.m.',
  phone: '+51 950 313 744',
  whatsapp: 'https://wa.me/51950313744',
  maps: 'https://maps.google.com',
};
