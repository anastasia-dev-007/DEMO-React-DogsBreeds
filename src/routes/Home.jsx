import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Breed from "../components/Breed";
import Footer from "../components/Footer";

function Home() {
    const [breeds, setBreeds] = useState({});
    const [selectedBreed, setSelectedBreed] = useState([]);

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

    const handlePrevClick = async () => {
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
            <input type="text" placeholder="Search..." onChange={(event) => setSelectedBreed(event.target.value)}></input>

            <main className="homeContainer">
                {
                    breeds.data?.filter(item => item.attributes.name.toLowerCase().includes(selectedBreed)).map(item => (//cu "?" ne asigram ca avem date in acest obiect. fara "?" nu se va afisa nimic pentru ca obiectul default in constanta e null si el prima data face apel la acel obiect nul, si dupa asta la API
                        <Breed
                            key={item.id}
                            id={item.id}
                            title={item.attributes.name}
                            description={item.attributes.description} />
                    ))
                }
            </main>

            <Footer
                breeds={breeds}
                handleFirstClick={handleFirstClick}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                handleLastClick={handleLastClick}
            />
        </>
    );
};

export default Home;