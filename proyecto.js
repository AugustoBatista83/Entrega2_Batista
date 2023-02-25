let nombreUser = prompt("Ingresa tu nombre para continuar");
let edadUser = prompt(
  `Bienvenido ${nombreUser}, por favor indica tu edad para continuar en el sitio`
);

if (edadUser >= 18) {
  alert(
    `${nombreUser} puedes continuar en el sitio y realizar tus compras o reservas`
  )

function agregoPrecio () {
    
    
}
  
  function agregoProducto() {
    let productoIngresado = prompt("Ingrese nombre del Producto")
    alert(`El nombre del producto ingresado es : ${productoIngresado}`);
    let precioIngresado = parseFloat(prompt("Ingrese el precio del Producto "))
    alert(`El precio del producto ingresado es $${precioIngresado}`)
    const IVA = 0.22;
    let precioFinal = precioIngresado + precioIngresado * IVA
    alert(`El precio final del producto con IMPUESTOS es $${precioFinal}`)
  
  }

      class Producto{
        constructor(id, producto, precio,  tipoProducto){
          this.id = id,
          this.producto = producto,
          this.precio = precio, 
          this.tipoProducto = tipoProducto


        }
              mostrarInfoProducto(){
        console.log(`El producto ${this.producto} tiene un precio de $${this.precio} , corresponde a ${this.tipoProducto} `)
      }
      }

      const producto1 = new Producto(1, "Capuccino doble", 300 , "Cafe")
      console.log(producto1)
      producto1.mostrarInfoProducto()
      
      const producto2 = new Producto(2, "Cafe de maquina Expresso", 150 , "Cafe")
      console.log(producto2)
      producto2.mostrarInfoProducto()

      const producto3 = new Producto(3, "Torta de Chocolate", 278 , "Tortas")
      console.log(producto3)
      producto3.mostrarInfoProducto()


      const producto4 = new Producto(4, "Especiales frios", 100 , "Varios")
      console.log(producto4)
      producto4.mostrarInfoProducto()

      const producto5 = new Producto(5, "Meriendas para dos", 150 , "Meriendas")
      console.log(producto5)
      producto5.mostrarInfoProducto()

      const producto6 = new Producto(6, "Eventos", 200 , "Eventos")
      console.log(producto6)
      producto6.mostrarInfoProducto() 

      const producto7 = new Producto(7, "Ojitos", 20 , "Masas")
      console.log(producto7)
      producto7.mostrarInfoProducto()

      const producto8 = new Producto(8, "Cafe de la casa", 200 , "Cafe")
      console.log(producto8)
      producto8.mostrarInfoProducto()

      const producto9 = new Producto(9, "Mesa libre", 750 , "Meriendas")
      console.log(producto9)
      producto9.mostrarInfoProducto() 

      // Crear un array de objetos
    const menuProductos = []
    menuProductos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9)
    console.log(menuProductos)

    //Recorrer el array menuProductos
    // Se usa FOR of PARA SIMPLIFICAR EL RECORRIDO DEL ARRAYs
    for(let elemento of menuProductos){
      console.log(elemento.id, elemento.producto, elemento.precio, elemento.tipoProducto)
    }




      

  //MENU

  let salirMenu = true;
  do {
    let opcionMenu = prompt(`Ingrese la opcion deseada
          A   - Agregar Producto
          B   - Agregar Precio
          C   - Mostrar Datos Producto
          D   - Salir del Menu`) 

    switch (opcionMenu) {
      case "A":
        agregoProducto();
        break ;
      case "B":
        agregoPrecio();
        break;
      case "C":
        mostrarDatosProducto();
        break;
      case "D": 
      salirMenu = false;
      alert("Gracias por utilizar nuestro sitio, vuelve pronto!");
      break;

      default: alert("Elija una Opcion valida")
    }
  } while (salirMenu);

} else {
  alert(
    `Lo sentimos ${nombreUser} no tienes aun la edad suficiente para relizar compras web`
  );
}
