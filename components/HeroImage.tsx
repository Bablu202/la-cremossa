import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-2xl aspect-[4/3] mx-auto mt-12 transition-all duration-700 hover:scale-[1.02] cursor-default">
      <Image
        src="/cheese.png"
        alt="la-cremossa"
        fill
        className="object-contain drop-shadow-2xl transition-transform duration-700 hover:translate-y-[-10px]"
        priority
      />
    </div>
  );
}

