/*
 * Temporary catalog data. Replace an image URL with a verified client photo
 * or a local file in /images (for example: images/GHK-Cu Peptide Serum.jpg).
 */
const SITE_IMAGES = {
  peptideVialClear: "images/GHK-CU Vial.jpg",
  peptideVialAmber: "images/Tesamorelin.jpg",
  peptideVialWhite: "images/MOTS-c.jfif",
  peptideSerumCopper: "images/GHK-Cu Peptide Serum.jpg",
  peptideSerumDropper: "images/Peptide Renewal Serum.webp",
  peptideSerumPremium: "images/Peptide Hydration Serum.jpg",
  vitaminC: "images/Vitamin C.jpg",
  vitaminD: "images/Vitamin D3.jpg",
  vitaminB: "images/Vitamin B12.jpg",
  supplementBottle: "images/Daily Multivitamin.jpg",
  supplementCapsules: "images/Magnesium.jpg",
  omegaSoftgels: "images/Omega-3.jpg",
  electrolytes: "images/Electrolyte Blend.jpg",
  proteinPowder: "images/Protein Support.jpg",
  creatine: "images/Creatine Support.jpg",
  shaker: "images/Training Shaker.jpg",
  hydration: "images/Hydration Mix.jpg",
  wellnessBottle: "images/Zinc.jpg",
  nutrition: "images/Salad.avif",
  wellness: "images/A girl doing yoga.avif"
};

const product = (id, name, category, group, image, imageAlt, description) => ({
  id, name, category, group, image, imageAlt, description
});

