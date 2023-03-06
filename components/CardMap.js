"use client"
const CardMap = ({card}) => {
  return (
    <div id={card.id}>
        <div className='Card' >
            <div className='Column' >
                <h2 className="title">{card.mainTitle}</h2>
                <h2 className="secondTitle">{card.secondTitle}</h2>
            </div>
        </div>
    </div>
  )
}

export default CardMap