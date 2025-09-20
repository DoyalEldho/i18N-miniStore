import './App.css';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import ProductCard from './components/ProductCard';


function App() {
  const products: ('product_1' | 'product_2' | 'product_3')[] = ['product_1', 'product_2', 'product_3'];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Mini E-Commerce Store</h1>

      <LanguageSwitcher />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((key) => (
          <ProductCard key={key} productKey={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
