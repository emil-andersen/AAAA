import React from "react";
import "../components/Landing.scss";

/*https://wallpaperaccess.com/full/707055.jpg*/

function Landing(){
    return(
        <>
        <div className="heading">
         <div className="LandingPage">
              <div className="LandingPage__card">
                  <div className="LandingPage__content">
                     <h1>Velkommen til Euphoria Network</h1>
                     <h2>Dit Roleplay Netværk</h2>
                  </div>
                  <a className="button" href="https://discord.gg/dX7sKNuCVJ" target="_blank" rel="noreferrer">
                  <div className="LandingPage__btn">
                  Discord | <i class="fab fa-discord"></i>
                  </div>
                  </a>
              </div>
            
         </div>
        </div>
           

        </>
    )
};
export default Landing;