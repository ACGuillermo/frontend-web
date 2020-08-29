import HomeLayout from 'layouts/HomeLayout'
import ConsoleCard from 'components/consoleCard/ConsoleCard'
import Projects from 'components/projects/Projects'
import Contact from 'components/contact/Contact'

export default function Home() {
  return (
    <HomeLayout>
      <section id="presentation" className="text-2xl lg:text-3xl text-gray-800">
        <h1>
          Hola, soy
          <br/> 
          <span className="text-indigo-400 font-bold">Guillermo Aguilar,</span>
          <br/>
          Full Stack Developer.
        </h1>
        <p className="mt-8 text-lg">Mi pasión es programar, cómo, dónde y cuándo sea.</p>
        <p className="text-lg mt-2">Échale un ojo a mis <span className="text-indigo-400 font-bold">proyectos personales</span></p>
      </section>

      <ConsoleCard />

      <Projects />

      <Contact />

    </HomeLayout>
  )
}
