export default function Index() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'Space Grotesk', Arial, Helvetica, sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter" style={{ fontFamily: "'Space Mono', monospace" }}>
            GRIDFORM
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Работы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Студия
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакт
            </a>
          </div>
          <a
            href="#contact"
            className="text-sm uppercase tracking-widest bg-black text-white px-5 py-2 hover:bg-red-600 transition-colors"
          >
            Обсудить проект
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-6">Дизайн-студия — Москва</p>
            <h1
              className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              ДИЗАЙН
              <br />
              <span className="text-red-600">БЕЗ</span>
              <br />
              ЛИШНЕГО
            </h1>
            <p className="text-xl max-w-lg text-neutral-700 leading-relaxed">
              Мы создаём визуальные системы, которые работают. Брендинг, типографика и цифровой дизайн — строго,
              точно и навсегда.
            </p>
            <div className="flex gap-4 mt-10">
              <a
                href="#work"
                className="px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
              >
                Смотреть работы
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-black text-black text-sm uppercase tracking-widest hover:border-red-600 hover:text-red-600 transition-colors"
              >
                Написать нам
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-white text-9xl font-bold select-none"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  GF
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 border-t border-black mt-20 pt-8">
          <div className="pr-8 border-r border-black">
            <p className="text-5xl font-bold tracking-tighter">120+</p>
            <p className="text-sm uppercase tracking-widest text-neutral-400 mt-1">Проектов</p>
          </div>
          <div className="px-8 border-r border-black">
            <p className="text-5xl font-bold tracking-tighter">8 лет</p>
            <p className="text-sm uppercase tracking-widest text-neutral-400 mt-1">На рынке</p>
          </div>
          <div className="pl-8">
            <p className="text-5xl font-bold tracking-tighter">40+</p>
            <p className="text-sm uppercase tracking-widest text-neutral-400 mt-1">Клиентов</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-6xl font-bold tracking-tighter" style={{ fontFamily: "'Space Mono', monospace" }}>
              РАБОТЫ
            </h2>
            <span className="text-neutral-400 text-sm uppercase tracking-widest">Избранное</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300" style={{ fontFamily: "'Space Mono', monospace" }}>
                    01
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">Meridian Capital</h3>
                  <p className="text-neutral-400 text-sm">Брендинг · Визуальная система</p>
                </div>
                <span className="text-neutral-600 text-xs uppercase tracking-widest pt-1">2024</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300" style={{ fontFamily: "'Space Mono', monospace" }}>
                    02
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">Forma Architecture</h3>
                  <p className="text-neutral-400 text-sm">Типографика · Печатные материалы</p>
                </div>
                <span className="text-neutral-600 text-xs uppercase tracking-widest pt-1">2024</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300" style={{ fontFamily: "'Space Mono', monospace" }}>
                    03
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">Nord Ventures</h3>
                  <p className="text-neutral-400 text-sm">Дизайн-система · Цифровой дизайн</p>
                </div>
                <span className="text-neutral-600 text-xs uppercase tracking-widest pt-1">2023</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300" style={{ fontFamily: "'Space Mono', monospace" }}>
                    04
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">Strata Retail</h3>
                  <p className="text-neutral-400 text-sm">Брендинг · Навигационная система</p>
                </div>
                <span className="text-neutral-600 text-xs uppercase tracking-widest pt-1">2023</span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300" style={{ fontFamily: "'Space Mono', monospace" }}>
                    05
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">Puls Magazine</h3>
                  <p className="text-neutral-400 text-sm">Редакционный дизайн · Сетки</p>
                </div>
                <span className="text-neutral-600 text-xs uppercase tracking-widest pt-1">2023</span>
              </div>
            </div>

            {/* Project 6 — CTA */}
            <div className="group cursor-pointer border-2 border-neutral-700 hover:border-red-600 transition-colors duration-300 aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-neutral-400 text-sm uppercase tracking-widest mb-4">Ваш проект</p>
                <p className="text-2xl font-bold">Следующим<br />может быть<br /><span className="text-red-600">ваш бренд</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8" style={{ fontFamily: "'Space Mono', monospace" }}>
                СТУ-<br />ДИЯ
              </h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                <div className="absolute bottom-6 left-6 bg-red-600 w-12 h-12"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-2xl font-medium mb-6 leading-snug">
                GRIDFORM — студия системного дизайна. Мы работаем там, где нужна не просто красота, а точность и смысл.
              </p>
              <p className="mb-5 text-neutral-600">
                Наш подход — швейцарский минимализм в действии. Мы строим бренды на модульных сетках, выверенной
                типографике и чёткой визуальной иерархии. Никаких компромиссов между формой и функцией.
              </p>
              <p className="mb-8 text-neutral-600">
                С нами работают архитектурные бюро, инвестиционные фонды, издательства и технологические компании —
                все, кому важна репутация, выраженная в визуале.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-black">
                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-4 text-neutral-400">Принципы</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">—</span>
                      <span>Форма следует функции</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">—</span>
                      <span>Модульные сетки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">—</span>
                      <span>Типографика как основа</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">—</span>
                      <span>Дизайн на десятилетия</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-4 text-neutral-400">Услуги</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">—</span>
                      <span>Стратегия бренда</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">—</span>
                      <span>Визуальная идентичность</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">—</span>
                      <span>Цифровой дизайн</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">—</span>
                      <span>Редакционный дизайн</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Manifesto */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <p
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight max-w-4xl"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            «Хороший дизайн незаметен.{" "}
            <span className="text-red-600">Плохой бросается в глаза.</span>»
          </p>
          <p className="text-neutral-400 text-sm uppercase tracking-widest mt-8">— Принцип студии</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8" style={{ fontFamily: "'Space Mono', monospace" }}>
                КОН-<br />ТАКТ
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Есть задача? Расскажите о проекте — мы ответим в течение рабочего дня и предложим формат сотрудничества.
              </p>
              <div className="space-y-5">
                <p className="flex items-center gap-4">
                  <span className="w-20 text-xs uppercase tracking-widest opacity-70">Почта</span>
                  <a href="mailto:hello@gridform.ru" className="hover:underline font-medium">
                    hello@gridform.ru
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-20 text-xs uppercase tracking-widest opacity-70">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline font-medium">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-20 text-xs uppercase tracking-widest opacity-70">Адрес</span>
                  <span className="font-medium">Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-2 opacity-70">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/40 text-white"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-2 opacity-70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/40 text-white"
                    placeholder="ivan@company.ru"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-2 opacity-70">
                    О проекте
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/40 text-white resize-none"
                    placeholder="Коротко расскажите о задаче и сроках"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full md:w-auto"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-50">© 2025 GRIDFORM Studio. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Behance
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
