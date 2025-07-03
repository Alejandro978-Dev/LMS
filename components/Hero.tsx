import { Button } from "./ui/button";


export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Conviérte en <br/>
            un Desarrollador {" "}
            <span className="bg-gradient bg-gradient-to-r from-[#00ff0d] to-[#a0ee95] bg-clip-text text-transparent">
                Full Stack
            </span>
            <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
                Aprende todo lo relacionado con el desarrollo de software y sus nuevas tecnologias gracias a la nueva plataforma ADSO
                </p>
                <div className="flex flex-col gap-10 pt-5 sm:flex-row md:justify-center">
                    <Button className="bg-gradient bg-gradient-to-r from-[#00ff0d] to-[#a0ee95] text-black hover:bg-gradient-to-l hover:from-[#a0ee95] hover:to-[#00ff0d] text-lg">
                        Ver Cursos
                    </Button>
                </div>
        </h1>
    </section>
  );
}