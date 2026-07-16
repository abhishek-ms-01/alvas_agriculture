import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Quote, Microscope, Sprout, Target } from "lucide-react";

const DeanMessage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
            {/* Image Section */}
            <div className="w-full md:w-1/3 sticky top-32">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-accent/20 shadow-2xl">
                  <img 
                    src="/dean.jpeg" 
                    alt="Dr. S N Vasudevan" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-green/60 to-transparent opacity-60" />
                </div>
                
                <div className="mt-8 text-center md:text-right">
                  <h2 className="text-2xl font-black text-deep-green uppercase tracking-tight">Dr. S. N. Vasudevan</h2>
                  <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mt-1">Dean, College of Agriculture</p>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="w-full md:w-2/3">
              <div className="relative mb-12">
                <Quote className="w-16 h-16 text-accent/10 absolute -top-8 -left-8 -rotate-12" />
                <h1 className="text-4xl md:text-5xl font-black text-deep-green leading-tight relative z-10">
                  Where Science Meets <span className="text-accent italic">Sustainability.</span>
                </h1>
              </div>

              <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  As the Dean of the College of Agriculture, it is my privilege to lead an institution that is at the 
                  forefront of agricultural education and research. With 38 years of experience in Seed Science and Technology, 
                  I bring a deep commitment to nurturing the next generation of agricultural scientists and leaders.
                </p>
                <p>
                  Our curriculum, designed as per the ICAR 5th Dean's Committee recommendations, is built to challenge the status quo. 
                  From precision farming to seed technology and genetic research, we provide our students with the tools they need to 
                  solve the complex problems of our global food systems. We believe in learning by doing, which is why our campus 
                  serves as a living laboratory.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  {[
                    { icon: <Microscope />, title: "Research-Driven", desc: "95+ journal articles, 10 books, ₹425+ lakhs in projects." },
                    { icon: <Sprout />, title: "Sustainable", desc: "Focusing on climate-resilient farming and seed technology." },
                    { icon: <Target />, title: "Future-Ready", desc: "Guided 12 Ph.D. and 32 M.Sc. scholars." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 border border-slate-100 rounded-2xl hover:border-accent/20 transition-colors">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                      </div>
                      <div>
                        <h4 className="font-bold text-deep-green text-sm uppercase">{item.title}</h4>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  Our faculty members are not just teachers; they are mentors and researchers dedicated to your success. 
                  I invite you to explore the opportunities at Alva's and join us in our mission to feed the world 
                  more sustainably and efficiently.
                </p>
              </div>

              <div className="mt-16 p-8 bg-accent/5 rounded-3xl border border-accent/10">
                <p className="text-slate-500 italic text-lg leading-relaxed font-medium text-center md:text-left">
                  "Innovation is the seed from which progress grows. Here, we provide the perfect soil 
                  for your ideas to flourish."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DeanMessage;
