import CardMap from '@/components/CardMap'
import Card from '@/resources/Cards/Card'

export default function Sluzby() {
    
    
    
    return(
        <div>
            <div className="grid SluzbyBG">
                <h2 className="Title">Služby</h2>
                <div className="Cards-Row">
                    {Card.map((Card) =>(
                    <>
                    <CardMap card={Card}/>
                    </>
                    ))}
                </div>
            </div>
        </div>
    )
}