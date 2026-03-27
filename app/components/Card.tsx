export default function Card({ name, brand, price, image, rating }: { name: string, brand: string, price: string, image: string, rating: number }) {
    // TODO: Add a click handler to navigate to product page
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden w-64">
            <div className="aspect-square overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-900">{brand}</h1>
                <p className="text-sm text-gray-600 mt-1">{name}</p>
                <p className="text-sm text-gray-500 mt-1">Rating: {rating}/5</p>
                <p className="text-lg font-bold text-gray-900 mt-2">${price}</p>
            </div>
        </div>
    );
}