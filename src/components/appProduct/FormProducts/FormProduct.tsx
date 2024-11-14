import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

interface IPropsFormProduct {
    handleAddProduct: (values: { name: string; image: string; price: number }) => void
}

export const FormProduct:FC<IPropsFormProduct> = ({ handleAddProduct }) => {
    const {values, handleChange, resetForm} = useForm({
        name: '',
        image: '',
        price: 0
    })

    const handleSubmit = () => {
        handleAddProduct(values)
        resetForm()
    }
    
  return (
    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Ingrese el nombre del producto" value={values.name} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" name="image" placeholder="Ingrese imagen del producto" value={values.image} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" placeholder="Ingrese precio del producto" value={values.price} onChange={handleChange}></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSubmit} variant="primary">Agregar Producto</Button>
        </div>
    </Form>
  )
}
