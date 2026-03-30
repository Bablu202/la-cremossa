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
        className={`glass relative max-w-lg w-[90%] md:w-full rounded-xl p-8 overflow-hidden transition-all duration-300 transform ${isClosing ? "scale-95 translate-y-4 opacity-0" : "scale-100 translate-y-0 opacity-100"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-md bg-transparent border-[0.5px] border-[var(--text-muted)]/30 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--text-main)] transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
          <div className="relative w-40 h-40 flex-shrink-0 drop-shadow-xl bg-black/5 rounded-lg flex items-center justify-center">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-contain p-2" 
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <h3 className="text-4xl font-germany tracking-wide capitalize">{product.name} Size</h3>
            <p className="text-[var(--text-muted)] text-sm mb-4 uppercase tracking-widest">{product.servings} Servings | {product.price}€ / each</p>
            
            <div className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 text-left w-full">
              <strong className="block text-[var(--text-main)] mb-1">More Details:</strong>
              Classic creamy New York style cheesecake on a buttery thick graham cracker crust. Freshly baked daily using premium local ingredients. 
              <br/><br/>
              <em>Portion:</em> Recommended 1 generous slice per person. Keep refrigerated.
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between w-full border-t border-[var(--text-muted)]/20 pt-6">
          <div className="flex items-center gap-4 bg-transparent border-[0.5px] border-[var(--text-muted)]/30 p-1 rounded-md">
            <button 
              onClick={decrement}
              className="w-8 h-8 flex items-center justify-center bg-transparent rounded-sm hover:bg-[var(--text-main)] hover:text-[var(--bg-primary)] transition-colors"
            >
              -
            </button>
            <span className="w-6 text-center font-bold text-lg">{quantity}</span>
            <button 
              onClick={increment}
              className="w-8 h-8 flex items-center justify-center bg-transparent rounded-sm hover:bg-[var(--text-main)] hover:text-[var(--bg-primary)] transition-colors"
            >
              +
            </button>
          </div>

          <div className="flex gap-6 items-center">
            <div className="flex flex-col items-end">
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-1">Total</span>
              <span className="text-2xl font-light text-[var(--price-color)]">{total}€</span>
            </div>
            <button 
              className="px-8 py-3 bg-transparent border-[0.5px] rounded-md border-[var(--text-main)] text-[var(--text-main)] font-medium text-sm tracking-widest uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-primary)] transition-all duration-300"
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
  );
}


