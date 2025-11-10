import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am a Artificial Intelligence professional specializing in Machine Learning, Generative AI, and RAG systems. 
            I build intelligent applications using vector databases, semantic search, and automation pipelines, turning data into actionable insights and scalable AI solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}