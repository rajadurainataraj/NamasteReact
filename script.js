import React from 'react';
import ReactDOM from 'react-dom/client';

let header = React.createElement('h1',{class:'header'},"Fruit Store🍒🍓")

const li = React.createElement('li',{key:'1'},"orange")
const li2 = React.createElement('li',{key:'2'},'apple')
const li3 = React.createElement('li',{key:'3'},'mango')

const ul = React.createElement('ul',{key:'ul'},[li,li2,li3])

const div = React.createElement('div',{key:'div'},[header,ul])
let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)



