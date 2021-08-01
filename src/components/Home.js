import React from 'react'
import './Home.css'
import HomeLeft from './HomeLeft'
import HomeMiddle from './HomeMiddle'
import HomeRight from './HomeRight'

const Home = () => {
    return (
        <div className="home">
           <HomeLeft/>
           <HomeMiddle/>
           <HomeRight/>
        </div>
    )
}

export default Home
