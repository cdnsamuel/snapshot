import data from "./data/challenge.json"
import Card from "./components/Card"
import "./App.css"
import { useState, useEffect } from "react"

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [selectedFilters, setSelectedFilters] = useState([])

  let filters = ["Mountain", "Beach", "Food", "Bird"]

  const handleValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((elem) => elem !== selectedCategory)
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

  return (
    <>
      <header className="head">
        <h1>SnapShot</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Tapez votre recherche ici !"
          value={inputValue}
          onChange={handleValue}
        />

        <div className="button-container">
          {filters.map((category, id) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button ${
                selectedFilters?.includes(category) ? "active" : ""
              }`}
              key={`filter-${id}`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>
      <div className="main">
        <div className="container">
          {data
            .filter(
              (elem) =>
                selectedFilters.length === 0 ||
                selectedFilters.includes(elem.category)
            )
            .filter(
              (elem) =>
                inputValue === "" ||
                elem.name
                  .toLocaleLowerCase()
                  .includes(inputValue.toLocaleLowerCase())
            )
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                src={item.picture}
                name={item.name}
                category={item.category}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default App
