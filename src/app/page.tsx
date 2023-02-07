import  Navbar  from './../components/Navbar';
import Hero from './../components/Hero';
import Footer from './../components/Footer';
import Artical from './../components/Artical';
import Static from './../components/Static';



export default function Home() {
  return (
    <main >
      <div>
  
        <Navbar />
        <Hero />
        <Artical />
     
        <Static />
        <Footer />
       
      </div>

      
    </main>
  )
}
