import Image from 'next/image'
import footerStyles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.icon}>
                <a href='https://github.com/gngo2018' target='_blank' rel="noreferrer">
                    <Image
                        src='/assets/square-github.svg'
                        alt='github'
                        fill
                        sizes="100vw"
                    />
                </a>
            </div>
            <div className={footerStyles.icon}>
                <a href='https://www.linkedin.com/in/georgego/' target='_blank' rel="noreferrer">
                    <Image
                        src='/assets/linkedin.svg'
                        alt='linkedin'
                        fill
                        sizes="100vw"
                    />
                </a>
            </div>
            <div className={footerStyles.icon}>
                <Image
                    src='/assets/id-card-solid.svg'
                    alt='resume'
                    fill
                    sizes="100vw"
                />
            </div>
        </footer>
    )
}