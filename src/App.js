import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import MyButton from './Components/MyButton';
import Footer from './Components/Footer';

const App = () => {
  const navHeading = "Pemrograman Web Lanjutan";
  const navText = " Seputar Pemrograman Web Lanjutan";
  const [getNavbarMenu, setNavbarMenu] = useState("");
  const moreNavbarMenu = () => {
    setNavbarMenu("Contact");
  };
  const clicked = () => {
    return alert("More info?? Contact me at : +6281234567890");
  }
  const paragraf = () => {
    return <i>Tugas pemrograman web lanjutan tentang pembuatan web sederhana yang memuat state, props dan menggunakan fungsi lifecycle pada component</i>;
  };
    return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading} navMenu={getNavbarMenu}/>
        <button onClick={() => moreNavbarMenu()}>Menu Lainnya</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Muhammad Faatih Rizal Auliya (119140212)
        </p>
        <MyButton clicked={clicked} />
        <Footer paragraf={paragraf} />
        <br/>
        <br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
