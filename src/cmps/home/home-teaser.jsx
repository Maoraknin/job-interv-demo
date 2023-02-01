import bottomDisk from '../../assets/img/bg-pattern-home-6-about-5.svg'

export function Teaser() {


    return (
        <div className='teaser-container'>
            <img src={bottomDisk} className='bottom-disk' />
            <h2 className="hero-title large">Ready to get started?</h2>
            <button className="primary green">contact us</button>
        </div>

    )
}