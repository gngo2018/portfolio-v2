import Link from 'next/link';
import { useState } from 'react';
import projectStyles from './projects.module.css'

export default function Projects() {
    const [personalIsOpen, setPersonalIsOpen] = useState(true);
    const [professionalIsOpen, setProfessionalIsOpen] = useState(false);

    const personalProjects = [
        { id: 1, name: 'Stringify', url: 'https://stringify.vercel.app/', target: '_blank' },
        { id: 2, name: 'G3 Sports', url: 'https://g3-sports.vercel.app/', target: '_blank' },
        { id: 3, name: 'Codepen Creature', url: 'https://codepen.io/gngo18/full/qJwJyO/', target: '_blank' },
        { id: 4, name: 'Static Storefront', url: 'https://gngo2018.github.io/TheSkyZone/', target: '_blank' }
    ]

    const professionalProjects = [
        { id: 1, name: 'Ace Rent a Car', url: 'https://www.acerentacar.com/', target: '_blank'},
        { id: 2, name: 'RezPower', url: '', target: '' },
        { id: 3, name: 'Armada', url: '', target: '' }
    ]

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
                                <div className={projectStyles.card}>
                                    {p.name}
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
                                <div className={projectStyles.card}>
                                    {p.name}
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