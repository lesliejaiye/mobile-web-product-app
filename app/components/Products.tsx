import { reviews } from '../data/reviews';

export default function Products({ name, brand, price, image, rating, description, skinType, skinConcerns, directions, ingredients }: { 
    name: string, 
    brand: string, 
    price: number, 
    image: string, 
    rating: number | string, 
    description: string, 
    skinType: string, 
    skinConcerns: string, 
    directions: string, 
    ingredients: string 
}) {
// TODO: Add a highlights section that speaks on the top benefits of product
    return (
        <>
        <div className="w-full p-4 pt-8 bg-white min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800">{brand}</h1>
                <h2 className="text-xl text-gray-800">{name}</h2>
                <p className="text-gray-600">{rating}</p>
            </div>
            <div className="text-center">
                <img src={image} alt={name} className="w-64 h-64 object-cover mx-auto mt-4" />
                <p className="text-gray-800 font-bold">${price}</p>
            </div>
            <div className="text-center">
                <button className="text-black px-16 py-1 mt-2 rounded-xl border-2 border-black">Buy</button>
            </div>
            <div className="mt-8">
                <p className="font-semibold text-gray-600 font-medium mb-2">Skincare Concerns: </p>
                <p className="text-gray-800 mb-4">{skinConcerns}</p>
                <p className="font-semibold text-gray-600 font-medium mb-2">Best For: </p>
                <div className="flex flex-wrap gap-2">
                    {skinType.includes(',') ? skinType.split(',').map((type, index) => (
                        <span key={index} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                            {type.trim()}
                        </span>
                    )) : (
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                            {skinType}
                        </span>
                    )}
                </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-sm text-gray-700 mb-2">About the Product</p>
                <p className="text-sm text-gray-600 mb-3">{description}</p>
                <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">How to Use:</span> {directions}</p>
                <p className="font-semibold text-sm text-gray-700 mb-1">Ingredients</p>
                <p className="text-sm text-gray-600">{ingredients}</p>
            </div>
            <div className="mt-8">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                    {reviews
                    // Filter keeps the reviews that match the condition (product name contains the review product name)
                        .filter(review => name.toLowerCase().includes(review.product.toLowerCase()))
                        // Slice keeps the first 3 reviews
                        .slice(0, 3)
                        // Map creates a new array of review components
                        .map((review, index) => (
                            <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 font-semibold text-sm">
                                        {review.name.charAt(0)}
                                    </div>
                                    <span className="ml-2 font-medium text-gray-800 text-sm">{review.name}</span>
                                </div>
                                <p className="text-sm text-gray-600">{review.review}</p>
                            </div>
                        ))}
                    {reviews.filter(review => name.toLowerCase().includes(review.product.toLowerCase())).length === 0 && (
                        <p className="text-sm text-gray-500 italic">No reviews yet for this product.</p>
                    )}
                </div>
            </div>
            
        </div>
        </>
    );
}