import './App.css'
import Card from './components/Card/Card'
import SavedColors from './components/SavedColors/SavedColors'


//card will contain the paletteBox and generator button
//PaletteBox will contain five ColorBox components
//need heart button to save colors
//ColorBox will each be a randomly generated color
//SavedColors will hold saved colors from each paletteBox
//savedcolors should have a trash can to remove colors


function App() {

  return (
    <main className="App">
     <Card />
     <SavedColors />
    </main>
  )
}

export default App
