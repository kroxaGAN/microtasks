import {FilterType, MoneyOneType} from "./Foter";

type PropsType={
    currentMoney:MoneyOneType[]
    callback:(value:FilterType)=>void
}


export const FilterMoney = (props:PropsType) => {
    return (
        <>
            <ul>
                {
                    props.currentMoney.map((el, index) => {
                        return (
                            <li key={index}>
                                <span>{el.banknots}</span>
                                <span>{el.value}</span>
                                <span>{el.number}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={() => props.callback("All")}>All</button>
            <button onClick={() => props.callback("Rubls")}>RUBLS</button>
            <button onClick={() => props.callback("Dollars")}>Dollars</button>
        </>
    )
}
