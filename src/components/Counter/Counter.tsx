import { useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    const handleIncrement = () => {
        setCounter(c => c + 1)
    }

    const handleDecrement = () => {
        if(counter > 0) {
            setCounter(c => c - 1)
        }
    }

  return (
    <div>
        <h2>Counter: {counter}</h2>

        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
