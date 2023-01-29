let nombreUser = prompt("Ingresa tu nombre para continuar");
let edadUser = prompt(
  `Bienvenido ${nombreUser}, por favor indica tu edad para continuar en el sitio`
);

if (edadUser >= 18) {
  alert(
    `${nombreUser} puedes continuar en el sitio y realizar tus compras o reservas`
  )
  function agregoProducto() {
    let productoIngresado = prompt("Ingrese nombre del Producto")
    alert(`El nombre del producto ingresado es : ${productoIngresado}`);
  }

function agregoPrecio () {
    let precioIngresado = parseFloat(prompt("Ingrese el precio del Producto "))
    alert(`El precio del producto ingresado es $${precioIngresado}`)
    const IVA = 0.22;
    let precioFinal = precioIngresado + precioIngresado * IVA
    alert(`El precio final del producto con IMPUESTOS es $${precioFinal}`)
}

    const IVA  = 0.22 

    function mostrarDatosProducto() {
        let productoA = "Cafe" 
        let productoB = "Batido" 
        let productoC = "Medialunas"

        let precioProductoA = 234
        let precioProductoB = 223
        let precioProductoC = 123
        
        
        prompt(`El producto ${productoA} tiene un precio sin IMPUESTOS de $${precioProductoA }  y un precio total con IMPUESTOS de $${precioProductoA + (precioProductoA * IVA)}`)
        prompt(`El producto ${productoB} tiene un precio sin IMPUESTOS de $${precioProductoB }  y un precio total con IMPUESTOS de $${precioProductoB + (precioProductoB * IVA)}`)
        prompt(`El producto ${productoC} tiene un precio sin IMPUESTOS de $${precioProductoC }  y un precio total con IMPUESTOS de $${precioProductoC + (precioProductoC * IVA)}`)

      }

      class Producto{
        constructor(producto , precio){
          this.producto = producto,
          this.precio = precio 

        }
        mostrarInfoProducto(){
          console.log(`El producto ${this.producto} tiene un precio de $${this.precio} `)
        }
      }

      const producto1 = new Producto ("Tarta de Chocolate, 78")
      console.log(producto1)

  // MENU

  let salirMenu = true;
  do {
    let opcionMenu = prompt(`Ingrese la opcion deseada
          A   - Agregar Producto
          B   - Agregar Precio
          C   - Mostrar Productos y precios
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
