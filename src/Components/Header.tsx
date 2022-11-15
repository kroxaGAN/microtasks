
type PropsType={
    title:string
}

export const Header=(props:PropsType)=>{
    return(
        <div>{props.title}</div>
    )
}
