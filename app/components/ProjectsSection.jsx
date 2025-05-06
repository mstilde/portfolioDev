"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { animate, motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "MisGastos",
        description: "App para el seguimiento de gastos desarrollado a encargo para una empresa privada. Basado Next.js, Angular, Tailwind CSS y Firebase.",
        imgUrl: "/images/proyecto-finance-tracker.png",
        tag: ["All", "Web"],
        gitUrl: "https://misgastos.vercel.app/",
    },
    {
        id: 2,
        title: "Portfolio QA",
        description: "Portfolio con proyectos personales de QA, con sus respectivos repositorios, explicaciones y gráficos. (En ingles).",
        imgUrl: "/images/proyecto-portfolioQA.png",
        tag: ["All", "QA"],
        gitUrl: "https://mstilde.github.io/portfolio/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
    <section ref={ref} id='projects' className='text-white core-section'>
        <h2 className='text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mt-10 mb-4'>
            MIS PROYECTOS
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
            /> 
            <ProjectTag
                onClick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
            /> 
            <ProjectTag
                onClick={handleTagChange}
                name="QA"
                isSelected={tag === "QA"}
            /> 
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.5, delay: index * 0.4 }}>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        gitUrl={project.gitUrl}
                    />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection
