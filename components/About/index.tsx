import Hobbies from '../Hobbies'
import aboutStyles from './about.module.css'

export default function About() {
    return (
        <section>
            <h1>Getting to know George outside of the workplace.</h1>
            {/* <h2>My Interests</h2> */}
            <Hobbies />
        </section>
    )
}