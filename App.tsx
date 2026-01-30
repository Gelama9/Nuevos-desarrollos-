
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaletteType } from './types';
import { COLORS, SERVICES, TESTIMONIALS, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [palette, setPalette] = useState<PaletteType>(PaletteType.MODERN);
  const theme = COLORS[palette];
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 11 && hour < 21) {
      setIsOnline(true);
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
    const dimensions = size === "lg" ? "w-24 h-24" : size === "sm" ? "w-12 h-12" : "w-16 h-16";
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        className="flex flex-col items-center group"
      >
          <div 
            className={`${dimensions} bg-[#8e2323] rotate-45 flex items-center justify-center rounded-xl shadow-lg border-2 border-white/20 overflow-hidden transition-transform group-hover:scale-105 group-hover:rotate-[50deg] duration-500`}
          >
            <div className="-rotate-45 flex flex-col items-center justify-center text-white p-1">
               <i className="fas fa-utensils text-xl mb-0.5"></i>
               <span className="text-[10px] font-black leading-none text-center">PACHA<br/>SAZÓN</span>
            </div>
          </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-[#8e2323] selection:text-white" style={{ backgroundColor: theme.bg, color: theme.text }}>
      
      {/* Selector de Prototipo */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-4 z-50 flex gap-1 bg-white/95 p-1.5 rounded-full shadow-2xl border border-slate-200 backdrop-blur-md scale-90 md:scale-100"
      >
        <button 
          onClick={() => setPalette(PaletteType.TRADITIONAL)}
          className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all ${palette === PaletteType.TRADITIONAL ? 'bg-[#4b3621] text-white' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          TRADICIONAL
        </button>
        <button 
          onClick={() => setPalette(PaletteType.MODERN)}
          className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all ${palette === PaletteType.MODERN ? 'bg-[#8e2323] text-white' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          MODERNO
        </button>
      </motion.div>

      {/* Header */}
      <nav className="p-8 flex flex-col items-center max-w-6xl mx-auto space-y-4">
        <Logo size="lg" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
            <h1 className="text-3xl font-black tracking-tighter uppercase mb-1" style={{ color: theme.primary }}>{CONTACT_INFO.name}</h1>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-[11px] uppercase tracking-[0.25em] font-bold opacity-70" style={{ color: theme.accent }}>{CONTACT_INFO.tagline}</p>
            </div>
        </motion.div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-6 py-10 md:py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 text-center md:text-left"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-widest">
            <i className="fas fa-certificate"></i> El auténtico sabor de Huancayo
          </motion.div>
          <motion.h2 variants={fadeIn} className="text-5xl md:text-7xl font-serif leading-[1.1]" style={{ color: theme.primary }}>
            Sabor casero que <br /><span className="italic" style={{ color: theme.accent }}>enamora.</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg md:text-xl opacity-80 max-w-md mx-auto md:mx-0 leading-relaxed">
            Preparamos cada plato con el aroma de casa y productos naturales. ¿Tienes hambre? <span className="font-bold underline decoration-[#8e2323]">Respondemos en minutos.</span>
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href={CONTACT_INFO.whatsapp} 
              target="_blank" 
              className="group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_20px_50px_rgba(142,35,35,0.3)] hover:shadow-none hover:translate-y-1 transition-all"
              style={{ backgroundColor: theme.accent, color: theme.buttonText }}
            >
              <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
              Consultar Menú de Hoy
            </a>
            <a 
              href={CONTACT_INFO.maps} 
              target="_blank" 
              className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold text-lg border-2 border-slate-200 hover:bg-slate-50 transition-all"
              style={{ color: theme.primary }}
            >
              <i className="fas fa-map-marker-alt"></i>
              Cómo llegar
            </a>
          </motion.div>
          <motion.p variants={fadeIn} className="text-[11px] font-bold opacity-40 uppercase tracking-widest">Atención inmediata • Huancayo Centro</motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group mx-auto md:mx-0 max-w-md md:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[3rem] opacity-20 blur-[60px] transition-all group-hover:opacity-40 animate-pulse" style={{ backgroundColor: theme.accent }}></div>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" 
              alt="Plato típico peruano fresco" 
              className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Cocinando ahora</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN NUESTRO SABOR */}
      <section className="px-6 py-20 bg-slate-50/50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h3 className="text-4xl font-serif" style={{ color: theme.primary }}>Lo que nos hace únicos</h3>
            <p className="max-w-lg mx-auto opacity-60 italic">Cuidamos cada detalle, desde la selección en la feria hasta el toque final en tu plato.</p>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: theme.accent }}></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {SERVICES.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-transparent transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:rotate-[10deg] shadow-inner bg-slate-50" style={{ color: theme.accent }}>
                  <i className={`fas ${item.icon} text-2xl`}></i>
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                <p className="opacity-70 leading-relaxed mb-6">{item.description}</p>
                <a href={CONTACT_INFO.whatsapp} className="text-xs font-black uppercase tracking-widest flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: theme.accent }}>
                  Saber más <i className="fas fa-arrow-right"></i>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UBICACIÓN Y CONTACTO */}
      <section className="px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 grid md:grid-cols-12 items-stretch"
        >
          <div className="md:col-span-5 p-12 md:p-16 space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest opacity-40">¿Dónde estamos?</span>
              <h3 className="text-4xl font-bold tracking-tighter" style={{ color: theme.primary }}>En el corazón de Huancayo</h3>
              <p className="opacity-60">{CONTACT_INFO.hours}</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center bg-slate-50" style={{ color: theme.accent }}>
                  <i className="fas fa-location-arrow text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-lg leading-tight">{CONTACT_INFO.city}</p>
                  <p className="text-sm opacity-50">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <motion.a 
                whileTap={{ scale: 0.95 }}
                href={CONTACT_INFO.whatsapp} 
                className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold shadow-xl text-white transition-transform"
                style={{ backgroundColor: theme.accent }}
              >
                <i className="fab fa-whatsapp text-2xl"></i> Hablar con el restaurante
              </motion.a>
              <motion.a 
                whileTap={{ scale: 0.95 }}
                href={`tel:${CONTACT_INFO.phone}`} 
                className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold border-2 transition-all"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <i className="fas fa-phone-alt"></i> Llamada Directa
              </motion.a>
            </div>
          </div>
          <div className="md:col-span-7 h-[400px] md:h-auto bg-slate-100 relative overflow-hidden">
            <motion.div 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 20 }}
              className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" 
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white p-6 rounded-[2rem] shadow-2xl flex items-center gap-5 max-w-xs"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: theme.accent }}>
                  <i className="fas fa-utensils"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40">¡Te esperamos!</p>
                  <p className="font-bold text-lg">Pacha y Sazón</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PRUEBA SOCIAL - REUBICADA AL FINAL ANTES DEL FOOTER */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#8e2323] rounded-[3.5rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/pantry.png')` }}></div>
          <div className="relative z-10 space-y-12">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-center gap-12"
            >
              {TESTIMONIALS.map((test, index) => (
                <motion.div key={index} variants={fadeIn} className="flex flex-col items-center flex-1">
                  <div className="flex gap-1 mb-6">
                    {[...Array(test.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star text-amber-300 text-xs"></i>
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-serif italic leading-snug mb-6">"{test.text}"</blockquote>
                  <div className="h-px w-6 bg-white/30 mb-4"></div>
                  <cite className="text-[10px] uppercase tracking-[0.3em] font-black not-italic opacity-70">{test.author}</cite>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              className="pt-8 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <span className="flex items-center gap-2 border-r border-white/20 pr-8 last:border-0"><i className="fas fa-check"></i> Sazón Natural</span>
              <span className="flex items-center gap-2 border-r border-white/20 pr-8 last:border-0"><i className="fas fa-check"></i> Sin Preservantes</span>
              <span className="flex items-center gap-2"><i className="fas fa-check"></i> Tradición Huanca</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-24 text-center border-t border-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <Logo size="md" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
              <p className="text-3xl font-serif max-w-sm mx-auto leading-tight" style={{ color: theme.primary }}>¿Antojo de algo rico ahora?</p>
              <motion.a 
                whileHover={{ x: 5 }}
                href={CONTACT_INFO.whatsapp} 
                className="inline-block text-lg font-bold border-b-2 border-transparent hover:border-current transition-all" 
                style={{ color: theme.accent }}
              >
                Escríbenos por WhatsApp <i className="fas fa-chevron-right text-xs ml-2"></i>
              </motion.a>
          </motion.div>
          <div className="flex justify-center gap-10">
            {['facebook-square', 'instagram', 'whatsapp'].map((icon, i) => (
              <motion.a 
                key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                href="#" 
                className={`text-slate-300 transition-all ${icon === 'whatsapp' ? 'hover:text-green-500' : 'hover:text-[#8e2323]'}`}
              >
                <i className={`fab fa-${icon} text-3xl`}></i>
              </motion.a>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-20">
            &copy; 2024 PACHA Y SAZÓN • HUANCAYO • PERÚ
          </p>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <AnimatePresence>
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3 group"
        >
          <div className="bg-white px-4 py-2 rounded-2xl shadow-xl text-[10px] font-black uppercase tracking-widest border border-slate-100 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
            ¿Hambre? Escríbenos 😋
          </div>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={CONTACT_INFO.whatsapp} 
            className="w-20 h-20 rounded-full flex items-center justify-center shadow-[0_15px_45px_rgba(142,35,35,0.4)] text-white text-4xl relative overflow-hidden group"
            style={{ backgroundColor: theme.accent }}
          >
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <i className="fab fa-whatsapp relative z-10"></i>
            </motion.div>
          </motion.a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
