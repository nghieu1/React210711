import { ChangeEventHandler } from "react"

interface InputNumber {
    number: number
    onChange: ChangeEventHandler
}
interface Inasdasdas {}
const Min1 = ({number,onChange} : InputNumber) => {
    return (
        <>
            <input type="number" value={number} onChange={onChange} />
        </>
    )
}
export default Min1