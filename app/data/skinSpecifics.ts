interface ProductTypeInfo {
    description: string;
    directions: string;
    skinTypes: string[];
    skinConcerns: string[];
    ingredients: string[];
}

const productTypeInfo: Record<string, ProductTypeInfo> = {
    "Cleanser": {
        description: "A gentle yet effective cleanser that purifies the skin without stripping its natural moisture barrier.",
        directions: "Apply to damp skin, massage gently, and rinse thoroughly with warm water. Use morning and evening.",
        skinTypes: ["Normal", "Dry", "Oily", "Combination", "Sensitive", "Acne-Prone"],
        skinConcerns: ["Acne", "Dullness", "Oiliness", "Impurities"],
        ingredients: ["Gentle surfactants", "Botanical extracts", "Glycerin", "Natural cleansers"]
    },
    "Toner": {
        description: "A refreshing toner that helps remove residual impurities and prepares the skin for subsequent products.",
        directions: "Apply to clean skin and gently pat until absorbed.",
        skinTypes: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
        skinConcerns: ["Dullness", "Uneven Texture", "Large Pores"],
        ingredients: ["Hydrating agents", "Botanical extracts", "pH balancers"]
    },
    "Serum": {
        description: "A targeted serum that delivers active ingredients deep into the skin for visible results.",
        directions: "Apply a small amount to clean skin and gently pat until absorbed.",
        skinTypes: ["Normal", "Dry", "Oily", "Combination", "Sensitive", "Acne-Prone"],
        skinConcerns: ["Aging", "Dark Spots", "Fine Lines", "Hyperpigmentation", "Dullness"],
        ingredients: ["Active ingredients", "Vitamins", "Antioxidants", "Hyaluronic acid"]
    },
    "Moisturizer": {
        description: "A hydrating moisturizer that helps maintain the skin's natural moisture balance.",
        directions: "Apply a small amount to clean skin and gently pat until absorbed.",
        skinTypes: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
        skinConcerns: ["Dryness", "Fine Lines", "Redness", "Sensitivity"],
        ingredients: ["Hydrating agents", "Ceramides", "Natural oils", "Vitamins"]
    },
    "Sunscreen": {
        description: "A broad-spectrum sunscreen that protects the skin from harmful UV rays.",
        directions: "Apply a small amount to clean skin and gently pat until absorbed.",
        skinTypes: ["Normal", "Dry", "Oily", "Combination", "Sensitive", "Acne-Prone"],
        skinConcerns: ["Aging", "Dark Spots", "Hyperpigmentation", "Redness"],
        ingredients: ["Zinc oxide", "Titanium dioxide", "Antioxidants", "Moisturizers"]
    },
    "Eye Cream": {
        description: "A nourishing eye cream that helps reduce the appearance of fine lines and dark circles.",
        directions: "Apply a small amount to clean skin and gently pat until absorbed.",
        skinTypes: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
        skinConcerns: ["Aging", "Fine Lines", "Dark Circles", "Puffiness"],
        ingredients: ["Peptides", "Vitamin C", "Retinol", "Caffeine"]
    },
    "Mask": {
        description: "A hydrating mask that helps restore the skin's natural moisture balance.",
        directions: "Position on face, let sit for about 3 hours, then remove and rinse.",
        skinTypes: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
        skinConcerns: ["Dryness", "Dullness", "Uneven Texture", "Redness"],
        ingredients: ["Natural extracts", "Hydrating agents", "Clay", "Botanicals"]
    },
    "Face Oil": {
        description: "A nourishing face oil that helps restore the skin's natural moisture balance.",
        directions: "Apply a small amount to clean skin and gently pat until absorbed.",
        skinTypes: ["Normal", "Dry", "Combination", "Sensitive"],
        skinConcerns: ["Dryness", "Fine Lines", "Dullness", "Redness"],
        ingredients: ["Natural oils", "Essential fatty acids", "Antioxidants", "Vitamins"]
    },
    "Acne Treatment": {
        description: "A targeted treatment that helps clear acne and prevent breakouts.",
        directions: "Apply a small amount to affected areas after cleansing.",
        skinTypes: ["Oily", "Combination", "Acne-Prone"],
        skinConcerns: ["Acne", "Oiliness", "Large Pores", "Redness"],
        ingredients: ["Salicylic acid", "Benzoyl peroxide", "Tea tree oil", "Sulfur"]
    },
    "Balm": {
        description: "A targeted balm that helps treat specific skin concerns with concentrated ingredients.",
        directions: "Apply a small amount to affected areas after cleansing. Use as needed.",
        skinTypes: ["Normal", "Oily", "Combination", "Acne-Prone"],
        skinConcerns: ["Acne", "Redness", "Irritation", "Spot treatment"],
        ingredients: ["Salicylic acid", "Sulfur", "Zinc", "Botanical extracts"]
    },
    "Lip Balm": {
        description: "A nourishing lip balm that helps restore the skin's natural moisture balance.",
        directions: "Apply to lip.",
        skinTypes: ["Normal", "Dry", "Sensitive"],
        skinConcerns: ["Dryness", "Chapping", "Fine Lines"],
        ingredients: ["Natural oils", "Butters", "Vitamin E", "Moisturizers"]
    }
};

export { productTypeInfo };