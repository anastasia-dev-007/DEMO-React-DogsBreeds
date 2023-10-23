import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Breed from "../components/Breed";

function Home() {
    const [breeds, setBreeds] = useState({});

    useEffect(() => {
        const fetchBreeds = async () => {//await+async trebuie sa mearga impreuna
            const response = await fetch('https://dogapi.dog/api/v2/breeds');//asteptam raspunsul
            const data = await response.json();//raspunsul va fi transformat in obiect JS

            setBreeds(data);//dupa ce am scos datele din API le transmitem la constanta breeds din useState
        }

        fetchBreeds();//neaparat apelam functia ca ea sa se execute, acum deja putem lucra cu cinst breeds pentru a afisa datele la noi in pagina
    }, []);

    const handleFirstClick = async () => {
        const response = await fetch(breeds.links.current);
        const data = await response.json();
        setBreeds(data);
    }

    const handleNextClick = async () => {
        const response = await fetch(breeds.links.next);//asteptam raspunsul
        const data = await response.json();//raspunsul va fi transformat in obiect JS

        setBreeds(data);//dupa ce am scos datele din API le transmitem la constanta breeds din useState
    };

    const handleNPrevClick = async () => {
        const response = await fetch(breeds.links.prev);//asteptam raspunsul
        const data = await response.json();//raspunsul va fi transformat in obiect JS

        setBreeds(data);//dupa ce am scos datele din API le transmitem la constanta breeds din useState
    };

    const handleLastClick = async () => {
        const response = await fetch(breeds.links.last);
        const data = await response.json();
        setBreeds(data);
    }

    return (
        <>
            <main className="homeContainer">
                {
                    breeds.data?.map(item => (//cu "?" ne asigram ca avem date in acest obiect. fara "?" nu se va afisa nimic pentru ca obiectul default in constanta e null si el prima data face apel la acel obiect nul, si dupa asta la API
                        <Breed
                            key={item.id}
                            id={item.id}
                            title={item.attributes.name}
                            description={item.attributes.description} />
                    ))
                }
            </main>

            <footer>
                <button disabled={breeds.links?.current === undefined} onClick={() => handleFirstClick()}>First</button>
                <button disabled={breeds.links?.prev === undefined} onClick={() => handleNPrevClick()}>Previous</button> {/* cu "?" ne asiguram ca aceasta proprietatea exista
               links prev si next sunt din API */}
                <button disabled={breeds.links?.next === undefined} onClick={() => handleNextClick()}>Next</button>
                <button disabled={breeds.links?.last === undefined} onClick={() => handleLastClick()}>Last</button>

            </footer>
        </>
    );
};

export default Home;