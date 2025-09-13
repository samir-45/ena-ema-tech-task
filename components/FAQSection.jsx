import { CheckCircle } from "lucide-react";

export default function FAQSection() {
  const faqItems = [
    {
      question: "How long does it take?",
      answer: "5 days from start to finish - design, development, and deployment included."
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes, unlimited revisions until you're 100% satisfied with the final result."
    },
    {
      question: "What's the payment process?",
      answer: "50% upfront to get started, 50% after final delivery and your approval."
    },
    {
      question: "Can you deploy on my hosting?",
      answer: "Absolutely! Deployment is included in every package, on your hosting or ours."
    },
    {
      question: "Why are your prices so affordable compared to agencies?",
      answer: "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost."
    }
  ];

  return (
    <section className="w-full py-16 z-50 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-semibold text-white">
            Got Questions<span className="text-green-400">?</span> We've Got The Answers
          </h2>
        </div>
        
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-[#192420] rounded-lg p-6 text-white">
              <div className="flex flex-col justify-center items-start">
                <span className='h-2 w-2 mb-2 bg-[#1FFFA5] mr-4 rounded-full'></span>
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}