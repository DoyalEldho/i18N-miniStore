import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  productKey: 'product_1' | 'product_2' | 'product_3';
  onAddToCart?: (productKey: string) => void;
  onBuyNow?: (productKey: string) => void;
}

export default function ProductCard({ productKey, onAddToCart, onBuyNow }: ProductCardProps) {
  const { t } = useTranslation('products');
 
 onAddToCart=()=>{
    alert(`Added ${t(`${productKey}.name`)} to cart!`);
 }

 onBuyNow=()=>{
    alert(`Purchased ${t(`${productKey}.name`)}!`);
 }
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition w-64 flex flex-col items-center bg-white">
      {/* Product Image */}
      <img
        src={t(`${productKey}.image`)}
        alt={t(`${productKey}.name`)}
        className="mb-4 rounded w-full h-40 object-cover"
      />

      {/* Product Name */}
      <h2 className="font-bold text-lg mb-2 text-center">{t(`${productKey}.name`)}</h2>

      {/* Product Price */}
      <p className="text-gray-700 font-semibold mb-4">{t(`${productKey}.price`)}</p>

      {/* Buttons */}
      <div className="flex gap-2 w-full">
        <button
          onClick={() => onAddToCart && onAddToCart(productKey)}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onBuyNow && onBuyNow(productKey)}
          className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
