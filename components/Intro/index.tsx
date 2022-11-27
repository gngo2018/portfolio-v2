import Image from 'next/legacy/image'
import introStyles from './intro.module.css'

export default function Intro() {
    return (
        <section>
            <h1>Hi! I&apos;m George Go. Welcome to my portfolio!</h1>
            <div className={introStyles.container}>
                <div className={introStyles.description}>
                    <h2>Living life to the fullest</h2>
                    <p>
                        Hello there! My name is George Go, and I am from Crawfordsville, IN.
                        I graduated from Wabash College in May 2018 where I majored in German Studies and minored in History and Economics.
                        During my time at Wabash, I was introduced to Eleven FIfty where I started to get my feet wet in coding.
                        I was drawn to the developer lifestyle because of the continuous learning and the necessity to be able to self-teach oneself in order to be successful.
                        My goal in life is to help improve the daily standard of living across the world through innovations of growing technologies,
                        and to continually grow in my knowledge by being a student of life.
                    </p>
                    <p>
                        I have recently completed Eleven Fifty Academy&apos;s .NET Cohort.
                        I plan to utilize the skill sets that I have learned to further educate myself about newer concepts in coding.
                        Please feel free to check out my Resume, LinkedIn, and GitHub below!
                    </p>
                </div>
                <div className={introStyles.image}>
                    <Image
                        src='/assets/about.png'
                        alt='about'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
        </section>
    )
}