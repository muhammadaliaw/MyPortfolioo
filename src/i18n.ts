import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        brand: "Software Engineer",
        nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", blog: "Blog", contact: "Contact" },
        hero: { greeting: "Hi, I'm", name: "Muhammad Ali", title: "AI & ML Engineer", desc: "Building intelligent systems with deep learning and scalable AI.", projects: "View Projects", resume: "Download Resume" }
      }
    },
    es: {
      translation: {
        brand: "Ingeniero IA",
        nav: { about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", experience: "Experiencia", blog: "Blog", contact: "Contacto" },
        hero: { greeting: "Hola, soy", name: "Tu Nombre", title: "Ingeniero IA y ML", desc: "Construyendo sistemas inteligentes con deep learning e IA escalable.", projects: "Ver Proyectos", resume: "Descargar CV" }
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
})

export default i18n