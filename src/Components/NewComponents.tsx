import React from "react";
import "../App.css"

type NewComponentsType = {
    students: StudentType[]
}
type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponents = (props: NewComponentsType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <>
            <div className={"forMap"}>new components</div>
            <ul>
                {props.students.map((el) => {
                    return (
                        <li key={el.id}>
                            {`${el.name} - ${el.age}`}
                        </li>
                    )
                })}
            </ul>

            <table width="100%" cellSpacing="0" border={1}  >
                {
                    topCars.map((el,index)=>{
                        return(
                            <tr key={index} >
                                <th>{el.manufacturer}</th>
                                <th>{el.model}</th>
                            </tr>
                        )
                    })
                }
            </table>

        </>

    )
}
