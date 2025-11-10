import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Smart Knowledge ChatBot",
    desc: "using RAG to answer questions from custom documents with 95% accuracy",
    tags: ["Python", "LangChain", "FastAPI"],
    github: "#", demo: "#"
  },
  {
    title: "AI Health Assistant",
    desc: "Using RaG and Global Healthcare data to provide accurate health information",
    tags: ["Python", "Healthcare", "FastAPI"],
    github: "#", demo: "#"
  },

]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <div className="text-6xl text-primary">🤖</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={p.github} className="flex items-center gap-1 text-primary hover:underline">
                    <Github size={18} /> Code
                  </a>
                  <a href={p.demo} className="flex items-center gap-1 text-primary hover:underline">
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}