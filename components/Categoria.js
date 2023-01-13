import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { nombre, icono, id } = categoria;
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } w-full border p-2 sm:p-5 hover:bg-amber-400 hover:cursor-pointer sm:block `}
    >
      <button
        type="button"
        className="text-xl font-bold flex items-center gap-4 sm:px-0 px-3"
        onClick={() => handleClickCategoria(id)}
      >
        <Image
          width={55}
          height={55}
          src={`/assets/img/icono_${icono}.svg`}
          alt="Imagen Icono"
          className="w-[30px] h-[30px] sm:w-[55px] sm:h-[55px]"
        />
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
