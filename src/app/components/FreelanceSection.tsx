export default function FreelanceSection() {
    return (
      <section className="relative flex items-center justify-center h-64 text-white bg-black">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-5xl px-6 md:flex-row">
          <h2 className="text-sm font-bold text-center md:text-right md:text-xl uppercase tracking-[0.2em]">
            We are available for freelance projects<span className="animate-blink">_</span>
          </h2>
          <a
            href="#contact"
            className="mt-4 text-sm font-semibold md:mt-0 decoration-gray-400 hover:decoration-white uppercase tracking-[0.2em] "
          >
            Contact Us
          </a>
        </div>
        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}</style>
      </section>
    );
}
