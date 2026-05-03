import { useState } from 'react';
import { ArrowRight, Star, Instagram, Menu, X, Phone } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral text-dark font-sans selection:bg-accent selection:text-white overflow-x-hidden flex flex-col">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-dark text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs"
      >
        Aller au contenu principal
      </a>

      {/* Navbar Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <header className="flex justify-between items-center h-20 lg:h-24">
          {/* Desktop Links Left */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-dark/70">
            <a href="#accueil" className="hover:text-primary transition-colors duration-300">Accueil</a>
            <a href="#menu" className="hover:text-primary transition-colors duration-300">Menu</a>
            <a href="#galerie" className="hover:text-primary transition-colors duration-300">Galerie</a>
            <a href="#avis" className="hover:text-primary transition-colors duration-300">Avis</a>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center z-[60]">
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-dark hover:text-primary p-2 transition-colors relative"
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
             >
                {isMobileMenuOpen ? <X width="24" height="24" /> : <Menu width="24" height="24" />}
             </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
             className={`lg:hidden fixed inset-0 z-50 bg-neutral/95 backdrop-blur-sm transition-all duration-300 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
             <a href="#accueil" onClick={() => setIsMobileMenuOpen(false)} className="text-dark font-display font-black text-4xl uppercase">Accueil</a>
             <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-dark font-display font-black text-4xl uppercase">Menu</a>
             <a href="#galerie" onClick={() => setIsMobileMenuOpen(false)} className="text-dark font-display font-black text-4xl uppercase">Galerie</a>
             <a href="#avis" onClick={() => setIsMobileMenuOpen(false)} className="text-dark font-display font-black text-4xl uppercase">Avis</a>
             <a href="tel:0169803152" className="mt-4 flex items-center justify-center gap-3 bg-accent text-white font-bold uppercase tracking-widest text-sm py-4 px-8 rounded-full shadow-xl">
               <Phone size={20} />
               01 69 80 31 52
             </a>
          </div>

          {/* Logo Center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-primary text-neutral font-display font-black text-xl lg:text-2xl tracking-widest uppercase px-6 lg:px-10 py-4 lg:py-5 shadow-[0_12px_40px_rgba(10,92,54,0.3)] z-50 rounded-b-md flex flex-col items-center">
             <span className="text-[10px] tracking-widest font-sans font-bold opacity-80 mb-1 lg:mb-1.5 uppercase">L'Authentique</span>
             <span>MA' PIZZA</span>
          </div>

          {/* Desktop CTA Right */}
          <a href="tel:0169803152" className="hidden lg:inline-flex items-center justify-center border-2 border-accent text-accent font-bold uppercase text-xs tracking-widest rounded-full px-8 py-3 hover:bg-accent hover:text-white transition-all duration-300">
            Nous contacter
          </a>
          
          {/* Mobile CTA (Phone) */}
          <a href="tel:0169803152" className="lg:hidden inline-flex items-center justify-center bg-accent text-white rounded-full p-2.5 shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </header>
      </div>

      {/* Main Hero Section */}
      <main id="accueil" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16 relative flex-grow">
         
         {/* Top Row: Title + Image */}
         <div className="flex flex-col lg:flex-row items-center justify-between relative">
            
            {/* Left Typography */}
            <div className="w-full lg:w-[60%] relative z-30 flex flex-col pt-8 lg:pt-0 pointer-events-none">
               <h1 className="font-display font-black text-accent leading-[0.8] tracking-tighter uppercase flex flex-col text-[16vw] sm:text-[14vw] lg:text-[140px] xl:text-[160px]">
                  <span 
                     className="relative" 
                     style={{ WebkitTextStroke: '6px #FDFCF8', paintOrder: 'stroke fill', textShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
                  >
                     PIZZA
                  </span>
                  <span 
                     className="lg:ml-6 relative"
                     style={{ WebkitTextStroke: '6px #FDFCF8', paintOrder: 'stroke fill', textShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
                  >
                     AU FEU
                  </span>
                  <span 
                     className="lg:ml-12 relative"
                     style={{ WebkitTextStroke: '6px #FDFCF8', paintOrder: 'stroke fill', textShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
                  >
                     DE BOIS
                  </span>
               </h1>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[50%] relative z-20 mt-8 lg:-mt-12 lg:-ml-[10%]">
               <div className="relative transform lg:rotate-[-6deg] hover:rotate-[-2deg] transition-transform duration-700 mx-auto max-w-[500px] lg:max-w-none">
                  {/* Decorative element behind */}
                  <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10"></div>
                  
                  <img 
                     src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" 
                     alt="Pizza authentique" 
                     className="w-full h-auto aspect-square sm:aspect-[4/3] object-cover border-[12px] md:border-[16px] border-white shadow-[0_24px_50px_rgba(0,0,0,0.15)] rounded-sm"
                     referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Badge (like the Master Goodwill 'Hot Stuff Inside') */}
                  <div className="absolute -right-4 -bottom-6 lg:-right-8 lg:-bottom-8 bg-primary text-white font-display font-black uppercase px-6 py-4 shadow-xl border-4 border-white transform rotate-[12deg] z-30">
                     <span className="block text-2xl lg:text-3xl leading-none">100%</span>
                     <span className="block text-xs uppercase tracking-widest mt-1">Fait Maison</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Row: CTA + Info */}
         <div className="mt-16 lg:mt-12 flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-8 z-30 relative">
            
            {/* CTA Pill */}
            <div className="w-full lg:w-auto">
               <a 
                  href="tel:0169803152" 
                  className="mx-auto lg:mx-0 inline-flex items-center justify-between gap-6 bg-dark text-neutral rounded-full pl-6 pr-2 py-2 group hover:bg-accent transition-colors duration-300 shadow-xl border border-transparent max-w-[320px] w-full lg:w-auto"
               >
                  <span className="font-bold uppercase tracking-widest text-sm pl-2">Commander</span>
                  <div className="bg-accent group-hover:bg-white text-neutral group-hover:text-accent w-12 h-12 rounded-full flex items-center justify-center transform transition-colors flex-shrink-0 shadow-[0_4px_12px_rgba(224,79,38,0.4)] group-hover:shadow-none">
                     <ArrowRight className="w-5 h-5" />
                  </div>
               </a>
            </div>

            {/* Since & description */}
            <div className="w-full lg:max-w-[45%] text-center lg:text-right flex flex-col items-center lg:items-end px-4 lg:px-0">
               <h2 className="font-display font-black text-primary text-3xl lg:text-4xl xl:text-5xl uppercase tracking-tighter mb-4 flex items-center justify-center lg:justify-end gap-3">
                  <span className="hidden sm:inline-block w-12 h-1 bg-primary/20 rounded-full"></span>
                  DEPUIS 2018
               </h2>
               <p className="text-dark/70 font-sans text-sm md:text-base leading-relaxed max-w-[45ch]">
                  L'authentique goût de l'Italie à Montlhéry. Une pâte fraîche maison et une cuisson traditionnelle au feu de bois pour des saveurs inimitables.
               </p>
            </div>
         </div>
         
      </main>

      {/* Introduction / Bienvenue */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32">
        <div className="bg-dark text-neutral p-8 lg:p-16 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 shadow-[0_20px_60px_rgba(17,17,17,0.15)]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
           
           <div className="w-full lg:w-1/2 relative z-10">
              <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter mb-6 relative">
                 <span className="text-accent">VOTRE PIZZA,</span><br/>
                 NOTRE PASSION.
              </h2>
              <p className="text-neutral/80 font-sans text-base leading-relaxed mb-8 max-w-prose">
                 Chez Ma' Pizza, nous croyons qu'une bonne pizza est avant tout une question d'amour et de respect de la tradition. Chaque jour, nous préparons une pâte à fermentation lente et sélectionnons les meilleurs produits frais pour vous offrir une expérience inoubliable à Montlhéry.
              </p>
              
              <div className="flex items-center gap-8 border-t border-neutral/10 pt-8">
                 <div>
                    <span className="block font-display font-black text-4xl text-accent mb-1">+5</span>
                    <span className="text-xs uppercase tracking-widest text-neutral/60 font-bold">Années d'Expérience</span>
                 </div>
                 <div>
                    <span className="block font-display font-black text-4xl text-accent mb-1">4.8</span>
                    <span className="text-xs uppercase tracking-widest text-neutral/60 font-bold">Avis Google</span>
                 </div>
              </div>
           </div>

           <div className="w-full lg:w-1/2 relative z-10">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[16/10]">
                 <img 
                    src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80" 
                    alt="Pizzaiolo préparant la pâte à pizza avec passion" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 border-[8px] border-dark pointer-events-none"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Savoir-faire / Etapes */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32">
         <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs lg:text-sm mb-4 block">Notre Philosophie</span>
            <h2 className="font-display font-black text-dark text-4xl lg:text-5xl uppercase tracking-tighter max-w-2xl mx-auto">
               L'ARTISANAT ITALIEN <br/> DEPUIS LA BASE
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pl-6 border-l border-dark/10 md:border-none md:pl-0 mx-auto">
            {[
               { num: "01", title: "Pâte Fermentée", desc: "Notre pâte repose 48 à 72 heures pour garantir une légèreté et une digestibilité optimales et un super goût." },
               { num: "02", title: "Produits Frais", desc: "Des légumes frais découpés chaque matin et des charcuteries soigneusement sélectionnées." },
               { num: "03", title: "Cuisson au Bois", desc: "Un four typique chauffé à 400°C pour une croûte saisie, alvéolée et délicieusement parfumée." }
            ].map((step, idx) => (
               <div key={idx} className="relative md:text-center md:flex md:flex-col md:items-center">
                  <div className="md:hidden absolute left-[-29px] top-2 w-3 h-3 rounded-full bg-accent border-2 border-neutral"></div>
                  
                  <span className="font-display font-black text-6xl lg:text-7xl text-dark/10 block mb-4 relative z-0 pointer-events-none select-none -ml-4 md:ml-0 md:mb-2">{step.num}</span>
                  <div className="md:-mt-8 relative z-10 w-full flex flex-col md:items-center">
                     <h3 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-primary mb-3">
                        {step.title}
                     </h3>
                     <p className="text-dark/70 text-sm md:text-base leading-relaxed md:max-w-xs">{step.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Menu / Selection */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32" id="menu">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
               <h2 className="font-display font-black text-dark text-4xl lg:text-5xl uppercase tracking-tighter flex flex-col md:flex-row md:items-center gap-2 md:gap-4 lg:gap-6">
                  <span>NOTRE MENU</span> 
                  <span className="text-accent underline decoration-[6px] underline-offset-8">SIGNATURE</span>
               </h2>
            </div>
            <a href="tel:0169803152" className="inline-flex items-center justify-center border-2 border-dark text-dark font-bold uppercase tracking-widest text-xs px-8 py-3 rounded-full hover:bg-dark hover:text-neutral transition-colors flex-shrink-0">
               Tout le menu
            </a>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-dark/5 flex flex-col h-full">
               <div className="overflow-hidden rounded-lg aspect-[4/3] mb-5 bg-neutral relative">
                  <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80" alt="Pizza Margherita" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 right-3 bg-white text-dark font-bold uppercase text-xs tracking-widest px-3 py-1 rounded-full shadow-sm">11€</div>
               </div>
               <div className="flex-grow">
                  <h3 className="font-display font-black uppercase text-2xl text-primary mb-2">Margherita</h3>
                  <p className="text-dark/60 text-sm mb-6 leading-relaxed">Sauce tomate artisanale, fior di latte onctueuse, basilic frais, filet d'huile d'olive extra vierge.</p>
               </div>
               <a href="tel:0169803152" className="block w-full text-center bg-neutral text-dark font-bold uppercase tracking-widest text-xs py-3 rounded-lg border-2 border-dark/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                  Je commande
               </a>
            </div>
            
            {/* Card 2 */}
            <div className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-dark/5 flex flex-col h-full">
               <div className="overflow-hidden rounded-lg aspect-[4/3] mb-5 bg-neutral relative">
                  <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80" alt="Pizza Piccante" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 right-3 bg-white text-dark font-bold uppercase text-xs tracking-widest px-3 py-1 rounded-full shadow-sm">14€</div>
               </div>
               <div className="flex-grow">
                  <h3 className="font-display font-black uppercase text-2xl text-primary mb-2">Piccante</h3>
                  <p className="text-dark/60 text-sm mb-6 leading-relaxed">Sauce tomate, fior di latte, véritable spianata calabrese piquante, petites olives noires.</p>
               </div>
               <a href="tel:0169803152" className="block w-full text-center bg-neutral text-dark font-bold uppercase tracking-widest text-xs py-3 rounded-lg border-2 border-dark/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                  Je commande
               </a>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-dark/5 flex flex-col h-full">
               <div className="overflow-hidden rounded-lg aspect-[4/3] mb-5 bg-neutral relative">
                  <img src="https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=600&q=80" alt="Pizza Végétarienne" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 right-3 bg-white text-dark font-bold uppercase text-xs tracking-widest px-3 py-1 rounded-full shadow-sm">14.50€</div>
               </div>
               <div className="flex-grow">
                  <h3 className="font-display font-black uppercase text-2xl text-primary mb-2">Verdura</h3>
                  <p className="text-dark/60 text-sm mb-6 leading-relaxed">Sauce tomate, fior di latte, trio de légumes grillés (courgettes, aubergines, poivrons), oignons rouges.</p>
               </div>
               <a href="tel:0169803152" className="block w-full text-center bg-neutral text-dark font-bold uppercase tracking-widest text-xs py-3 rounded-lg border-2 border-dark/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                  Je commande
               </a>
            </div>
         </div>
      </section>

      {/* Avis Clients (Testimonials) */}
      <section className="w-full bg-dark text-neutral py-24 lg:py-32 mt-24 lg:mt-32" id="avis">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-24">
               <div className="flex items-center justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                     <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                  ))}
               </div>
               <h2 className="font-display font-black text-4xl lg:text-5xl uppercase tracking-tighter mb-4">
                  ILS EN PARLENT <br className="md:hidden" />
                  <span className="text-accent">MIEUX QUE NOUS</span>
               </h2>
               <p className="text-neutral/70 max-w-2xl mx-auto font-sans">
                  Notre plus belle récompense est votre satisfaction. Découvrez ce que nos clients de Montlhéry et des alentours pensent de nos pizzas au feu de bois.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { name: "Julien D.", note: "4.9", text: "Excellente pizza, la pâte est fine et croustillante, les ingrédients sont de qualité. La cuisson au feu de bois fait toute la différence." },
                  { name: "Sophie M.", note: "5.0", text: "Une vraie pizzeria de quartier comme on les aime. L'équipe est super sympa, le service est rapide et les pizzas sont bien garnies !" },
                  { name: "Antoine L.", note: "5.0", text: "Peut-être les meilleures pizzas de Montlhéry ! Mention spéciale pour la pâte qui est particulièrement savoureuse et digeste." }
               ].map((avis, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center font-display font-bold text-accent text-xl">
                           {avis.name.charAt(0)}
                        </div>
                        <div>
                           <div className="font-bold uppercase tracking-widest text-sm">{avis.name}</div>
                           <div className="text-accent text-xs font-bold">{avis.note}/5 Google</div>
                        </div>
                     </div>
                     <p className="text-neutral/80 italic text-sm md:text-base leading-relaxed">"{avis.text}"</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Galerie Instagram */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32 pb-24 lg:pb-32" id="galerie">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
               <span className="text-primary font-bold uppercase tracking-widest text-xs lg:text-sm mb-4 block">L'Ambiance</span>
               <h2 className="font-display font-black text-dark text-4xl lg:text-5xl uppercase tracking-tighter">
                  DANS LES <span className="text-accent underline decoration-[6px] underline-offset-8">COULISSES</span>
               </h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center justify-center gap-3 border-2 border-dark text-dark font-bold uppercase tracking-widest text-xs px-8 py-3 rounded-full hover:bg-dark hover:text-neutral transition-colors flex-shrink-0">
               <Instagram className="w-4 h-4" />
               Rejoignez-nous
            </a>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden aspect-square relative group bg-dark/5">
               <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" alt="Notre four à bois en action" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square relative group bg-dark/5">
               <img src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80" alt="Pizza sortie du four" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square relative group bg-dark/5">
               <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=400&q=80" alt="Préparation de la pâte" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square relative group bg-dark/5">
               <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=400&q=80" alt="Ingrédients frais" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square relative group flex items-center justify-center bg-primary text-neutral p-4 text-center hover:bg-accent transition-colors">
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                  <Instagram className="w-8 h-8 mb-2" />
                  <span className="font-bold uppercase tracking-widest text-xs">@mapizza_montlhery</span>
               </a>
            </div>
         </div>
         {/* Mobile Button Fallback */}
         <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center justify-center gap-3 border-2 border-dark text-dark font-bold uppercase tracking-widest text-xs px-8 py-3 rounded-full hover:bg-dark hover:text-neutral transition-colors">
               <Instagram className="w-4 h-4" />
               Rejoignez-nous
            </a>
         </div>
      </section>

      {/* Footer / CTA Final */}
      <footer className="w-full bg-dark text-neutral mt-auto pt-16 lg:pt-24 pb-8 border-t-[8px] border-primary" id="contact">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 lg:mb-24">
               
               {/* Left Big Text */}
               <div className="w-full lg:w-1/2">
                  <h2 className="font-display font-black text-accent text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
                     UNE FAIM <br/> DE LOUP ?
                  </h2>
                  <p className="text-neutral/70 max-w-md font-sans mb-10 text-lg leading-relaxed">
                     Ne laissez pas votre appétit gâcher votre soirée. Passez commande dès maintenant et venez récupérer votre pizza toute chaude à Montlhéry !
                  </p>
                  <a 
                     href="tel:0169803152" 
                     className="inline-flex items-center justify-center gap-4 bg-accent text-white font-bold uppercase tracking-widest text-xs sm:text-sm px-8 py-5 rounded-full hover:bg-neutral hover:text-accent transition-colors duration-300 w-full sm:w-auto shadow-[0_12px_30px_rgba(224,79,38,0.3)]"
                  >
                     Appeler le 01 69 80 31 52
                  </a>
               </div>

               {/* Right Info Widgets */}
               <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-12 sm:gap-20 lg:justify-end">
                  {/* Address */}
                  <div>
                     <h4 className="font-bold uppercase tracking-widest text-xs text-primary mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> Localisation
                     </h4>
                     <p className="text-neutral/80 font-sans text-sm md:text-base leading-relaxed">
                        Ma' Pizza<br/>
                        10 Rue Ernest Chesneau,<br/>
                        91310 Montlhéry<br/>
                        France
                     </p>
                  </div>

                  {/* Horaires */}
                  <div>
                     <h4 className="font-bold uppercase tracking-widest text-xs text-primary mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> Horaires
                     </h4>
                     <ul className="text-neutral/80 font-sans text-sm md:text-base space-y-3 min-w-[160px]">
                        <li className="flex justify-between gap-6 border-b border-white/5 pb-2">
                           <span className="font-medium">Mardi - Samedi</span> 
                           <span className="font-mono text-xs mt-0.5">18h00 - 22h30</span>
                        </li>
                        <li className="flex justify-between gap-6 border-b border-white/5 pb-2">
                           <span className="font-medium">Dimanche</span> 
                           <span className="font-mono text-xs mt-0.5">18h30 - 22h00</span>
                        </li>
                        <li className="flex justify-between gap-6 text-neutral/40">
                           <span className="font-medium">Lundi</span> 
                           <span className="uppercase text-xs font-bold tracking-widest mt-0.5">Fermé</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Copyright Strip */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-xs tracking-widest text-neutral/40 font-bold uppercase">
               <span className="text-center md:text-left">&copy; {new Date().getFullYear()} MA' PIZZA MONTLHÉRY. TOUS DROITS RÉSERVÉS.</span>
               <div className="flex gap-6 lg:gap-8 justify-center">
                  <a href="#accueil" className="hover:text-primary transition-colors">Mentions Légales</a>
                  <a href="#accueil" className="hover:text-primary transition-colors">Confidentialité</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
