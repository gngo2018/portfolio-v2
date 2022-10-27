import Image from 'next/image'
import footerStyles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.icon}>
                <a href='https://github.com/gngo2018' target='_blank'>
                    <Image
                        src='/assets/square-github.svg'
                        alt='github'
                        layout='fill'
                    />
                </a>
            </div>
            <div className={footerStyles.icon}>
                <a href='https://www.linkedin.com/in/georgego/' target='_blank'>
                    <Image
                        src='/assets/linkedin.svg'
                        alt='linkedin'
                        layout='fill'
                    />
                </a>
            </div>
            <div className={footerStyles.icon}>
                <a>
                    <Image
                        src='/assets/id-card-solid.svg'
                        alt='resume'
                        layout='fill'
                    />
                </a>
            </div>
        </footer>
    )
}