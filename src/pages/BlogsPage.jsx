import { useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import {
  FaRobot,
  FaChartLine,
  FaHeadset,
  FaBullhorn,
  FaUsersCog,
  FaCogs,
} from "react-icons/fa";

const categoryIcons = {
  "AI Technology": <FaRobot size={20} />,
  "Business Growth": <FaChartLine size={20} />,
  "Customer Service": <FaHeadset size={20} />,
  Marketing: <FaBullhorn size={20} />,
  "HR & Recruitment": <FaUsersCog size={20} />,
  Automation: <FaCogs size={20} />,
};

const categories = Object.keys(categoryIcons);
const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((b) => b.category === selectedCategory);

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortBy === "Latest" ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
  const paginatedBlogs = sortedBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="px-4 relative z-10 pb-12 max-w-7xl mx-auto text-white">
      <div className="text-center ">
        <h2 className="gradient-title font-bold !mb-4">Blogs</h2>
      </div>

      <h2 className="text-2xl font-bold text-seasalt mb-2">
        Browse by Category
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`py-4 flex flex-col items-center justify-center text-center cursor-pointer rounded-xl border text-white/80 transition-all duration-300 
        ${
          selectedCategory === cat
            ? "bg-[#03624C]  border-[#03624C]"
            : "bg-[#042222]/50  border border-[#1c1c1c] hover:border-[#00FF93]/40"
        }`}
          >
            <div className="text-[#00FF93] mb-2 flex items-center justify-center bg-[#111111] p-2 rounded-lg">
              {categoryIcons[cat] || <FaCogs size={20} />}
            </div>
            <span className="text-xs md:text-sm font-medium leading-tight">
              {cat}
            </span>
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-seasalt ">Latest Articles</h3>
        <div>
          <span className="text-[#F8F9FB]/80 mr-3 text-sm">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#111111] border border-[#00FF93]/30 w-32 px-2 py-1.5 rounded-lg text-sm"
          >
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {paginatedBlogs.map((blog) => (
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

      {/* Pagination */}
      <div className="mt-10 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-lg cursor-pointer text-sm font-medium transition 
            ${
              page === currentPage
                ? "bg-[#00FF93] text-black "
                : "bg-[#1c1f21] text-white hover:bg-[#00FF93]/10"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
