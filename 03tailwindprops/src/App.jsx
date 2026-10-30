import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: 'Andres',
    age: 22,
    address: {
      city: "",
      state:"",
      country: ""
    }
  }
  let newArr = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <h1 className ='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="andres"/>
      <Card />
      <Card post="Software Engineer"/>
      <Card myArr={newArr} info={myObj}/>
    </>
  )
}

export default App
