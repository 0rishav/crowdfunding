import React from 'react'
import "./features.css"
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <div>
        <div className='features'>
            <div className='background-features-image'></div>
        </div>
        <div id='feature-goal'>
            <div className='left-features'>
                <div className='goal-cause'>
                    <h1>goal cause <span>320000 $</span></h1>
                </div>
                <div className='achieved'>
                <h1>achieved <span>38989 $</span></h1>
                </div>
            </div>
            <div className='right-features'>
                <div className='first-goal'>
                    <h2>12%</h2>
                    <p>of our goal</p>
                </div>
                <div className='second-donation'>
                <h2>4</h2>
                    <p>donation</p>
                </div>
                <div className='donation-btn'>
                    <button>donate now</button>
                </div>
            </div>
        </div>

        <div className='third-features'>
            <div className='child-image'>
                <img src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/cause-1.jpg" alt="" />
            </div>
            <div className='child-content'>
                <h3>"</h3>
                <h2>It's not how much we give, but how much love we put into giving</h2>
                <h4>Mother Teresa</h4>
            </div>
        </div>

        <div className='small-header'>
            <ul className='header-link'>
                <li><Link>Description</Link></li>
                <li><Link>Documents</Link></li>
                <li><Link>Maps</Link></li>
                <li><Link>Donation</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Features