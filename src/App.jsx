import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import background from "./assets/images/cover_photo_2.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <Welcome name="West Lyle Swing Co." subtitle="How do you swing?" />
      </header>
      <div style={{ display: "flex", backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', height: "900px"}}></div>
    </div>
  );
}

export default App;
