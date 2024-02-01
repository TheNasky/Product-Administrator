import React, { useState } from "react";
import { useRouter } from "next/router";

const Product = ({ img, producto, stock, precio, categoria, id, vendidos, onSelect }) => {
   const router = useRouter();

   const handleEditClick = () => {
      router.push(`/products/edit/${id}`);
   };
   const handleDeleteClick = () => {
      router.push(`/api/products/delete/${id}`);
   };

   return (
      <tr className="border-b-2 border-slate-300 h-12 text-gray-700">
         {/* <td className="flex-row items-center text-center py-4">
            <input type="checkbox" />
         </td> */}
         <td className="flex items-center py-4 pl-4">
            <div className="p-2 bg-gray-200 rounded-lg">
               <img
                  src={img}
                  alt={producto}
                  className="rounded-lg"
                  style={{ width: "50px", height: "50px" }}
               />
            </div>

            <div
               className="pl-2"
               style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  whiteSpace: "normal",
                  maxWidth: "200px",
               }}
            >
               {producto}
            </div>
         </td>
         <td className="flex-row items-center text-center py-4 text-sky-500">{id}</td>
         <td className="flex-row items-center text-center py-4">{precio}</td>
         <td className="flex-row items-center text-center py-4">{categoria}</td>
         <td className="flex-row items-center text-center py-4">{stock}</td>
         <td className="flex-row items-center text-center py-4">{vendidos}</td>
         <td className="flex-row items-center text-center py-4">
            <button className="p-1.5 mx-1 border-gray-500 border-2 rounded-lg hover:border-[#008000]" onClick={handleEditClick}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#008000"
                  className="w-6 h-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
               </svg>
            </button>
            <button className="p-1.5 mx-1 border-gray-500 border-2 rounded-lg hover:border-[#ff0000]" onClick={handleDeleteClick}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#FF0000"
                  className="w-6 h-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
               </svg>
            </button>
         </td>
      </tr>
   );
};

export default Product;
