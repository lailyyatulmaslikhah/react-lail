import React,  { useState, useEffect } from "react";

export default function Windowwidth() {
    const [Windowwidth, setwindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
    window.addEventListener('resize', handleResize)
    }, [])

    return(
        <>
        <div>{Windowwidth}</div>
        </>
    )
}