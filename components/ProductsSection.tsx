"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import OrderModal from "./OrderModal";

interface Product {
  id: string;
  name: string;
  servings: number;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: "1", name: "Large", servings: 12, price: 45, image: "/45.png" },
  { id: "2", name: "Medium", servings: 6, price: 30, image: "/30.png" },
  { id: "3", name: "Mini", servings: 2, price: 9, image: "/9.png" },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-20 px-4 w-full max-w-6xl mx-auto relative z-10" id="products">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--accent)] mb-4">Our Selection</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto rounded-full mix-blend-multiply"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onOrder={() => setSelectedProduct(product)} 
          />
        ))}
      </div>

      {selectedProduct && (
        <OrderModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
}
