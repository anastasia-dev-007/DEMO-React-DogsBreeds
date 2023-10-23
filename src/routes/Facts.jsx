import { useEffect, useState } from "react";

function Facts() {
  const [facts, setFacts] = useState({});
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchFacts = async () => {
      const response = await fetch('https://dogapi.dog/api/v2/facts?limit=5');
      const data = await response.json();

      setFacts(data);
    };

    fetchFacts();
  }, []);

//vom filtra array facts si il vom salva intr-o const noua pe care o vom utiliza in return facts

  return (
    <>
      <input type="text" placeholder="Search..." onChange={(event) => setInputValue(event.target.value)} />
      {facts.data?.filter(item => item.attributes.body.includes(inputValue)).map(item => (
        <p key={item.id}>{item.attributes.body}</p>
      ))}
    </>
  );
};

export default Facts;