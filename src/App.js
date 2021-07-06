import './App.css'
import MyNavBar from './components/MyNavBar'
import Home from './components/Home'

function App() {
  return (
    <>
      {/* this is a react fragment, just a wrapper because every component
    MUST return a single JSX element */}
      <MyNavBar title="Strivestaurant" />
      <Home />
    </>
  )
}

export default App
