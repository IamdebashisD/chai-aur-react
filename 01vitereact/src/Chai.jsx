function Chai(){
    return(
        <h3>chai is ready</h3>
    )
}
function Fib(){
    const term = 10
    const arr = [0, 1]
    for (let i=0; i<=term; i++){
        let nextTerm = arr.at(-1) + arr.at(-2)
        arr.push(nextTerm)
    }
    return (
        <> 
            <h2>fibonacci series</h2>
            <p>{arr.join(', ')}</p>
        </>
    )
}
export {Chai, Fib}
export default Chai