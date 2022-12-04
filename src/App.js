import Header from "./components/Header"
import Hero from "./components/Hero"
import data from "./data";
import './App.css';

function App() {

  // storing data in dataArr
  const dataArr = data.map((item) => {
    return (
      <Hero
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <>
      <Header />
       {dataArr}
    </>
  );
}

export default App;
