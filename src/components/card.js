import React from "react";
import "./card.scss";


function Card({title,src,alt, link,copy}){
    return(
        <div className="card">
            <div className="card__title">{title}</div>
            <div className="card__link">
                <img src={src} alt={alt}/>
                <a href={link} className="card__link__link" target="_blank" rel="noreferrer" >{copy}</a>
            </div>
        </div>
    )
};
export default Card;