const products = [
  product(
    "ghk-cu-serum",
    "GHK-Cu Peptide Serum",
    "Peptides",
    "Skin & Beauty",
    SITE_IMAGES.peptideSerumCopper,
    "Temporary image of a copper-toned peptide skincare serum bottle",
    "A cosmetic peptide serum collection. Contact us for product details and availability."
  ),
  product(
    "ghk-cu-vial",
    "GHK-Cu Vial",
    "Peptides",
    "General Wellness / Research",
    "images/GHK-CU Vial.jpg",
    "Temporary image of a small clear glass peptide vial",
    "Product information available upon request. Contact us for specifications and availability."
  ),
  product(
    "tesamorelin",
    "Tesamorelin",
    "Peptides",
    "Growth-Hormone Related",
    "images/Tesamorelin.jpg",
    "Temporary image of an amber glass peptide vial",
    "Product information available upon request. Contact us for details and availability."
  ),
  product(
    "mots-c",
    "MOTS-c",
    "Peptides",
    "Metabolic / Weight Management",
    "images/MOTS-c.jfif",
    "Temporary image of a white peptide product vial",
    "A peptide product listing for catalog organization. Contact us for current information."
  ),
  product(
    "bpc-157",
    "BPC-157",
    "Peptides",
    "Fitness & Recovery",
    "images/BPC-157.jpg",
    "Temporary image of a glass peptide vial with powder",
    "Product information available upon request. Contact us for product details."
  ),
  product(
    "tb-500",
    "TB-500",
    "Peptides",
    "Fitness & Recovery",
    "images/TB-500.jfif",
    "Temporary image of a premium glass peptide vial",
    "Catalog placeholder for a peptide product. Contact us for availability and specifications."
  ),
  product(
    "cjc-1295",
    "CJC-1295",
    "Peptides",
    "Growth-Hormone Related",
    "images/CJC-1295.jfif",
    "Temporary image of a small white peptide vial",
    "Product information available upon request. Contact us for current product details."
  ),
  product(
    "ipamorelin",
    "Ipamorelin",
    "Peptides",
    "Growth-Hormone Related",
    "images/Ipamorelin.jpg",
    "Temporary image of a clear peptide product vial",
    "A peptide product listing. Contact us for details, availability, and specifications."
  ),
  product(
    "melanotan-ii",
    "Melanotan II",
    "Peptides",
    "General Wellness / Research",
    "images/Melanotan II.jpg",
    "Temporary image of a sealed glass vial",
    "Product information available upon request. Contact us for current availability."
  ),
  product(
    "pt-141",
    "PT-141",
    "Peptides",
    "General Wellness / Research",
    "images/PT-141.jfif",
    "Temporary image of a small pharmaceutical-style vial",
    "Catalog placeholder for product organization. Contact us for product information."
  ),
  product(
    "peptide-renewal-serum",
    "Peptide Renewal Serum",
    "Peptides",
    "Peptide Serum",
    SITE_IMAGES.peptideSerumDropper,
    "Temporary image of a premium dropper skincare serum bottle",
    "A premium skincare peptide serum collection. Contact us for product details."
  ),
  product(
    "peptide-hydration-serum",
    "Peptide Hydration Serum",
    "Peptides",
    "Skin & Beauty",
    SITE_IMAGES.peptideSerumPremium,
    "Temporary image of a minimal premium skincare serum bottle",
    "A cosmetic peptide serum listing. Contact us for current product information."
  ),
  product(
    "vitamin-c",
    "Vitamin C",
    "Vitamins & Supplements",
    "Daily Supplements",
    "images/Vitamin C.jpg",
    "Temporary image of a vitamin supplement bottle",
    "A vitamin supplement product listing. Contact us for product information."
  ),
  product(
    "vitamin-d3",
    "Vitamin D3",
    "Vitamins & Supplements",
    "Daily Supplements",
    "images/Vitamin D3.jpg",
    "Temporary image of a vitamin D supplement bottle",
    "A daily supplement product listing. Contact us for current details."
  ),
  product(
    "vitamin-b12",
    "Vitamin B12",
    "Vitamins & Supplements",
    "Daily Supplements",
    "images/Vitamin B12.jpg",
    "Temporary image of vitamin capsules in a container",
    "A vitamin supplement product listing. Contact us for product information."
  ),
  product(
    "multivitamin",
    "Daily Multivitamin",
    "Vitamins & Supplements",
    "Daily Supplements",
    "images/Daily Multivitamin.jpg",
    "Temporary image of a daily supplement bottle",
    "A daily wellness supplement collection. Contact us for availability."
  ),
  product(
    "magnesium",
    "Magnesium",
    "Vitamins & Supplements",
    "Minerals",
    "images/Magnesium.jpg",
    "Temporary image of mineral supplement capsules",
    "A mineral supplement product listing. Contact us for current details."
  ),
  product(
    "zinc",
    "Zinc",
    "Vitamins & Supplements",
    "Minerals",
    "images/Zinc.jpg",
    "Temporary image of a zinc supplement container",
    "A mineral supplement product listing. Contact us for availability."
  ),
  product(
    "omega-3",
    "Omega-3",
    "Vitamins & Supplements",
    "Daily Supplements",
    "images/Omega-3.jpg",
    "Temporary image of softgel supplement capsules",
    "A wellness supplement product listing. Contact us for product details."
  ),
  product(
    "biotin",
    "Biotin",
    "Vitamins & Supplements",
    "Daily Supplements",
    "images/Biotin.jpg",
    "Temporary image of a biotin supplement bottle",
    "A vitamin supplement product listing. Contact us for current information."
  ),
  product(
    "electrolytes",
    "Electrolyte Blend",
    "Vitamins & Supplements",
    "Hydration",
    "images/Electrolyte Blend.jpg",
    "Temporary image of an electrolyte hydration product",
    "A hydration-focused wellness product listing. Contact us for details."
  ),
  product(
    "protein-support",
    "Protein Support",
    "Fitness & Nutrition",
    "Fitness Supplements",
    "images/Protein Support.jpg",
    "Temporary image of a protein powder container",
    "A fitness nutrition product listing. Contact us for product information."
  ),
  product(
    "creatine-support",
    "Creatine Support",
    "Fitness & Nutrition",
    "Fitness Supplements",
    "images/Creatine Support.jpg",
    "Temporary image of a fitness supplement container",
    "A fitness-support product listing. Contact us for current details."
  ),
  product(
    "pre-workout-style",
    "Pre-Workout Style Support",
    "Fitness & Nutrition",
    "Fitness Supplements",
    "images/Pre-Workout Style Support.jpg",
    "Temporary image of a fitness supplement bottle",
    "A fitness routine product listing. Contact us for availability."
  ),
  product(
    "recovery-support",
    "Recovery Support",
    "Fitness & Nutrition",
    "Fitness Supplements",
    "images/Recovery Support.jfif",
    "Temporary image of a recovery supplement container",
    "A wellness product for an active routine. Contact us for product details."
  ),
  product(
    "hydration-mix",
    "Hydration Mix",
    "Fitness & Nutrition",
    "Hydration",
    "images/Hydration Mix.jpg",
    "Temporary image of a hydration product and water bottle",
    "A hydration-oriented fitness product listing. Contact us for information."
  ),
  product(
    "training-shaker",
    "Training Shaker",
    "Fitness & Nutrition",
    "Accessories",
    "images/Training Shaker.jpg",
    "Temporary image of a fitness shaker accessory",
    "A fitness accessory placeholder. Contact us for current availability."
  ),
  product(
    "weight-management-support",
    "Weight Management Support",
    "Weight Management",
    "Wellness Support",
    "images/Weight Management Support.jpg",
    "Temporary image of a wellness supplement container",
    "Explore products associated with weight-management goals. Contact us for details."
  ),
  product(
    "metabolic-wellness",
    "Metabolic Wellness Support",
    "Weight Management",
    "Wellness Support",
    "images/Metabolic Wellness Support.jpg",
    "Temporary image of a metabolism-oriented wellness container",
    "A wellness product listing for lifestyle goals. Contact us for information."
  ),
  product(
    "portion-hydration",
    "Portion & Hydration Support",
    "Weight Management",
    "Lifestyle Tools",
    "images/Portion & Hydration Support.jpg",
    "Temporary image of a hydration wellness product",
    "A lifestyle-support product listing. Contact us for product details."
  ),
  product(
    "daily-wellness",
    "Daily Wellness Essentials",
    "General Wellness",
    "Everyday Routine",
    "images/Daily Wellness Essentials.jpg",
    "Temporary image of an everyday wellness supplement bottle",
    "An everyday wellness product listing. Contact us for current information."
  ),
  product(
    "mineral-balance",
    "Mineral Balance",
    "General Wellness",
    "Minerals",
    "images/Mineral Balance.jpg",
    "Temporary image of mineral supplement capsules",
    "A general wellness product listing. Contact us for availability."
  ),
  product(
    "sleep-wellness",
    "Sleep Wellness Support",
    "General Wellness",
    "Everyday Routine",
    "images/Sleep Wellness Support.jpg",
    "Temporary image of a calm premium wellness bottle",
    "A wellness-oriented product listing. Contact us for product details."
  )
];

const articles = [
  { id: "understanding-peptides", title: "Understanding Peptides: A Beginner’s Guide", date: "Date coming soon", image: SITE_IMAGES.peptideVialClear, description: "A general introduction to peptides and how to approach wellness information responsibly." },
  { id: "nutrition-fitness-goals", title: "How Nutrition Supports Your Fitness Goals", date: "Date coming soon", image: SITE_IMAGES.nutrition, description: "Thoughtful, practical ideas for building nutrition habits around your routine." },
  { id: "consistent-wellness-routine", title: "Building a Consistent Wellness Routine", date: "Date coming soon", image: SITE_IMAGES.wellness, description: "Simple ways to make a sustainable, realistic wellness routine your own." },
  { id: "fitness-nutrition-weight-management", title: "Fitness, Nutrition and Weight Management", date: "Date coming soon", image: SITE_IMAGES.proteinPowder, description: "How these connected lifestyle areas can support a balanced approach to wellness." },
  { id: "choosing-wellness-products", title: "Choosing Wellness Products Responsibly", date: "Date coming soon", image: SITE_IMAGES.vitaminC, description: "Questions to consider when selecting products for personal wellness goals." }
];
