import topSquare from '../../assets/img/bg-pattern-home-4-about-3.svg'
import bottomDisk from '../../assets/img/bg-pattern-home-5.svg'
import kady from '../../assets/img/avatar-kady.jpg'
import aiysha from '../../assets/img/avatar-aiysha.jpg'
import arthur from '../../assets/img/avatar-arthur.jpg'


export function HomeStories() {


    return (
        <div className='stories-container'>
            <img src={topSquare} className='top-square' />
            <img src={bottomDisk} className='bottom-disk' />
            <h2 className="stories-title">Delivering real results for top companies. Some of our <span>success stories.</span></h2>
            <div className='cards-container'>
                <div className='card-container'>
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <h3>Experienced Individuals</h3>
                    <img src={kady} className='person-img' />
                </div>

                <div className='card-container'>
                    <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <h3>Easy to Implement</h3>
                    <img src={aiysha} className='cog-img' />
                </div>
                <div className='card-container'>
                    <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <h3>Enhanced Productivity</h3>
                    <img src={arthur} className='chart-img' />
                </div>
            </div>
        </div>

    )
}