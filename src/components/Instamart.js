import { useState, useContext } from "react"
import userContext from "../utils/UserContext"
const Section = ({ title, description, toggle, handler }) => {
    const {user} = useContext(userContext)
    console.log(handler.setToggle)
    return (
        <div className="border p-3 m-2 shadow-md">

            <div className="flex justify-between ">
                <h1>{ user.userName}</h1>
                <h1 className="text-xl p-1 ">{title}</h1>
                <button onClick={() => { handler() }}> {toggle ? "▽" : "△"} </button>
            </div>
            {toggle && <h3>{description}</h3>}

        </div>
    )
}


const Instamart = () => {

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum convallis lacus eu tristique. Aliquam nec hendrerit tortor. Sed turpis ex, tincidunt sed libero pharetra, ullamcorper maximus lectus. Aenean et odio fringilla est ullamcorper semper. Proin porta imperdiet tempus. Donec porttitor velit ut faucibus vehicula. Nullam faucibus velit eget erat sagittis pharetra eu ac leo. Proin quis mi egestas, consectetur ante blandit, laoreet turpis. Ut eget rhoncus sapien. Vivamus ullamcorper, augue sed lobortis consequat, elit eros ultricies mi, vitae porta lorem tortor eu tortor. Nulla accumsan ac est sit amet commodo. Pellentesque in lorem et tortor luctus interdum eleifend in ex. Vivamus lobortis venenatis dictum."
    const [toggle, setToggle] = useState("")
    return (
        <>
            <h1 className="text-3xl p-2">InstaMart</h1>
            <Section
                title={"About"}
                description={description}
                toggle={toggle === "About" ? "" :"About"}
                handler={() => { setToggle("About") }}
            />
            <Section title={"Home"} description={description} toggle={toggle === "Home" ? "" : "Home"} handler={() => { setToggle("Home") }} />
            <Section title={"Blog"} description={description} toggle={toggle === "Blog" ? "" : "Blog"} handler={() => { setToggle("Blog") }} />
            <Section title={"Cart"} description={description} toggle={toggle === "Cart" ? "" : "Cart"} handler={() => { setToggle("Cart") }} />
        </>
    )
}
export default Instamart