"use client";

import Card from "../components/Card";
import Filter from "../components/Filter";
import { products } from "../data/products";
import { useState } from "react";
import Products from "../components/Products";
import { productTypeInfo } from "../data/skinSpecifics";

// TODO: Fix scroll position when navigating back from product details
// TODO: Add back button to go back to dashboard

export default function Dashboard() {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [page, setPage] = useState("dashboard");

    return (
        <>
            {page === "dashboard" && <h1 className="text-2xl font-bold text-gray-900 mt-8">Skincare</h1>}
            <div className="container mx-auto px-4 py-6 h-screen overflow-y-auto">
                {page === "dashboard" && <Filter />}
                <div className="mt-6">
                    <>
                        {page === "dashboard" ? (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                                {Object.keys(products).map((key: any) => {
                                    return (
                                        <Card
                                            key={key}
                                            name={products[key].name}
                                            brand={products[key].brand}
                                            price={products[key].price}
                                            image={products[key].image}
                                            rating={products[key].rating}
                                            onClick={() => {
                                                setSelectedProduct(products[key]);
                                                setPage("products");
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        ) : page === "products" ? (
                                <Products
                                    key={selectedProduct.id}
                                    name={selectedProduct.name}
                                    brand={selectedProduct.brand}
                                    price={selectedProduct.price}
                                    image={selectedProduct.image}
                                    rating={selectedProduct.rating}
                                    description={productTypeInfo[selectedProduct.productType].description}
                                    skinType={productTypeInfo[selectedProduct.productType].skinTypes.join(", ")}
                                    skinConcerns={productTypeInfo[selectedProduct.productType].skinConcerns.join(", ")}
                                    directions={productTypeInfo[selectedProduct.productType].directions}
                                    ingredients={productTypeInfo[selectedProduct.productType].ingredients.join(", ")} />
                            ) : null}
                    </>
                </div>
            </div>
        </>
    );
}