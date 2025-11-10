import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const { t } = useTranslation()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: any[] = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(99, 102, 241, 0.3)'
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('hero.greeting')} <span className="text-primary">{t('hero.name')}</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">{t('hero.title')}</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">{t('hero.desc')}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition flex items-center gap-2">
              {t('hero.projects')} <ArrowDown size={20} />
            </a>
            <a href="/resume.pdf" download className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition flex items-center gap-2">
              <Download size={20} /> {t('hero.resume')}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          {/* Profile image: use fixed square dimensions with object-cover + object-center to crop nicely */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover object-center rounded-full border-8 border-white dark:border-gray-800 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}