import { FC } from "react"
import { Card } from "react-bootstrap"

interface ItemProduct {
    price: number
    image: string
    name: string
}

interface IPropsListProducts {
    items: ItemProduct[]
}

export const ListProducts: FC<IPropsListProducts> = ({items}) => {
  return (
    <div className="p-4 m-3 border rounded d-grid gap-2" style={{
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyItems: 'center',
        alignItems: 'center'
    }}>
        {
            items.map((item, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            ${item.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))
        }
    </div>
  )
}
