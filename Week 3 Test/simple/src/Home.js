import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header id="banner">
        <p>
          <a href="#home">
            <img src="images/home.gif" alt="homepage" />
          </a>{" "}
          |{" "}
          <a href="mailto:denise@mitchinson.net">
            <img src="images/mail.gif" alt="contact" />
          </a>
        </p>
        <h1>Your Company Name</h1>
      </header>

      <nav id="menu">
        <ul id="nav">
          <li id="home">
            <a href="#home">Home</a>
          </li>
          <li id="who" className="activelink">
            <a href="#about">About</a>
          </li>
          <li id="prod">
            <a href="#product">Product</a>
          </li>
          <li id="serv">
            <a href="#services">Services</a>
          </li>
          <li id="cont">
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </nav>

      <div id="container">
        <main id="content">
          <h1>
            Welcome to{" "}
            <span style={{ fontWeight: "bold", color: "#C4DA64" }}>
              StopWatch
            </span>{" "}
            Template
          </h1>
          <p className="big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            euismod dignissim justo. Suspendisse vestibulum. Duis ligula ante,
            porttitor id, tempor a, tincidunt sed, dolor.{" "}
            <a href="#nowhere">This is a link to nowhere.</a>
          </p>
          <div id="box">
            <h2>
              <img src="images/last.gif" alt="ad" /> Advertise Your Site Here
            </h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Icons are
              courtesy of{" "}
              <a
                href="http://www.exploding-boy.com/2005/09/13/explodingboy-pixel-icons/"
                title="exploding-boy"
              >
                Exploding Boy
              </a>
              . For more templates visit{" "}
              <a href="http://www.mitchinson.net" title="my website">
                my website
              </a>
              .
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ligula. Nulla in urna eu tellus auctor convallis.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            ligula. Nulla in urna eu tellus auctor convallis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ipsum.
          </p>
        </main>

        <aside id="content_right">
          <dl className="curved">
            <dt>RECOMMENDED LINKS</dt>
            <dd>
              <ul id="navlist">
                <li>
                  <a href="#snapp-happy">Snapp Happy</a>
                </li>
                <li>
                  <a href="#open-designs">Open Designs</a>
                </li>
                <li>
                  <a href="#andreas-viklund">Andreas Viklund</a>
                </li>
                <li>
                  <a href="#james-koster">James Koster</a>
                </li>
                <li>
                  <a href="#css-play">CSS play</a>
                </li>
                <li>
                  <a href="#listamatic">Listamatic</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl className="curved">
            <dt>
              CURVED CORNERS<span className="small"> by Stu Nicholls</span>
            </dt>
            <dd>
              <p>Ok, finally a four corner box with no extra markup.</p>
              <p>No javascript and absolutely no hacks.</p>
              <p className="last">
                Examples at{" "}
                <a href="http://www.cssplay.co.uk">&#0187; CSS Play</a>
              </p>
            </dd>
          </dl>
          <dl className="curved">
            <dt>MORE INFORMATION</dt>
            <dd>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="last">
                Morbi sodales vehicula nisi. Donec id tortor.
              </p>
            </dd>
          </dl>
        </aside>
      </div>

      <footer id="footer">
        <p>
          <a href="#homepage">homepage</a> |{" "}
          <a href="mailto:denise@mitchinson.net">contact</a> | &copy; 2007
          Anyone | Design by{" "}
          <a href="http://www.mitchinson.net">www.mitchinson.net</a> | Licensed
          under a{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
            Creative Commons Attribution 3.0 License
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
