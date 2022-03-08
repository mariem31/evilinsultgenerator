import { useState } from "react";
import { useEffect } from "react";
import './Accueil.css';

const Accueil = () => {

    const [insult, setInsult] = useState([]);

    const getData = () => {
        fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
        .then((resp) => resp.json())
        .then((data) => setInsult(data));
    }

    useEffect(() => {
        getData();
    }, [])

return ( 
    <div> 
        <h1>Evil insult generator</h1>
            {insult !== [] && 
                <div className="joke">
                     {/* <p>{insult.number}</p> */}
                     <p>{insult.insult}</p>
                </div>
        }
        <div className="containerButton">
            <button className="button" onClick={() => getData()}>CLICK</button>
        </div>
    </div>
)}

export default Accueil;
