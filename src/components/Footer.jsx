import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-cafe-primary mb-4">Cafe Deluxe</h3>
          <p className="text-cafe-secondary">
            Уютное кафе с домашней кухней и атмосферой тепла
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-cafe-primary mb-4">Контакты</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cafe-accent" />
              <span>ул. Центральная, 10</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cafe-accent" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cafe-accent" />
              <span>hello@cafedeluxe.ru</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-cafe-primary mb-4">Часы работы</h4>
          <div className="text-cafe-secondary">
            <p>Пн-Пт: 08:00 - 22:00</p>
            <p>Сб-Вс: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 text-cafe-secondary">
        © 2024 Cafe Deluxe. Все права защищены.
      </div>
    </footer>
  )
}