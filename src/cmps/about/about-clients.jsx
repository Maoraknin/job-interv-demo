import topDisk from '../../assets/img/bg-pattern-about-4.svg'
import verge from '../../assets/img/logo-the-verge.png'
import guardian from '../../assets/img/logo-the-guardian.png'
import techRadar from '../../assets/img/logo-tech-radar.png'
import jakarta from '../../assets/img/logo-jakarta-post.png'
import gadgets from '../../assets/img/logo-gadgets-now.png'


export function AboutClients() {


    return (
        <div className='clients-container'>
            <img src={topDisk} className='top-disk' />
            <h2>Some of our clients</h2>
            <div className='logo-container'>
                <img className='logo' src={verge} />
                <img className='logo' src={jakarta} />
                <img className='logo' src={guardian} />
                <img className='logo' src={techRadar} />
                <img className='logo gadget' src={gadgets} />
            </div>
        </div>

    )
}