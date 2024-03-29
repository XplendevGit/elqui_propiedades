"use client"
import { RxCaretLeft } from "react-icons/rx";
import React, { useEffect, useState } from 'react';
import { getCasa } from '@/sanity/sanity-utils';

import Styles from './casa.module.css'
import Link from "next/link";

import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineAreaChart } from "react-icons/ai";
import { motion } from "framer-motion";


import Image from "next/image";
import { CasasS } from "@/types/CasasS";
import SwiperCasa from "@/app/components/SwiperCasa";

type Props = {
    params: { casa: string };
};

function Casas({ params }: Props) {
    const [casa, setCasa] = useState<CasasS | null>(null);

    useEffect(() => {
        const fetchCasa = async () => {
            const slug = params.casa;
            console.log(slug);

            if (!slug) {
                console.error('Invalid slug');
                return;
            }

            try {
                const fetchedCasa = await getCasa(slug);
                setCasa(fetchedCasa);
            } catch (error) {
                console.error('Error fetching casa:', error);
            }
        };

        fetchCasa();
    }, [params.casa]);

    if (!casa) {
        return (
          
            <div className=" h-screen w-full flex justify-center items-center bg-white">

            <Image
              className={"w-[150px] h-[150px]"}
              width={125}
              height={85}
              src="https://i.postimg.cc/ZR1gbyZ3/loading.png"
              alt="loading"
              >
            </Image>
            
            </div>
        )
    }

    return (
        <div className="w-full h-screen flex flex-col bg-white relative">

            <motion.div 
            className="absolute bg-black w-full h-[80px] flex"
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1.2, y: 0 }}
            transition={{ duration: 0.7, ease: [0.6, 0.05, 0.5, 0.95] }}
            >

            <motion.div 
            className="w-full h-auto flex justify-center">

            <Link href={""}>
            <motion.img 
              className="p-2 h-[75px] w-auto flex cursor-pointer"
              src={"https://i.postimg.cc/Y0vfMVvR/logo-elquipropiedades.png"} 
              alt={"Elqui Propiedades"} 
              >
              </motion.img>
            </Link>


            </motion.div>


            </motion.div>



            <motion.div 
            className={`w-full h-full lg:p-24 md:p-10 p-4 flex justify-center text-center lg:text-start lg:justify-start ${Styles['contenedor-pageCasas']}` }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1.2 }}
            transition={{ duration: 0.7, ease: [0.6, 0.05, 0.5, 0.95] }}
            >

             <div className={`flex flex-col lg:p-12 md:p-8 p-4 relative w-full h-full ${Styles['pageCasas-1']}` }>

                <div className="w-full h-auto text-black font-anton xl:text-4xl lg:text-3xl md:text-2xl text-xl">
                     {casa.nombre}
                </div>


                <div className="w-full h-full lg:pt-8 md:pt-4 pt-2 text-black font-oswald xl:text-2xl lg:text-xl md:text-lg text-lg space-y-4">

                    <h1 className="">
                    {casa.descripcion}
                    </h1>

                  <div className="w-auto h-auto">
                   <Link href={`https://wa.me/994661560?text=Hola!%20necesito%20información%20respecto%20al%20terreno:%20${casa.nombre}`}>
                   <h1 className="font-kanit hover:text-blue-400 cursor-pointer">
                    Agendar una Visita ⟶
                    </h1>
                   </Link>
                 </div>

                    
                 </div>

             

             </div>
             
             <div className={`w-full xl:max-h-[550px] lg:max-h-[450px] max-h-[300px] flex ${Styles['pageCasas-2']}` }>
                  <SwiperCasa slug={params.casa}/>
            </div>

             <div className={`w-full h-full ${Styles['pageCasas-3']}` }>

                <div className="w-full h-full flex flex-wrap items-center justify-evenly">

                <motion.div 
                className="w-auto h-auto flex space-x-4 no-select"
                whileHover={{ scale: 1.05 }}
                >
                 <FaMoneyCheckAlt className="w-[50px] h-[50px] text-black">

                   </FaMoneyCheckAlt>

                   <div className="w-auto h-auto flex items-center">

                     <h1 className="text-black font-oswald xl:text-2xl lg:text-xl md:text-lg text-lg">
                        {casa.valor}
                     </h1>

                   </div>

                  </motion.div>

                  <motion.div 
                  className="w-auto h-auto flex space-x-4 no-select"
                  whileHover={{ scale: 1.05 }}
                  >
                 <IoLocationSharp className="w-[50px] h-[50px] text-black">

                   </IoLocationSharp>

                   <div className="w-auto h-auto flex items-center">

                    <Link href={casa?.ubicacionEnlace || '#'}>
                    <h1 className="text-black font-oswald xl:text-2xl lg:text-xl md:text-lg text-lg hover:border-b-2 hover:border-b-blue-400 hover:text-blue-400">
                        {casa.ubicacion}
                     </h1>
                    </Link>


                   </div>

                  </motion.div>

                  <motion.div 
                  className="w-auto h-auto flex space-x-4 no-select"
                  whileHover={{ scale: 1.05 }}
                  >
                    
                 <AiOutlineAreaChart className="w-[50px] h-[50px] text-black">

                   </AiOutlineAreaChart>

                   <div className="w-auto h-auto flex items-center">

                     <h1 className="text-black font-oswald xl:text-2xl lg:text-xl md:text-lg text-lg">
                        {casa.metrosCuadrados}
                     </h1>

                   </div>

                  </motion.div>

                </div>



             </div>

             <div className={`w-full h-full ${Styles['pageCasas-4']}` }>
                 
                 <motion.div 
                 className="w-[70px] h-auto"
                 whileHover={{ x: -3 }}
                 >
                    <Link href={"http://localhost:3000/"} >
                   <RxCaretLeft className="w-[70px] h-[70px] cursor-pointer text-black hover:text-blue-400">

                   </RxCaretLeft>
                   </Link>
                 </motion.div>

             </div>

            </motion.div>
            
        </div>
    );
}

export default Casas;
