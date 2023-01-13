import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import { useState } from "react";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Image
        width={180}
        height={80}
        src="/assets/img/logo.svg"
        alt="Imagen logotipo"
        className="sm:mx-auto p-2 sm:w-[200px] sm:h-[120px] w-[180px] h-[100px]"
      />
      <nav className="hidden mt-10 overflow-x-scroll sm:overflow-x-hidden sm:flex sm:flex-col ">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
      <div className="sm:hidden flex flex-1 justify-end items-center relative">
        <div onClick={() => setToggle((prev) => !prev)} className="p-8">
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <div
          className={`${
            toggle ? "block" : "hidden"
          } absolute top-[100px] right-2 border shadow bg-white z-50`}
        >
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
