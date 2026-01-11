import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-cafe-primary">Cafe Deluxe</div>
        
        <div className="hidden md:flex space-x-6 items-center">
          {['Меню', 'О нас', 'Контакты'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-cafe-secondary hover:text-cafe-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-cafe-accent text-white px-4 py-2 rounded-full"
          >
            Забронировать
          </motion.button>
        </div>

        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            {['Меню', 'О нас', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-cafe-secondary hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}