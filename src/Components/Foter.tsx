import {useState} from "react";
import {FilterMoney} from "./FilterMoney";

type PropsType = {
    title: string
}

export type FilterType = "All" | "Rubls" | "Dollars"
export type MoneyOneType={
    banknots: string,
    value: number,
    number: string
}

export const Foter = (props: PropsType) => {
    const [money, setMoney] = useState<MoneyOneType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [filter, setFilter] = useState<FilterType>('All')
    const onClickFilterHandler = (value: FilterType) => {
        setFilter(value)
    }
    let currentMoney = money
    if (filter === "Rubls") {
        currentMoney = money.filter((el) => el.banknots === 'RUBLS')
    }
    if (filter === "Dollars") {
        currentMoney = money.filter((el) => el.banknots === 'Dollars')
    }

    return (
        <>
            <div>{props.title}</div>
            <FilterMoney currentMoney={currentMoney} callback={onClickFilterHandler}/>
            <button onClick={()=>setMoney([])}>Clear</button>
        </>

    )
}
