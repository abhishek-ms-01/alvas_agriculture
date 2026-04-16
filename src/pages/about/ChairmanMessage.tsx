import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

const ChairmanMessage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Image Section */}
            <div className="w-full md:w-1/3 sticky top-32">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-accent/20 shadow-2xl">
                  <img 
                    src="https://alvasschools.com/wp-content/uploads/2024/03/Dr.Mohan-Alva-1.jpg" 
                    alt="Dr. Mohan Alva" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-green/60 to-transparent opacity-60" />
                </div>
                
                <div className="mt-8 text-center md:text-left">
                  <h2 className="text-2xl font-black text-deep-green uppercase tracking-tight">Dr. Mohan Alva</h2>
                  <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mt-1">Chairman, Alva's Education Foundation</p>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="w-full md:w-2/3">
              <div className="relative mb-12">
                <Quote className="w-16 h-16 text-accent/10 absolute -top-8 -left-8 -rotate-12" />
                <h1 className="text-4xl md:text-5xl font-black text-deep-green leading-tight relative z-10">
                  Nurturing Excellence, <span className="text-accent italic">Cultivating Futures.</span>
                </h1>
              </div>

              <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  At Alva's College of Agriculture, we believe that education is not just about imparting knowledge, but about 
                  cultivating a mindset of excellence and innovation. Our mission has always been to bridge the gap between 
                  traditional wisdom and modern scientific advancements in agriculture.
                </p>
                <p>
                  Agriculture remains the backbone of our economy and the soul of our nation. By empowering the next generation 
                  with state-of-the-art facilities, research opportunities, and practical field experience, we are ensuring 
                  a sustainable and prosperous future for all.
                </p>
                <p>
                  We don't just teach agriculture; we inspire a passion for the land and a commitment to food security. 
                  Our holistic approach to education ensures that our students are not just graduates, but leaders who 
                  will transform the agricultural landscape.
                </p>
                <p>
                  I invite you to be a part of this transformative journey. Together, let's sow the seeds of innovation 
                  and reap a harvest of excellence.
                </p>
              </div>

              <div className="mt-16 p-8 bg-accent/5 rounded-3xl border border-accent/10">
                <p className="text-slate-500 italic text-lg leading-relaxed font-medium">
                  "Our vision is to create a generation of agri-professionals who are technically sound, 
                  ethically strong, and socially responsible."
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

export default ChairmanMessage;
