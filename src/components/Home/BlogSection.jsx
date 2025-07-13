import { Link } from "react-router-dom";
import { blogsData } from "../../data/blogsData";
import { useState } from "react";

const BlogSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [attemptedSubmitDetails, setAttemptedSubmitDetails] = useState(false);

  const handleSubmit = async () => {
    setAttemptedSubmitDetails(true);

    if (name.trim() === "" || !email.includes("@") || !isChecked || isLoading) {
      return;
    }

    try {
      // Check subscription status first
      const isUnsubscribedUser = await checkSubscriptionStatus();
      if (isUnsubscribedUser) {
        return; // Block submission if unsubscribed and show popup
      }

      // Proceed with subscription for new or subscribed users
      const response = await fetch("https://api.aeontrix.com/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 409) {
          setErrorMessage(
            "You have already filled this form. If you believe this is an error, please contact: contact@aeontrix.com."
          );
        } else {
          setErrorMessage(
            data.error || "Failed to subscribe. Please try again."
          );
        }
        return;
      }
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="py-20 relative z-10 px-4 max-w-7xl mx-auto  text-[#F8F9FB]">
      <div className="text-center mb-12">
        <h2 className="gradient-title font-bold">Latest from our Blog</h2>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsData.slice(0, 3).map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="rounded-2xl overflow-hidden shadow-lg content-box border-glow-wrapper highlighted-box-small relative"
          >
            <div className="border-glow"></div>
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-fit">
              <div>
                <div className="flex items-center justify-between text-sm opacity-70 mb-2">
                  <span className="px-2.5 text-[0.8rem] py-1 rounded-full bg-[#00FF93]/10 text-[#00FF93] font-medium">
                    {blog.category}
                  </span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold leading-snug mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-[#F8F9FB]/70">
                  {blog.content.split(" ").slice(0, 20).join(" ") +
                    (blog.content.split(" ").length > 20 ? "..." : "")}
                </p>
              </div>

              <div className="mt-2">
                <span className="text-[#00FF93] font-semibold inline-flex items-center hover:text-[#00ff40] transition-all duration-200">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="my-12  w-fit mx-auto text-center">
        <Link to="/blogs">
          <button className="glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-4 mx-auto mt-4 md:px-6 py-1.5 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center">
            <span className="cursor-glow"></span>
            View All Articles →
          </button>
        </Link>
      </div>
      <div className="content-box max-w-4xl mx-auto border-glow-wrapper highlighted-box bg-[#F8F9FB]/10 backdrop-blur-lg  rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500">
        <div className="border-glow"></div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-seasalt mb-4">
            Sign up to our Weekly Newsletter{" "}
          </h2>
          <p className="text-[#F8F9FB]/70 text-lg">
            Get Weekly Latest AI Tools, News, High Value Automation Ideas,
            delivered to your inbox
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-seasalt font-semibold mb-3 text-lg">
              Your Name <span className="text-[#00FF93]">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name.trim() === "" && attemptedSubmitDetails && (
              <p className="text-[#00ff93] text-sm mt-2">Name is required.</p>
            )}
          </div>
          <div>
            <label className="block text-seasalt font-semibold mb-3 text-lg">
              Your E-mail <span className="text-[#00FF93]">*</span>
            </label>
            <input
              type="email"
              className="w-full bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email && !email.includes("@") && attemptedSubmitDetails && (
              <p className="text-[#00ff93] text-sm mt-2">
                Please enter a valid email address.
              </p>
            )}
            {errorMessage && (
              <p className="text-[#00FF93] mt-4">
                {errorMessage.includes("contact@aeontrix.com") ? (
                  <>
                    You're already subscribed! If you're interested in more
                    automations,{" "}
                    <a
                      href="https://cal.com/aeontrix-ai/aeontrix-discovery"
                      className="underline"
                      target="_blank"
                    >
                      Book a Call
                    </a>{" "}
                    or contact us at:{" "}
                    <a
                      href="mailto:contact@aeontrix.com"
                      className="underline"
                      target="_blank"
                    >
                      contact@aeontrix.com
                    </a>
                    .
                  </>
                ) : (
                  errorMessage
                )}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 mt-2">
            <input
              value={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              type="checkbox"
              id="terms"
              className="accent-[#00FF93] w-4 h-4"
            />
            <label
              htmlFor="terms"
              className="text-seasalt leading-snug cursor-pointer"
            >
              I have read, understood, and agree to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="underline text-[#00FF93]"
              >
                Privacy Policy
              </a>
              ,{" "}
              <a
                href="/refund-policy"
                target="_blank"
                className="underline text-[#00FF93]"
              >
                Refund & Cancellation Policy
              </a>
              , and{" "}
              <a
                href="/terms-of-service"
                target="_blank"
                className="underline text-[#00FF93]"
              >
                Terms of Service
              </a>
              . <span className="text-[#00FF93]">*</span>
            </label>
          </div>

          <div className="flex justify-center pt-4">
            <button
              disabled={name === "" || email === "" || !isChecked}
              onClick={handleSubmit}
              className={`glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                name === "" || email === "" || !isChecked
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }`}
            >
              <span className="relative z-10">Submit</span>
              <span className="cursor-glow"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
