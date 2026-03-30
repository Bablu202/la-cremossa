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
    <div className="flex flex-col bg-[var(--bg-secondary)] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[0.5px] border-[var(--text-muted)]/20 group cursor-pointer w-full max-w-[360px] mx-auto rounded-xl">
      {/* Full width image container, filled top to edges */}
      <div className="relative w-full h-64 bg-[#f8f6f0] rounded-t-xl overflow-hidden flex items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      
      <div className="p-6 flex flex-col w-full h-full justify-between">
        <div>
          <h3 className="text-3xl font-germany mb-1 text-[var(--text-main)] transition-colors group-hover:text-[var(--accent)] capitalize">{product.name} Size</h3>
          <p className="text-[var(--text-muted)] text-xs mb-4 tracking-widest uppercase">{product.servings} Servings</p>
          <span className="block text-3xl font-light text-[var(--price-color)] mb-6">{product.price}€</span>
        </div>
        
        <div className="flex flex-col gap-3 w-full mt-auto">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOrder(product);
            }}
            className="w-full py-2.5 bg-[var(--text-main)] border border-[var(--text-main)] text-[var(--bg-primary)] font-medium text-sm tracking-wide uppercase rounded-md hover:bg-transparent hover:text-[var(--text-main)] transition-all duration-300 shadow-sm"
          >
            Order Now
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOrder(product); // Opens the same info modal
            }}
            className="w-full py-2.5 bg-transparent border border-[var(--text-muted)]/40 text-[var(--text-muted)] font-medium text-xs tracking-wide uppercase rounded-md hover:border-[var(--text-main)] hover:text-[var(--text-main)] transition-all duration-300"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}


