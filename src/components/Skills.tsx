import { motion } from 'framer-motion'
import { Brain, Network, Eye, MessageCircle, Cloud, Code } from 'lucide-react'

const skills = [
  { icon: Brain, title: "Machine Learning", tags: ["Scikit-learn", "XGBoost", "LightGBM"] },
  { icon: Network, title: "Deep Learning", tags: ["TensorFlow", "PyTorch", "Keras"] },
  { icon: Eye, title: "Generative AI", tags: ["DALL·E", "Stable Diffusion", "GPT-4"] },
  { icon: MessageCircle, title: "NLP", tags: ["Hugging Face", "spaCy", "BERT"] },
  { icon: Cloud, title: "Deployment", tags: ["Docker", "AWS", "FastAPI"] },
  { icon: Code, title: "Programming", tags: ["Python", "Pandas", "Git"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.tags.map(tag => (
                  <span key={tag} className="bg-indigo-100 text-primary-dark px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}