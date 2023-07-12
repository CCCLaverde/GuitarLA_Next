import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'


export default function Nosotros() {
  return (
    <div>
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros GuitarLA'}>
         <main className="contenedor">

           <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>

            <Image src='/img/nosotros.jpg' alt='Imagen sobre nosotros' width={1000} height={800}/>

            <div>
              <p>
              ¡Bienvenido a GuitarLA!

              En GuitarLA, nos apasiona la música y nos enorgullece ofrecer una experiencia excepcional a todos los amantes de la guitarra. Nuestro objetivo es proporcionar un ambiente acogedor y educativo donde los músicos de todos los niveles puedan aprender, crecer y conectarse a través de la música.

              Con años de experiencia en la industria de la música, nuestros talentosos instructores son profesionales dedicados y apasionados que comparten su conocimiento y habilidades con entusiasmo. 
              </p>

              <p>
              Además de nuestras clases, GuitarLA es un lugar donde los músicos pueden conectar y compartir su amor por la música. Organizamos eventos, talleres y conciertos para fomentar la comunidad y brindar oportunidades para que los músicos muestren su talento y se inspiren mutuamente.

              Nuestra tienda cuenta con una selección cuidadosamente curada de guitarras, amplificadores, accesorios y equipos de calidad de las marcas más reconocidas. 

              </p>
            </div>

          </div>

         </main>
        </Layout>
    </div>
  )
}
