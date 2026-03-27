"use client";

import Card from "../components/Card";
import Filter from "../components/Filter";
import { useRouter } from "next/navigation";
import { products } from "../data/products";

// TODO: Add a loop to handle multiple cards
export default function Dashboard() {
    const router = useRouter();
    
    return (
        <>
        <h1 className="text-2xl font-bold mb-4 text-gray-900 mt-8">Skincare</h1>
        <div className="container mx-auto px-4 py-6 h-screen overflow-y-auto">
            <Filter />
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {Object.keys(products).map((key: any) => {
                    return (
                        <Card 
                        key={key}
                        name={products[key].name}
                        brand={products[key].brand}
                        price={products[key].price}
                        image={products[key].image}
                        rating={products[key].rating}
                        onClick={() => router.push("/products")}
                        />
                    );
                })}
            </div>
        </div>
        </>
    );
}