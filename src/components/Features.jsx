import { motion } from 'framer-motion'
import { Coffee, Utensils, Star } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: 'Свежие напитки',
    description: 'Авторский кофе и чай от лучших баристтов'
  },
  {
    icon: Utensils,
    title: 'Домашняя кухня',
    description: 'Блюда как дома, с любовью и заботой'
  },
  {
    icon: Star,
    title: 'Уютная атмосфера',
    description: 'Место, где каждый чувствует себя комфортно'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cafe-primary mb-16">
          Почему выбирают нас
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#F5F2ED] p-8 rounded-3xl text-center"
            >
              <div className="flex justify-center mb-6">
                <feature.icon 
                  className="w-16 h-16 text-cafe-accent" 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="text-2xl font-bold text-cafe-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-cafe-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}