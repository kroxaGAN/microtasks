import {NewComponents} from "./NewComponents";
import {Button} from "./Button";

type PropsType={
    title:string
}

export const Body=(props:PropsType)=>{
    const students=[
        {id:1,name:"Igor",age:33},
        {id:2,name:"Ivan",age:13},
        {id:3,name:"Andru",age:45},
    ]
const MyFirstSub=()=>{
    console.log('Vasia')
}
const MySecondSub=()=>{
    console.log('Ivan')
}
const onClickHandler=(name:string)=>{
    console.log(name)
}
const foo1=()=>{
    console.log("100200")
}
const foo2=(value:number)=>{
    console.log(value)
}
const subscriberFoo=(subscriber:string)=>{
    console.log(subscriber)
}

    return(

        <>
            <div>{props.title}</div>
            <NewComponents students={students}/>
            <button onClick={MyFirstSub}>My 1 subn</button>
            <button onClick={MySecondSub}>My 2 subn</button>
            <button onClick={()=>onClickHandler('Petia')} >My 3 subn</button>
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
            <Button title={"chanel 1"} callback={()=>subscriberFoo("Vasiliy")}/>
            <Button title={"chanel 2"} callback={()=>subscriberFoo("Ivan")}/>
        </>

    )
}
