import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Total", url: "/total" },
];
const Pasos = () => {
  const router = useRouter();
  const calcularProgreso = () => {
    let valor;
    if (router.pathname === "/") {
      valor = 2;
    } else if (router.pathname === "/resumen") {
      valor = 50;
    } else {
      valor = 100;
    }
    return valor;
  };

  return (
    <>
      <div className="sticky top-[-1px] bg-white sm:pt-10 pt-3 sm:px-0 px-6  sm:pb-3 pb-2">
        <div className="grid grid-cols-3 sm:flex sm:justify-between mb-5">
          {pasos.map((paso) => (
            <button
              key={paso.paso}
              className="text-md sm:text-xl font-bold uppercase"
              onClick={() => {
                router.push(paso.url);
              }}
            >
              {paso.nombre}
            </button>
          ))}
        </div>
        <div className="bg-gray-100 ">
          <div
            className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
            style={{ width: `${calcularProgreso()}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Pasos;
