import Image from 'next/image'
import Footer from '../Footer'
import HeaderNav from '../HeaderNav'
import headerStyles from './header.module.css'

export default function Header() {
    return (
        <main className={headerStyles.container}>
            <div className={headerStyles.logo_container}>
                <div className={headerStyles.logo}>
                    <Image
                        src='/assets/g3-logo.png'
                        layout='fill'
                        objectFit='contain'
                        alt='logo'
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