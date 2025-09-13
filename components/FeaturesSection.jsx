import { Rocket, Palette, Zap, DollarSign, RefreshCw, Trophy } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Proven Conversion Framework",
    desc: "Designs based on 100+ tested layouts that actually convert visitors into customers.",
  },
  {
    icon: Palette,
    title: "Agency Level Design",
    desc: "Modern, premium, and tailored for your brand – without the agency price tag.",
  },
  {
    icon: Zap,
    title: "5-day Guaranteed Delivery",
    desc: "With a highly professional team, we deliver on time, everytime.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "No hidden fees, just clear value. What you see is what you pay.",
  },
  {
    icon: RefreshCw,
    title: "Revisions Until You’re Happy",
    desc: "We keep working until it’s right. Your satisfaction is guaranteed.",
  },
  {
    icon: Trophy,
    title: "Results That Speak",
    desc: "Our pages consistently outperform industry averages for conversions.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Businesses <span className="text-green-400">Trust Us</span> With Their Designs
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We combine proven conversion frameworks with agency-level design to deliver results that matter.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#192420] rounded-xl p-6 text-left hover:shadow-[0_0_25px_rgba(0,255,174,0.15)] transition-all duration-300"
            >
              <feature.icon className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
