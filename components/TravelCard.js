import React from "react"

export default function TravelCard(props) {
    return(
        <div className="card">
            <img src= {props.item.imageUrl} className="card--img"/> 
            <section className="card--info">
                <div>
                    <span><img src="../images/Path.png"/></span>
                    <span>{props.item.location} </span>
                    <a href= {props.item.googleMapsUrl} className="hyperlink">View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <div className="cardline--two">
                    <span>{props.item.startDate}</span>
                    <span>{props.item.endDate}</span>
                </div>
                <p>{props.item.description} </p> 
            </section>
        </div>
    )
}