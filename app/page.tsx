import Image from 'next/image'
import Inicio from '../app/components/Inicio'
import Header from './components/Header'
import Seccion1 from './components/seccion_1/Seccion1'
import Seccion2 from './components/seccion_2/Seccion2'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <>
    <section className="" id="header">
      <Header />
    </section>

    <section className="" id="inicio">
        <Inicio />
      </section>

      <section className="" id="seccion1">
        <Seccion1 />
      </section>

      <section className="" id="seccion2">
        <Seccion2 />
      </section>

      <section className="" id="contact">
        <Contact />
      </section>

      <section className="" id="footer">
        <Footer />
      </section>
    </>
  )
}
