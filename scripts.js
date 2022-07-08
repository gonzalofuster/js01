let num=parseInt(prompt("Ingrese la cantidad de hamburguesas que te comerias"))

while(num >0){
    if( num<=2){
        alert("Estas normal")
        break
    }else if (num>2){
        alert("Gorditooo")
        break
    }
}
while(num<1){
    alert("Dale hermano , ingresa un numero valido")
    
    let num=parseInt(prompt("Ingrese la cantidad de hamburguesas que te comerias"))
    break
}
