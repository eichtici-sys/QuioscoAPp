import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "../components/ResumenProducto";

export default function Resumen() {
    const {pedido} = useQuiosco()
  return (
    <Layout pagina={'Resumen'}>
      <h1 className="text-3xl font-black sm:px-0 px-6 sm:text-start text-center">Resumen</h1>
      <p className="text-xl my-6 sm:px-0 px-6 sm:text-start text-center">Revisa tu pedido</p>
      {
        pedido.length === 0 ? (
            <p className="text-center text-2xl"> No hay elementos en tu pedido</p>
        ):(
            pedido.map(producto=>(
                <ResumenProducto
                    key={producto.id}
                    producto={producto}
                />
            ))
        )
      }
    </Layout>
  );
}
