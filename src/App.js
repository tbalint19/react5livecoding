import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { appState } from './state'
import IngredientListElement from './components/IngredientListElement'
import SearchForm from './components/SearchForm'
import Counter from './components/Counter'

function App() {

  const pageTitle = appState.title
  const pageDescription = appState.description

  const [ searchParam, setSearchParam ] = useState(appState.searchParam)
  const [ filteredRecipes, setFilteredRecipes ] = useState([])

  const updateSearchParam = (e) => {
    setSearchParam(e.target.value)
    if (e.target.value.length > 2)
      setFilteredRecipes(appState.recipes.filter(entry => entry.title.includes(e.target.value)))
    else
      setFilteredRecipes([])
  }

  return (
    <div className="App">

      <SearchForm searchParam={searchParam} updateSearchParam={updateSearchParam} />

      <Counter />

      <h1>{ pageTitle }</h1>
      <h2>{ pageDescription }</h2>
      <div>{ filteredRecipes.map(e =>
            <div key={e.title}>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              <ul>
                { e.ingredients.map(e => <IngredientListElement key={e.name} name={e.name} amount={e.amount}/>) }
              </ul>
            </div>)
          }
      </div>
    </div>
  );
}

export default App;
