import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyles.js";

// import components
import Location from "./Location";
import Zoom from "./Zoom";
import {
  Content,
  Controls,
  Header,
  Desc,
  LanguageToggle,
  Title,
  Footer,
} from "./Styled/App.styled";

// import the data
import { HuTiaXia, Shangrila } from "./data";

function App() {
  const [location, setLocation] = useState(HuTiaXia);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Content>
        <Header>
          <Title>中国美丽</Title>
          <LanguageToggle></LanguageToggle>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Desc>
        </Header>
        <Controls>
          <div className='control' onClick={() => setLocation(HuTiaXia)}>
            Tiger Leaping Gorge
          </div>
          <div className='control' onClick={() => setLocation(Shangrila)}>
            Shangrila
          </div>
        </Controls>
        <Location {...location} setClicked={setClicked} />
        <Footer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Footer>
      </Content>
      {clicked ? <Zoom clicked={clicked} setClicked={setClicked} /> : <></>}
    </>
  );
}

export default App;
