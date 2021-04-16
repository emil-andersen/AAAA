import React from "react";
import "./Arbejde.scss";
import Card from "./card";

function Arbejde(){
    return(

        <div id="Arbejde" className="Arbejde">
            <h1 className="Arbejde__h1">Ledige Arbejdspladser</h1>
            <div className="Card__Container">
                <Card copy={"Læg din ansøgning her"} link="https://forms.gle/6zyzYUcyUJSGfrKd8" title={"Læge"}/>
                <Card copy={"Læg din ansøgning her"} link="https://forms.gle/wT5qEUY8dZcsbx889" title={"Firma"}/>
                <Card copy={"Læg din ansøgning her"} link="https://forms.gle/o2AJ1ko63pnCUPEn7" title={"Mekaniker"}/>
                <Card copy={"Læg din ansøgning her"} link="https://forms.gle/sJqXQTwjWUQu57cB7" title={"Bande"}/>
                <Card copy={"Læg din ansøgning her"} link="https://forms.gle/GHwx42xRMeTbawQu9" title={"Politi"}/>
            </div>
        </div>
    );
};

export default Arbejde;