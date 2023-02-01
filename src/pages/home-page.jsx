
import { HomeHero } from '../cmps/home/home-hero.jsx'
import { HomePreview } from '../cmps/home/home-preview.jsx'
import { HomeStories } from '../cmps/home/home-stories.jsx'
import { Teaser } from '../cmps/home/home-teaser.jsx'

export function HomePage() {
    return (
        <>
            <section className='home'>
                <HomeHero />
                <HomePreview />
                <HomeStories />
                <Teaser />
            </section>
        </>
    )

}