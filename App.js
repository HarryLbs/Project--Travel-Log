import React from "react"
import Navbar from "./components/Navbar"
import TravelCard from "./components/TravelCard"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <TravelCard
                key ={item.id}
                item={item}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}