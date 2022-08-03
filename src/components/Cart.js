import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'

const Cart = () => {

  const test = useContext(CartContext)
  console.log(test.cartList)

  return (
    <>
      <h1 className='m-2 text-center'>CARRITO DE COMPRAS</h1>
      <hr />
      <div className='m-2'>
        {
          test.cartList.length>0 && test.cartList.map(item => (
            <div className='carrito'>
              <h2 className='text-center'>{item.name}</h2>
              <img src={item.image} alt='imagen de producto'/>
              <h5>{item.quantity} items</h5>
              <h3>Precio: S/. {item.price} cada uno</h3>
              <button className='btn btn-danger' onClick={() => test.removeItem(item.id)}>Eliminar</button>
              <hr />
            </div>
          ))
        }
        <div className='border p-3 border-primary border-1 resumen w-50 m-auto'>
          <h2 className='p-1 bg-info bg-opacity-10'>Resumen de compra</h2>
          { test.cartList.length>0 && test.cartList.map(item => (
              <p>{item.name} | Subtotal: {item.quantity} x {item.price} = {item.quantity*item.price}</p>
            )) 
          }
        
          {
            test.cartList.length>0
            ?<>
              <h4>Monto a pagar: S/. {test.totalPrice()}</h4>
              <button className='btn btn-warning' onClick={test.clear}>Vaciar carrito</button>
            </>
            
            :<div>
              <h5>Ups... no has añadido ningún producto al carrito.</h5>
              <Link to="/"><button className='btn btn-success'>Seguir comprando</button></Link>
            </div>
          }
        </div>
            
      </div>
    </>
    
  )
}

export default Cart