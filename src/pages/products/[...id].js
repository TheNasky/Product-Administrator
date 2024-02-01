import { Inter } from "next/font/google";
import Products from "../../components/Products.jsx";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <div className="w-full overflow-hidden">
         <div className={"sm:px-16 px-6 flex justify-center items-center"}>
            <div className={"xl:max-w-[1280px] w-full"}>
            </div>
         </div>

         <div className={"flex justify-center items-start"}>
            <div className={"xl:max-w-[1280px] w-full"}>
               <Products />
            </div>
         </div>

         {/* <div className={"bg-primary sm:px-16 px-6 flex justify-center items-center"}>
            <div className="xl:max-w-[1280px] w-full">
               <Footer />
            </div>
         </div> */}
      </div>
   );
}
