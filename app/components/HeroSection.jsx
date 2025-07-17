"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Hola, soy {""}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Matias Buttari',
                                1500,
                                'Web Developer',
                                1500,
                                'QA Tester',
                                1500,
                                'Android Developer',
                                1500,
                                ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADD7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Programando siempre en busca del desarrollo de soluciones eficientes.
                    </p>
                    <div>
                        <Link href="#contact"  className="px-1 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary to-secondary hover:bg-slate-800  text-white mt-3">
                            <span className="bg-[#121212] hover:bg-green-800 rounded-full px-5 py-3">¡Contactame!</span>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1Y28sH0ewTo47jc2MCcOR9blOob6GNig3/view?usp=sharing" target="_blank" className="px-1 py-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary to-secondary hover:bg-slate-800  text-white mt-3">
                            <span className="bg-[#121212] hover:bg-green-800 rounded-full px-5 py-3">Descarga mi CV</span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;