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
  ArrowDown
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
            <p>Nei prossimi capitoli smonteremo le false credenze e costruiremo una strategia reale. La motivazione finisce. <strong>Il sistema resta.</strong></p>

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
      </main>

      {/* Footer / CTA */}
      <footer className="bg-zinc-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-4xl font-serif font-bold mb-8">Pronto per il Capitolo 2?</h4>
          <p className="text-zinc-400 mb-12 text-lg">Entreremo nel dettaglio tecnico dell'alimentazione strategica.</p>
          <button className="px-12 py-5 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
            Sblocca Capitolo 2
          </button>
          
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
