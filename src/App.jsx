import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [info, setInfo] = useState([]); // Estado inicializado como un array vacío
   
  useEffect(() => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'; // URL de la API
    fetch(url) 
      .then((datos) => datos.json())  // Convertir los datos a JSON
      .then((contenido) => {  // Procesar el contenido


        contenido.meals.map((plato) => {
          console.log(contenido)
          setInfo( (e) =>  
          [...e, <div key={plato.idMeal}>
            <div> <img  className='imagen' src={plato.strMealThumb} alt="Avatar" /> </div>
            <div>{plato.strMeal} {plato.strCategory}</div>
            <div>{plato.strArea}</div>
          </div>]); // Establecer el array de elementos JSX en el estado
        } );
      })
      .catch(() => {
        console.log("No se encontró nada");
      });
  }, []);

  return (
    <>
      <h2>COMIDAS ALEATORIAS</h2>
      <div className='cards'>{info}</div> 
      
    </>
  );
}

export default App;
