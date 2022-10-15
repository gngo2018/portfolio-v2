import footerStyles from './footer.module.css'

export default function FooterNav(){
    return (
        <footer className={footerStyles.container}>
            <span>Experience</span>
            <span>Projects</span>
            <span>About Me</span>
        </footer>
    )
}