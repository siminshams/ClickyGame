import React from "react";
import "./ImageCard.css";

const Images = props => (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} height={150}/>
        </div>
    </div>
)

export default Images;