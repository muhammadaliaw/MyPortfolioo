import { motion } from 'framer-motion'

const experiences = [
  { role: "junior AI Engineer", company: "Octaloop Technologies", period: "2025– Present", desc: "work on Generative Ai and done many project for my company" },
  
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-8"
            >
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                <p className="text-sm text-gray-500">{exp.period} • {exp.company}</p>
                <p className="mt-2 text-gray-600">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}