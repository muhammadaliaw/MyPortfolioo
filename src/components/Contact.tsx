import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = () => {
    alert("Message sent! (Demo)")
    reset()
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <a href="mailto:muhammadali35484@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-primary">
                <Mail /> muhammadali35484@gmail.com
              </a>
              <a href="https://linkedin.com/in/muhammad-ali-b3220a30b/" className="flex items-center gap-3 text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
                <Linkedin /> linkedin.com/in/muhammad-ali-b3220a30b/
              </a>
              <a href="https://github.com/muhammadaliawdfg" className="flex items-center gap-3 text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
                <Github /> github.com/muhammadaliawdfg
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <input {...register("name", { required: true })} placeholder="Name" className="w-full p-4 border rounded-lg focus:outline-none focus:border-primary" />
            <input {...register("email", { required: true })} type="email" placeholder="Email" className="w-full p-4 border rounded-lg focus:outline-none focus:border-primary" />
            <textarea {...register("message", { required: true })} rows={5} placeholder="Message" className="w-full p-4 border rounded-lg focus:outline-none focus:border-primary"></textarea>
            <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}