import { Card, Button } from "react-bootstrap"
import { setearValor } from '../../assets/utils/funciones.js'
import './CardPizza.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CardPizza = ({pizza, id, name, price, ingredients, img, desc ="" }) => {
  const {handleAgrega} = useContext(CartContext)

  return (
    <Card className="card mt-3" bg="light">
      <Card.Header>
        <Card.Img variant="top" src={img} />
        <p className="tituloCard mb-0">Pizza {name}</p>
      </Card.Header>
      <Card.Body >
        <p className="mb-2 text-start">{desc}</p>
        <p className="mb-2">🍕 Ingredientes:</p>
        <ul className="m-0 listaIngredientes">
          {ingredients.map((ingrediente) =>
            <li key={ingrediente}>{ingrediente}</li>
          )}
        </ul>
      </Card.Body>
      <Card.Footer>
        <p className="precio">Precio ${setearValor(price)}</p>
        <div className="d-flex justify-content-evenly">
          <Link to='/pizza/p001'>
          <Button variant="outline-dark">Ver Más 👀</Button>
          </Link>
          <Button variant="dark" onClick={()=>handleAgrega(pizza)}>Añadir 🛒</Button>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default CardPizza