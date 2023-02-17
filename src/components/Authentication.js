const Authentication = ({loggedIn}) => {
    let message = true;
    
    return (
    <button onClick={()=>loggedIn(message)}>Login</button>
)
}
export default Authentication