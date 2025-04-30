"use client";
import React, { useState } from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from 'next/image';


const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/email";
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if (response.status === 200) {
            console.log('Mensaje enviado.');
            setEmailSubmitted(true);
        }
    }
    return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className='z-10'>
            <h5 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-4 my-2'>CONTACTAME</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                Estoy siempre abierto a nuevas oportunidades, proyectos, colaboraciones sobre tecnología, desarrollo y calidad de software. Podés escribirme a través del formulario.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/mstilde" target="_blank">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label
                        htmlFor="email"
                        className='text-white block mb-2 text-sm font-medium' type="email"
                    >
                        Tu email
                    </label>
                    <input 
                        name='email' 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        type="email"
                        id='email'
                        required 
                        placeholder='ejemplo@gmail.com'
                    />
                </div>
                <div className='mb-6'>
                    <label className='text-white block mb-2 text-sm font-medium' htmlFor="subject">Asunto</label>
                    <input name='subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type="text" id='subject' required placeholder='¡Hola! ¿Cómo estas?' />
                </div>
                <div className='mb-6'>
                    <label className='text-white block mb-2 text-sm font-medium' htmlFor="message">Mensaje</label>
                    <textarea
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='¡Hola! Hablemos...'
                    />
                </div>
                <button
                    type='submit'
                    className='text-black font-bold px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary to-secondary hover:bg-slate-900 text-gray-900'
                >
                    Enviar
                </button>
                {
                    emailSubmitted && (
                        <p className='text-primary text-sm mt-2'>
                            Email enviado con exito
                        </p>
                    )
                }
            </form>
        </div>
    </section>
    )
}

export default EmailSection
