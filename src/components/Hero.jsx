import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAF8F5] pt-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-cafe-primary mb-6 leading-tight">
            Вкус домашней <br />кухни в каждом блюде
          </h1>
          <p className="text-xl text-cafe-secondary mb-8">
            Уютное кафе с атмосферой тепла и заботы. Каждое блюдо — как у мамы.
          </p>
          
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cafe-accent text-white px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <span>Посмотреть меню</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cafe-accent text-cafe-accent px-6 py-3 rounded-full"
            >
              Забронировать
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img 
            src="https://source.unsplash.com/800x600/?food,cafe" 
            alt="Cafe Interior" 
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}