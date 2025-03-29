// components/Features.tsx
import { Lightbulb, BrainCircuit, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="w-10 h-10 text-black" />,
      title: "INNOVATORS",
      description:
        "Pushing boundaries to redefine what’s possible. We embrace fresh ideas, cutting-edge technology.",
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-black" />,
      title: "CREATIVES",
      description:
        "Turning imagination into reality. We craft unique, inspiring solutions.",
    },
    {
      icon: <Shield className="w-10 h-10 text-black" />,
      title: "VISIONARIES",
      description:
        "Excellence in every detail. We are committed to delivering work that meets the highest standards.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold uppercase tracking-widest text-black">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-base font-light max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
