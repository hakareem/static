import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((card) => <Card key={card.title} item={card} />);

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
