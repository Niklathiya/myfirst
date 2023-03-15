import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const Dynamictable = () => {

    const [list, setlist] = useState('')
    const data = [
        { title: 'Card title 1', description: 'description 1', icon: "fa-solid fa-house" },
        { title: 'Card title 2', description: 'description 2', icon: "fa-solid fa-message" },
        { title: 'Card title 3', description: 'description 3', icon: "fa-solid fa-truck-fast" },
        { title: 'Card title 4', description: 'description 4', icon: "fa-solid fa-headset" },
        { title: 'Card title 5', description: 'description 5', icon: "fa-solid fa-location-dot" },
        { title: 'Card title 6', description: 'description 6', icon: "fa-solid fa-taxi" }
    ]

    const onClickHandler = () => {
        setlist(!list)
    }



    return (
        <div>
            <button onClick={onClickHandler} className='btn btn-danger'>click here to hide</button>
            {list.length < 1 &&
                <Row>
                    {data.map((i, index) => (
                        <Col key={index} lg={3} className="card m-1">
                            <div className="card-body">
                                <h5 className="card-title">{i.title}</h5>
                                <p className="card-text">{i.description}</p>
                                <i className={i.icon} style={{ fontSize: "20px" }} />
                            </div>
                        </Col>
                    ))}
                </Row>}

        </div>

    )
}

export default Dynamictable
