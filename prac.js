const element=React.createElement("h1",{id:"mahesh",className:"baburao",style:{backgroundColor:"blue", color:"orange"}},"hello coder army");
const element2=React.createElement("h2",{},"bokula malllesh");
const div=React.createElement("div",{},[element,element2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
const cat={
    city:"meonagar",
    languange:"meo meo",
    occupation:"searching food"
}
console.log(cat.languange)
console.log("hello")
console.log("koi bath nahi")
