import Image from "next/image"
import Layout from "../../components/layout"
import styles from '../../styles/guitarras.module.css'
import { useState } from "react"




export default function Producto({guitarra, agregarCarrito}) {

    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    const [cantidad, setCantidad] = useState(0)
    
    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1){
            alert('Cantidad no válida')
            return
        }
        
        // construir un objeto
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        
        alert('Añadido al carrito')
    
        // Pasando la información
        agregarCarrito(guitarraSeleccionada)
    }
  return (
    <Layout
        tittle={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>

            <Image src={imagen.data.attributes.url} width={200} height={100} alt={`Imagen de guitarra ${nombre}`}/>

            <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.contenido}> {descripcion} </p>
            <p className={styles.precio}> $ {precio} </p>



            <form className={styles.formulario}  onSubmit={handleSubmit}>

                <label htmlFor="cantidad">Cantidad:</label>
                <select 
                onChange={ e => setCantidad(+e.target.value)}
                id="cantidad"
                >
                    <option value='0'>--Seleccione--</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>

                <input
                    type="submit"
                    value='Agregar al carrito'
                
                />
            </form>
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticPaths () {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json()

    const paths = data.map(guitarra =>({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}){

    const respuesta = await fetch (`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data : guitarra} = await respuesta.json()

    return {
        props: {
            guitarra
        }
    }
}


// export async function getServerSideProps({query: {url}}){

//     const respuesta = await fetch (`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data : guitarra} = await respuesta.json()

//     return {
//         props: {
//             guitarra
//         }
//     }
// }