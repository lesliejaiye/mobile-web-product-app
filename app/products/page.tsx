"use client";

import Products from "../components/Products";
import { products } from "../data/products";
import { productTypeInfo } from "../data/skinSpecifics";
import { useState } from "react";

export default function ProductsPage() {
    const [selectedProductType, setSelectedProductType] = useState<string>("All");
    const [selectedProduct, setSelectedProduct] = useState(products);
    
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-900">Product Details</h1>
            <div className="mt-22">
                {
                    products.map((product) => {
                        console.log(productTypeInfo[product.productType].description);
                        return (
                            <Products 
                                key={product.id}
                                name={product.name}
                                brand={product.brand}
                                price={product.price}
                                image={product.image}
                                rating={product.rating}
                                description={productTypeInfo[product.productType].description}
                                skinType={productTypeInfo[product.productType].skinTypes.join(", ")}
                                skinConcerns={productTypeInfo[product.productType].skinConcerns.join(", ")}
                                directions={productTypeInfo[product.productType].directions}
                                ingredients={productTypeInfo[product.productType].ingredients.join(", ")}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}
