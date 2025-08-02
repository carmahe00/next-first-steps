import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata:Metadata ={
title: "Shopping Cart",
description: "add new counts"
}

export default function CounterPage() {
    

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen " >

            <span>shopping cart</span>
            <CartCounter value={20} />

        </div>
    );
}
