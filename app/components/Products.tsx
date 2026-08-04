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
// TODO: Add a reviews section that shows customer reviews
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
                <button className="bg-gray-400 text-white px-16 py-1 rounded-xl">Buy</button>
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
        </div>
        </>
    );
}