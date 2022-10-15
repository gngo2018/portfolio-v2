import headerStyles from './header.module.css'

export default function Header() {
    return (
        <main className={headerStyles.container}>
            <div>
                George Go
            </div>
            <div className={headerStyles.menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </main>
    )
}