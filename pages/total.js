import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();
  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);
  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina={"Total y Confirmar Pedido"}>
      <h1 className="text-3xl font-black">Total</h1>
      <p className="text-xl my-6">Confirma tu pedido a continuación</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="bg-gray-100 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />
        </div>
        <div className="mt-10">
          <p>
            Total a pagar {""}{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800 cursor-pointer"
            } w-full lg:w-auto px-5 rounded py-2 uppercase font-bold text-white text-center`}
            value={"Confirmar Pedido"}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
