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
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Skincare</h1>
        <div className="container mx-auto px-4 py-6">
            <Filter />
            <div className="mt-6">
                <Card 
                name="Qasil Cleanser"
                brand="Sable Labs "
                price="29.99"
                image="https://sablelabs.co/cdn/shop/files/QasilCleanerWebNEW1x1_2048x2048.png?v=1759924804"
                rating={5}
                onClick={() => router.push("/products")}
                />
            </div>
        </div>
        </>
    );
}