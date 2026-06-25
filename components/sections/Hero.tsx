'use client';
import {motion} from "framer-motion";
import Container from "@/components/ui/Container";
import {hero} from "@/content/hero";
export default function Hero(){
return(
<section className="py-32">
<Container>
<motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="max-w-4xl">
<p className="mb-4 text-sm uppercase tracking-[0.25em] text-blue-400">{hero.eyebrow}</p>
<h1 className="text-5xl font-bold leading-tight md:text-7xl">{hero.title}</h1>
<p className="mt-8 max-w-2xl text-lg text-zinc-400">{hero.subtitle}</p>
<div className="mt-10 flex flex-wrap gap-4">
<a className="rounded-full bg-blue-600 px-6 py-3" href="#servicos">Conheça nossos serviços</a>
<a className="rounded-full border border-white/15 px-6 py-3" href="#contato">Fale conosco</a>
</div>
</motion.div>
</Container>
</section>);
}