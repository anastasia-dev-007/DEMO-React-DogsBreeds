import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  const params = useParams();//ne da acces la id care apare in path sus in loc de parametru "/:id"
  const [breed, setBreed] = useState({});

  useEffect(() => {
    const fetchBreed = async () => {
      const response = await fetch('https://dogapi.dog/api/v2/breeds/' + params.id); //deci acest id vine dinamic din useParams() care ne returneaza un obiect din toti parametrii care avem in url
      const data = await response.json();

      setBreed(data);
    }

    fetchBreed();
  }, [])
  return (
    <>
    <Link to ="/">Go back</Link>
      <h3>{breed.data?.attributes.name}</h3>
      <p>{breed.data?.attributes.description}</p>

      <h4>Weight:</h4>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Min</th>
            <th>Max</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Male</th>
            <td>{breed.data?.attributes.male_weight.min}</td>
            <td>{breed.data?.attributes.male_weight.max}</td>
          </tr>

          <tr>
            <th>Female</th>
            <td>{breed.data?.attributes.female_weight.min}</td>
            <td>{breed.data?.attributes.female_weight.max}</td>
          </tr>
        </tbody>
      </table>
      <p>Min life: {breed.data?.attributes.life.min} years.</p>
      <p>Max life: {breed.data?.attributes.life.max} years.</p>
      <p>Min life: {breed.data?.attributes.life.max} years.</p>
      <p>Max life: {breed.data?.attributes.life.max} years.</p>
    </>
  );
};

export default Details;