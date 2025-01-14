import {useState} from "react";
export default function LudoBoard(){
    let [moves, setMoves]=useState({blue:0, yellow:0, red:0, green:0});
    let [arr, setArr]=useState(["no moves"]);

    let updateBlue=()=>{
        setMoves((prevMoves)=>{;
            return{...prevMoves, blue:prevMoves.blue+1};
        });
        setArr((prevArr)=>{
                return [...prevArr, "blue moves"];
        });
    };
    let updateYellow=()=>{
        setMoves((prevMoves)=>{;
            return{...prevMoves, yellow:prevMoves.yellow+1};
        });
        setArr((prevArr)=>{
            return[...prevArr, "yellow moves"];
        });
    };
    let updateRed=()=>{
        setMoves((prevMoves)=>{;
            return{...prevMoves, red:prevMoves.red+1};
        });
        setArr((prevArr)=>{
            return[...prevArr, "red moves"];
        });
    };
    let updateGreen=()=>{
        setMoves((prevMoves)=>{;
            return{...prevMoves, green:prevMoves.green+1}
        });
        setArr((prevArr)=>{
            return[...prevArr, "green moves"];
        });
    }

    return (
        <div>
            <h1>Game Begins!</h1>
            <div>
                <div>
                    <p>Blue Moves={moves.blue}</p>
                    <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                </div>
                <div>
                    <p>Yellow Moves={moves.yellow}</p>
                    <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                </div>
                <div>
                    <p>Red Moves={moves.red}</p>
                    <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                </div>
                <div>
                    <p>Green Moves={moves.green}</p>
                    <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                </div>
            </div>
        </div>
    );
}