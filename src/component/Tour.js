import React from 'react'
import ReactJoyride from 'react-joyride'
import isTourOpen from '../App'



const Tour = ({TOUR_STEPS}) => {
    return (
        <>
         <ReactJoyride steps={TOUR_STEPS} 
         continuous={true} 
         showSkipButton={true} 
         styles={{
          backgroundColor:'steelblue',
          tooltipContainer: {
            textAlign: "left"
          },
          buttonNext: {
            backgroundColor: 'green',
            
          },
          buttonBack: {
            marginRight: 10
          }
        }}
         locale={{
            last: "End tour",
            skip: "Close tour"
          }}
         />   
        </>
    );
}

export default Tour