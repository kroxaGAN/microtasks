import {NewComponents} from "./NewComponents";

type PropsType={
    title:string
}

export const Body=(props:PropsType)=>{
    const students=[
        {id:1,name:"Igor",age:33},
        {id:2,name:"Ivan",age:13},
        {id:3,name:"Andru",age:45},
    ]

    return(
        <>
            <div>{props.title}</div>
            <NewComponents students={students}/>
        </>

    )
}
