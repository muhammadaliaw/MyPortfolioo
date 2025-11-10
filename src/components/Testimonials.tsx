import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  { name: "Dr.Noman", role: "CTO, NeuralTech", text: "Exceptional engineer. Delivered production ML system 2 months early.", rating: 5 },
  { name: "Prof.Asim", role: "Must AI Lab", text: "Published with him — brilliant researcher and team player.", rating: 5 },
  { name: "Maria Lopez", role: "CEO, gen Ai", text: "His gen Ai projects have transformed our business.", rating: 5 },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
        >
          <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-lg italic mb-6">"{testimonials[index].text}"</p>
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(testimonials[index].rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <p className="font-bold">{testimonials[index].name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[index].role}</p>
        </motion.div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition ${i === index ? 'bg-primary w-8' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}