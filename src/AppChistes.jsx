import React, { useEffect, useState } from 'react'


const AppChistes = () => {
  const [chiste, setChiste] = useState()

  const otro = ()=> {
    
    const url = "https://official-joke-api.appspot.com/jokes/random"
    const peticion = fetch(url)
    peticion
    .then((datos) => datos.json())
    .then((content) => {
      console.log(content)
      setChiste(content)
    })
    .catch("lo siento pero no hay ningun chiste")
  }
  useEffect(() => {
    otro();
  }, [])
  

  return (
    <div>
    <h1>AppChistes</h1>

    <div className='chiste'>
    {chiste ? (
      <div>
        <p>{chiste.setup}</p>
        <p><strong>{chiste.punchline}</strong></p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    </div>
    <button onClick={otro}> Otro Chiste </button>
  </div>
  )
}

export default AppChistes