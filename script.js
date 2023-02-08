import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/images/logo.jpg';
import profile from './assets/images/person.png';

// let header = React.createElement('h1',{class:'header'},"Fruit Store🍒🍓")

// const li = React.createElement('li',{key:'1'},"orange")
// const li2 = React.createElement('li',{key:'2'},'apple')
// const li3 = React.createElement('li',{key:'3'},'mango')

// const ul = React.createElement('ul',{key:'ul'},[li,li2,li3])

// const div = React.createElement('div',{key:'div'},[header,ul])
// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(div)
const title = "hello"
const Content = () =>{
return "React DOM Element"
}

// const Header =()=> (
//     <div>
//         <h1 key="h1">"h1"</h1>
//         <h2 key='h2'>"h2"</h2>
//         <h3 key='h3'>"h3"</h3>
//     </div>
// )
// console.log(<Content/>)
// const HeaderFunction = ()=>{
//     return (
//         <div>
//             <Header></Header>
//              {Content()}
//             <h1>functional render</h1>
//         </div>
//     )
// }

const Header =()=>{
    return (
        <div className='container'>
            <img className='logo' src={logo}/>
            <input className='searchBar' type='search' placeholder='search items' name='name' />
            <img className='userIcon' src={profile} />
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Header/>)



