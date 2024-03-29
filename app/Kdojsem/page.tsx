import Image from "next/image"
import Programator from "../../public/Programator.svg"
import Icons from "@/components/Icons"

export default function Kdojsem() {
    return(
        <div className='grid'>
        <div className='row'>
        <div className='left'>
        <div className='content'>
            <h2 className="Nadpis"><span className="Green">Kdo Jsem ?</span></h2>
            <p className="obsahText">Už od mala jsem měl velký zájem o počítače, kdy jsem se snažil vždy o nich vědět co nejvíc. Ve třetí třídě jsem opravoval rodičům počítač, v sedmé jsem vytvořil svou první stránku. Postupem času ovšem můj kruh zájmů přerostl i do odvětví Grafiky a Digitálního Marketingu. V Současné době studuji informační technologie na vysoké škole a rozvíjím své schopnosti ve svém volném čase.</p>
            <Icons/>    
          </div>
        </div>   
        <div className='right'>
         <Image src={Programator} alt='image'  width={500} height={583} className="Rounded"/>
         </div>   
        </div>
     </div>
    )
}