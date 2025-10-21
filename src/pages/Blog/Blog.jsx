import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogPosts = [
    {
      id: 1,
      title: "Building Responsive Web Applications with React",
      excerpt:
        "Learn the best practices for creating fully responsive web applications using React and Tailwind CSS. Discover techniques for mobile-first design and adaptive layouts.",
      date: "2025-03-15",
      readTime: "5 min read",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures and Scope",
      excerpt:
        "Dive deep into JavaScript closures and scope chain. Master these fundamental concepts to write better, more efficient JavaScript code.",
      date: "2025-03-10",
      readTime: "7 min read",
      category: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Getting Started with FastAPI and MongoDB",
      excerpt:
        "A comprehensive guide to building RESTful APIs with FastAPI and MongoDB. Learn how to set up authentication and create efficient database schemas.",
      date: "2025-03-05",
      readTime: "10 min read",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt:
        "Explore the differences between CSS Grid and Flexbox. Learn when to use each layout system for optimal web design results.",
      date: "2025-02-28",
      readTime: "6 min read",
      category: "CSS",
      image:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Python Best Practices for Clean Code",
      excerpt:
        "Discover Python coding standards and best practices. Write cleaner, more maintainable code following PEP 8 guidelines and modern conventions.",
      date: "2025-02-20",
      readTime: "8 min read",
      category: "Python",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Modern Web Development Workflow in 2025",
      excerpt:
        "Explore the latest tools and workflows for modern web development. From version control to deployment, streamline your development process.",
      date: "2025-02-15",
      readTime: "9 min read",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    },
  ];

  const categories = [
    "All",
    "React",
    "JavaScript",
    "Backend",
    "CSS",
    "Python",
    "Web Development",
  ];
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      <div className="w-full px-4 sm:px-8 md:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="relative mb-6">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-200"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Tag size={12} />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No articles found matching your search.
              </p>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest articles and
              tutorials delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
