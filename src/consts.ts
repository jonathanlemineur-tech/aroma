/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Aroma";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Aroma, fleuriste à Namur depuis plus de 30 ans : bouquets, compositions sur mesure et abonnement fleurs fraîches. Boutiques à Namur, Jambes et Erpent.";
/**
 * Canonical origin, without the GitHub Pages project path. Resolves
 * canonical URLs, social images, and the sitemap, combined with the `base`
 * set in `astro.config.mjs`.
 */
export const SITE_URL = "https://jonathanlemineur-tech.github.io";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "fr-BE";

/** Postal address, phone, hours and social links, shared by the page content and the structured data. */
export const BUSINESS = {
  streetAddress: "Rue de l'Ouvrage 6",
  postalCode: "5000",
  city: "Namur",
  country: "BE",
  phone: "081 22 19 33",
  phoneHref: "tel:+3281221933",
  hours: [
    { day: "Lundi – Jeudi", hours: "9h30 – 18h30" },
    { day: "Vendredi", hours: "9h30 – 19h00" },
    { day: "Samedi", hours: "9h00 – 19h00" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  openingHours: ["Mo-Th 09:30-18:30", "Fr 09:30-19:00", "Sa 09:00-19:00"],
  socials: {
    facebook: "https://www.facebook.com/aromafleursofficiel",
    instagram: "https://www.instagram.com/aroma_fleurs/",
  },
};

/**
 * The three Aroma shopfronts, each with its own hours and (where known) a
 * direct line — sourced from the shops' own "horaires d'été" notice, so
 * Monday and Sunday differ by boutique.
 */
export const BOUTIQUES = [
  {
    city: "Namur",
    address: "Rue de l'Ouvrage 6, 5000 Namur",
    phone: "081 22 19 33",
    phoneHref: "tel:+3281221933",
    hours: [
      { day: "Lundi – Jeudi", hours: "9h30 – 18h30" },
      { day: "Vendredi", hours: "9h30 – 19h00" },
      { day: "Samedi", hours: "9h00 – 19h00" },
      { day: "Dimanche", hours: "Fermé" },
    ],
  },
  {
    city: "Jambes",
    address: "Av. J. Materne 57, 5100 Jambes",
    phone: null,
    phoneHref: null,
    hours: [
      { day: "Lundi", hours: "Fermé" },
      { day: "Mardi – Jeudi", hours: "9h30 – 18h30" },
      { day: "Vendredi", hours: "9h30 – 19h00" },
      { day: "Samedi", hours: "9h00 – 19h00" },
      { day: "Dimanche", hours: "Fermé" },
    ],
  },
  {
    city: "Erpent",
    address: "Ch. de Marche 524, 5101 Erpent",
    phone: "081 22 26 60",
    phoneHref: "tel:+3281222660",
    hours: [
      { day: "Lundi – Jeudi", hours: "9h30 – 18h30" },
      { day: "Vendredi", hours: "9h30 – 19h00" },
      { day: "Samedi", hours: "9h00 – 19h00" },
      { day: "Dim. & fériés", hours: "10h00 – 13h00" },
    ],
  },
];
/** Full postal address as one display line. */
export const SITE_ADDRESS = `${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.city}`;
/**
 * Routes kept out of search results. Each is excluded from the sitemap and
 * served with a `robots: noindex, nofollow` tag, so the two can't disagree.
 *
 * Surrounding slashes are optional: `"/thanks"`, `"thanks"` and `"/thanks/"`
 * all match the same route.
 */
export const NOINDEX_ROUTES: string[] = [
  "/404",
  "/mentions-legales",
  "/confidentialite",
];
