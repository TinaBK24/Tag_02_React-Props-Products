import Produktkomponente from "../produktkomponente/Produktkomponente";
import "./Produktkarten.css"

const Produktkarten = () => {
    return ( 
        <section>
            <Produktkomponente url="./public/img/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg" title="cocooil" price={30}/>
            <Produktkomponente url="./public/img/photo-1526170375885-4d8ecf77b99f.avif" title="Irgendwas" price={60}/>
            <Produktkomponente url="./public/img/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.webp" title="Was was" price={20}/>
        </section>
     );
}
 
export default Produktkarten;