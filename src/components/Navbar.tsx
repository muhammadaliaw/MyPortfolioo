import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    const savedDark = localStorage.getItem('darkMode') === 'true'
    const savedLang = localStorage.getItem('language') || 'en'
    setDarkMode(savedDark)
    i18n.changeLanguage(savedLang)
    if (savedDark) document.documentElement.classList.add('dark')

    return () => window.removeEventListener('scroll', handleScroll)
  }, [i18n])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
    document.documentElement.classList.toggle('dark')
  }

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Blog', 'Contact']

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">{t('brand')}</a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-700 dark:text-gray-200 hover:text-primary font-medium transition">
              {t(`nav.${link.toLowerCase()}`)}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button onClick={() => changeLanguage('en')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'en' ? 'bg-white dark:bg-gray-700' : ''}`}>EN</button>
              <button onClick={() => changeLanguage('es')} className={`px-2 py-1 text-xs rounded ${i18n.language === 'es' ? 'bg-white dark:bg-gray-700' : ''}`}>ES</button>
            </div>
          </div>
        </div>

        <div className="md:hidden flex gap-3">
          <button onClick={toggleDarkMode}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
          <button onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block py-3 px-6 text-gray-700 dark:text-gray-200">
              {t(`nav.${link.toLowerCase()}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}