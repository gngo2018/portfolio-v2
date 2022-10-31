import projectStyles from './projects.module.css'

export default function Projects(){
    const projects = [
        { id: 1, name: 'Stringify' },
        { id: 2, name: 'G3 Sports' },
        { id: 3, name: 'Codepen Creature' },
        { id: 4, name: 'Static Storefront' }
    ]

    return (
        <section>
            <div className={projectStyles.grid}>
                {projects.map((p) => {
                    return (
                        <div key={p.id} className={projectStyles.card}>
                            {p.name}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}