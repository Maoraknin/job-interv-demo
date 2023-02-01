import leftDisk from '../../assets/img/bg-pattern-home-1.svg'
import bottomDisk from '../../assets/img/bg-pattern-home-2.svg'

export function HomeHero() {


    return (
        <div className='home-hero-container'>
            <img src={leftDisk} className='left-disk' />
            <img src={bottomDisk} className='bottom-disk' />
            <h1 className="hero-title large">Find the best <span>talent</span></h1>
            <p className="hero-txt large">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
        </div>

    )
}