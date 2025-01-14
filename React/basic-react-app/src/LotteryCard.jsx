import {useState} from "react";
import {sum, genNum} from "./helper.js";

export default function LotteryCard(){
    let [ticketNo, setTicketNo]=useState(genNum(3));
    console.log(`ticket No: ${ticketNo}`);
    let[nsum, setSum]=useState(sum(ticketNo));
    console.log(`nsum: ${nsum}`);
    let genTicket=()=>{
        setTicketNo(genNum(3)); 
        setSum(sum(ticketNo));
    };
    
    
    return (
        <div>
            <h1>{nsum===15?"Lottery 'Congratulations, you won!'":"Lottery"}</h1>
            <p>Lottery Ticket={ticketNo}</p>
            <button onClick={genTicket}>Get New Ticket</button>
        </div>
    )
}