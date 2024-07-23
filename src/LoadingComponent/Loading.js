import React from 'react'; 
import './loading.css';

const Loading = () => {
    
    
    return (
      
      <div className="loader-container">
        

        
        <div className="AnimationElements">
          
          <div className='Double'> 
            <div className="OrangeBox" />
            <svg width="48" height="43" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg" className="Vector1">
              <path d="M47.002 24.14 1 18.856" stroke="#0A1551" stroke-width="10"/>
            </svg>
            <div className="BlueBox" />  
          </div>
        
          <div className='Trinity'>
            <div className='two-vectors'>
              <svg width="80" height="58" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="Vector2">
                  <path d="M48.5 3 3 55" stroke="#0A1551" stroke-width="10"/>
              </svg>

              <svg width="40" height="50" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="Vector3">
                <path d="M20.931 39.261 16.723 0.2" stroke="#0A1551" stroke-width="10"/>
              </svg>
            </div>

          <div className='purple-green-boxes'>
            <div className="PurpleBox" />
              <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="Vector4">
                <path d="M45.75 19.634 1 25.498" stroke="#0A1551" stroke-width="10"/>
              </svg>
            <div className="GreenBox" />
          </div>
            

            

          </div>


        </div>
        
      </div>
      );


}

export default Loading;