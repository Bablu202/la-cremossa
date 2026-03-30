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
    <div className="flex flex-col bg-[var(--bg-secondary)] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[0.5px] border-[var(--text-muted)]/20 group cursor-pointer w-full max-w-[360px] mx-auto overflow-hidden rounded-md">
      {/* Full width image container, less padding */}
      <div className="relative w-full h-64 bg-black/5 overflow-hidden flex items-center justify-center p-4">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-md" 
        />
      </div>
      
      <div className="p-6 flex flex-col items-center text-center w-full">
        <h3 className="text-2xl font-bold font-italiana mb-1 text-[var(--text-main)] transition-colors group-hover:text-[var(--accent)]">{product.name}</h3>
        <p className="text-[var(--text-muted)] text-sm mb-6 tracking-wide uppercase text-xs">{product.servings} Servings</p>
        
        <div className="flex items-center justify-between w-full mt-auto">
          <span className="text-2xl font-light text-[var(--price-color)]">{product.price}€</span>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOrder(product);
            }}
            className="px-6 py-2.5 bg-transparent border-[0.5px] border-[var(--text-main)] text-[var(--text-main)] font-medium text-sm tracking-wide uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-primary)] transition-all duration-300"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

