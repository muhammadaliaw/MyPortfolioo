import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: "Fine-Tuning LLMs on Custom Datasets",
    date: "Nov 5, 2025",
    readTime: "8 min",
    excerpt: "A step-by-step guide to fine-tuning Llama 3 with PEFT and Hugging Face for domain-specific tasks.",
    link: "#"
  },
  {
    title: "Deploying YOLOv8 on Edge Devices",
    date: "Oct 28, 2025",
    readTime: "6 min",
    excerpt: "How I optimized real-time object detection to run at 60 FPS on NVIDIA Jetson using TensorRT.",
    link: "#"
  },
  {
    title: "Building RAG Pipelines with LangChain",
    date: "Oct 15, 2025",
    readTime: "10 min",
    excerpt: "End-to-end retrieval-augmented generation system with vector DBs and evaluation metrics.",
    link: "#"
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Blog & Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition group"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight size={18} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}