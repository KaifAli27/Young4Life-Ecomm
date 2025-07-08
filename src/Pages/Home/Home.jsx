import React from 'react'
import HomeNavbar from '../../Components/HomeNavbar/HomeNavbar'
import Banner from '../../Components/Banner/Banner'
import Brand from '../../Components/Brand/Brand'
import Deals from '../../Components/Deals/Deals'

const Home = () => {
  return (
    <div>
      <HomeNavbar/>

        <div>
          <Banner/>
        </div>
        <div>
          <Brand/>
        </div>
        <div>
          <Deals/>
        </div>
    </div>

    
  )
}

export default Home