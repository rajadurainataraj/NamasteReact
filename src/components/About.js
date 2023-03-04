import ContactUs from "./ContactUs"
import { Outlet, Link } from "react-router-dom"
import { Component } from "react"
import userContext from "../utils/UserContext"

class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {

            user: {
                login: "dummy",
                avatar_url: "dummy Img"
            }

        }
        console.log("constructor")
    }
    async componentDidMount() {
        const user = await fetch('https://api.github.com/users/rajadurainataraj')
        const data = await user.json()
        console.log(data)
        this.setState({ user: data })
    }
    render() {

        console.log("render")
        return (
            <>
                <userContext.Consumer>
                    {value => console.log(value)}
                </userContext.Consumer>

                <h1>AboutUs</h1>
                <img src={this.state.user.avatar_url} />
                <h3> {this.state.user.login}</h3>
                {this.state.count}
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                }}> click</button>
                <ContactUs name={this.state.count} />
                <Outlet/>
            </>


        )

    }
}

// const AboutUs = () => {
//     return (
//         <>
//             <h1>About Us</h1>




//             {/* <Link to='contactus'>
//                 <h3>contactus</h3>
//             </Link>
//             <Outlet /> */}
//         </>
//     )
// }
export default AboutUs