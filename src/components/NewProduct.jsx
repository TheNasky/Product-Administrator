import React, { useState } from "react";

import { useRouter } from "next/router";
import { ReactSortable } from "react-sortablejs";

const NewProduct = () => {
   const router = useRouter();
   const handleAddProduct = () => {
      router.push(`/products/new`);
   };

   return (
      <section className="pt-8 pb-6 bg-white rounded-3xl">
         <h1 className="text-3xl font-bold text-center">
            <span className="text-indigo-600 flex text-start p-4">Crear Nuevo Producto</span>
         </h1>
         <form className=" flex flex-col p-4">
            <label className="text-lg">Nombre</label>
            <input
               type="text"
               placeholder="Nombre"
               className="text-black p-2 rounded-lg text-lg border-2 border-gray-500 mb-4"
            />

            <div className="flex justify-between gap-6">
               <div className="w-full flex flex-col">
                  <label className="text-lg">Precio </label>
                  <input
                     type="number"
                     placeholder="Precio"
                     className="text-black p-2 rounded-lg text-lg border-2 border-gray-500 mb-4"
                  />
               </div>
               <div className="w-full flex flex-col">
                  <label className="text-lg">Categoría </label>
                  <input
                     type="text"
                     placeholder="Categoría"
                     className="text-black p-2 rounded-lg text-lg border-2 border-gray-500 mb-4"
                  />
               </div>
            </div>
            <div className="flex justify-between gap-6">
               <div className="w-full flex flex-col">
                  <label className="text-lg">Stock </label>
                  <input
                     type="number"
                     placeholder="Stock"
                     className="text-black p-2 rounded-lg text-lg border-2 border-gray-500 mb-4"
                  />
               </div>
               <div className="w-full flex flex-col">
                  <label className="text-lg">Vendidos</label>
                  <input
                     type="number"
                     placeholder="Vendidos"
                     className="text-black p-2 rounded-lg text-lg border-2 border-gray-500 mb-4"
                  />
               </div>
            </div>
            <div className="mb-2 flex flex-wrap gap-1">
               {/* <ReactSortable
                  list={images}
                  className="flex flex-wrap gap-1"
                  setList={updateImagesOrder}
               >
                  {!!images?.length &&
                     images.map((link) => (
                        <div
                           key={link}
                           className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
                        >
                           <img src={link} alt="" className="rounded-lg" />
                        </div>
                     ))}
               </ReactSortable> */}
               {/* {isUploading && (
                  <div className="h-24 flex items-center">
                     <Spinner />
                  </div>
               )} */}
               <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                     />
                  </svg>
                  <div>Subir Imagen</div>
                  <input type="file" className="hidden" />
               </label>
            </div>
            <div className="flex justify-end pr-8 mb-4">
               <button
                  onClick={handleAddProduct}
                  className="text-white bg-indigo-600 rounded-full px-6 py-4 text-lg mt-6 flex items-center hover:bg-indigo-500"
               >
                  Crear Producto
               </button>
            </div>
         </form>
      </section>
   );
};

export default NewProduct;
