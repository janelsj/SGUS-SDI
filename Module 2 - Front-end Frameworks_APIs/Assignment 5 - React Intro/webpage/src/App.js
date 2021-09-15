import './App.css';
import bag from './images/bag.png';
import bank  from './images/bank.png';
import calendar from './images/calendar.png';
import commercial from './images/commercial.png';
import education from './images/education.png';
import gov from './images/gov.png';
import heart from './images/heart.png';
import home from './images/home.png';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import p5 from './images/p5.png';
import p6 from './images/p6.png';
import p7 from './images/p7.png';
import p8 from './images/p8.png';
import worldMap from './images/worldMap.png'

function ReadMoreButton() {
  return(
    <>
      <a href="#top"><input type="button" value="READ MORE" /></a>
    </>
  )
}

function SampleText() {
  return(
    <>
      <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </>
  )
}

function App() {
  return (
   <>
   <div id="top"><h1> Business and <br /> Industrial Parks</h1></div>
    <div className="header_image"><img src={image1} alt={"image1"} /></div>
    <div className="container1">
        <div id="box1"><img src={image2} alt={"image2"} /></div>
        <div id="box2"> We have several business and industrial parks with available space for your business 
            <br /><br /> 
         <ReadMoreButton />   
        </div>
    </div>
    <div className="container2">
        <div id="box3"><h2>Construction <br /> Machinery Co.</h2>
        <h3> We has a proud tradition of service <br /> as a General Contractor since 1974</h3>
        <p> We headquartered in San Diego, brings over 42 years of local and national construction experience; with a reputation for delivering large and unique design-build projects ahead of schedule and on budget.  Our company has served clients and building owners for over four decades. 
            <br /><br />
            <ReadMoreButton />   
        </p>
        </div>
        <div id="box4">
            <img src={image3} alt={"image3"} />
        </div>
    </div>
    <div className="background">
        <div className="container3">
            <div id="companycert_header">
                <h3>What we do</h3>
                <h2>Company Certifications </h2>
                <p>Our company offers a variety of services to meet your project’s needs, to take you from collaboration meetings all the way to ribbon-cutting and beyond. We believe that every project is unique, and can customize our approach to fit your particular project.</p>
            </div>
            <div id="healthcare">
                <img src={heart} alt={"heart"} />
                <h2>Healthcare <br /> Building</h2>
                <SampleText />
            </div>
            <div id="education">
                <img src={education} alt={"education"} />
                <h2>Education <br /> Building</h2>
                <SampleText />    
            </div>
            <div id="government">
                <img src={bank} alt={"bank"} />
                <h2>Government <br /> Building</h2>
                <SampleText />
            </div>
            <div id="commercial">
                <img src={commercial} alt={"commercial"} />
                <h2>Commercial <br /> Building</h2>
                <SampleText />
            </div>
            <div id="residential">
                <img src={home} alt={"home"} />
                <h2>Residential <br /> Building</h2>
                <SampleText />
            </div>
            <div id="restaurant">
                <img src={bag} alt={"bag"} />
                <h2>Restaurant <br /> Building</h2>
                <SampleText />
            </div>
        </div>
    </div>  
    <div className="container4">
        <div id="health">
            <img src={heart} alt={"heart"} />
            <h3>Healthcare Building</h3>
            <p>Tiling is an effective way to add elegance and style to any bath or kitchen Yellow Hats Remodeling Team specializes in tile installation and works directly with each.</p>
            <ReadMoreButton />
        </div>
        <div id="tractor">
            <img src={image4} alt={"image4"} />
        </div>
        <div className="edugov">
            <div id="edu">
                <img src={calendar} alt={"calendar"} />
                <h3>Education Building</h3>
            </div>
            <div id="gov">
                <img src={gov} alt={"gov"} />
                <h3>Government Building</h3>
            </div>
        </div>
    </div>
    <div className="background">
        <h3>portpholio</h3>
        <h2>Recent Projects</h2>
    </div>
    <div className="pictures">
        <img src={p1} alt={"p1"} id="p1" />
        <img src={p2} alt={"p2"} id="p2" />
        <img src={p3} alt={"p3"} id="p3" />
        <img src={p4} alt={"p4"} id="p4" />
        <img src={p5} alt={"p5"} id="p5" />
        <img src={p6} alt={"p6"} id="p6" />
        <img src={p7} alt={"p7"} id="p7" />
        <img src={p8} alt={"p8"} id="p8" />
    </div>
    <div className="container5">
        <div id="box5">
            <img src={worldMap} alt={"worldMap"} />
        </div>
        <div id="box6">
          <h3>Elvo Construction</h3>
          <h2> The Best World Team </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem.</p>
          <ReadMoreButton />   
        </div>
    </div>
    <div className="container6">
        <div id="box7">
        Contact us today to plan your boat’s maintenance or <br /> repair procedure.
        <h3>4262 Richison Drive, <br />
        Missoula, MT 59801 </h3>
        </div>
        <div id="box8">
          <h2> Contact Us </h2>
          <br />
          <center>
            <table>
              <tr>
                <td>Freephone:</td>
                <td>+1 800 559 6580</td>
              </tr>
              <tr>
                <td>Telephone:</td>
                <td>+1 800 603 6035</td>
              </tr>
              <tr>
                <td>Fax:</td>
                <td>+1 800 889 9898</td>
              </tr>
            </table>
          </center>
        </div>
    </div>
   </>
  );
}

export default App;
