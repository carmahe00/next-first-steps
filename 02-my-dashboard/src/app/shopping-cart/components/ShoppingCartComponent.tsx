"use client"
import { useEffect, useState } from "react";
interface Props{
    value: number
}
export const CartCounter = ({ value= 10 }:Props) => {
    
    const [counter, setCounter] = useState(value);
    const incrementValue = () => {
        setCounter(previousValue => previousValue + 1)
    }

    const decrementValue = () => {
        setCounter(previousValue => previousValue - 1)
    }
    useEffect(() => {
        if(counter == 0)
            return setCounter(0);

    }, [counter])
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div className="flex">
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white, hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={incrementValue} >+1</button>
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white, hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={decrementValue}>-1</button>
            </div>
        </>
    );
}