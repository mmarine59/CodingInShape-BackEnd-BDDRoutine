import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Appel à l'API
    fetch('http://localhost:5000/post')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []); // Tableau vide en deuxième paramètre = useEffect s'exécute une seule fois au montage du composant
  
  return (
    <div>
      <h1>Données de l'API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;