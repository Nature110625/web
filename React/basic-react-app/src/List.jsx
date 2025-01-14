import Card from "./Card.jsx";

export default function List (){
    let details={
        cOne:{
            title:"Longitech MX Master 3S",
            description: ["8,000 DPI", "5 Programmable Buttons"],
            oldPrice: "12,495",
            newPrice: "8,999"
        },
        cTwo:{
            title: "Apple Pencil (2nd Gen)",
            description: ["Intuitive touch surface", "Designed for ipad Pro"],
            oldPrice: "11900",
            newPrice: "9,199"
        },
        cThree: {
            title: "Zebronics Zeb-Transformer",
            description: ["intuitive touch surface", "Designed for ipad pro"],
            oldPrice: "1,599",
            newPrice: "899"
        },
        cFour: {
            title: "Potronics Toad 23 Wireless Mouse",
            description: ["Wireless Mouse 2.4GHz", "Optical Orientation"],
            oldPrice: "599",
            newPrice: "278"
        }
    }
    return (
        <div class="list">
            <Card data={details.cOne}/>
            <Card data={details.cTwo}/>
            <Card data={details.cThree}/>
            <Card data={details.cFour}/>
        </div>
    )
}