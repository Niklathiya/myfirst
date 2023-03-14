import React from 'react'
import { useState } from 'react'


const Usestate = () => {

    const [student, setStudent] = useState([
        { id: 1, name: 'Student1' },
        { id: 2, name: 'Student2' },
        { id: 3, name: 'Student3' }
    ])
    
    const onClickHandler = () => {
        setStudent(
            [{...student, id: 4, name: 'Student4'}]
        )
    }

    return (
        <div>
            <button onClick={onClickHandler}>click</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((i,index) => {
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Usestate
