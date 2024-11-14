import { useForm } from '../../hooks/useForm'

export default function Form() {
    const {values, handleChange, resetForm} = useForm({
        email: '',
        name: '',
        age: 0
    })

    const { email, name, age } = values
    
    const handleSubmit = () => {
        console.log(values)
    }

  return (
    <div>
        <h2>Formulario</h2>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: '2vh'
        }}>
            <input value={email} name="email" onChange={handleChange} type="email" placeholder="j.perez@gmail.com"/>
            <input value={name} name="name" onChange={handleChange} type="text" placeholder="Juan Perez"/>
            <input value={age > 0 ? age : 0} name="age" onChange={handleChange} type="number"/>
        </div>
        <div>
            <button onClick={handleSubmit} type="submit">Submit</button>
            <button onClick={resetForm}>Reset Form</button>
        </div>
    </div>
  )
}
