/**
 * SINGLE SOURCE OF TRUTH for the practice's identity, contact and NAP data.
 *
 * Everything wrapped in `{{ ... }}` or marked `PLACEHOLDER` must be confirmed/replaced
 * by Thais before launch. Keeping NAP (Name, Address, Phone) identical here, in the
 * Google Business Profile and in directories (Doctoralia) is critical for local SEO.
 *
 * After replacing values, also update `site` in astro.config.mjs to the final domain.
 */

export const site = {
  // ── Brand ────────────────────────────────────────────────────────────────
  /** Professional's name (display). */
  professionalName: 'Thais Azevedo',
  /** Full legal name (used in schema legalName + footer). */
  legalName: 'Thais Azevedo da Rocha',
  /** Short brand used in the header/logo wordmark. */
  brand: 'Thais Azevedo',
  profession: 'Neuropsicopedagoga',
  /** Formação (from her vision deck). */
  credentials:
    'Pós-graduada em Dificuldades na Aprendizagem e em Neuropsicopedagogia Clínica · Pedagoga desde 2015',
  tagline: 'Avaliação e intervenção neuropsicopedagógica para crianças e adolescentes',

  // ── Location (in-person practice, São Paulo) ─────────────────────────────
  city: 'São Paulo',
  state: 'SP',
  stateFull: 'São Paulo',
  country: 'BR',
  /** She attends both at the office and at the patient's home. */
  servesAtHome: true,
  address: {
    street: '{{RUA_E_NUMERO}}',
    neighborhood: '{{BAIRRO}}',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '{{CEP}}',
    country: 'BR',
  },
  /** Consultório coordinates — fill from Google Maps (right-click → coordinates). */
  geo: { lat: -23.55052, lng: -46.633308 }, // PLACEHOLDER: São Paulo centro

  // ── Contact (WhatsApp is the primary conversion channel) ─────────────────
  /** International format, digits only, no "+". */
  whatsapp: '5511986475451',
  /** Pretty display version. */
  whatsappDisplay: '(11) 98647-5451',
  email: 'thaisazevedo@hotmail.com',
  /** Displayed availability. Exact hours not provided — kept flexible by appointment. */
  hours: [
    { days: 'Atendimentos', time: 'com hora marcada' },
    { days: 'Agende', time: 'pelo WhatsApp' },
  ],
  /** Machine-readable hours for schema.org (ISO weekday codes). */
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '12:00' },
  ],
  priceRange: '$$',

  // ── Social / external profiles (consensus signals for GEO) ───────────────
  social: {
    instagram: 'https://instagram.com/{{INSTAGRAM}}', // PLACEHOLDER
    doctoralia: '', // PLACEHOLDER: add Doctoralia profile URL once created
    googleProfile: '', // PLACEHOLDER: Google Business Profile (Maps) URL once created
  },
} as const;

/** Base WhatsApp URL with an optional pre-filled message (drives conversions). */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Default pre-filled WhatsApp message. */
export const defaultWhatsappMessage =
  `Olá, Thais! Encontrei seu site e gostaria de saber mais sobre o acompanhamento neuropsicopedagógico.`;

/** Full one-line address for display + schema. */
export const fullAddress =
  `${site.address.street}, ${site.address.neighborhood}, ${site.address.city} – ${site.address.state}`;

/** sameAs array (only non-empty profiles) for JSON-LD. */
export const sameAs = Object.values(site.social).filter(Boolean);
