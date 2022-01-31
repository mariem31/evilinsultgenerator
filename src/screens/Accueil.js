import { useState } from "react";
import { useEffect } from "react";


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
        <h1>TEST</h1>
        <button onClick={() => getData()}>CLICK</button>
        {insult !== [] && 
                <div>
                     <p>{insult.number}</p>
                     <p>{insult.insult}</p>
                </div>
        }
    </div>
)}

export default Accueil;
