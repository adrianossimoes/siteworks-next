import Container from "@/components/ui/Container";
const items=[
"Processos manuais que atrasam o negócio",
"Sistemas que não conversam entre si",
"Aplicações legadas difíceis de evoluir"
];
export default function Challenges(){
return(
<section id="desafios" className="py-24 border-t border-white/10">
<Container>
<h2 className="text-3xl font-semibold mb-10">Desafios que encontramos todos os dias.</h2>
<div className="grid gap-6 md:grid-cols-3">
{items.map(i=><div key={i} className="rounded-2xl border border-white/10 p-6 text-zinc-300">{i}</div>)}
</div>
</Container>
</section>);
}