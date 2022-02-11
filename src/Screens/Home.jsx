import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import Section5 from '../Components/Section5';
import Section6 from '../Components/Section6';
import Section7 from '../Components/Section7';
import '../Jomo.css';

function Home() {
  return (
    <div className="body">
      <Header />
      <div className="main" style={{}}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div >
    </div>

  )
}

export default Home




