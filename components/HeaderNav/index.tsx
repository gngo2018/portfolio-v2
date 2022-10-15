import headerNavStyles from './header_nav.module.css'

export default function HeaderNav() {
    return (
        <ul className={headerNavStyles.nav_list}>
            <li>Home</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Hobbies</li>
        </ul>
    )
}