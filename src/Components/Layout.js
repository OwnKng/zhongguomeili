import React from "react";
import { GlobalStyles } from "./GlobalStyles.js";
import { Link } from "react-router-dom";
import { useZoom, useActive } from "./hooks";

// import components
import Zoom from "./Zoom";
import {
  Content,
  Controls,
  Header,
  Desc,
  Title,
  Hero,
  Footer,
} from "./Styled/App.styled";
import Loadbar from "./Loadbar.js";

const Layout = ({ children }) => {
  const { zoom } = useZoom();
  const { active } = useActive();

  const isActive = (location) => {
    return location === active ? "control active" : "control";
  };

  return (
    <>
      <GlobalStyles />
      <Content>
        <Header>
          <Title>中国美丽</Title>
          <Desc>
          China is well known for its sprawling megacities as well as its historical landmarks, 
          such as the Great Wall, Terracotta Warriors and the Temple of Heaven. 
          However, the country is less well known for its huge range of natural landscapes – including snow-capped 
          mountains, rolling deserts and tropical rainforests. 
          
          <br />
          <br />
          This site is a collection of articles on some of the areas of outstanding natural beauty in China I have visited over the last few years.   
          </Desc>
          <Hero src='photos/china-map.png' alt='A 3d map of China' />
        </Header>
        <Controls>
          <Link className={isActive("Hutiaoxia")} to=''>
            Hutiaoxia
          </Link>
          <Link className={isActive("Shangrila")} to='shangrila'>
            Shangrila
          </Link>
          <Link className={isActive("Zhangye")} to='zhangye'>
            Zhangye
          </Link>
          <Link className={isActive("Zhangjiajie")} to='zhangjiajie'>
            Zhangjiajie
          </Link>
          <Link className={isActive("Huangshan")} to='huangshan'>
            Huangshan
          </Link>
          <Loadbar />
        </Controls>
        {children}
        <Footer>
          This website was built using <a href="https://reactjs.org/">React</a>. The photos are ones that I've taken while visiting these place. 
          The elevation maps are created using the <a href="https://www.rayshader.com/">Rayshader</a> R package, using data from the <a href="https://www.usgs.gov/">US Geological Survey</a>.
          <br />
          <br />
          The animations for this site use the <a href="https://www.framer.com/motion/">Framer Motion</a> React library. <a href="https://reactrouter.com/web/guides/quick-start">React Router</a> is used for routing between pages.
        </Footer>
      </Content>
      {zoom ? <Zoom clicked={zoom} /> : <></>}
    </>
  );
};

export default Layout;
