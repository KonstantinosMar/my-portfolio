import React from 'react';
import '../styles/_centerBar.scss'
import '../styles/_menuBar.scss'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Center = () => {
  window.onscroll = () => {scrollFunction()};

  return (
      <div className="center">
          <div id="leftPanel" className="left-panel"></div>
          <div id="rightPanel" className="right-panel"></div>
          <h1 id="conMar">CON<br/>MARIN<span>.</span></h1>
          <h3 id="scroll-p" className="scroll">Scroll &gt;&gt;</h3>
          <div id="firstAbout" className="first-about">
            <p className="since"><ArrowRightAltIcon/> Since 1997</p>
            <p className="first-info">
              <span className="colorCloud">Hello, I’m</span> <span className="colorPurple">Konstantinos Marinopoulos</span><span className="colorCloud">.</span><br/>
              I’m a junior Full Stack Web Developer.
            </p>
            </div>
        </div>
    );
};


function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("leftPanel").style.width = "100%";
    document.getElementById("rightPanel").style.width = "0%";
    document.getElementById("conMar").style.left = "92%";
    document.getElementById("conMar").style.color = "#3C1874";
    document.getElementById("scroll-p").style.display = "none";
    document.getElementById("firstAbout").style.opacity = "1";
  } else {
    document.getElementById("leftPanel").style.width = "50%";
    document.getElementById("rightPanel").style.width = "50%";
    document.getElementById("conMar").style.left = "";
    document.getElementById("conMar").style.color = "#000000";
    document.getElementById("scroll-p").style.display = "block";
    document.getElementById("firstAbout").style.opacity = "0";
  }
}

export default Center;