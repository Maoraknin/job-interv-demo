import rightDisk from '../../assets/img/bg-pattern-home-3.svg'
import person from '../../assets/img/icon-person.svg'
import cog from '../../assets/img/icon-cog.svg'
import chart from '../../assets/img/icon-chart.svg'


export function HomePreview() {


    return (
        <div className='preview-container'>
            <img src={rightDisk} className='right-disk' />
            <h2 className="preview-title">Build & manage distributed teams like no one else.</h2>
            <div>
                <div className='card-container'>
                    <img src={person} className='person-img' />
                    <div className='card'>
                        <h3>Experienced Individuals</h3>
                        <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>
                </div>

                <div className='card-container'>
                    <img src={cog} className='cog-img' />
                    <div className='card'>
                        <h3>Easy to Implement</h3>
                        <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                    </div>
                </div>
                <div className='card-container'>
                    <img src={chart} className='chart-img' />
                    <div className='card'>
                        <h3>Enhanced Productivity</h3>
                        <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}