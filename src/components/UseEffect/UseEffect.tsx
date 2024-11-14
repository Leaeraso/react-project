import { useEffect, useState } from "react"

export const UseEffect = () => {
    const [state, setState] = useState(false)

    useEffect(() => {
        console.log('mounted')

        return () => {
            console.log('unmounted');
        }
    }, [])
    useEffect(() => {
        console.log(state)
    }, [state])
  return (
    <div>
        <p>Estado: {state ? 'true' : 'false'}</p>
        <button onClick={() => setState(!state)}>Change state</button>
    </div>
  )
}
