import { useParams, Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = blogsData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="text-center text-white py-20 text-2xl">
        Blog not found
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
        <span className="px-2.5  py-1 rounded-full bg-[#00FF93]/10 text-[#00FF93] font-medium">
          {blog.category}
        </span>
        <span>{blog.date}</span>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-xl max-h-[30rem] w-full object-cover mb-4"
      />

      <div
        className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: blog.content.replace(/\n/g, "<br/>"),
        }}
      ></div>
    </div>
  );
};

export default BlogDetails;
