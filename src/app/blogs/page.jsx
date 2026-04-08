import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React useState for Beginners",
      slug: "mastering-react-usestate-for-beginners",
      author: "Habib Bin Tofajjal",
      date: "2026-04-01",
      category: "React",
      tags: ["react", "javascript", "frontend"],
      excerpt:
        "Learn how to use the useState hook in React with simple explanations and examples.",
      content:
        "React's useState hook allows you to add state to functional components. It is one of the most commonly used hooks...",
      thumbnail: "https://example.com/images/react-usestate.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Top VSCode Issues in React Development (And Fixes)",
      slug: "top-vscode-issues-react-development",
      author: "Habib Bin Tofajjal",
      date: "2026-04-06",
      category: "Development Tools",
      tags: ["vscode", "react", "debugging"],
      excerpt:
        "Facing problems while coding React in VSCode? Here are the most common issues and how to fix them.",
      content:
        "Visual Studio Code is a powerful editor, but React developers often face issues like IntelliSense not working...",
      thumbnail: "https://example.com/images/vscode-react.jpg",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Build a Simple Task Timer with JavaScript",
      slug: "build-task-timer-javascript",
      author: "Habib Bin Tofajjal",
      date: "2026-04-05",
      category: "JavaScript",
      tags: ["javascript", "project", "productivity"],
      excerpt:
        "Create a simple task timer to track your productivity using plain JavaScript.",
      content:
        "In this tutorial, we will build a lightweight task timer that allows you to start, pause, and stop tasks...",
      thumbnail: "https://example.com/images/task-timer.jpg",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Getting Started with MERN Stack in 2026",
      slug: "getting-started-mern-stack-2026",
      author: "Habib Bin Tofajjal",
      date: "2026-04-02",
      category: "Full Stack",
      tags: ["mern", "mongodb", "express", "react", "node"],
      excerpt:
        "A complete beginner-friendly guide to starting your journey with the MERN stack.",
      content:
        "The MERN stack consists of MongoDB, Express.js, React, and Node.js. It is one of the most popular stacks...",
      thumbnail: "https://example.com/images/mern-stack.jpg",
      readTime: "8 min read",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-center m-20">Blogs</h2>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h3 className="text-2xl font-bold">{blog.title}</h3>
            <Link className="text-primary" href={`/blogs/${blog.id}`}>
              Show details
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsPage;
