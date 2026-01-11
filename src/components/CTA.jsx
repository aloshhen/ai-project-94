import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#F5F2ED] rounded-3xl p-12"
        >
          <h2 className="text-4xl font-bold text-cafe-primary mb-6">
            Закажите столик прямо сейчас
          </h2>
          <p className="text-xl text-cafe-secondary mb-8">
            Мы ждем вас в уютном Cafe Deluxe. Зарезервируйте место и насладитесь
            домашней кухней в приятной атмосфере.
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cafe-accent text-white px-8 py-4 rounded-full flex items-center space-x-3"
            >
              <span>Забронировать</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cafe-accent text-cafe-accent px-8 py-4 rounded-full"
            >
              Посмотреть меню
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}