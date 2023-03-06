import Image from "next/image"
import img from '../public/Obrazek.jpg'
import Dots from '../components/Dots'

export default function Home() {
  return (
    <main>
     <div className='grid'>
      <div className='row'>
        <div className='left'>
          <div className='content'>
            <h3 className="podNadpis">Ahoj, jsem</h3>
            <h2 className="Nadpis"><span className="Green">WebDeveloper</span> & <span className="Blue">SocialMediaManager</span></h2>
            <p className="obsahText">Jmenuji se Jan Holda. Vytvořím Weby na míru nebo spravuji sociální sítě. Vítám vás na mém osobní webu.</p>       
          </div>
        </div>   
        <div className='right'>
         <Image src={img} alt='image'  width={500} height={583} className="Rounded"/>
         <div className="BackGreen"></div>
         </div>   
        </div>
     </div>
    </main>
  )
}
