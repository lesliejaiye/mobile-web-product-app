export default function Products({ name, brand, price, image, rating, description, skinType, skinConcerns, directions, ingredients }: { 
    name: string, 
    brand: string, 
    price: string, 
    image: string, 
    rating: number | string, 
    description: string, 
    skinType: string, 
    skinConcerns: string, 
    directions: string, 
    ingredients: string 
}) {
// TODO: Add Best for section that simulates what skin type benefits from this product
// TODO: Add a highlights section that speaks on the top benefits of product
// TODO: Add a reviews section that shows customer reviews
// TODO: Add a Dropdwon section for About the Product and Ingredients
    return (
        <>
        <div className="max-w-md mx-auto p-4 pt-8 bg-white min-h-screen">
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
                <p className="font-semibold inline text-gray-600 font-medium">Skin Type: </p> <span className="inline text-gray-800">{skinType}</span>
                <br />
                <p className="font-semibold inline text-gray-600 font-medium">Skincare Concerns: </p> <span className="inline text-gray-800">{skinConcerns}</span>
            </div>
            <p>About the Product</p>
            <p>{description}</p>
            <p>How to Use: {directions}</p>
            <p>Ingredients</p>
            <p>{ingredients}</p>
        </div>
        </>
    );
}