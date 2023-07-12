import Link from "next/link"
import Layout from "../components/layout"

export default function Pagina404() {
  return (

   <Layout
    title="Página No Encontrada"
   >
    <p className="error"> Págino No Econtrada</p>

    <Link href='/' className="error-enlace">
        Ir a inicio

    </Link>

   </Layout>
  )
}
