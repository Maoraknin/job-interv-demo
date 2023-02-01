import rightDisk from '../../assets/img/bg-pattern-about-1-mobile-nav-1.svg'

export function AboutHero() {


    return (
        <div className='about-hero-container'>
            <img src={rightDisk} className='right-disk' />
            <h1>About</h1>
            <p className="hero-txt large">We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
        </div>

    )
}