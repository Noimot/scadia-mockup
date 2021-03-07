import logo from './logo.svg';
import './App.css';
import Nav from "./component/Nav";
import { imagesArray, SecondImagesArray, ThirdImagesArray } from './component/Images/images';
import Images from './component/Images';
import logo2 from './component/Section/logo2.svg';
import { Section, SecondSection } from './component/Section';
import { Footer } from './component/footer'



function App() {
  console.log(imagesArray)
  return (
    <div>
      <Nav scadiaLogo={logo} />

      <div className="div-container">

        <h2 style={{ fontSize: '32px' }}>Featured games</h2>

        <div className='image-column'>
          {imagesArray.map((images, index) => (
            <Images key={index} imageList={images} />
          ))}

        </div>
      </div>


      <div className='div-container'>
        <Section logo2={logo2} />

        <div className='image-column' >
          {SecondImagesArray.map((images, index) => (
            <Images key={index} imageList={images} />
          ))}

        </div>
      </div>

      <div>
        <SecondSection />
      </div>

      <div className="div-container">
        <h1 className="second-section-h1"> More great games are waiting in the Stadia store</h1>
        <p style={{color:'#5f6368'}}>The games you buy go from screen… to screen… to screen. <span style={{ color: "#de3334" }}>Compatible</span> laptops and phones. TVs. You have what it takes.
</p>
        <div className="image-column">
          {ThirdImagesArray.map((images, index) => (
            <Images key={index} imageList={images} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
