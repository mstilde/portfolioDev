"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title: "Habilidades",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Herramientas QA/SDET
                    <br /><span className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Selenium | Postman | Jmeter | Jenkins | Docker</span>
                </li>
                <li>Lenguajes
                <br /><span className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Java | JavaScript | Pascal | SQL | Kotlin</span>
                </li>
                <li>Herramientas de desarrollo
                    <br /><span className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>React | Next.js | Spring Boot | Angular | Tailwind CSS</span>
                </li>
                <li>Base de datos y plataformas
                    <br /><span className='text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>MySQL | Firebase</span>
                </li>
            </ul>
        )
    },
    {
        title: "Experiencia",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>MisGatos - WebApp para seguimiento de gastos<br /><span className='text-sm text-gray-400'>Proyecto para empresa privada (2025) | Stack: NEXT.js, Angular, Tailwind CSS, Firebase</span></li>
                <li>QA funcional freelance<br /><span className='text-sm text-gray-400'>Trabajo de crowdtesting para distintas plataformas (2023 - Actualidad)</span></li>
            </ul>
        )
    },
    {
        title: "Educación formal",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Analista Programador Universitario<br /><span className='text-sm text-gray-400'>Universidad Nacional de La Plata (2024 - Actualidad)</span></li>
                <li>Bootcamp Completo de QA<br /><span className='text-sm text-gray-400'>Argentina Programa 4.0 (2022)</span></li>
            </ul>
        )
    },
    {
        title: "Cursos",
        id: "courses",
        content: (
            <ul className='list-disc pl-2'>
                <li>UDEMY
                    <br /><span className='text-sm text-gray-400'>Postman: REST API Testing (2024) | Postman: The Ultimate MySQL Bootcamp (2024)</span>
                </li>
                <li>freeCodeCamp
                <br /><span className='text-sm text-gray-400'>Manipulación básica de DOM (2024) | Diseño Web & Algoritmos con Javascript (2024) | Manejo de librerías front-end (2025) | Visualización de datos con D3.js (2025)</span>
                </li>
                <li>The Linux Foundation
                    <br /><span className='text-sm text-gray-400'>Introducción a Jenkins + Uso de Docker en CI/CD (2024)</span>
                </li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending, startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

  return (
    <section className='text-white core-section' id='about'>
        <div className='md:grid md:grid-cols-2 gap-1 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image2.png" alt="about" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4'>SOBRE MI</h2>
                <p className='text-base lg:text-lg'>
                    Experimentado en QA y con experiencia en FullStack, me especializo en Selenium para automatización y NEXT.JS para el desarrollo.
                    Ando siempre en el insaciable e interminable proceso de aprendijaze y mejora en el rubro que amo.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        {" "}
                        Conocimientos{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("experience")}
                        active={tab === "experience"}
                    >
                        {" "}
                        Experiencia{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        {" "}
                        Educación Formal{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("courses")}
                        active={tab === "courses"}
                    >
                        {" "}
                        Cursos{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
