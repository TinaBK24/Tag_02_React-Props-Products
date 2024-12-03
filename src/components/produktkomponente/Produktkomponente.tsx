import "./Produktkomponente.css"

interface IProduktkomponente {
    url: string,
    title: string,
    price: number
}

const Produktkomponente: React.FC<IProduktkomponente> = (props) => {
    return ( 
        <div className="karte">
            <img src={props.url} alt={props.title} />
            <p>{props.title}</p>
            <p>${props.price}</p>
            <a href="#">BUY NOW</a>
        </div>
     );
}
 
export default Produktkomponente;