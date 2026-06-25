import Container from "@/components/ui/Container";
export default function Header(){
return(
<header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
<Container>
<div className="flex h-16 items-center justify-between">
<div className="font-semibold tracking-wide">SITEWORKS</div>
<nav className="hidden gap-8 text-sm md:flex">
<a href="#desafios">Desafios</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a>
</nav>
<a href="#contato" className="rounded-full bg-blue-600 px-5 py-2 text-sm">Vamos conversar</a>
</div>
</Container>
</header>);
}