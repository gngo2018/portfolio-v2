import hobbiesStyles from './hobbies.module.css'

export default function Hobbies() {
    const hobbies = [
        { id: 1, name: 'Tennis' },
        { id: 2, name: 'Golf' },
        { id: 3, name: 'Coding' },
        { id: 4, name: 'Music' },
        { id: 5, name: 'Outdoors' },
    ]

    return (
        <section>
            <div className={hobbiesStyles.grid}>
                {hobbies.map((h) => {
                    return (
                        <div key={h.id} className={hobbiesStyles.card}>
                            {h.name}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}