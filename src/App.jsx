import Contact from "./assets/Contact"
import Hello from "./assets/Hello"
import Counter from "./Counter";

function App() {

  const helloData = [
    {name: "Mike", surname: "zaza"},
    {name: "Dada", surname: "zaza"}
  ];

  return (
    <div>
      {helloData.map((data,index) => (
          <Hello key={index} name={data.name} surname = {data.surname}/>
      ))}
      <Contact email="samuhey@gmail.com" phone = "0899999666"/>
      <Counter/>
    </div>
  )
}

export default App
