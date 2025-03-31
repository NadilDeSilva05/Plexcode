import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function Gallery() {
  const services = [
    { title: 'E-Commerce Website', src: '/images/otherImage/original-1e87711351a6536a9d57b3c66ef589f1.webp', cols: 1, rows: 1 },
    { title: 'Business Websites', src: '/images/otherImage/1_ktKyhCkdj-tja2Wy9w_XBw.png', cols: 2, rows: 1 },
    { title: 'POS Systems', src: '/images/otherImage/CAKE-Terminal_Lifestyle3-FINAL.jpg', cols: 1, rows: 2 },
    { title: 'Mobile Applications', src: '/images/otherImage/ladder-dark-mode.png', cols: 1, rows: 1 },
    { title: 'IoT Solutions', src: '/images/otherImage/photo-1484807352052-23338990c6c6.jpeg', cols: 2, rows: 1 },
    { title: 'Logo & Branding', src: '/images/otherImage/1.-Branding-Beyond-the-Logo.png', cols: 1, rows: 1 },
    { title: 'Web Applications', src: '/images/otherImage/81a57c0b-6e08-4206-b3f0-e4676a57c70d-cover.png', cols: 2, rows: 1 },
    { title: 'UI/UX Design', src: '/images/otherImage/1_qWu7cD0aIKBDZCpYePYkog.png', cols: 1, rows: 1 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center px-4 py-12 text-center bg-gray-50">
        <h2 className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] text-[#b68e17] font-semibold text-center">
        Our IT Solutions
        </h2>
        <h1 className="mt-2 text-2xl font-extrabold leading-snug tracking-tight text-center text-gray-900 sm:text-3xl md:text-4xl lg:text-3xl sm:mt-3 md:leading-tight">
        Technology Services That Drive Growth
        </h1>



      {/* Mobile Slider */}
      {isMobile ? (
        <div className="relative w-full max-w-md mt-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-full px-2">
                  <div className="relative h-64 overflow-hidden bg-white shadow-md rounded-xl">
                    <Image
                      src={service.src}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-white uppercase tracking-[0.2em] text-sm">{service.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#b68e17]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <button 
            onClick={prevSlide}
            className="absolute left-0 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2"
          >
            ❮
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2"
          >
            ❯
          </button>
        </div>
      ) : (
        /* Desktop Grid */
        <div className="w-full mx-auto mt-12 max-w-7xl">
            <div className="grid grid-cols-3 gap-8 auto-rows-[minmax(300px,_auto)] grid-flow-dense">
                {services.map((service, index) => (
                <div 
                    key={index}
                    className={`relative  overflow-hidden shadow-md hover:shadow-lg transition-all duration-300
                    ${service.cols === 2 ? 'col-span-2' : 'col-span-1'}
                    ${service.rows === 2 ? 'row-span-2' : 'row-span-1'}`}
                >
                    <Image
                    src={service.src}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-medium text-medium uppercase tracking-[0.2em]  text-center">
                        {service.title}
                    </h3>
                    </div>
                </div>
                ))}
            </div>
            </div>

      )}
    </div>
  );
}