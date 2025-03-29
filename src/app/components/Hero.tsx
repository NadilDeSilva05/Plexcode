const Hero = () => {
    return (
      <section
        className="h-screen flex items-center justify-center text-center p-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/heroSection/heroSection.jpg')", // Reference local image in the public folder
        }}
      >
        <div className="max-w-3xl  p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to MyBrand
          </h1>
          <p className="mt-4 text-lg text-white">
            We provide the best solutions for your business. Join us today.
          </p>

        </div>
      </section>
    );
  };
  
  export default Hero;
  