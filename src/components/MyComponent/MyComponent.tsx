import { FC } from "react"

interface IPropsMyComponent {
    text: string
    color: string
    fontSize : number
}

export const MyComponent: FC<IPropsMyComponent> = ({text, color, fontSize}) => {
  return (
    <div style={{color: `${color}`, fontSize: `${fontSize}rem`}}><p>{text}</p></div>
  )
}
