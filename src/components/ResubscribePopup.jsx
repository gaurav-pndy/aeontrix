import React from "react";
import { X } from "lucide-react"; // Optional: if you're using lucide-react

const ResubscribePopup = ({ onClose, onResubscribe }) => {
  return (
    <div className="fixed inset-0 z-70 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="content-box highlighted-box bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500 text-center max-w-xl">
        <div className="inside-shadow"></div>
        <div className="border-glow"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#00FF93] hover:text-[#00FF93]/80 transition"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <h1 className="text-3xl font-bold text-seasalt mb-4">
          You recently unsubscribed
        </h1>
        <p className="text-[#F8F9FB]/70 text-lg  mb-2">
          Do you want to resubscribe to our updates and content?
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={onResubscribe}
            className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">Resubscribe</span>
            <span className="cursor-glow"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResubscribePopup;
