import React from "react";
import "./Omos.scss";

function Omos(){
    return(
        <>
            <section id="Omos" className="Omos">
                <h1 className="Omos__Headline">Om Os</h1>
                <div className="Omos__Box">
                    <img src="https://media.discordapp.net/attachments/743149401408798851/823293618965708881/271590_20201207134200_1.png?width=1148&height=676" alt=""/>
                    <div className="Omos__Content">
                        <p className="Omos__p">Vi er en dansk FiveM Roleplay server med fokus på kvalitet, kreativitet og spilleren.</p>
                        <p className="Omos__p">Vi startede op i begyndelsen af 2021, da landet var lukket ned pga. COVID-19, og vi gav vores spillere en mulighed for at komme ind i en ny, sjovere og mere action packed virkelighed. Det er denne nye euforiske virkelighed, der driver os, og vi vil altid tage ét skridt mere for spillerens skyld.</p>
                        <p className="Omos__p">Den vigtigste del af vores community er spilleren. Her har alle ret til sin mening, og alle kan komme med nye forslag - store som små. 
                        Hvis du har lyst til at bidrage til fællesskabet, og blive en del af vores nye virkelighed, så er det lige præcis dig, vi har brug for. </p>                       
                        <a className="button" href="https://discord.gg/dX7sKNuCVJ" target="_blank" rel="noreferrer">
                         <div className="Omos__btn">
                                Discord | <i class="fab fa-discord"></i>    
                         </div>
                        </a>

                    </div>
                </div>
            </section>
        </>
    );
};


export default Omos