import { Link } from "react-router-dom";
import { blogsData } from "../../data/blogsData";

const BlogSection = () => {
  return (
    <section className="py-20 relative z-10 px-6 md:px-10 lg:px-20  text-[#F8F9FB]">
      <div className="text-center mb-12">
        <h2 className="gradient-title font-bold">Latest from our Blog</h2>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div className="mt-12  w-fit mx-auto text-center">
        <Link to="/blogs">
          <button className="glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-4 mx-auto mt-4 md:px-6 py-1.5 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center">
            <span className="cursor-glow"></span>
            View All Articles →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
