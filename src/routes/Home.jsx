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
                <button>Previous</button>
                <button>Next</button>
            </footer>
        </>
    );
};

export default Home;