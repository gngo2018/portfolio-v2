import Image from 'next/legacy/image'
import { GetAllExperiences } from '../../services/ExperienceService'
import experienceStyles from './experience.module.css'

export default function Experience() {
    const experiences = GetAllExperiences();

    return (
        <section className={experienceStyles.wrapper}>
            <h1>Education and Experience</h1>
            <div className={experienceStyles.container}>
                {experiences.map((e) => {
                    return (
                        <div key={e.id} className={experienceStyles.experience_flex_item}>
                            <div className={experienceStyles.image_container}>
                                <Image
                                    src={e.imageUrl}
                                    alt='image'
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                            <div className={experienceStyles.experience_description}>
                                <div className={experienceStyles.experience_title_container}>
                                    <h3>{e.title}</h3>
                                    <span>{e.dateRange}</span>
                                </div>
                                <p>{e.description}</p>
                            </div>
                            <div className={experienceStyles.link_container}>
                                <a href={e.link} target='_blank' rel="noreferrer">{e.linkName}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}