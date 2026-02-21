import { motion, useScroll, useSpring } from "motion/react";
import { 
  Flame, 
  Target, 
  Zap, 
  Brain, 
  ShieldCheck, 
  ChevronRight, 
  Dumbbell, 
  Apple, 
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowDown,
  Footprints,
  Activity,
  TrendingUp,
  Moon,
  Sun,
  Phone,
  Coffee,
  ArrowUp as StairsIcon,
  Droplets,
  Utensils,
  XCircle,
  CheckCircle,
  Beef,
  Fish,
  Salad,
  Scale,
  Heart,
  Smile,
  Timer,
  Trophy,
  Repeat,
  Armchair,
  LayoutGrid,
  UserCheck,
  Wind,
  Maximize2,
  Anchor,
  Columns,
  Calendar,
  CalendarCheck,
  GlassWater,
  Sparkles,
  Leaf,
  Pill,
  Ban,
  Euro,
  AlertTriangle,
  Pizza,
  Wine,
  PartyPopper,
  User,
  RefreshCw,
  Shield,
  Lock,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
            alt="Fitness Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-widest mb-6">
              Versione Premium
            </span>
            <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tighter mb-4">
              ADDOME 360
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12">
              La verità scientifica sulla pancia. Strategia, non solo fatica.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="px-8 py-4 bg-white text-zinc-950 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                Inizia a Leggere <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-24">
        {/* Chapter 1 Header */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 1</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">La Verità sulla Pancia</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Perché non scende anche se fai addominali?</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="1.1">1.1 – Diciamoci la verità (senza filtri)</h2>
            <p>Se sei qui, probabilmente hai già provato tutto.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-zinc-100 p-8 rounded-3xl border border-zinc-200">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><AlertCircle className="text-orange-500 shrink-0" /> Crunch a terra</li>
                  <li className="flex items-center gap-3"><AlertCircle className="text-orange-500 shrink-0" /> Plank fino a tremare</li>
                  <li className="flex items-center gap-3"><AlertCircle className="text-orange-500 shrink-0" /> Circuiti addominali da YouTube</li>
                  <li className="flex items-center gap-3"><AlertCircle className="text-orange-500 shrink-0" /> Allenamenti "brucia pancia"</li>
                </ul>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                  alt="Frustrated athlete" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            <p>Eppure... La pancia è ancora lì.</p>
            <p>Magari le braccia sono migliorate. Magari le spalle si sono allargate. Magari le gambe sono più forti. Ma quella zona sotto l’ombelico? <strong>Non molla.</strong></p>
            
            <div className="my-16 p-10 bg-zinc-950 text-white rounded-[2rem] relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-3xl font-serif italic mb-0">"Gli addominali NON bruciano il grasso sopra la pancia."</p>
                <p className="mt-4 text-zinc-400 text-sm uppercase tracking-widest font-bold">— È fisiologia, non un'opinione.</p>
              </div>
              <Flame className="absolute -right-10 -bottom-10 w-64 h-64 text-orange-500/10 rotate-12" />
            </div>

            <h2 id="1.2">1.2 – Il mito più grande del fitness</h2>
            <p>Il corpo non funziona così: "Faccio addominali → brucio grasso sulla pancia."</p>
            
            <div className="flex flex-col md:flex-row gap-12 items-center my-16">
              <div className="flex-1">
                <p className="text-xl leading-relaxed">Il corpo funziona così: <br/><span className="text-orange-500 font-bold text-2xl">"Creo un deficit calorico → il corpo decide dove togliere grasso."</span></p>
                <p className="mt-6">La perdita di grasso è sistemica, non localizzata. Non puoi scegliere da dove il tuo corpo dimagrisce.</p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                  <span className="text-sm font-bold">Rinforzare il Core</span>
                </div>
                <div className="aspect-square bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <Target className="w-10 h-10 text-blue-500 mb-4" />
                  <span className="text-sm font-bold">Dare Forma</span>
                </div>
                <div className="aspect-square bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                  <span className="text-sm font-bold">Stabilità</span>
                </div>
                <div className="aspect-square bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <Brain className="w-10 h-10 text-purple-500 mb-4" />
                  <span className="text-sm font-bold">Postura</span>
                </div>
              </div>
            </div>

            <h2 id="1.3">1.3 – Perché proprio la pancia è l’ultima ad andarsene?</h2>
            <p>Qui entriamo nella parte più interessante. Il grasso addominale è:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <li className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <span className="font-bold text-zinc-900 block mb-1">Sensibile al Cortisolo</span>
                L'ormone dello stress favorisce l'accumulo in questa zona.
              </li>
              <li className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <span className="font-bold text-zinc-900 block mb-1">Resistente alla Lipolisi</span>
                I recettori in quest'area rendono più difficile "liberare" il grasso.
              </li>
              <li className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <span className="font-bold text-zinc-900 block mb-1">Legato all'Insulina</span>
                Una cattiva gestione dei carboidrati si riflette subito qui.
              </li>
              <li className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <span className="font-bold text-zinc-900 block mb-1">Deposito Strategico</span>
                Evolutivamente, è la zona di riserva preferita dal corpo.
              </li>
            </ul>

            <div className="my-16 rounded-[2.5rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop" 
                alt="Healthy food and measurement" 
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <h2 id="1.4">1.4 – L’errore che fanno quasi tutti</h2>
            <p>L’errore più comune è questo: <strong>Allenamento estremo + Dieta casuale + Stress alto + Poco recupero.</strong></p>
            <p>Il problema non è la quantità di fatica. È la mancanza di sistema. Puoi sudare quanto vuoi, ma se l'alimentazione non è strutturata e gli ormoni non sono in equilibrio, la pancia non scende.</p>

            <h2 id="1.5">1.5 – L’Attacco a Due Punte 🔥</h2>
            <p>Useremo un attacco strategico a due punte:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-zinc-200 rounded-[2rem] shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Apple className="text-orange-600" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Punta 1: Alimentazione Strategica</h4>
                <ul className="text-sm space-y-2 text-zinc-500">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Gestione Macronutrienti</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Controllo Insulina</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Timing Carboidrati</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Deficit Calibrato</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-zinc-200 rounded-[2rem] shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Punta 2: Metabolismo Accelerato</h4>
                <ul className="text-sm space-y-2 text-zinc-500">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Aumento Massa Attiva</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Stimolazione NEAT</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Logica Metabolica</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Riduzione Cortisolo</li>
                </ul>
              </motion.div>
            </div>

            <h2 id="1.6">1.6 – Onestà prima di tutto</h2>
            <p>L’addome visibile non è solo grasso basso. È un insieme di fattori: percentuale di grasso, massa addominale, postura, bassa ritenzione e stress controllato.</p>

            <h2 id="1.7">1.7 – Cosa succederà da ora in poi</h2>
            <p>Nei primi capitoli smonteremo le false credenze e costruiremo una strategia reale. La motivazione finisce. <strong>Il sistema resta.</strong></p>

            <h2 id="1.8">1.8 – La promessa</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-12 rounded-r-2xl">
              <p className="font-bold text-orange-900 mb-4">Cosa NON ti prometto:</p>
              <ul className="space-y-2 text-orange-800 mb-8">
                <li>❌ Addome in 7 giorni</li>
                <li>❌ Trasformazioni magiche</li>
                <li>❌ Metodi segreti</li>
              </ul>
              <p className="font-bold text-orange-900 mb-4">Cosa TI prometto:</p>
              <ul className="space-y-2 text-orange-800">
                <li>✔ Comprensione reale</li>
                <li>✔ Strategia scientifica</li>
                <li>✔ Metodo replicabile</li>
                <li>✔ Risultati sostenibili</li>
              </ul>
            </div>

            <div className="text-center mt-24 mb-12">
              <p className="text-3xl font-serif font-bold italic text-zinc-900">"Non ti serve più fatica. Ti serve più strategia."</p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>

        {/* Chapter 2 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 2</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">Riattiva il Metabolismo</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Il trucco dei 10.000 passi</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="2.1">2.1 – Il problema non è che mangi troppo</h2>
            <p>Ti faccio una domanda diretta. Sei sicuro che il problema sia solo il cibo? Perché nella maggior parte dei casi non è così.</p>
            
            <div className="bg-zinc-900 text-white p-10 rounded-[2.5rem] my-12 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-2xl mb-6">Il problema è che:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <p className="text-xl">Ti alleni 60 minuti</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <p className="text-xl">Poi resti seduto 10 ore</p>
                  </div>
                </div>
                <p className="mt-8 text-zinc-400 italic">E pensi di essere “attivo”. Ma il metabolismo non si attiva con un’ora di palestra. Si attiva con il movimento quotidiano.</p>
              </div>
              <Activity className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            </div>

            <h2 id="2.2">2.2 – Cos’è il NEAT (e perché cambia tutto)</h2>
            <p>NEAT significa: <strong>Non-Exercise Activity Thermogenesis</strong>. Tradotto: Tutto il movimento che fai fuori dall’allenamento.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-12">
              {[
                { icon: Footprints, label: "Camminare" },
                { icon: StairsIcon, label: "Scale" },
                { icon: Coffee, label: "Commissioni" },
                { icon: Phone, label: "Al Telefono" },
                { icon: Activity, label: "Muoversi" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-zinc-200 p-6 rounded-2xl flex flex-col items-center text-center">
                  <item.icon className="w-8 h-8 text-orange-500 mb-3" />
                  <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>

            <p>Il NEAT può fare la differenza di <strong>300–800 calorie al giorno</strong> tra due persone dello stesso peso. Capisci cosa significa?</p>

            <h2 id="2.3">2.3 – Il mito del cardio distruttivo</h2>
            <p>Molti pensano: “Devo correre.” “Devo fare HIIT.” “Devo distruggermi.” In realtà, il corpo risponde meglio alla costanza che all’estremo.</p>
            
            <div className="my-12 p-8 bg-red-50 border border-red-100 rounded-3xl">
              <h4 className="text-red-900 font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Perché il cardio intenso può fallire:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-red-800">
                <li className="flex items-center gap-2">• Aumenta cortisolo</li>
                <li className="flex items-center gap-2">• Aumenta fame</li>
                <li className="flex items-center gap-2">• Affatica il sistema nervoso</li>
                <li className="flex items-center gap-2">• Riduce il NEAT post-allenamento</li>
              </ul>
            </div>

            <h2 id="2.4">2.4 – Il trucco dei 10.000 passi</h2>
            <p>Non serve correre la maratona. Serve camminare ogni giorno. L’obiettivo minimo: <strong>8.000 – 12.000 passi al giorno.</strong></p>
            
            <div className="flex flex-col md:flex-row gap-8 my-16">
              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Walking in nature" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="p-6 bg-zinc-100 rounded-2xl border border-zinc-200">
                  <span className="text-zinc-500 text-xs font-bold uppercase">Sotto 5.000</span>
                  <p className="text-xl font-bold">Sedentario</p>
                </div>
                <div className="p-6 bg-orange-100 rounded-2xl border border-orange-200">
                  <span className="text-orange-600 text-xs font-bold uppercase">8.000 - 12.000</span>
                  <p className="text-xl font-bold text-orange-900">Stimolo Metabolico</p>
                </div>
                <div className="p-6 bg-emerald-100 rounded-2xl border border-emerald-200">
                  <span className="text-emerald-600 text-xs font-bold uppercase">Sopra 12.000</span>
                  <p className="text-xl font-bold text-emerald-900">Perdita di Grasso</p>
                </div>
              </div>
            </div>

            <h2 id="2.5">2.5 – Perché attacca il “grasso vecchio”</h2>
            <p>Il grasso addominale resistente non ama gli sbalzi. Risponde meglio a stimolo costante, deficit moderato e bassa infiammazione.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold">Sensibilità Insulinica</p>
                  <p className="text-sm text-zinc-500">Migliora la gestione degli zuccheri.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold">Ossidazione Grassi</p>
                  <p className="text-sm text-zinc-500">Insegna al corpo a usare i grassi come energia.</p>
                </div>
              </div>
            </div>

            <h2 id="2.6">2.6 – La formula pratica</h2>
            <div className="p-10 bg-zinc-950 text-white rounded-[2.5rem] my-12 text-center">
              <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold mb-8">La Strategia Definitiva</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                <div>
                  <p className="text-4xl font-bold mb-2">3–4x</p>
                  <p className="text-zinc-500 text-sm">Allenamenti / Sett</p>
                </div>
                <div className="w-px h-12 bg-zinc-800 hidden md:block" />
                <div>
                  <p className="text-4xl font-bold mb-2">10k</p>
                  <p className="text-zinc-500 text-sm">Passi / Giorno</p>
                </div>
                <div className="w-px h-12 bg-zinc-800 hidden md:block" />
                <div>
                  <p className="text-4xl font-bold mb-2">Deficit</p>
                  <p className="text-zinc-500 text-sm">Intelligente</p>
                </div>
              </div>
            </div>

            <h2 id="2.7">2.7 – Come farli senza accorgertene</h2>
            <p>Non devi stravolgere la tua vita. Tre blocchi da 10–15 minuti al giorno sono una scelta strategica, non un sacrificio.</p>

            <h2 id="2.8">2.8 – Effetto collaterale positivo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
              {[
                { icon: Sun, label: "Meno Stress" },
                { icon: Moon, label: "Sonno Migliore" },
                { icon: Activity, label: "Digestione" },
                { icon: TrendingUp, label: "Umore" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-zinc-50 rounded-2xl text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-3 text-zinc-400" />
                  <p className="text-xs font-bold uppercase">{item.label}</p>
                </div>
              ))}
            </div>

            <h2 id="2.9">2.9 – Il metabolismo non si “accende” con una pillola</h2>
            <p>Si accende con muscolo attivo, movimento costante, energia stabile e recupero corretto. Il trucco dei 10.000 passi è potente perché è facile, sostenibile e non crea rebound.</p>

            <h2 id="2.10">2.10 – La regola d’oro</h2>
            <div className="text-center mt-24 mb-12">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">Ricorda Sempre</p>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "L’addome si costruisce in palestra. <br/>Ma si scopre fuori."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>

        {/* Chapter 3 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 3</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">Alimentazione “Sgonfia-Tutto”</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Risultati visibili in 48 ore</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="3.1">3.1 – Prima chiarimento importante</h2>
            <p>Non stiamo parlando di perdere grasso in 48 ore. Stiamo parlando di eliminare ritenzione idrica, ridurre infiammazione e sgonfiare l’intestino.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                <h4 className="text-emerald-900 font-bold mb-4">Cosa succede realmente:</h4>
                <ul className="space-y-3 text-emerald-800">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Riduzione infiammazione</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Intestino sgonfio</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Migliore digestione</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Pelle più tesa</li>
                </ul>
              </div>
              <div className="flex items-center justify-center p-8 bg-zinc-100 rounded-3xl border border-zinc-200">
                <p className="text-xl text-center italic text-zinc-600">"Quando ti vedi meglio, continui. La motivazione nasce dai risultati visibili."</p>
              </div>
            </div>

            <h2 id="3.2">3.2 – Perché sei gonfio (anche se sei magro)</h2>
            <p>Il gonfiore non è solo grasso. È spesso un segnale di allarme del corpo che trattiene acqua a causa di stress, cattiva digestione o squilibri elettrolitici.</p>

            <div className="my-16 rounded-[2.5rem] overflow-hidden relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop" 
                alt="Healthy nutrition" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-12">
                <p className="text-white text-2xl font-serif italic">"Il primo obiettivo non è mangiare meno. È mangiare meglio."</p>
              </div>
            </div>

            <h2 id="3.3">3.3 – La Strategia 48 Ore</h2>
            <p>Per 2 giorni segui queste regole fondamentali. Non è una dieta da fame, è un reset anti-infiammatorio intelligente.</p>

            <h2 id="3.4">3.4 – La Lista “Sgonfia-Tutto” 🔥</h2>
            
            <div className="space-y-12 my-16">
              {/* Proteins */}
              <div className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Beef className="text-orange-500 w-8 h-8" />
                      <h4 className="text-3xl font-bold">Proteine Leggere</h4>
                    </div>
                    <ul className="grid grid-cols-2 gap-4 text-zinc-600">
                      <li>• Petto di pollo</li>
                      <li>• Tacchino</li>
                      <li>• Pesce bianco</li>
                      <li>• Albumi</li>
                      <li>• Uova intere</li>
                      <li>• Salmone</li>
                    </ul>
                    <div className="mt-8 p-4 bg-orange-50 rounded-xl text-orange-800 text-sm">
                      <strong>Perché?</strong> Alta sazietà, zero gonfiore, glicemia stabile.
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop" alt="Proteins" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Carbs */}
              <div className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                <div className="p-8 md:p-12 flex flex-col md:flex-row-reverse gap-12 items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Utensils className="text-blue-500 w-8 h-8" />
                      <h4 className="text-3xl font-bold">Carboidrati Puliti</h4>
                    </div>
                    <ul className="grid grid-cols-2 gap-4 text-zinc-600">
                      <li>• Riso basmati</li>
                      <li>• Patate bollite</li>
                      <li>• Patate dolci</li>
                      <li>• Gallette di riso</li>
                      <li>• Frutti rossi</li>
                      <li>• Banana</li>
                    </ul>
                    <div className="mt-8 p-4 bg-blue-50 rounded-xl text-blue-800 text-sm">
                      <strong>Perché?</strong> Basso impatto intestinale, massima digeribilità.
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1512058560550-42749359a60b?q=80&w=2071&auto=format&fit=crop" alt="Carbs" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Veggies */}
              <div className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Salad className="text-emerald-500 w-8 h-8" />
                      <h4 className="text-3xl font-bold">Verdure Intelligenti</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-emerald-600 font-bold text-sm uppercase mb-3">Scegli:</p>
                        <ul className="text-zinc-600 space-y-1">
                          <li>✔ Zucchine</li>
                          <li>✔ Spinaci</li>
                          <li>✔ Cetrioli</li>
                          <li>✔ Finocchi</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-red-500 font-bold text-sm uppercase mb-3">Evita:</p>
                        <ul className="text-zinc-400 space-y-1">
                          <li>❌ Cavolfiore</li>
                          <li>❌ Broccoli</li>
                          <li>❌ Legumi</li>
                          <li>❌ Cipolla</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" alt="Vegetables" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>

            <h2 id="3.5">3.5 – TABELLA STRATEGICA “SGONFIA VS GONFIA”</h2>
            <div className="overflow-x-auto my-12">
              <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200">
                <thead>
                  <tr className="bg-zinc-950 text-white">
                    <th className="p-6 text-left">Categoria</th>
                    <th className="p-6 text-left">SGONFIA (Sì)</th>
                    <th className="p-6 text-left">GONFIA (No)</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-600">
                  <tr className="border-b border-zinc-100">
                    <td className="p-6 font-bold">Proteine</td>
                    <td className="p-6 text-emerald-600">Pollo, pesce bianco</td>
                    <td className="p-6 text-red-400">Salumi, wurstel</td>
                  </tr>
                  <tr className="border-b border-zinc-100 bg-zinc-50/50">
                    <td className="p-6 font-bold">Carboidrati</td>
                    <td className="p-6 text-emerald-600">Riso basmati, patate</td>
                    <td className="p-6 text-red-400">Pane bianco, pizza</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="p-6 font-bold">Verdure</td>
                    <td className="p-6 text-emerald-600">Zucchine, cetrioli</td>
                    <td className="p-6 text-red-400">Cavolfiore, legumi</td>
                  </tr>
                  <tr className="border-b border-zinc-100 bg-zinc-50/50">
                    <td className="p-6 font-bold">Bevande</td>
                    <td className="p-6 text-emerald-600">Acqua, tè verde</td>
                    <td className="p-6 text-red-400">Bibite gassate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="3.6">3.6 – Esempio Giorno Sgonfia-Tutto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
              {[
                { time: "Colazione", menu: "Uova + albume, gallette, kiwi" },
                { time: "Pranzo", menu: "Petto di pollo, riso basmati, zucchine" },
                { time: "Spuntino", menu: "Yogurt greco (senza lattosio), frutti rossi" },
                { time: "Cena", menu: "Merluzzo, patate bollite, spinaci" }
              ].map((meal, i) => (
                <div key={i} className="p-8 bg-white border border-zinc-200 rounded-3xl flex items-center gap-6">
                  <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0 font-bold text-zinc-400">{i+1}</div>
                  <div>
                    <p className="text-xs font-bold uppercase text-orange-500 mb-1">{meal.time}</p>
                    <p className="text-lg font-bold text-zinc-800">{meal.menu}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="3.7">3.7 – Il trucco che pochi conoscono</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center my-16">
              <div className="flex-1">
                <p className="text-xl">Non ridurre l’acqua per sgonfiarti. È l’errore più grande. Più bevi (in modo corretto), più il corpo elimina sodio e riduce la ritenzione.</p>
                <p className="mt-6 font-bold text-blue-600">Tagliare acqua = il corpo trattiene ancora di più.</p>
              </div>
              <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2070&auto=format&fit=crop" alt="Water" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <h2 id="3.8">3.8 – Cosa aspettarti in 48 ore</h2>
            <p>Se segui tutto: addome più piatto, meno tensione, digestione leggera e una sensazione di benessere reale. È qui che nasce la disciplina.</p>

            <h2 id="3.9">3.9 – Attenzione</h2>
            <p>Questa non è una dieta da fare per mesi. È un <strong>reset</strong>. Serve per sgonfiarti, ripulire e aumentare la motivazione per la strategia a lungo termine.</p>

            <div className="text-center mt-24 mb-12">
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "A volte non sei grasso. Sei solo infiammato. <br/>Togli l'infiammazione e la pancia cambia forma."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>
        {/* Chapter 4 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 4</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">Il Deficit Calorico Senza Fame</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Come perdere grasso senza pesare ogni chicco di riso</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="4.1">4.1 – La verità che nessuno dice</h2>
            <p>Il deficit calorico è obbligatorio. Non esiste perdita di grasso senza deficit. Ma esistono due modi di fare deficit:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 bg-red-50 border border-red-100 rounded-3xl">
                <div className="flex items-center gap-3 mb-4 text-red-600">
                  <XCircle className="w-6 h-6" />
                  <h4 className="font-bold text-xl">Metodo Sofferenza</h4>
                </div>
                <p className="text-red-800 text-sm">Taglio drastico, fame continua, ossessione per la bilancia e stress alle stelle.</p>
              </div>
              <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-3xl">
                <div className="flex items-center gap-3 mb-4 text-emerald-600">
                  <CheckCircle className="w-6 h-6" />
                  <h4 className="font-bold text-xl">Metodo Strategico</h4>
                </div>
                <p className="text-emerald-800 text-sm">Stesse calorie in meno… ma zero tortura. La differenza è psicologica e metabolica.</p>
              </div>
            </div>

            <h2 id="4.2">4.2 – Perché hai sempre fame quando “fai dieta”</h2>
            <p>Non è debolezza. È fisiologia. Quando tagli troppo, il corpo alza Grelina e Cortisolo. Il problema non sei tu, è il metodo.</p>

            <h2 id="4.3">4.3 – Le 5 Regole del Deficit Senza Fame 🔥</h2>
            
            <div className="space-y-8 my-12">
              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Scale className="text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">1. Deficit piccolo ma costante</h4>
                  <p className="text-zinc-600">Bastano 300–500 kcal al giorno. È lento, ma sostenibile. Il corpo non entra in modalità sopravvivenza.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Beef className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">2. Proteine alte = fame bassa</h4>
                  <p className="text-zinc-600">Target: 1,6 – 2,2 g per kg. La proteina è il tuo scudo anti-fame. Stabilizza la glicemia e preserva il muscolo.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-zinc-900 text-white rounded-3xl shadow-xl overflow-hidden relative">
                <div className="relative z-10 flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Utensils className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">3. Volume intelligente</h4>
                    <p className="text-zinc-400">Non mangiare meno cibo, mangia meno calorie. 400g di zucchine (80 kcal) riempiono più di 30g di cioccolato (160 kcal).</p>
                  </div>
                </div>
                <Activity className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5" />
              </div>

              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Zap className="text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">4. Carboidrati strategici</h4>
                  <p className="text-zinc-600">Non eliminarli. Usali post-allenamento e a cena per migliorare il sonno e ridurre il cortisolo.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Heart className="text-pink-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">5. Libertà controllata</h4>
                  <p className="text-zinc-600">Il 10-15% delle calorie per ciò che ami. Il cervello ha bisogno di libertà, non di prigione.</p>
                </div>
              </div>
            </div>

            <h2 id="4.4">4.4 – I Trucchi Psicologici Anti-Fame</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
              {[
                { icon: Timer, label: "Regola 20 min", desc: "L'impulso passa" },
                { icon: Droplets, label: "Idratazione", desc: "Sete ≠ Fame" },
                { icon: Smile, label: "Mangia Lento", desc: "Segnale Sazietà" },
                { icon: Moon, label: "Dormi", desc: "Brucia-grassi" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-zinc-50 rounded-2xl text-center border border-zinc-100">
                  <item.icon className="w-6 h-6 mx-auto mb-3 text-zinc-400" />
                  <p className="text-xs font-bold uppercase mb-1">{item.label}</p>
                  <p className="text-[10px] text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="4.5">4.5 – Esempio di Deficit Senza Soffrire</h2>
            <div className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden my-12 shadow-sm">
              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                    <span className="font-bold">Colazione</span>
                    <span className="text-zinc-500">Uova, pane integrale, frutta</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                    <span className="font-bold">Pranzo</span>
                    <span className="text-zinc-500">Riso basmati, pollo, verdure</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                    <span className="font-bold">Spuntino</span>
                    <span className="text-zinc-500">Yogurt greco, frutti rossi</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                    <span className="font-bold">Cena</span>
                    <span className="text-zinc-500">Pesce, patate, insalata</span>
                  </div>
                  <div className="flex justify-between items-center text-orange-600 font-bold">
                    <span>Extra</span>
                    <span>20g Cioccolato Fondente</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="4.6">4.6 – La Verità Finale</h2>
            <p>La pancia non scende con la sofferenza. Scende con la continuità.</p>

            <div className="text-center mt-24 mb-12">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">La Chiave del Successo</p>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "Non devi vincere oggi. <br/>Devi vincere ogni settimana."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>
        {/* Chapter 5 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 5</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">Allenamento “Turbo”</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Brucia grassi mentre dormi</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="5.1">5.1 – La bugia del “più sudi = più dimagrisci”</h2>
            <p>Molti credono che più sudore significhi più grasso bruciato. Non funziona così. Il grasso si brucia quando il corpo ha più richiesta energetica nel tempo e hai più massa muscolare attiva.</p>
            
            <div className="my-12 p-10 bg-zinc-900 text-white rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-2xl mb-6 font-serif italic">"L’allenamento non serve a bruciare calorie. Serve a costruire un corpo che le brucia da solo."</p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-orange-500 rounded-full text-xs font-bold uppercase">Metabolismo Basale</div>
                  <div className="px-4 py-2 bg-zinc-700 rounded-full text-xs font-bold uppercase">Massa Attiva</div>
                </div>
              </div>
              <Zap className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            </div>

            <h2 id="5.2">5.2 – Il principio chiave: più muscolo = più consumo</h2>
            <p>Ogni kg di muscolo è metabolicamente attivo. Più massa attiva significa maggiore dispendio a riposo e migliore gestione dei carboidrati.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl text-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-orange-600 w-5 h-5" />
                </div>
                <p className="font-bold">Dispendio a Riposo</p>
                <p className="text-xs text-zinc-500 mt-2">Consumi di più stando fermo.</p>
              </div>
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-blue-600 w-5 h-5" />
                </div>
                <p className="font-bold">Sensibilità Insulinica</p>
                <p className="text-xs text-zinc-500 mt-2">Gestisci meglio gli zuccheri.</p>
              </div>
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl text-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-emerald-600 w-5 h-5" />
                </div>
                <p className="font-bold">Meno Accumulo</p>
                <p className="text-xs text-zinc-500 mt-2">Riduci il grasso addominale.</p>
              </div>
            </div>

            <h2 id="5.3">5.3 – L’effetto “Afterburn” (EPOC)</h2>
            <p>Quando alleni grandi gruppi muscolari con intensità intelligente, il metabolismo resta elevato per ore dopo la fine della sessione.</p>

            <h2 id="5.4">5.4 – I 5 Esercizi Turbo 🔥</h2>
            <p>Non servono 20 esercizi. Questi cinque, se fatti bene, bastano a trasformare il tuo corpo.</p>

            <div className="space-y-6 my-12">
              {[
                { name: "Squat (o Leg Press)", target: "Gambe, Glutei, Core", desc: "Il re del metabolismo. Attiva i muscoli più grandi del corpo." },
                { name: "Stacco (o Romanian Deadlift)", target: "Catena Posteriore, Schiena", desc: "Costruisce struttura e aumenta drasticamente il consumo." },
                { name: "Trazioni o Lat Machine", target: "Dorsali, Bicipiti, Core", desc: "Una schiena forte è un motore metabolico potente." },
                { name: "Affondi Camminati", target: "Gambe, Stabilità", desc: "Aumentano la richiesta energetica senza stress eccessivo." },
                { name: "Rematore con Bilanciere", target: "Spessore Dorsale, Massa", desc: "Più dorsali significa più consumo calorico totale." }
              ].map((ex, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl hover:border-orange-500 transition-colors group">
                  <div className="w-12 h-12 bg-zinc-100 group-hover:bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 transition-colors">
                    <Dumbbell className="w-6 h-6 text-zinc-400 group-hover:text-orange-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold">{ex.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">{ex.target}</span>
                    </div>
                    <p className="text-zinc-600 text-sm">{ex.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="5.5">5.5 – La Struttura Turbo (40 minuti)</h2>
            <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-10 my-12">
              <div className="flex items-center gap-4 mb-8">
                <LayoutGrid className="text-orange-500 w-6 h-6" />
                <h4 className="text-2xl font-bold">Protocollo 3x Settimana</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                    <span className="font-medium">Squat</span>
                    <span className="font-mono text-orange-600">4 x 8</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                    <span className="font-medium">Stacco</span>
                    <span className="font-mono text-orange-600">3 x 8</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                    <span className="font-medium">Trazioni</span>
                    <span className="font-mono text-orange-600">4 x 6-8</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                    <span className="font-medium">Affondi</span>
                    <span className="font-mono text-orange-600">3 x 10</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                    <span className="font-medium">Rematore</span>
                    <span className="font-mono text-orange-600">3 x 8</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400 text-sm italic">
                    <span>Recupero</span>
                    <span>60–90 secondi</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="5.6">5.6 – Perché funziona anche se stai sul divano</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center my-16">
              <div className="flex-1">
                <p className="text-xl">Dopo un allenamento del genere, il corpo deve riparare, ricostruire e ripristinare le riserve. Questo richiede energia costante.</p>
                <p className="mt-6 font-bold text-orange-600 flex items-center gap-2">
                  <Armchair className="w-5 h-5" /> Consumi anche mentre guardi Netflix.
                </p>
              </div>
              <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop" alt="Rest and Recovery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <h2 id="5.7">5.7 – Meno Tempo, Più Risultato</h2>
            <p>In meno di 2 ore totali settimanali stimoli massa, metabolismo e postura. Il problema non è quanto tempo hai, ma come lo usi.</p>

            <h2 id="5.8">5.8 – Errore da evitare</h2>
            <p>Non trasformare l’allenamento turbo in cardio infinito. Non servono 40 minuti di addominali o 1 ora di tapis roulant. Serve progressione di forza.</p>

            <h2 id="5.9">5.9 – Collegamento con la Pancia</h2>
            <p>Quando aumenti massa nelle gambe e nella schiena, migliori l'assetto ormonale e riduci l'accumulo centrale. L’addome si scopre perché tutto il sistema lavora meglio.</p>

            <div className="text-center mt-24 mb-12">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">La Verità Finale</p>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "L’allenamento non serve a bruciare calorie. <br/>Serve a costruire un corpo che le brucia da solo."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>
        {/* Chapter 6 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 6</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">Gli Esercizi Posturali</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Per una pancia subito più piatta</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="6.1">6.1 – La verità che quasi nessuno considera</h2>
            <p>Guarda due persone con la stessa percentuale di grasso. Una è curva, l'altra è dritta. Sembrano due fisici diversi. La postura è biomeccanica, non magia.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-zinc-100 p-8 rounded-3xl border border-zinc-200 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <XCircle className="text-red-600 w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Postura Chiusa</h4>
                <p className="text-sm text-zinc-500">Bacino in avanti, addome rilassato. La pancia viene "spinta" in fuori.</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-emerald-600 w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Postura Attiva</h4>
                <p className="text-sm text-emerald-700">Petto aperto, addome attivo. Il corpo appare subito più atletico.</p>
              </div>
            </div>

            <h2 id="6.2">6.2 – Il problema: anterior pelvic tilt</h2>
            <p>Molti hanno il bacino ruotato in avanti. Risultato? La pancia sporge anche se sei magro. È un problema di struttura, non solo di grasso.</p>

            <h2 id="6.3">6.3 – L’addome non è solo muscolo visibile</h2>
            <p>Il <strong>Trasverso dell'Addome</strong> è il tuo corsetto naturale. Quando è forte, tiene dentro la pancia e stabilizza la colonna. Quando è debole, la pancia cade in avanti.</p>

            <div className="my-16 p-10 bg-zinc-950 text-white rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <Columns className="text-orange-500 w-8 h-8" />
                  <h4 className="text-2xl font-bold">Il Corsetto Naturale</h4>
                </div>
                <p className="text-xl text-zinc-400">Allenare il trasverso significa ridurre la circonferenza vita senza perdere peso. È pura estetica funzionale.</p>
              </div>
              <ShieldCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            </div>

            <h2 id="6.4">6.4 – Il Test Immediato</h2>
            <p>Prova ora: spalle indietro, petto aperto, attiva l'addome avvicinando l'ombelico alla colonna. Hai già un aspetto diverso. Questo è il potere della postura.</p>

            <h2 id="6.5">6.5 – I 5 Esercizi “Pancia Dentro” 🔥</h2>
            <p>Falli 10 minuti al giorno. Non servono pesi, serve consapevolezza.</p>

            <div className="space-y-6 my-12">
              {[
                { name: "Vacuum Addominale", icon: Wind, desc: "Espira e risucchia l'ombelico. L'esercizio n.1 per il trasverso." },
                { name: "Plank Attivo", icon: Activity, desc: "Spingi gli avambracci, contrai glutei e tira dentro l'addome." },
                { name: "Glute Bridge", icon: TrendingUp, desc: "Glutei forti stabilizzano il bacino e impediscono alla pancia di sporgere." },
                { name: "Dead Bug", icon: Anchor, desc: "Insegna al core a stabilizzare la colonna mentre muovi gli arti." },
                { name: "Wall Posture Reset", icon: UserCheck, desc: "Schiena al muro per 2 minuti. Riprogramma l'allineamento naturale." }
              ].map((ex, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0">
                    <ex.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{ex.name}</h4>
                    <p className="text-zinc-600 text-sm">{ex.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="6.6">6.6 – Effetto Estetico Immediato</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center my-16">
              <div className="flex-1">
                <p className="text-xl">Quando il trasverso è attivo e le spalle sono aperte, la vita sembra più stretta e la linea addominale più visibile. Senza perdere un grammo.</p>
                <p className="mt-6 font-bold text-blue-600 flex items-center gap-2">
                  <Maximize2 className="w-5 h-5" /> Il torace si apre, la pancia rientra.
                </p>
              </div>
              <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" alt="Posture and Yoga" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <h2 id="6.7">6.7 – Il Segreto che cambia tutto</h2>
            <p>Non devi "tirare la pancia" tutto il giorno. Devi allenare il corpo a stare così automaticamente. Diventa la tua nuova postura naturale.</p>

            <h2 id="6.8">6.8 – Collegamento con i Capitoli Precedenti</h2>
            <p>Alimentazione sgonfia + Deficit sostenibile + Allenamento turbo + Postura corretta. È il quarto pilastro invisibile della tua trasformazione.</p>

            <h2 id="6.9">6.9 – L’Errore da Evitare</h2>
            <p>Non confondere postura con rigidità. Devi essere allineato, respirare col diaframma e attivare il core in modo naturale. La postura è energia visiva.</p>

            <div className="text-center mt-24 mb-12">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">La Verità Finale</p>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "A volte non devi dimagrire. <br/>Devi solo raddrizzarti."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>
        {/* Chapter 7 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 7</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">La Tabella di Marcia</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">30 Giorni di Trasformazione Guidata</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="7.1">7.1 – Il potere del percorso guidato</h2>
            <p>La teoria è nulla senza l'esecuzione. In questo capitolo trasformiamo tutto quello che hai imparato in un piano d'azione quotidiano. Non devi pensare, devi solo agire.</p>
            
            <div className="my-16 rounded-[2.5rem] overflow-hidden relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop" 
                alt="Planning and Calendar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12 text-center">
                <p className="text-white text-3xl font-serif italic">"Un obiettivo senza un piano è solo un desiderio."</p>
              </div>
            </div>

            <h2 id="7.2">7.2 – La Struttura delle 4 Settimane</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
              {[
                { week: "Settimana 1", title: "Reset & Consapevolezza", icon: Sparkles, color: "bg-orange-50 text-orange-600" },
                { week: "Settimana 2", title: "Metabolismo & NEAT", icon: Activity, color: "bg-blue-50 text-blue-600" },
                { week: "Settimana 3", title: "Forza & Postura", icon: Dumbbell, color: "bg-emerald-50 text-emerald-600" },
                { week: "Settimana 4", title: "Ottimizzazione", icon: Trophy, color: "bg-purple-50 text-purple-600" }
              ].map((w, i) => (
                <div key={i} className="p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                  <div className={`w-10 h-10 ${w.color} rounded-xl flex items-center justify-center mb-4`}>
                    <w.icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold uppercase text-zinc-400 mb-1">{w.week}</p>
                  <h4 className="font-bold text-zinc-900">{w.title}</h4>
                </div>
              ))}
            </div>

            <h2 id="7.3">7.3 – Il Calendario dei 30 Giorni</h2>
            <div className="space-y-12 my-16">
              {/* Week 1 Detail */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <Calendar className="text-orange-500 w-8 h-8" />
                  <h4 className="text-3xl font-bold">Settimana 1: Il Reset</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Giorno 1: Inizia la lista 'Sgonfia-Tutto'. Bevi 3L acqua.",
                    "Giorno 2: Continua reset alimentare. Cammina 20 min.",
                    "Giorno 3: Primo test Vacuum (3 serie). 8.000 passi.",
                    "Giorno 4: Introduci deficit calorico (-300 kcal).",
                    "Giorno 5: Allenamento Forza A (Squat, Trazioni).",
                    "Giorno 6: Focus Postura: Wall Posture Reset 2 min.",
                    "Giorno 7: Recupero attivo: Passeggiata 40 min."
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-100">
                      <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold">{i+1}</div>
                      <p className="text-sm text-zinc-700">{task}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Week 2 Detail */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <Footprints className="text-blue-500 w-8 h-8" />
                  <h4 className="text-3xl font-bold">Settimana 2: Metabolismo</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Giorno 8: Target fisso: 10.000 passi ogni giorno.",
                    "Giorno 9: Allenamento Forza B (Stacco, Rematore).",
                    "Giorno 10: Zero bevande zuccherate. Solo acqua/tè.",
                    "Giorno 11: Vacuum + Plank Attivo (3 serie).",
                    "Giorno 12: Allenamento Forza A. Focus tecnica.",
                    "Giorno 13: NEAT estremo: usa solo le scale oggi.",
                    "Giorno 14: Check-point: foto e sensazione gonfiore."
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-100">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold">{i+8}</div>
                      <p className="text-sm text-zinc-700">{task}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Week 3 Detail */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <Dumbbell className="text-emerald-500 w-8 h-8" />
                  <h4 className="text-3xl font-bold">Settimana 3: Forza & Postura</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Giorno 15: Aumenta carico negli esercizi multiarticolari.",
                    "Giorno 16: Focus Proteine: 2g per kg di peso.",
                    "Giorno 17: Allenamento Forza B + Dead Bug.",
                    "Giorno 18: 12.000 passi. Cammina al telefono.",
                    "Giorno 19: Allenamento Forza A. Massima intensità.",
                    "Giorno 20: Postura: 3 sessioni di Vacuum al giorno.",
                    "Giorno 21: Sonno: dormi almeno 7.5 ore stanotte."
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-100">
                      <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold">{i+15}</div>
                      <p className="text-sm text-zinc-700">{task}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Week 4 Detail */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <Trophy className="text-purple-500 w-8 h-8" />
                  <h4 className="text-3xl font-bold">Settimana 4: Risultati</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Giorno 22: Mantieni deficit e volume intelligente.",
                    "Giorno 23: Allenamento Forza B. Supera i tuoi limiti.",
                    "Giorno 24: Idratazione costante: 3.5L acqua.",
                    "Giorno 25: Allenamento Forza A. Ultima spinta.",
                    "Giorno 26: Focus Postura: cammina 'alto' tutto il giorno.",
                    "Giorno 27: NEAT massimo: parcheggia lontano ovunque.",
                    "Giorno 28-30: Consolidamento e valutazione finale."
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-100">
                      <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold">{i+22}</div>
                      <p className="text-sm text-zinc-700">{task}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 id="7.4">7.4 – Il segreto della costanza</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center my-16">
              <div className="flex-1">
                <p className="text-xl">Non cercare la perfezione. Cerca la ripetizione. Se salti un giorno, non mollare. Riprendi dal giorno successivo. Il corpo risponde alla media dei tuoi comportamenti, non al singolo errore.</p>
                <div className="mt-8 p-6 bg-orange-50 rounded-3xl border border-orange-100">
                  <p className="text-orange-900 font-bold italic">"La disciplina è fare quello che devi, anche quando non ne hai voglia. È l'unico modo per vedere l'addome che meriti."</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" alt="Athlete consistency" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div className="text-center mt-24 mb-12">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">La Verità Finale</p>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "Non devi essere perfetto per 30 giorni. <br/>Devi solo essere migliore di ieri."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>
        {/* Chapter 8 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 8</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">Bevande e Integratori</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Cosa serve davvero (e cosa è solo marketing)</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="8.1">8.1 – Partiamo da una verità scomoda</h2>
            <p>Se la tua alimentazione è sbagliata, se non sei in deficit, se non ti alleni bene... nessun integratore ti salverà. Gli integratori si chiamano così perché <strong>integrano</strong>, non sostituiscono.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-zinc-100 p-8 rounded-3xl border border-zinc-200">
                <h4 className="font-bold mb-4 flex items-center gap-2 text-zinc-900">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" /> Prima sistema:
                </h4>
                <ul className="space-y-2 text-zinc-600 text-sm">
                  <li>✔ Passi & NEAT</li>
                  <li>✔ Allenamento Forza</li>
                  <li>✔ Deficit intelligente</li>
                  <li>✔ Postura & Sonno</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex items-center justify-center">
                <p className="text-orange-900 font-serif italic text-center text-lg">"L'integratore è la ciliegina sulla torta. Ma prima devi cuocere la torta."</p>
              </div>
            </div>

            <h2 id="8.2">8.2 – Le Bevande: Cosa Funziona Davvero</h2>
            <div className="space-y-8 my-12">
              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Coffee className="text-zinc-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Caffè</h4>
                  <p className="text-zinc-600 text-sm">Aumenta temporaneamente il metabolismo e riduce la fatica. Dose: 1-2 al giorno. Troppo aumenta il cortisolo.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Leaf className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Tè Verde</h4>
                  <p className="text-zinc-600 text-sm">Supporto lieve all'ossidazione dei grassi e leggero effetto drenante. Utile, ma non miracoloso.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-blue-50 border border-blue-100 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0">
                  <GlassWater className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-900">Acqua (L'arma segreta)</h4>
                  <p className="text-blue-800 text-sm">Target: 2,5–3 litri. Riduce la ritenzione, controlla la fame e ottimizza il metabolismo. Costa zero, funziona al 100%.</p>
                </div>
              </div>
            </div>

            <h2 id="8.3">8.3 – Gli Integratori: Soldi Buttati o Utili?</h2>
            <div className="overflow-x-auto my-12">
              <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200">
                <thead>
                  <tr className="bg-zinc-950 text-white">
                    <th className="p-6 text-left">Integratore</th>
                    <th className="p-6 text-left">Serve?</th>
                    <th className="p-6 text-left">Quando ha senso</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-600">
                  <tr className="border-b border-zinc-100">
                    <td className="p-6 font-bold">Brucia grassi</td>
                    <td className="p-6 text-red-500">❌ No</td>
                    <td className="p-6">Marketing puro</td>
                  </tr>
                  <tr className="border-b border-zinc-100 bg-zinc-50/50">
                    <td className="p-6 font-bold">Proteine polvere</td>
                    <td className="p-6 text-emerald-600">✔️ Sì</td>
                    <td className="p-6">Se non raggiungi quota proteica</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="p-6 font-bold">Creatina</td>
                    <td className="p-6 text-emerald-600">✔️ Sì</td>
                    <td className="p-6">Per forza e massa muscolare</td>
                  </tr>
                  <tr className="border-b border-zinc-100 bg-zinc-50/50">
                    <td className="p-6 font-bold">Omega 3</td>
                    <td className="p-6 text-emerald-600">✔️ Utile</td>
                    <td className="p-6">Se mangi poco pesce</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="8.4">8.4 – Parliamo chiaro sui “Brucia Grassi”</h2>
            <p>Molti spendono 40–60€ al mese per bruciare forse 50–100 calorie in più al giorno. Sai quant’è? Una mela. Risparmia quei soldi.</p>

            <h2 id="8.5">8.5 – I 3 Integratori che hanno senso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl text-center">
                <Pill className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Proteine</h4>
                <p className="text-xs text-zinc-500">Comodità e controllo fame.</p>
              </div>
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl text-center">
                <Zap className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Creatina</h4>
                <p className="text-xs text-zinc-500">Forza e volume muscolare.</p>
              </div>
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl text-center">
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Omega 3</h4>
                <p className="text-xs text-zinc-500">Salute e infiammazione.</p>
              </div>
            </div>

            <h2 id="8.6">8.6 – La Verità che Fa Risparmiare</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center my-16">
              <div className="flex-1">
                <p className="text-xl">Se hai 100€ da investire al mese, spendili in cibo di qualità e in un buon materasso. Il sonno è il brucia-grassi più potente che esista.</p>
                <p className="mt-6 font-bold text-emerald-600 flex items-center gap-2">
                  <Euro className="w-5 h-5" /> Investi nel cibo, non nelle pillole.
                </p>
              </div>
              <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" alt="Healthy Food" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <h2 id="8.7">8.7 – Cosa Bere Ogni Giorno (Semplice)</h2>
            <ul className="grid grid-cols-2 gap-4 my-8">
              <li className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Acqua</li>
              <li className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Caffè moderato</li>
              <li className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Tè verde</li>
              <li className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Tisane digestive</li>
            </ul>

            <div className="text-center mt-24 mb-12">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">La Regola Finale</p>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "Chiediti sempre: se smetto di prenderlo, ingrasso? <br/>Se la risposta è no, non era necessario."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>
        {/* Chapter 9 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 9</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">Gestire la Pizza e le Cene Fuori</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Dimagrisci senza smettere di vivere</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="9.1">9.1 – La dieta perfetta che nessuno riesce a seguire</h2>
            <p>Tagliare tutto funziona per 2 settimane. Poi arriva lo sgarro enorme e il senso di colpa. Il problema non è la pizza, è la mentalità "tutto o niente". Noi la eliminiamo oggi.</p>
            
            <div className="my-16 rounded-[2.5rem] overflow-hidden relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" 
                alt="Delicious Pizza" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-12 text-center">
                <p className="text-white text-3xl font-serif italic">"La costanza batte la rigidità. Sempre."</p>
              </div>
            </div>

            <h2 id="9.2">9.2 – La Regola dell’80/20 🔥</h2>
            <p>80% del tempo sei disciplinato, 20% vivi. Su 21 pasti settimanali, 4-5 possono essere flessibili. Non è sgarro, è strategia.</p>

            <h2 id="9.3">9.3 – Quanto “danno” fa davvero una pizza?</h2>
            <div className="bg-zinc-900 text-white p-10 rounded-[2.5rem] my-12 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6">La Matematica della Pizza</h4>
                <p className="text-zinc-400 text-lg">Una margherita ha circa 1000 kcal. Se il tuo deficit settimanale è 3000 kcal, una pizza ti lascia comunque con 2000 kcal di deficit. Non rovini nulla con una cena, la rovini se trasformi una cena in un weekend di abbuffate.</p>
              </div>
              <Pizza className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            </div>

            <h2 id="9.4">9.4 – Strategia Pizza Intelligente</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <p className="text-orange-500 font-bold text-xs uppercase mb-4">Durante il Giorno</p>
                <p className="text-sm text-zinc-600">Colazione proteica, pranzo leggero e tante verdure. Arriva a cena sazio, non affamato.</p>
              </div>
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <p className="text-orange-500 font-bold text-xs uppercase mb-4">A Cena</p>
                <p className="text-sm text-zinc-600">Scegli pizze semplici. Evita il mix 'antipasto + dolce + birra + amaro'. Goditi la pizza, non l'abbuffata.</p>
              </div>
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <p className="text-orange-500 font-bold text-xs uppercase mb-4">Il Giorno Dopo</p>
                <p className="text-sm text-zinc-600">Nessun digiuno punitivo. Torna semplicemente in carreggiata con il tuo piano abituale.</p>
              </div>
            </div>

            <h2 id="9.5">9.5 – Cene Fuori: Come Ordinare Senza Ansia</h2>
            <div className="overflow-x-auto my-12">
              <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200">
                <thead>
                  <tr className="bg-zinc-950 text-white">
                    <th className="p-6 text-left">Se vai...</th>
                    <th className="p-6 text-left">Scegli...</th>
                    <th className="p-6 text-left">Evita...</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-600">
                  <tr className="border-b border-zinc-100">
                    <td className="p-6 font-bold">Sushi</td>
                    <td className="p-6 text-emerald-600">Sashimi + riso semplice</td>
                    <td className="p-6 text-red-400">Fritti in tempura</td>
                  </tr>
                  <tr className="border-b border-zinc-100 bg-zinc-50/50">
                    <td className="p-6 font-bold">Pub</td>
                    <td className="p-6 text-emerald-600">Carne grigliata + patate</td>
                    <td className="p-6 text-red-400">Hamburger tripli + salse</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="p-6 font-bold">Ristorante</td>
                    <td className="p-6 text-emerald-600">Secondo + contorno</td>
                    <td className="p-6 text-red-400">Antipasto + primo + dolce</td>
                  </tr>
                  <tr className="border-b border-zinc-100 bg-zinc-50/50">
                    <td className="p-6 font-bold">Aperitivo</td>
                    <td className="p-6 text-emerald-600">1 drink + proteine</td>
                    <td className="p-6 text-red-400">Buffet libero infinito</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="9.6">9.6 – Il Vero Pericolo: “Tanto ormai…”</h2>
            <p>La frase più pericolosa è "Tanto ormai ho mangiato la pizza, tanto vale mangiare tutto". Ecco dove perdi i progressi. Non nella pizza, ma nel mental breakdown.</p>

            <h2 id="9.7">9.7 – Il Segreto Mentale dei Fisici Asciutti</h2>
            <p>Le persone in forma non sono perfette, sono costanti. Si godono la vita, ma non trasformano un pasto libero in un weekend libero. Hanno controllo, non ossessione.</p>

            <h2 id="9.8">9.8 – Libertà = Sostenibilità</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center my-16">
              <div className="flex-1">
                <p className="text-xl">Se una dieta non ti permette di festeggiare o andare a cena, è una prigione temporanea. Il nostro metodo è Struttura + Strategia + Libertà controllata.</p>
                <p className="mt-6 font-bold text-purple-600 flex items-center gap-2">
                  <PartyPopper className="w-5 h-5" /> Puoi farlo per anni, non per settimane.
                </p>
              </div>
              <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop" alt="Dining out" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div className="text-center mt-24 mb-12">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">La Verità Finale</p>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "La libertà non distrugge i risultati. <br/>L’assenza di strategia sì."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>
        {/* Chapter 10 Header */}
        <section className="mb-32 pt-32 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">Capitolo 10</h2>
            <h3 className="font-serif text-5xl md:text-6xl font-bold mb-6">Il Tuo Nuovo Te</h3>
            <p className="text-2xl italic text-zinc-500 font-serif">Come non tornare mai più indietro</p>
          </motion.div>

          <div className="markdown-body">
            <h2 id="10.1">10.1 – Il vero nemico non è il grasso</h2>
            <p>Il vero nemico è l’effetto yo-yo. Succede quando fai 8 settimane perfette, perdi peso, poi ti rilassi e torni alle vecchie abitudini. Non perché sei sfortunato, ma perché non hai cambiato identità. Hai fatto una dieta, non hai costruito uno stile di vita.</p>
            
            <div className="my-16 p-10 bg-zinc-950 text-white rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-3xl font-serif italic mb-6">"Non devi tornare come prima. Devi diventare una versione nuova."</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-orange-500 font-bold">
                    <User className="w-5 h-5" /> Nuova Identità
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 font-bold">
                    <Shield className="w-5 h-5" /> Standard Elevati
                  </div>
                </div>
              </div>
              <RefreshCw className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 animate-spin-slow" />
            </div>

            <h2 id="10.2">10.2 – Il Segreto: Diventa la persona che mantiene</h2>
            <p>Le persone che mantengono la pancia piatta non sono sempre a dieta. Hanno semplicemente degli standard. Mangiano bene e si allenano perché fa parte della loro identità, non per un periodo limitato.</p>

            <h2 id="10.3">10.3 – Le 5 Regole Anti Yo-Yo 🔥</h2>
            <div className="space-y-8 my-12">
              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                  <TrendingUp className="text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">1. Reverse Diet Leggera</h4>
                  <p className="text-zinc-600">Non tornare subito al surplus. Aumenta le calorie gradualmente (+100–150 kcal a settimana) per permettere al metabolismo di stabilizzarsi.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Anchor className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">2. Mantieni le Basi Minime</h4>
                  <p className="text-zinc-600">Anche nei periodi no, mantieni i pilastri: 8-10k passi, 2-3 allenamenti, proteine adeguate e regola 80/20. Finché restano i pilastri, il fisico resta.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Scale className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">3. Monitoraggio Senza Ossessione</h4>
                  <p className="text-zinc-600">Il peso è un indicatore, non un giudizio. Prevenire è più facile che recuperare 6 kg. Guarda la media settimanale e intervieni subito.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Smile className="text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">4. Accetta la Ciclicità</h4>
                  <p className="text-zinc-600">Non sarai sempre "tirato". Ci saranno periodi più pieni e più asciutti. L'obiettivo è la stabilità, non la perfezione da copertina 365 giorni l'anno.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
                  <AlertCircle className="text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">5. Manutenzione, non Emergenza</h4>
                  <p className="text-zinc-600">Quando i pantaloni stringono, non aspettare. Fai 2-3 settimane di mini-deficit leggero. Piccole correzioni evitano grandi regressioni.</p>
                </div>
              </div>
            </div>

            <h2 id="10.4">10.4 – La Mentalità che Ti Cambia per Sempre</h2>
            <p>Non dire più "Devo dimagrire". Dì "Mi alleno", "Mangio bene", "Mi muovo ogni giorno". Il linguaggio cambia la percezione, la percezione cambia l'identità, l'identità cambia i risultati.</p>

            <h2 id="10.5">10.5 – Il Corpo Ama la Stabilità</h2>
            <p>Il metabolismo non è il tuo nemico, odia solo gli estremi. Se sei costante, il corpo ti premia con un equilibrio duraturo.</p>

            <h2 id="10.6">10.6 – Il Vero Risultato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl">
                <h4 className="font-bold text-2xl mb-4">La Vittoria non è -6kg</h4>
                <p className="text-zinc-600">La vera vittoria è non riprenderli, sentirti leggero tutto l'anno e guardarti allo specchio con stabilità. La pancia piatta è una conseguenza, non un evento.</p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop" alt="Freedom and Results" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <h2 id="10.7">10.7 – Il Nuovo Te</h2>
            <p>Adesso hai tutto: strategia metabolica, alimentazione intelligente, allenamento efficiente e postura corretta. Non sei più quello che faceva addominali a caso. Sei una persona consapevole.</p>

            <div className="text-center mt-24 mb-12">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">Il Tuo Nuovo Standard</p>
              <p className="text-3xl md:text-4xl font-serif font-bold italic text-zinc-900 leading-tight">
                "La pancia piatta non è fortuna. È sistema. <br/>E un sistema, se lo mantieni, funziona per sempre."
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-8" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer / CTA */}
      <footer className="bg-zinc-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-4xl font-serif font-bold mb-8">Congratulazioni!</h4>
          <p className="text-zinc-400 mb-12 text-lg">Hai completato il percorso Addome 360. Ora la trasformazione è nelle tue mani.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-12 py-5 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Torna all'Inizio
            </button>
            <button className="px-12 py-5 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-colors">
              Scarica il PDF
            </button>
          </div>
          
          <div className="mt-32 pt-12 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8 text-zinc-500 text-sm">
            <p>© 2026 ADDOME 360 – VERSIONE PREMIUM</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Termini</a>
              <a href="#" className="hover:text-white transition-colors">Supporto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
