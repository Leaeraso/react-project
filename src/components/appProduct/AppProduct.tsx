import { useState } from 'react'
import { FormProduct } from './FormProducts/FormProduct'
import Header from './Header/Header'
import { ListProducts } from './ListProducts/ListProducts'

interface ItemProduct {
    price: number
    image: string
    name: string
}

export default function AppProduct() {
    const [products, setProducts] = useState<ItemProduct[]>([])

    const handleAddProduct = (newItem: ItemProduct) => {
        setProducts(p => [...p, newItem])
    }

    console.log(products);
  return (
    <>
        <Header/>
        <h2 className='text-center'>Formulario</h2>
        <FormProduct handleAddProduct={handleAddProduct}/>
        <h2 className='text-center'>Productos</h2>
        {
            products.length > 0 ? <ListProducts items={products}/> : <h3 className='text-center'>No hay productos</h3>
        }
    </>
  )
}
