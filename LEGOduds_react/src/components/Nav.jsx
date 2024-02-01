import { useState } from "react"

export default function Nav(category){
    const CategoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
    return(
    <nav>
        <ul>
            {CategoryList.map((item, index) => <li key={index}><a className={category === item ? "active" : null} href="#">{item}</a></li>)}
        </ul>
    </nav>
    )
}