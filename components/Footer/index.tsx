import Image from 'next/legacy/image'
import footerStyles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.icon}>
                <a href='https://github.com/gngo2018' target='_blank' rel="noreferrer">
                    <Image
                        src='/assets/square-github.svg'
                        alt='github'
                        layout='fill'
                        objectFit='contain'
                    />
                </a>
            </div>
            <div className={footerStyles.icon}>
                <a href='https://www.linkedin.com/in/georgego/' target='_blank' rel="noreferrer">
                    <Image
                        src='/assets/linkedin.svg'
                        alt='linkedin'
                        layout='fill'
                        objectFit='contain'
                    />
                </a>
            </div>
            <div className={footerStyles.icon}>
                <Image
                    src='/assets/id-card-solid.svg'
                    alt='resume'
                    layout='fill'
                    objectFit='contain'
                />
            </div>
        </footer>
    )
}