import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "../components/ResumenProducto";

export default function Resumen() {
    const {pedido} = useQuiosco()
  return (
    <Layout pagina={'Resumen'}>
      <h1 className="text-3xl font-black">Resumen</h1>
      <p className="text-xl my-6">Revisa tu pedido</p>
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
