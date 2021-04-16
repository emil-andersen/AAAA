import React from "react";
import "./Regler.scss";
import Card from "./card";


function Regler(){
    return(
        <div id="Regler" className="Regler">
          <h1 className="Regler__h1">Regler på Netværket</h1>
          <Card className="Regler__card" copy={"Læs Reglerne Her"} link="https://docs.google.com/document/d/1sxFXKV6EdFTbxdbZsCgtsh-akGWRBriGWin4XVj4sJ0/edit?usp=sharing" />
        </div>
    );
}


export default Regler;