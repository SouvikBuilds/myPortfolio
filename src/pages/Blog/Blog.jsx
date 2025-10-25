import React, { useState, useEffect, useRef } from "react";
import { Calendar, Clock, ArrowUp, ArrowDown, Search, Tag } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCards, setExpandedCards] = useState(new Set());
  const titleRef = useRef(null);
  const searchRef = useRef(null);
  const categoriesRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Responsive Web Applications with React",
      excerpt:
        "Discover how to build fully responsive and visually appealing web applications using React and Tailwind CSS. Learn practical techniques for mobile-first design, reusable components, and adaptive layouts that ensure a seamless experience across all devices.",
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
        "Uncover the core concepts of JavaScript closures and the scope chain with clear, real-world examples. This guide helps you master one of JavaScript's most powerful features, improving your ability to write cleaner, modular, and high-performance code.",
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
        "A hands-on introduction to building RESTful APIs using FastAPI and MongoDB. Learn to set up routes, manage databases efficiently, implement authentication, and follow clean architectural patterns for high-performance backend development.",
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
        "A detailed comparison between CSS Grid and Flexbox to help you choose the right layout system for your project. Understand their core principles, ideal use-cases, and how to combine them for creating powerful and responsive web layouts.",
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
        "Learn the essential Python best practices to write clean, readable, and maintainable code. This guide covers PEP 8 standards, modular programming, naming conventions, and techniques to enhance efficiency in modern Python projects.",
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
        "Explore the latest tools, frameworks, and workflows shaping web development in 2025. From Git version control and CI/CD pipelines to modern deployment strategies, learn how to streamline your process for faster, more efficient delivery.",
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

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      searchRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      categoriesRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".blog-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [filteredPosts]);

  const handleMore = (postId) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-[#202223] pt-20">
      <div className="w-full px-4 sm:px-8 md:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-300">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>

          <div className="mb-12">
            <div ref={searchRef} className="relative mb-6">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div
              ref={categoriesRef}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-black text-blue-400 border border-gray-300 hover:border-blue-400 hover:text-blue-600 shadow shadow-blue-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const isExpanded = expandedCards.has(post.id);

                return (
                  <article
                    key={post.id}
                    className="blog-card bg-[#333] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-200"
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
                        <span className="flex items-center gap-1 text-blue-400">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1 text-blue-400">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h2>

                      <p className="text-white text-sm leading-relaxed mb-4">
                        {isExpanded
                          ? post.excerpt
                          : post.excerpt.slice(0, 100) + "..."}
                      </p>

                      <div
                        onClick={() => handleMore(post.id)}
                        className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all duration-300 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Show Less
                            <span>
                              <ArrowUp
                                size={20}
                                className="text-blue-500 animate-pulse"
                              />
                            </span>
                          </>
                        ) : (
                          <>
                            Show More
                            <span>
                              <ArrowDown
                                size={20}
                                className="text-blue-500 animate-pulse"
                              />
                            </span>
                          </>
                        )}{" "}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No articles found matching your search.
              </p>
            </div>
          )}

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
