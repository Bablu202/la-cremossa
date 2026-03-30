"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  servings: number;
  price: number;
  image: string;
}

interface OrderModalProps {
  product: Product;
  onClose: () => void;
}

export default function OrderModal({ product, onClose }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Wait for closing animation
  };

  const increment = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  const total = (product.price * quantity).toFixed(2);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"}`}
      onClick={handleClose}
    >
      <div 
        className={`glass relative max-w-lg w-[90%] md:w-full rounded-3xl p-8 overflow-hidden transition-all duration-300 transform ${isClosing ? "scale-95 translate-y-4 opacity-0" : "scale-100 translate-y-0 opacity-100"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-main)] shadow-sm transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="relative w-40 h-40 flex-shrink-0 drop-shadow-xl">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-contain" 
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-bold mb-1 font-playfair">{product.name}</h3>
            <p className="text-[var(--text-muted)] mb-4">{product.servings} Servings</p>
            
            <div className="flex items-center gap-4 mb-6 bg-[var(--bg-secondary)] rounded-full p-2 shadow-sm border border-[var(--text-muted)]/10">
              <button 
                onClick={decrement}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center font-bold">{quantity}</span>
              <button 
                onClick={increment}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                +
              </button>
            </div>

            <div className="flex items-end justify-between w-full">
              <div className="flex flex-col">
                <span className="text-sm text-[var(--text-muted)]">Total</span>
                <span className="text-2xl font-bold text-[var(--price-color)]">{total}€</span>
              </div>
              <button 
                className="px-6 py-3 rounded-full bg-[var(--accent)] text-white font-bold hover:bg-[var(--accent-hover)] transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
                onClick={() => {
                  alert(`Order added! ${quantity}x ${product.name} - ${total}€`);
                  handleClose();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
