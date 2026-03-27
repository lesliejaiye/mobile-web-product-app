"use client";

import Products from "../components/Products";

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-900">Product Details</h1>
            <div className="mt-22">
                <Products 
                    name="Qasil Cleanser"
                    brand="Sable Labs"
                    price="29.99"
                    image="https://sablelabs.co/cdn/shop/files/QasilCleanerWebNEW1x1_2048x2048.png?v=1759924804"
                    rating={`${5} Stars`}
                    description="A gentle yet effective cleanser that purifies the skin without stripping its natural moisture barrier."
                    skinType="All skin types"
                    skinConcerns="Dullness, uneven texture, impurities"
                    directions="Apply to damp skin, massage gently, and rinse thoroughly with warm water. Use morning and evening."
                    ingredients="Qasil extract, glycerin, natural surfactants, botanical extracts"
                />
            </div>
        </div>
    );
}
