import React from "react"
import locationPng from "./location-logo.png"

export default function Hero(props) {
    return (
        <div className="hero">

            <div>
                <img src={props.imageUrl} alt="" className="hero-img" />
            </div>

            <div className="hero-details">
                <div className="location">
                    <img src={locationPng} alt="logo" className="location-item" />
                    <div className="country location-item" >{(props.location).toUpperCase()}</div>
                    <a href={props.googleMapsUrl} className="map-url location-item">View on Google Maps</a>
                </div>

                <h3 className="title">
                    {props.title}
                </h3>

                <div className="date">
                    {props.startDate} - {props.endDate}
                </div>

                <div className="description">
                    {props.description}
                </div>

            </div>

        </div>
    )
}