import Image from "next/image";
import { Oxanium, Rubik } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Home() {
  return (
    <div
      className={`${oxanium.className} bg-[#0f1117] text-white scroll-smooth overflow-x-hidden`}
    >
      {/* HERO */}
      <section
        className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        bg-[url('/intro.svg')]
        bg-no-repeat
        bg-center
        bg-cover
      "
      >
        {/* Overlay mais suave */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-3xl">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-500 mb-6 mx-auto shadow-lg">
            <Image
              src="/foto.jpg"
              alt="Foto de perfil"
              width={112}
              height={112}
              priority
            />
          </div>

          <p className="text-zinc-300 mb-3 tracking-widest uppercase text-sm">
            Hello World! Meu nome é{" "}
            <span className="text-pink-400 font-semibold">
              Lívia Gonçalves
            </span>
          </p>

          <h1
            className={`${rubik.className} text-4xl md:text-6xl font-bold mb-6`}
          >
            Desenvolvedora Front-end
          </h1>

          <p className="max-w-2xl text-zinc-400 mb-12 mx-auto">
            Desenvolvo aplicações modernas com React, Next.js e React Native.
            Foco em performance, boas práticas e interfaces bem estruturadas.
          </p>

          {/* TECNOLOGIAS */}
          <div className="flex gap-8 flex-wrap justify-center mt-10">
            {[
              { name: "React", icon: "public/React.svg" },
              { name: "JavaScript", icon: "/JavaScript.svg" },
              { name: "HTML", icon: "/HTML.svg" },
              { name: "CSS", icon: "/CSS.svg" },
              { name: "Node.js", icon: "/Node.js.svg" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700 transition"
              >
                <Image
                  src={tech.icon}
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden
                />
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-20 animate-bounce text-zinc-400 text-2xl">
            ↓
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="py-24 bg-[#0d1117] px-6">
        <h2 className="text-center text-sm text-pink-400 mb-2 uppercase tracking-widest">
          Projetos
        </h2>

        <h3
          className={`${rubik.className} text-center text-3xl font-bold mb-16`}
        >
          Alguns trabalhos recentes
        </h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Dashboard Admin",
              desc: "Painel administrativo com autenticação e gráficos.",
            },
            {
              title: "Landing Page SaaS",
              desc: "Página moderna com foco em conversão.",
            },
            {
              title: "App Mobile",
              desc: "Aplicação desenvolvida com React Native.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-[#161b22] p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h4
                className={`${rubik.className} text-lg font-semibold mb-3`}
              >
                {project.title}
              </h4>
              <p className="text-zinc-400 text-sm">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 bg-[#0f1117] px-6">
        <h2 className="text-center text-sm text-pink-400 mb-2 uppercase tracking-widest">
          Meus serviços
        </h2>

        <h3
          className={`${rubik.className} text-center text-3xl font-bold mb-16`}
        >
          Como posso ajudar
        </h3>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Websites",
              desc: "Interfaces modernas e responsivas.",
            },
            {
              title: "APIs",
              desc: "Integrações e consumo de serviços.",
            },
            {
              title: "Mobile",
              desc: "Aplicações com React Native.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-[#161b22] p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center"
            >
              <h4
                className={`${rubik.className} font-semibold mb-3`}
              >
                {service.title}
              </h4>
              <p className="text-zinc-400 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section
        className="
          relative
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          bg-[url('/intro.svg')]
          bg-no-repeat
          bg-center
          bg-cover
        "
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <h2 className="text-sm text-pink-400 mb-2 uppercase tracking-widest">
            Contato
          </h2>

          <h3
            className={`${rubik.className} text-3xl font-bold mb-5`}
          >
            Gostou do meu trabalho?
          </h3>

          <p className="max-w-2xl text-zinc-400 mb-8 mx-auto">
            Entre em contato ou me acompanhe nas redes sociais
          </p>

          <div className="max-w-md mx-auto space-y-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="block bg-[#161b22] p-4 rounded-xl hover:bg-zinc-800 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="block bg-[#161b22] p-4 rounded-xl hover:bg-zinc-800 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:seuemail@email.com"
              className="block bg-[#161b22] p-4 rounded-xl hover:bg-zinc-800 transition"
            >
              E-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}