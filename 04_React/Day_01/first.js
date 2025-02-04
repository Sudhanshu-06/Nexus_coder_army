// create a element throw js

const React ={

    createElement: function (tag,style,children){
        const element= document.createElement(tag)
        element.innerText = children;
        return element;
    }

}
const header1 = React.createElement('h1',{},"Hello world!")
const header2 = React.createElement('h2',{},"How are you?")
const header3 = React.createElement('h3',{},"How are you?")

// const header1= document.createElement('h1')
// header1.innerText="Hello coder army";
// header1.style.backgroundColor="pink";
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2= document.createElement('h2')
// header2.innerText="Hello coder army";
// header2.style.backgroundColor="blue";
// header2.style.fontSize="30px";
// header2.style.color="white";

// const root = document.getElementById('root')
// root.append(header1)
// root.append(header2)
