
import { AboutHero } from '../cmps/about/about-hero.jsx'
import { AboutClients } from '../cmps/about/about-clients.jsx'
import { Teaser } from '../cmps/home/home-teaser.jsx'

export function AboutUs() {
    return (
        <>
            <section className='home'>
                <AboutHero />
                <AboutClients />
                <Teaser />

            </section>
        </>
    )

}