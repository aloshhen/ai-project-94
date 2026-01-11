import { motion } from 'framer-motion'
import { Clock, Users, Heart } from 'lucide-react'

const steps = [
  {
    icon: Clock,
    title: 'Быстрое обслуживание',
    description: 'Мы ценим ваше время и готовим блюда максимально быстро'
  },
  {
    icon: Users,
    title: 'Гостеприимство',
    description: 'Каждый гость для нас — как член семьи'
  },
  {
    icon: Heart,
    title: 'Качество продуктов',
    description: 'Только свежие и локальные продукты от проверенных поставщиков'
  }
]

export default function About() {
  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-cafe-primary mb-8">
              Наша история
            </h2>
            <p className="text-xl text-cafe-secondary mb-6">
              Cafe Deluxe — это больше, чем просто кафе. Мы создали уютное пространство, 
              где каждое блюдо готовится с душой и любовью.
            </p>
            
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.title} className="flex items-center space-x-4">
                  <step.icon className="w-10 h-10 text-cafe-accent" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-cafe-primary">{step.title}</h3>
                    <p className="text-cafe-secondary text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://source.unsplash.com/800x600/?restaurant,interior" 
              alt="Cafe Interior" 
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}