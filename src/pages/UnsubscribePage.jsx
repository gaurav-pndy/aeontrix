import React, { useState } from "react";

const UnsubscribePage = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center  px-4">
      <div className="content-box highlighted-box bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500 text-center max-w-xl">
        <div className="inside-shadow"></div>
        <div className="border-glow"></div>
        {!confirmed ? (
          <>
            <h1 className="text-3xl font-bold text-seasalt mb-4">
              Wait! Are You Sure You Want to Unsubscribe?
            </h1>
            <p className="text-[#F8F9FB]/70 text-lg text-left mb-2">
              We’ll be sorry to see you go. By unsubscribing, you’ll miss out
              on:
            </p>
            <ul className="text-left text-lg text-seasalt mb-6 list-disc list-inside space-y-1">
              <li>Weekly emails packed with high-value automation ideas</li>
              <li>Free tools</li>
              <li>AI workflows and industry-specific tips</li>
            </ul>
            <p className="text-[#F8F9FB]/70 mb-4">
              If you're sure, please confirm below.
            </p>
            <button
              onClick={() => setConfirmed(true)}
              className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              Confirm Unsubscribe
              <span className="cursor-glow"></span>
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-seasalt mb-6">
              I changed my mind!
            </h1>
            <button
              onClick={() => setConfirmed(false)}
              className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              Keep me subscribed
              <span className="cursor-glow"></span>
            </button>
            <p className="text-seasalt my-6 ">
              Need help or want fewer emails instead?{" "}
              <a
                href="http://cal.com/aeontrix-ai/ai-audit"
                target="_blank"
                className="underline text-[#00FF93]"
              >
                Contact us.
              </a>
            </p>
            <p className="text-[#888888] italic">
              Thanks for being with us,
              <br />— The Aeontrix Team
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UnsubscribePage;
