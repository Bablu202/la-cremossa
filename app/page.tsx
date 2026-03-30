import HeroImage from "../components/HeroImage";
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center pt-24 pb-12 px-4 selection:bg-[var(--accent)] selection:text-white">
        
        <div className="z-10 text-center flex flex-col items-center mt-8 space-y-2 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-germany font-normal tracking-wide text-[var(--text-main)] drop-shadow-sm mb-4 opacity-90">
            la-cremossa
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-[var(--accent)] tracking-widest uppercase relative inline-block">
            <span className="relative z-10">cremig bis zum letzen Bissen</span>
          </p>
        </div>

        <HeroImage />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60 flex flex-col items-center z-20">
          <span className="text-sm font-medium tracking-widest text-[var(--text-muted)] uppercase mb-2">Scroll</span>
          <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Description Section */}
      <section className="w-full max-w-3xl mx-auto text-center px-6 py-24 relative z-10">
        <p className="text-2xl md:text-4xl text-[var(--text-main)] font-light leading-relaxed drop-shadow-sm">
          Discover our handmade, <span className="text-[var(--accent)] font-semibold">creamy premium cheesecakes</span>, prepared with love and passion. Perfect for any occasion!
        </p>
      </section>

      {/* Products Grid Section */}
      <ProductsSection />
      
      {/* Footer */}
      <footer className="w-full py-12 mt-12 border-t border-[var(--text-muted)]/10 text-center text-sm text-[var(--text-muted)] mt-auto z-10 bg-[var(--bg-secondary)] relative">
        <p>© {new Date().getFullYear()} la-cremossa. All rights reserved.</p>
        <p className="mt-2 text-[var(--accent)] font-light uppercase tracking-widest text-xs">cremig bis zum letzen Bissen</p>
      </footer>
    </main>
  );
}
