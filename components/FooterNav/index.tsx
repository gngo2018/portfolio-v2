import { useContentContext } from '../../contexts/ContentContext';
import footerStyles from './footer.module.css'

export default function FooterNav(){
    const contentContext = useContentContext();

    const handleSpanOnClick = (e: any) => {
        const value = e.target.innerHTML
        if (value === 'Experience') {
            contentContext.setHomeIsOpen(false);
            contentContext.setExperienceIsOpen(true);
            contentContext.setHobbiesIsOpen(false);
            contentContext.setProjectsIsOpen(false)
        }
        else if (value === 'Projects') {
            contentContext.setHomeIsOpen(false);
            contentContext.setExperienceIsOpen(false);
            contentContext.setHobbiesIsOpen(false);
            contentContext.setProjectsIsOpen(true)
        }
        else if (value === 'About Me') {
            contentContext.setHomeIsOpen(false);
            contentContext.setExperienceIsOpen(false);
            contentContext.setHobbiesIsOpen(true);
            contentContext.setProjectsIsOpen(false)
        }
        else {
            contentContext.setHomeIsOpen(true);
            contentContext.setExperienceIsOpen(false);
            contentContext.setHobbiesIsOpen(false);
            contentContext.setProjectsIsOpen(false)
        }
    }

    return (
        <footer className={footerStyles.container}>
            <span className={contentContext.experienceIsOpen ? 'active' : ''} onClick={(e) => handleSpanOnClick(e)}>Experience</span>
            <span className={contentContext.projectsIsOpen ? 'active' : ''} onClick={(e) => handleSpanOnClick(e)}>Projects</span>
            <span className={contentContext.hobbiesIsOpen ? 'active' : ''} onClick={(e) => handleSpanOnClick(e)}>About Me</span>
        </footer>
    )
}