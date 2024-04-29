import React from 'react'
import styles from './airfares.module.css'
import AirfaresCard from '../Components/AirfaresCard/AirfaresCard'

const Airfares = () => {
  let List = [1,2,3,4,5,6]
  return (
    <div className='container mt-5'>
        
        <div className={styles.upperTextContainer}>
        <h5>Top Airfares </h5>
        <h2> Find Best Flight deals from Loss Angeles to Miami </h2>
        <p>Lorem ipsum dolor sit amet consectetur. Sit ultricies fames at a sed. Mattis dis tortor posuere diam cursusr. Sit ultricies fames at a sed. Mattis dis tortor posuere diam cursus.</p>
        </div>

        <div className="row g-0 container">
          {
            // List.map((item, index) => (<div key={index}>
            //   {/* {item} */}
            //   <AirfaresCard/>
            // </div>))
           
          }
           
{
  List.map((item, index) => <>
    <AirfaresCard/>
  </>)
}
            
        </div>
    </div>
  )
}

export default Airfares