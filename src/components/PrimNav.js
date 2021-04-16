import React from "react";
import "./PrimNav.scss";

function PrimNav(){
    return(
        <div className="heading">
        <div className="bussemand">
             <div id="PrimNav__logo">
                 <img src="https://cdn.discordapp.com/attachments/720043808087081071/820680077741654036/Logo_EN17_48x48.png" alt="logo"/>
             </div>
            <ul className="PrimNav">
                <li><a className="PrimNav__item" href="#Omos">Om Os</a></li>
                <li><a className="PrimNav__item" href="#Regler">Regler</a></li>
                <li><a className="PrimNav__item" href="#Arbejde">Arbejde</a></li>
                <li><a className="PrimNav__item" href="#Key">KeyBindings</a></li>
            </ul>
        </div>
        </div>
    )
 
};
export default PrimNav;