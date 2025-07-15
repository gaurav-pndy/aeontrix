import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const baseUrl = import.meta.env.VITE_API_BASE_URL; // Prefer `VITE_` prefix for Vite


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        // Try to get blog by ID passed in state
        const blogId = location.state?.id;
        let url;

        if (blogId) {
          // If ID exists in state, fetch by ID
          url = `${baseUrl}/api/blogs/${blogId}`;
        } else {
          // Else fetch by slug
          url = `${baseUrl}/api/blogs/slug/${slug}`;
        }

        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlog(data.blog || null);
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

  return (
    <div className="max-w-5xl relative z-10 mx-auto px-4 pt-4 pb-12 text-[#F8F9FB]">
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

      <img
        src={blog.image_url}
        alt={blog.title}
        className="rounded-xl max-h-[33rem] w-full object-fit mb-4"
      />

      <div
        className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: blog.content?.replace(/\n/g, "<br/>") || "<p>No content</p>",
        }}
      ></div>
    </div>
  );
};

export default BlogDetails;
