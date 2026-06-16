import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { blogPosts } from "../../data/blog";

const COLORS = [
  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
];

const Blog = () => {
  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))].sort();

  return (
    <section id="blog" className="py-16 lg:py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-4"
      >
        # Blog
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
      >
        Writing & Notes
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl"
      >
        Thoughts on software engineering, architecture patterns, and tools I work with.
      </motion.p>

      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag, i) => (
          <span
            key={tag}
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono font-medium ${COLORS[i % COLORS.length]}`}
          >
            <Tag size={12} />
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-5">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-primary-600 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ml-auto">
                Read more <ArrowUpRight size={12} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
