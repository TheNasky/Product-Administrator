import Button2 from "./Button2.jsx";

const Hero = () => {
   return (
      <section
         id="home"
         className={`flex md:flex-row flex-col  py-24 lg:pt-8 xl:pt-16 sm:pt-20 `}
      >
         <div
            className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
         >
            <div className="flex flex-col justify-between md:items-start items-center w-full ">
               <h1 className="flex-1 text-center md:text-start font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[75px] leading-[75px]">
                  We Make <br className="sm:block" />{" "}
                  <span className="text-gradient">Your Apps</span>{" "}
               </h1>

               <h1 className="font-poppins  font-semibold flex justify-center md:justify-start ss:text-[68px] text-[52px] text-white ss:leading-[75px] leading-[75px] w-full"></h1>
            </div>
            <div className="flex self-center md:self-start">
               <p
                  className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] sm:px-0 mt-5 hidden lg:block`}
               >
                  Unleashing Innovation, One Line at a Time
               </p>
            </div>
            <div className="mt-4  hidden lg:block">
               <Button2 styles={`mt-10 self-center sm:self-start`} />
            </div>
         </div>

         <div
            className={`flex-1 flex-col flex justify-center items-center md:my-0 my-10 relative`}
         >
            <div className="mt-4 lg:hidden">
               <Button2 styles={`mt-10 self-center sm:self-start`} />
            </div>
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
         </div>
      </section>
   );
};

export default Hero;
