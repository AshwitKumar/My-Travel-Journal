import React from "react"
import globePng from "./globe-logo.png"

export default function Header (){
    return (
        <header className="header">
                <img src={globePng} />
                <p className="header--title">My Travel Journal</p>
        </header>
    )
}