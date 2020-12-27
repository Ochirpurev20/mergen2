import logo from './img/mergen_holding_logo_mn.png';
import './App.css';
import NavBar from './components/Navbar'
import LogoHeader from './components/LogoHeader'
import WeDo from './components/WeDo'
import WeDid from './components/WeDid'
import Contact from './components/Contact'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import Footer from './components/Footer';



const uria = ['Мэргэжлийн ур чадвар.', 'Өндөр ёс зүй.']
const photoCredit = 'backgroud image credit to: DMax Photography'
const garchig = 'Бидний хийдэг ажил'
const ajiluud = ['Барилгын дотор, гадна тохижилт', 'Цахилгаан, холбоо дохиоллын шугам сүлжээ угсралт', 'Халаалт, агаар сэлгэлтийн хоолой угсралт']

const zuragnuud = [img1, img2, img3, img4 ]
// const zuragTailbar = 'zuragnii tailbar'
const zuragGarchig = 'Бидний хийсэн ажил'

function App() {
  return (
    <div className="lg:flex lg:justify-center my-bg-light tsegt-font">
      <div className="text-center lg:max-w-7xl ">

      {/* go top */}
      <a href='#top' className='fixed bottom-1 right-1 my-bg-prime p-3 rounded-md text-white lg: m-10'>Go Top</a>
      {/* burger menu gants yum chin */}
      <div className='md:hidden fixed top-2 left-2 my-color-prime text-3xl'>
        <i className="fas fa-bars"></i>
      </div>
      <NavBar ></NavBar>
      <LogoHeader logo={logo} uria={uria} photoCredit={photoCredit}/>
      <WeDo garchig={garchig} ajiluud={ajiluud} />
      <WeDid zuragnuud={zuragnuud} zuragGarchig={zuragGarchig} />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
