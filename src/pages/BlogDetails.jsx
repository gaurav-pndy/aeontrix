
import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

const BlogDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [subscriber, setSubscriber] = useState({ name: "", email: "" });
  const [subscriptionMsg, setSubscriptionMsg] = useState("");

  const isTokenValid = (token) => {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp && decoded.exp > currentTime;
    } catch {
      return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubscriber((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
    setSubscriptionMsg("");

    try {
      const response = await fetch(
        "http://localhost:3000/api/blogs-subscription/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(subscriber),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed");
      }

      if (data.token) {
        localStorage.setItem("blog_subscription_token", data.token);
      }

      const isValid = isTokenValid(data.token);
      if (isValid) {
        setBlog((prev) => ({
          ...prev,
          subscribed: true,
        }));
      }

      setSubscriptionMsg("Subscription successful! Content unlocked.");
      setSubscriber({ name: "", email: "" });
    } catch (err) {
      setSubscriptionMsg(err.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("blog_subscription_token");
    const valid = token && isTokenValid(token);

    const fetchBlog = async () => {
      try {
        setLoading(true);

        const blogId = location.state?.id;
        const url = blogId
          ? `${baseUrl}/api/blogs/${blogId}`
          : `${baseUrl}/api/blogs/slug/${slug}`;

        const response = await fetch(url, {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlog({
          ...data.blog,
          subscribed: valid,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [location.state, slug]);

  if (loading) {
    return (
      <div className="text-center text-white py-20 text-xl">
        Loading blog...
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="text-center text-white py-20 text-xl">
        Error: {error || "Blog not found"}
      </div>
    );
  }

  const isSubscribed = blog.subscribed;

  return (
    <div className="max-w-5xl relative z-10 mx-auto px-4 pt-4 pb-12 text-[#F8F9FB]">
      <SEO
        title={`${blog.title} | Aeontrix Blog`}
        description={
          blog.content
            ? `${blog.content.split(" ").slice(0, 30).join(" ").substring(0, 150)}...`
            : "Read the latest AI insights from Aeontrix."
        }
        keywords={`${blog.category}, AI blog, AI automation, Aeontrix, ${blog.title
          .toLowerCase()
          .replace(/\s/g, ",")}`}
        url={`https://aeontrix.com/blogs/${slug}`}
        canonical={`https://aeontrix.com/blogs/${slug}`}
        ogTitle={`${blog.title} | Aeontrix Blog`}
        ogDescription={
          blog.content
            ? `${blog.content.split(" ").slice(0, 30).join(" ").substring(0, 150)}...`
            : "Read the latest AI insights from Aeontrix."
        }
        image={blog.image_url || "https://aeontrix.com/aeontrix-emblem.png"}
        twitterSite="@aeontrix"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          image: blog.image_url || "https://aeontrix.com/aeontrix-emblem.png",
          datePublished: blog.date,
          author: {
            "@type": "Organization",
            name: "Aeontrix",
          },
          publisher: {
            "@type": "Organization",
            name: "Aeontrix",
            logo: {
              "@type": "ImageObject",
              url: "https://aeontrix.com/aeontrix-emblem.png",
            },
          },
        }}
      />
      <Link
        to="/blogs"
        className="text-[#00FF93] hover:underline mb-4 inline-block"
      >
        ← All Blogs
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
        {blog.title}
      </h1>
      <div className="flex items-center gap-4 text-sm opacity-70 mb-6">
        <span className="px-2.5 py-1 rounded-full bg-[#00FF93]/10 text-[#00FF93] font-medium">
          {blog.category}
        </span>
        <span>{blog.date}</span>
      </div>

      <div
        className={`content-box border-glow-wrapper highlighted-box-small rounded-2xl p-4 md:p-6 shadow-2xl relative ${
          !isSubscribed ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <div className="border-glow"></div>

        <img
          src={blog.image_url}
          alt={blog.title}
          className="rounded-xl max-h-[33rem] w-full object-fit mb-4"
        />

        <div
          className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html:
              blog.content?.replace(/\n/g, "<br/>") || "<p>No content</p>",
          }}
        ></div>
      </div>

      {!isSubscribed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="text-center bg-[#111] p-6 rounded-xl border border-white/20 max-w-md w-full mx-4">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-lg mb-4">
                    Subscribe to our Newsletter to view our Blogs.
                  </p>
                  <form
                    onSubmit={handleSubscription}
                    className="space-y-4 mt-4"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={subscriber.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-[#00FF93]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={subscriber.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-[#00FF93]"
                    />

                    <p className="text-[#00FF93]  text-sm">
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
                    </p>
                    <div className="flex items-start text-left text-sm gap-2 mt-2">
                      <input
                        value={isChecked}
                        onChange={() => setIsChecked((prev) => !prev)}
                        type="checkbox"
                        id="terms"
                        className="accent-[#00FF93]  w-5 h-5"
                      />
                      <label
                        htmlFor="terms"
                        className="text-seasalt  leading-snug cursor-pointer"
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
                    <button
                      type="submit"
                      className="w-full bg-[#00FF93] text-black font-semibold py-2 rounded hover:bg-[#00E685] transition"
                    >
                      Unlock for Free
                    </button>
                    {subscriptionMsg && (
                      <p className="text-sm text-[#00FF93] mt-2">
                        {subscriptionMsg}
                      </p>
                    )}
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center  mt-5 text-[#F8F9FB]"
                >
                  <h3 className="text-[#00FF93] font-bold text-2xl">
                    Thank You
                  </h3>
                  <p className="mt-2">
                    We have sent you a{" "}
                    <span className="font-medium">Confirmation Email</span>.
                    <br />
                    Check your spam folder if you can’t find it.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;