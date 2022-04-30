import "./App.css";
import { useState } from "react";
import data from "./data.json";

function App() {
  const [value, setValue] = useState("");

  //value ici est la valeur entrée par l'utilisateur dans l'input

  const newTab = []; //Je créé un TB vide

  for (let i = 0; i < data.length; i++) {
    //Je parcours mon tableau data.json (title : nom de l'émoji, symbol : le smiley,
    //keywords : un ensemble de mot pour le définir )
    // console.log(data[i].keywords);

    //Si les mots clés entrés par l'utilisateurs sont présents dans le fichier .json (-1 signifie que la valeur n'existe pas dans le TB)
    if (data[i].keywords.indexOf(value) !== -1) {
      if (newTab.length < 30) {
        newTab.push(
          //Je push dans mon nouveau tableau vide mon identifiant unique key, mon title et mon symbole
          <p key={data[i].title}>
            {data[i].title} {data[i].symbol}
          </p>
        );
      }
    }
  }

  //Côté utilisateur
  return (
    <div className="App">
      <h1>😎 Emoji Search 😎</h1>

      {/* bouton de recherche */}
      <input
        type="text"
        placeholder="my research"
        name="research"
        value={value}
        //Lorsque l'utilisateur tape du texte on met à jour value grâce à setValue
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <div>{newTab}</div>
      {/* on retourne le tableau incrémenté de nos élements trouvés */}
    </div>
  );
}

export default App;
