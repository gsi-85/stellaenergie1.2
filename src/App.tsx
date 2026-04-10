/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Leaf, 
  Sparkles, 
  Wind, 
  Heart, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  Sparkle
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Angebot", href: "#offerings" },
    { name: "Behandlung", href: "#process" },
    { name: "Über mich", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ];

  const offers = [
    {
      title: "Energiearbeit",
      description: "Die Energiearbeit wirkt auf feinstofflicher Ebene. Blockaden im Energiesystem können erkannt und sanft gelöst werden. Dadurch entstehen mehr Klarheit, innere Ruhe und ein freierer Zugang zur eigenen Lebenskraft.",
      benefits: ["Stress und Erschöpfung", "Emotionale Belastungen", "wiederkehrenden Mustern", "dem Wunsch nach innerer Ausrichtung"],
      icon: <Sparkles className="w-6 h-6" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMhQTvE_UvoUvV9Rta_1lgfmOUYir1x22rVqWWKu8dgR_1JrpPKb69tSbncLoIhwmh7zKcA5gfvf2ja4vzg6cV-nDXKqC-MrWZao_M4glH7qZ6-zzY3WQD9JBo1hYNCPblKXzjsXH2rxImDlDOzUFIRKj79wFB1etEOHZKYM2-ESrvrXQaJLOYWYH6hawGV426-lWSUg2dd24ZbvwLbM1vGqB3IlrOtSX9eRDO3zScVp5_YKnA6RP4E1c-Y_g4HNlJvz4K-fAcgo4a"
    },
    {
      title: "Energetische Raumreinigung",
      description: "Energiearbeit kann nicht nur den Menschen selbst unterstützen, sondern auch das Umfeld, in dem wir leben und arbeiten. Auch Räume tragen Erinnerungen, Stimmungen und Eindrücke. Wenn sich diese verdichten, kann die Atmosphäre eines Ortes als belastend oder unruhig empfunden werden.",
      benefits: ["Wohnungen und Häuser", "Praxisräume", "Arbeitsräume", "nach Umzug oder Veränderungen"],
      icon: <Wind className="w-6 h-6" />,
      image: "https://picsum.photos/seed/room/800/600"
    },
    {
      title: "Thai Yoga Massage",
      description: "Die Thai Yoga Massage ist eine ganzheitliche Körperarbeit, die Elemente aus Akupressur, sanften Dehnungen und achtsamer Berührung vereint. Sie wird am bekleideten Körper auf einer Matte am Boden durchgeführt. Durch rhythmischen Druck entlang der Energielinien sowie durch passive Dehnungen wird der Energiefluss angeregt, Verspannungen lösen sich und der Körper kann tief entspannen.",
      benefits: ["vitalisierend und gleichzeitig beruhigend", "lösend bei muskulären Spannungen", "unterstützend bei Erschöpfung", "ausgleichend für das Nervensystem."],
      icon: <Leaf className="w-6 h-6" />,
      image: "https://gsi-85.github.io/stella-energiearbeit-v1.1/static/raum-baar-26.png"
    },
    {
      title: "IBP Prozessbegleitung",
      description: "Die IBP Prozessbegleitung verbindet Körperwahrnehmung, Atem, Gespräch und achtsame Selbsterforschung. Viele unserer Prägungen und Erfahrungen sind im Körper gespeichert. Durch bewusstes Wahrnehmen, Verstehen und Integrieren können alte Muster transformiert und neue Handlungsspielräume eröffnet werden.",
      benefits: ["Beziehungsthemen", "Selbstwertfragen", "Übergängen und Lebenskrisen", "emotionaler Regulation", "persönlicher Entwicklung"],
      icon: <Heart className="w-6 h-6" />,
      image: "https://gsi-85.github.io/stella-energiearbeit-v1.1/static/river.jpeg"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-rose/20 selection:text-rose">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-2xl font-serif font-medium tracking-tight transition-colors ${
              scrolled ? "text-rose" : "text-rose-dark drop-shadow-sm"
            }`}
          >
            Stella Anastasio
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm uppercase tracking-widest font-bold transition-all hover:text-rose relative group ${
                  scrolled ? "text-rose-dark" : "text-rose-dark drop-shadow-sm"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-rose text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-rose/90 transition-all shadow-lg shadow-rose/20"
            >
              Termin Buchen
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-rose" : "text-rose-dark"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-cream border-t border-stone-100 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-serif text-stone-800 hover:text-rose py-2 border-b border-stone-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-rose text-white px-6 py-4 rounded-xl text-center font-bold uppercase tracking-widest mt-4"
              >
                Book a Session
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://gsi-85.github.io/stella-energiearbeit-v1.1/static/wolken.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-bg/30 via-transparent to-warm-bg"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-rose-dark leading-tight mb-6 drop-shadow-sm"
          >
            Stella Anastasio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-3xl font-serif italic text-rose-dark mb-12 tracking-wide drop-shadow-sm"
          >
            Energiearbeit · IBP Prozessbegleitung · Thai Yoga Massage
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#offerings" 
              className="group bg-rose text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold flex items-center gap-3 mx-auto w-fit hover:bg-rose/90 transition-all shadow-2xl shadow-rose/30 hover:-translate-y-1"
            >
              Angebot entdecken
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose/50"
        >
          <div className="w-px h-16 bg-gradient-to-b from-rose/50 to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-32 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 max-w-4xl">
            <span className="text-rose uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Services</span>
            <h2 className="text-5xl md:text-6xl font-serif text-rose-dark mb-8">Mein Angebot</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Jeder Mensch trägt die Fähigkeit zur Selbstregulation und inneren Ordnung in sich. Manchmal geraten wir jedoch aus dem Gleichgewicht – durch Belastungen, Erfahrungen oder Lebensumstände.
              In meiner Arbeit begleite ich dich achtsam und respektvoll auf deinem Weg zurück in deine eigene Kraft.
              Neben der Energiearbeit umfasst mein Angebot neu auch IBP Prozessbegleitung und Thai Yoga Massage. Die drei Methoden ergänzen sich und können je nach Anliegen einzeln oder kombiniert angewendet werden.
            </p>
          </div>

          <div className="space-y-32">
            {offers.map((offer, index) => (
              <motion.div 
                key={offer.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-rose/5 rounded-[3rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-rose/10 rounded-2xl flex items-center justify-center text-rose">
                      {offer.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-rose-dark">{offer.title}</h3>
                  </div>
                  <p className="text-stone-600 text-lg leading-relaxed mb-8">
                    {offer.description}
                  </p>
                  {offer.benefits && (
                    <div className="space-y-4">
                      <p className="text-stone-800 font-semibold uppercase tracking-widest text-xs">Eignet sich besonders bei:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {offer.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-stone-600 italic text-sm">
                            <Sparkle className="w-4 h-4 text-rose/40 mt-0.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Cost Section */}
      <section id="process" className="py-32 bg-stone-900 text-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <span className="text-rose uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Ablauf</span>
              <h2 className="text-5xl font-serif mb-10">Behandlung Ablauf Kosten</h2>
              <div className="space-y-8 text-cream/80 text-lg leading-relaxed italic">
                <p>
                  Je nach Anliegen können die Methoden einzeln oder kombiniert angewendet werden.
                </p>
                <p>
                  Gemeinsam finden wir den Weg, der dich in deinem aktuellen Lebensabschnitt am besten unterstützt – körperlich, emotional und energetisch.
                </p>
                <p className="text-sm">
                  Preise nach Absprache bei Thai Yoga Massage und Energetischer Raumreinigung.
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm shadow-2xl">
              <h3 className="text-3xl font-serif mb-12">Kosten Übersicht</h3>
              <div className="space-y-10">
                <div className="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <h4 className="text-xl font-serif text-rose mb-1">Energiearbeit</h4>
                    <p className="text-xs uppercase tracking-widest text-cream/40">Behandlung</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-cream/40 block mb-1 uppercase tracking-widest">60 Min</span>
                    <span className="text-2xl font-serif">90 CHF</span>
                  </div>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <h4 className="text-xl font-serif text-rose mb-1">IBP Prozessbegleitung</h4>
                    <p className="text-xs uppercase tracking-widest text-cream/40">Ganzheitliche Begleitung</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-cream/40 block mb-1 uppercase tracking-widest">60 Min</span>
                    <span className="text-2xl font-serif">90 CHF</span>
                  </div>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <h4 className="text-xl font-serif text-rose mb-1">Thai Yoga Massage</h4>
                    <p className="text-xs uppercase tracking-widest text-cream/40">Ganzheitliche Körperarbeit</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-cream/40 block mb-1 uppercase tracking-widest">90 Min</span>
                    <span className="text-2xl font-serif text-lg">nach Absprache</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 space-y-4 text-xs text-cream/50 italic leading-relaxed">
                <p>
                  Meine Methoden ersetzen keine medizinisch notwendigen Interventionen oder eine Psychotherapie.
                </p>
                <p>
                  Termine müssen spätestens 24 Stunden vor dem vereinbarten Zeitpunkt abgesagt werden. Bei späteren Absagen oder Nichterscheinen wird eine Administrationspauschale von 50 Franken verrechnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-rose/5 rounded-full blur-3xl"></div>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://gsi-85.github.io/stella-energiearbeit-v1.1/static/me resampled.jpeg" 
                  alt="Stella Anastasio Portrait" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="text-rose uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Über mich</span>
              <h2 className="text-5xl md:text-6xl font-serif text-rose-dark mb-8">Stella Anastasio</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  Mein beruflicher Hintergrund liegt im Gesundheitswesen, wo ich viele Jahre mit Menschen in unterschiedlichen Lebenssituaationen gearbeitet habe. Dabei wurde mir immer deutlicher, wie eng körperliche, emotionale und energetische Prozesse miteinander verbunden sind.
                </p>
                <p>
                  Diese Erfahrung führte mich zur Energiearbeit, in der ich mich nach der Methode von A. J. Stäger ausbilden liess. Um meine Arbeit weiter zu vertiefen, absolvierte ich zusätzlich Weiterbildungen in Integrativer Körperpsychotherapie (IBP) sowie in Thai Yoga Massage.
                </p>
                <p>
                  Heute verbinde ich in meiner Praxis Energiearbeit, körperorientierte Prozessbegleitung und achtsame Körperarbeit.
                </p>
                <p>
                  Es ist mir ein Anliegen, einen ruhigen und geschützten Raum zu schaffen, in dem Menschen sich selbst besser wahrnehmen, verstehen und neue Wege für sich entdecken können.
                </p>
              </div>
              
              <div className="mt-12 pt-12 border-t border-stone-100">
                <p className="text-stone-800 font-bold uppercase tracking-widest text-xs mb-6">Ausbildungen:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Medizinische Praxisassistentin", "Energetikerin nach A. J. Stäger", "Integrative Prozessbegleitung (IBP)", "Thai Yoga Massage Grundausbildung", "Cranio-sacral Therapie 1"].map((edu) => (
                    <li key={edu} className="flex items-center gap-3 text-stone-600 italic text-sm">
                      <Sparkle className="w-4 h-4 text-rose/40 shrink-0" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 p-6 bg-warm-bg rounded-2xl border border-stone-100">
                <p className="text-stone-600 italic leading-relaxed">
                  In meiner Arbeit verbinde ich fachliche Kompetenz mit Achtsamkeit und Respekt für den individuellen Prozess jedes Menschen.
                  <br />
                  <span className="not-italic font-bold text-rose mt-2 block">Sprachen: Italienisch, Spanisch, Französisch und Englisch.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-rose mb-8">Kontaktiere mich</h2>
              <p className="text-stone-600 text-xl mb-12 leading-relaxed">
                Ich freue mich darauf, dich auf deinem Weg zu begleiten. Buche deinen Termin oder stelle mir deine Fragen ganz unverbindlich.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-rose shadow-sm group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">E-Mail</p>
                    <a href="mailto:info@stella-energiearbeit.ch" className="text-xl text-stone-800 hover:text-rose transition-colors font-medium">info@stella-energiearbeit.ch</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-rose shadow-sm group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Telefon</p>
                    <a href="tel:0763942465" className="text-xl text-stone-800 hover:text-rose transition-colors font-medium">076 394 24 65</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-rose shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Studio</p>
                    <p className="text-xl text-stone-800 font-medium">Neuhofstrasse 3c, 6340 Baar, Schweiz</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-rose/5 rounded-[3rem] blur-2xl"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqtHHPCNO-Ul60DQn8RIFfD8iXNPIuJAnsp-AZyK0jXhC14316FbKN8OINyx8tD9uTNF98bKj1uwy3EAryDjyNkzdI8aGZdHk95hZKh9C0atnlmQqY1GMIR8jS4MyKB2Ys2PH2XCxRv0MdHK4dhfMt9pos9zMxvPU5V2RGVBf0sRzVo-9Q6wQHib6ikQRvdHZhC88zjeKM7Xa28kkKA63IFf8OODjLuL3LnFV25DG3dGzUMNnQuZXlx3OFWYpYgf5LdhRLQI9uGZMY" 
                  alt="Map Location" 
                  className="w-full h-[500px] object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream py-16 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-2xl font-serif text-rose">Stella Anastasio</div>
            <div className="flex gap-10">
              <a href="#" className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-rose transition-colors">Impressum</a>
              <a href="#" className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-rose transition-colors">Datenschutz</a>
              <a href="#contact" className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-rose transition-colors">Contact</a>
            </div>
            <div className="text-xs uppercase tracking-widest font-bold text-stone-400">
              © {new Date().getFullYear()} Stella Anastasio.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
