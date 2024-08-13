import React, { useEffect, useState } from 'react';

const ChistesCompletos = () => {
  const [chistes, setChistes] = useState([]);

  const obtenerChiste = () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setChistes((prevChistes) => [
          ...prevChistes,
          <div className="ch" key={data.id}>{data.value}</div>,
        ]);
      })
      .catch((error) => console.log("Lo siento pero no hay ningún chiste:", error));
  };

  useEffect(() => {
    obtenerChiste();
  }, []);

  return (
    <>
      {chistes}
    </>
  );
};

export default ChistesCompletos;
