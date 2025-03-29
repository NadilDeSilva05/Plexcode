// components/Features.tsx
import { Lightbulb, BrainCircuit, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="w-20 h-20 text-black" />,
      title: "INNOVATORS",
      description:
        "Pushing boundaries to redefine what’s possible. We embrace fresh ideas, cutting-edge technology.",
    },
    {
      icon: <BrainCircuit className="w-20 h-20 text-black" />,
      title: "CREATIVES",
      description:
        "Turning imagination into reality. We craft unique, inspiring solutions.",
    },
    {
      icon: <Shield className="w-20 h-20 text-black" />,
      title: "VISIONARIES",
      description:
        "Excellence in every detail. We are committed to delivering work that meets the highest standards.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold uppercase tracking-widest text-black">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-base font-light max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;