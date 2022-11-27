import Image from 'next/legacy/image'
import { useContentContext } from '../../contexts/ContentContext'
import Footer from '../Footer'
import HeaderNav from '../HeaderNav'
import headerStyles from './header.module.css'

export default function Header() {
    const contentContext = useContentContext();

    const handleLogoOnClick = () => {
        contentContext.setHomeIsOpen(true);
        contentContext.setExperienceIsOpen(false);
        contentContext.setHobbiesIsOpen(false);
        contentContext.setProjectsIsOpen(false)
    }

    return (
        <main className={headerStyles.container}>
            <div className={headerStyles.logo_container}>
                <div className={headerStyles.logo} onClick={handleLogoOnClick}>
                    <Image
                        src='/assets/g3-logo.png'
                        alt='logo'
                        layout='fill'
                        objectFit='contain'
                        priority
                    />
                </div>
                <span>George Go</span>
            </div>
            <div className={headerStyles.header_nav}>
                <HeaderNav />
            </div>
            <div className={headerStyles.header_footer}>
                <Footer />
            </div>
        </main>
    )
}