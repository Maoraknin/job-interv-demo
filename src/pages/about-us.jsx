
import { AboutHero } from '../cmps/about/about-hero.jsx'
import { Teaser } from '../cmps/home/home-teaser.jsx'

export function AboutUs() {
    return (
        <>
            <section className='home'>
                <AboutHero />
                <Teaser />

            </section>
        </>
    )

}