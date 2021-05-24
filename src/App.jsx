import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import { Background, Wrapper } from "./Components/styled-components";

const BgImage = "/assets/images/cover_photo_2.jpg";

function App() {
  return (
    <Background BgImage={BgImage} Repeat="no-repeat" width="5000px">
      <Wrapper>
        <header>
          <Welcome name="West Lyle Swing Co." subtitle="How do you swing?" />
        </header>
      </Wrapper>
    </Background>
  );
}

export default App;
