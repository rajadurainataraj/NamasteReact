const Shimmer = () => {
    return (
        <div className='restaurentContainer'>

            {Array(15).fill("").map((e,i) =>  <div key={i} className='shimmer'></div> ) }
    </div> 
    )
   
}
export default Shimmer;