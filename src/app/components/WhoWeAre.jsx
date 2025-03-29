// components/HeroSection.js
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto min-h-[60vh] items-center bg-gray-100 text-black px-6 md:px-12 lg:px-20 gap-8 py-12">
      
      {/* Left Side - Image Section */}
      <div className="flex justify-center items-center">
        <div className="relative w-40 h-40 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-black shadow-md p-6">
            <Image
            src="/images/otherImage/idea.png"
            alt="Idea"
            width={320}
            height={320}
            objectFit="cover"
            />
        </div>
        </div>


      {/* Right Side - Text Section */}
      <div className="text-center md:text-left space-y-4">
        <p className="text-xs md:text-sm uppercase tracking-wide text-gray-600">
          Who <span className="underline italic text-black">We Are</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          Passionate Thinkers
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Where creativity meets purpose. Let’s build something extraordinary together.
        </p>
        <button className="mt-4 px-5 py-2 bg-black text-white font-semibold rounded-full transition-all duration-300 hover:bg-gray-900 hover:shadow-lg">
          More About Us
        </button>
      </div>
    </section>
  );
}
