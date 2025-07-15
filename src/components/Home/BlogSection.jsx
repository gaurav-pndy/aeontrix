import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [attemptedSubmitDetails, setAttemptedSubmitDetails] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/blogs`, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // If using cookies
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setBlogs(data.blogs || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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

  if (loading) {
    return (
      <section className="py-20 relative z-10 px-4 max-w-7xl mx-auto text-[#F8F9FB]">
        <div className="text-center mb-12">
          <h2 className="gradient-title font-bold">Latest from our Blog</h2>
        </div>
        <div className="text-center">Loading blogs...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 relative z-10 px-4 max-w-7xl mx-auto text-[#F8F9FB]">
        <div className="text-center mb-12">
          <h2 className="gradient-title font-bold">Latest from our Blog</h2>
        </div>
        <div className="text-center text-red-500">Error: {error}</div>
      </section>
    );
  }

  return (
    <section className="py-20 relative z-10 px-4 max-w-7xl mx-auto text-[#F8F9FB]">
      <div className="text-center mb-12">
        <h2 className="gradient-title font-bold">Latest from our Blog</h2>
      </div>

      {/* Blog Cards */}
      {blogs.length > 0 ? (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((blog) => (
              <Link
  to={`/blogs/${blog.slug}`}
  state={{ id: blog.id }} // 👈 Pass blog ID in location state
  key={blog.id}
  className="rounded-2xl overflow-hidden shadow-lg content-box border-glow-wrapper highlighted-box-small relative"
>

                <div className="h-55 w-full overflow-hidden">
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-fit transition-transform duration-300 hover:scale-105"
                  />
                </div>

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
                    <div
                      className="text-sm text-[#F8F9FB]/70 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html:
                          blog.content.length > 0
                            ? blog.content.split(" ").slice(0, 20).join(" ") +
                              (blog.content.split(" ").length > 20 ? "..." : "")
                            : "<em>No content</em>",
                      }}
                    />
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
          <div className="my-12 w-fit mx-auto text-center">
            <Link to="/blogs">
              <button className="glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-4 mx-auto mt-4 md:px-6 py-1.5 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center">
                <span className="cursor-glow"></span>
                View All Articles →
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center">No blogs found</div>
      )}
    </section>
  );
};

export default BlogSection;
