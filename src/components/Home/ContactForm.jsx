import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    employees: "1-10",
    interest: "Sales AI",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Here you can add your submission logic (e.g., API call)
  };

  return (
    <section id="Contact" className="w-full max-w-6xl mx-auto px-6 py-12 mt-10">
      <div className="  overflow-visible flex flex-col md:flex-row content-box border-glow-wrapper highlighted-box-timeline  bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:py-8 shadow-2xl relative text-seasalt">
        <div className="inside-shadow"></div>
        <div className="border-glow"></div>
        {/* Left Section */}
        <div className="md:w-1/2 p-8  space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Upgrade Your Workforce?
          </h2>
          <p className="text-[#F8F9FB]/60 text-lg">
            Fill out the form to schedule a demo and see how our AI employees
            can transform your business. Our experts will create a custom
            implementation plan for your organization.
          </p>
          <div className="text-lg  space-y-3">
            <p>After contacting us, you'll receive:</p>
            <p>✓ Free workforce efficiency analysis</p>
            <p>✓ Custom AI implementation roadmap</p>
            <p>✓ 30-day free trial of your first AI employee</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2  p-5 space-y-5 text-white"
        >
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Smith"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Work Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Company Inc."
              value={formData.company}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Number of Employees</label>
            <select
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
            >
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>201-500</option>
              <option>500+</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Interested In</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
            >
              <option>Sales AI</option>
              <option>Marketing AI</option>
              <option>HR AI</option>
              <option>Customer AI</option>
              <option>Finance AI</option>
            </select>
          </div>

          <button
            type="submit"
            className="glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-4 mx-auto mt-4 md:px-6 py-1.5 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center"
          >
            Schedule Your Demo
            <span className="cursor-glow"></span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
