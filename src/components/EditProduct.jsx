import React, { useState } from "react";
import Product from "./Product.jsx";

const Products = () => {
   const products = [
      {
         id: 1,
         img: "https://imgs.search.brave.com/hktdazit4BV6D43_5V8M0ONfsnaRLg8KC8ifOSG2_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qdW1i/b2FyZ2VudGluYWlv/LnZ0ZXhhc3NldHMu/Y29tL2FycXVpdm9z/L2lkcy83OTY1MjIt/NTAwLWF1dG8_dj02/MzgzMjEyNzc4NzE2/NzAwMDAmd2lkdGg9/NTAwJmhlaWdodD1h/dXRvJmFzcGVjdD10/cnVl",
         title: "pene de goma marca rupierasa 1231321 seoa sadk",
         stock: 10,
         sold: 2,
         price: 19.99,
         category: "Category A",
      },
      {
         id: 2,
         img: "https://imgs.search.brave.com/hktdazit4BV6D43_5V8M0ONfsnaRLg8KC8ifOSG2_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qdW1i/b2FyZ2VudGluYWlv/LnZ0ZXhhc3NldHMu/Y29tL2FycXVpdm9z/L2lkcy83OTY1MjIt/NTAwLWF1dG8_dj02/MzgzMjEyNzc4NzE2/NzAwMDAmd2lkdGg9/NTAwJmhlaWdodD1h/dXRvJmFzcGVjdD10/cnVl",
         title: "detergente cif",
         stock: 10,
         sold: 2,
         price: 12.99,
         category: "Category A",
      },
      {
         id: 3,
         img: "https://imgs.search.brave.com/hktdazit4BV6D43_5V8M0ONfsnaRLg8KC8ifOSG2_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qdW1i/b2FyZ2VudGluYWlv/LnZ0ZXhhc3NldHMu/Y29tL2FycXVpdm9z/L2lkcy83OTY1MjIt/NTAwLWF1dG8_dj02/MzgzMjEyNzc4NzE2/NzAwMDAmd2lkdGg9/NTAwJmhlaWdodD1h/dXRvJmFzcGVjdD10/cnVl",
         title: "detergente cif",
         stock: 10,
         sold: 2,
         price: 12.99,
         category: "Category A",
      },
      {
         id: 4,
         img: "https://imgs.search.brave.com/hktdazit4BV6D43_5V8M0ONfsnaRLg8KC8ifOSG2_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qdW1i/b2FyZ2VudGluYWlv/LnZ0ZXhhc3NldHMu/Y29tL2FycXVpdm9z/L2lkcy83OTY1MjIt/NTAwLWF1dG8_dj02/MzgzMjEyNzc4NzE2/NzAwMDAmd2lkdGg9/NTAwJmhlaWdodD1h/dXRvJmFzcGVjdD10/cnVl",
         title: "detergente cif",
         stock: 10,
         sold: 2,
         price: 12.99,
         category: "Category A",
      },
      {
         id: 2,
         img: "https://imgs.search.brave.com/hktdazit4BV6D43_5V8M0ONfsnaRLg8KC8ifOSG2_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qdW1i/b2FyZ2VudGluYWlv/LnZ0ZXhhc3NldHMu/Y29tL2FycXVpdm9z/L2lkcy83OTY1MjIt/NTAwLWF1dG8_dj02/MzgzMjEyNzc4NzE2/NzAwMDAmd2lkdGg9/NTAwJmhlaWdodD1h/dXRvJmFzcGVjdD10/cnVl",
         title: "detergente cif",
         stock: 10,
         sold: 2,
         price: 12.99,
         category: "Category A",
      },
      {
         id: 2,
         img: "https://imgs.search.brave.com/hktdazit4BV6D43_5V8M0ONfsnaRLg8KC8ifOSG2_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qdW1i/b2FyZ2VudGluYWlv/LnZ0ZXhhc3NldHMu/Y29tL2FycXVpdm9z/L2lkcy83OTY1MjIt/NTAwLWF1dG8_dj02/MzgzMjEyNzc4NzE2/NzAwMDAmd2lkdGg9/NTAwJmhlaWdodD1h/dXRvJmFzcGVjdD10/cnVl",
         title: "detergente cif",
         stock: 10,
         sold: 2,
         price: 12.99,
         category: "Category A",
      },
      // Add more products as needed
   ];

   return (
      <section className="pt-8 pb-6 bg-white rounded-3xl">
         <table className="w-full">
            <thead>
               <tr className="border-b-2 border-slate-300 text-black">
                  {/* <th style={{ width: "4%" }}>
                     <input type="checkbox" />
                  </th> */}
                  <th className="w-2/12">Producto</th>
                  <th className="w-1/12">Codigo</th>
                  <th className="w-1/12">Precio</th>
                  <th className="w-1/12">Categoria</th>
                  <th className="w-1/12">Stock</th>
                  <th className="w-1/12">Vendidos</th>
                  <th className="w-1/12">Acciones</th>
               </tr>
            </thead>
            <tbody>
               {products.map((product) => (
                  <Product
                     key={product.title}
                     id={product.id}
                     img={product.img}
                     producto={product.title}
                     stock={product.stock}
                     precio={`$${product.price}`}
                     categoria={product.category}
                     vendidos={product.sold}
                  />
               ))}
            </tbody>
         </table>
      </section>
   );
};

export default Products;
