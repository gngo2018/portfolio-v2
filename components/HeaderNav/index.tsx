import { useContentContext } from '../../contexts/ContentContext'
import headerNavStyles from './header_nav.module.css'

export default function HeaderNav() {
    const contentContext = useContentContext();

    const handleListItemOnClick = (e: any) => {
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
        else if (value === 'Hobbies') {
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
        <ul className={headerNavStyles.nav_list}>
            <li className={contentContext.homeIsOpen ? 'active' : ''} onClick={(e) => handleListItemOnClick(e)}>Home</li>
            <li className={contentContext.experienceIsOpen ? 'active' : ''} onClick={(e) => handleListItemOnClick(e)}>Experience</li>
            <li className={contentContext.projectsIsOpen ? 'active' : ''} onClick={(e) => handleListItemOnClick(e)}>Projects</li>
            <li className={contentContext.hobbiesIsOpen ? 'active' : ''} onClick={(e) => handleListItemOnClick(e)}>Hobbies</li>
        </ul>
    )
}