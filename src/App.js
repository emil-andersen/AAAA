// APP.JS

import React from "react";
import PrimNav from "./components/PrimNav";
import Landing from "./components/Landing";
import "./Global.scss";
import Omos from "./components/Omos";
import Regler from "./components/Regler";
import Arbejde from "./components/Arbejde";
import Key from "./components/Key";
import "./responsive.scss";




function App(){
    return(    
        <>
         <PrimNav/>
         <Landing/>
         <Omos/>
         <Regler>
         </Regler>
         <Arbejde/>
         <Key/>
        </>
    );
};

export default App;