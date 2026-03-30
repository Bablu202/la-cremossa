import Image from "next/image";

interface Product {
  id: string;
  name: string;
  servings: number;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

export default function ProductCard({ product, onOrder }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center bg-[var(--bg-secondary)] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 p-6 border border-[var(--text-muted)]/10 group cursor-pointer w-full max-w-[320px] mx-auto overflow-hidden">
      <div className="relative w-48 h-48 mb-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-md group-hover:drop-shadow-xl flex items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={180}
          height={180}
          className="object-contain w-[180px] h-[180px]" 
        />
      </div>
      
      <div className="text-center w-full">
        <h3 className="text-2xl font-bold font-playfair mb-2 text-[var(--text-main)] transition-colors group-hover:text-[var(--accent)]">{product.name}</h3>
        <p className="text-[var(--text-muted)] text-sm mb-4 font-medium">{product.servings} Servings</p>
        
        <div className="flex items-center justify-between w-full border-t border-[var(--text-muted)]/10 pt-4 mt-2">
          <span className="text-2xl font-bold text-[var(--price-color)]">{product.price}€</span>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOrder(product);
            }}
            className="px-5 py-2 bg-[var(--accent)] text-white font-bold rounded-full hover:bg-[var(--accent-hover)] transition-all shadow-sm hover:shadow-md transform active:scale-95"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
