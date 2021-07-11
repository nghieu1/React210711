import { useMemo, useState, ChangeEvent } from "react"
import Min1 from "./Min1"
import Min2 from "./Min2"
const InputNumber = () => {
    const [ number, setNumber ] = useState<number>(3)
    const [ dark, setDark ] = useState<boolean>(false)
    // FUNCTION
    const doubleNumber = useMemo(() => { return slowFunction(number) }, [number])
    const themeStyles = useMemo(() => {
        return {    
            backgroundColor: dark? 'black' : 'white',
            color: dark? 'white' : 'black'
        }
    },[dark])
    // const themeStyles = 
    //     {    
    //         backgroundColor: dark? 'black' : 'white',
    //         color: dark? 'white' : 'black'
    //     }
    const ChangeNumber = (
        event: ChangeEvent<HTMLInputElement>
    ) => setNumber(parseInt(event.target.value))
    // RENDER
    return (
        <>
            <>
                <Min1 number={number} onChange={ChangeNumber} />
            </>
            <>
                <button onClick={() =>setDark(!dark)}>Change Theme</button>
                <Min2 themeStyles={themeStyles} doubleNumber={doubleNumber} />
            </>
        </>
    )
    function slowFunction(num : number) {
        // for ( let i=0; i <= 1000000000; i++ ) {}
        return num*2
    }
}
export default InputNumber