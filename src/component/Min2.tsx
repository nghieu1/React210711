import { useEffect } from "react"

interface InputNumber_Props {
    themeStyles: {
        backgroundColor: string,
        color: string
    }
    doubleNumber: number
}
const Min2 = ({themeStyles,doubleNumber}: InputNumber_Props) => {
    useEffect(() => {
        console.log(themeStyles)
    },[themeStyles])
    return (
        <>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}
export default Min2