import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GetAllPersonalProjects, GetAllProfessionalProjects } from '../../services/ProjectService'
import projectStyles from './projects.module.css'

export default function Projects() {
    const [personalIsOpen, setPersonalIsOpen] = useState(true);
    const [professionalIsOpen, setProfessionalIsOpen] = useState(false);
    const personalProjects = GetAllPersonalProjects();
    const professionalProjects = GetAllProfessionalProjects();

    const toggleHeaderSelection = (e: any) => {
        const value = e.target.outerText;
        if (value === 'Professional') {
            setPersonalIsOpen(false);
            setProfessionalIsOpen(true);
        }
        else {
            setPersonalIsOpen(true);
            setProfessionalIsOpen(false);
        }
    }

    return (
        <section>
            <div className={projectStyles.header_container}>
                <span className={personalIsOpen ? 'is-active' : ''} onClick={(e) => toggleHeaderSelection(e)}>Personal</span>
                <span className={professionalIsOpen ? 'is-active' : ''} onClick={(e) => toggleHeaderSelection(e)}>Professional</span>
            </div>
            {personalIsOpen && (
                <div className={projectStyles.grid}>
                    {personalProjects.map((p) => {
                        return (
                            <Link key={p.id} href={p.url} target={p.target} rel="noreferrer">
                                <div className={projectStyles.project_name}>{p.name}</div>
                                <div className={projectStyles.image}>
                                    <Image
                                        src={p.imageLink!}
                                        alt='Image not found'
                                        fill
                                    />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
            {professionalIsOpen && (
                <div className={projectStyles.grid}>
                    {professionalProjects.map((p) => {
                        return (
                            <Link key={p.id} href={p.url} target={p.target} rel="noreferrer">
                                <div className={projectStyles.project_name}>{p.name}</div>
                                <div className={projectStyles.image}>
                                    <Image
                                        src={p.imageLink!}
                                        alt='Image not found'
                                        fill
                                    />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}

            <style jsx>
                {`
                    .is-active{
                        font-weight:bold;
                    }
                `}
            </style>
        </section>
    )
}