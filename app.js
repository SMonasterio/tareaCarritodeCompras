/*Crear una aplicación de changuito de compras donde se ingresen productos como elementos en un array
----------------------------------

- Las tareas que debe hacer son las siguientes:
 - Agregar producto al carrito
 - Listar los productos del carrito 
 - Buscar un producto en el carrito 
 - Filtrar productos según una palabra
 - Eliminar producto del carrito*/

//Pedir que indique un producto y guardarlo en un carrito

let carrito = ["BANANA", "BICICLETA", "HORNO", "PARLANTES"];

//--------------------------------------------------------------------------------------------------------------
//- Listar los productos del carrito

//LISTAR CON FOR
/*function listarCarrito() {
  console.log('Este es su carrito')
   for (let i = 0; i < carrito.length; i++) {
   console.log(`${i+1} - ${carrito[i]}`);
  }
}

listarCarrito()*/

//lISTAR CON MAP
function listarProductos() {
  console.log("Este es su carrito");
  carrito.map(function (producto, index) {
    console.log(`${index + 1} - ${producto}`);
  });
}
listarProductos();

//-----------------------------------------------------------------------------------------------------------
//- Agregar producto al carrito

//El IF evalua la condicion, no lo toma si pongo null o cancelar
/*function agregarProducto() {
  let producto = prompt("Indique un producto");
  if (producto) {
    carrito.push(producto.toUpperCase());
    console.log("Agregado al carrito");
  }
  
}*/

//Con WHILE
//El método .trim elimina los espacios vacios antes y despues de la palabra
//El método .toUpperCase convierte todas las letras a mayusculas
function agregarProducto() {
  let producto = prompt("Indique un producto");
  while (producto) {
    carrito.push(producto.trim().toUpperCase());
  }
}

//------------------------------------------------------------------------------------------------------------

//- Buscar un producto en el carrito

//El método .inlcudes sirve para buscar dentro del array
function buscarProducto() {
  let producto = prompt("Ingrese el producto a buscar");

  if (producto) {
    let resultado = carrito.includes(producto.trim().toUpperCase());
    if (resultado) {
      console.log(
        `El producto ${producto.trim().toUpperCase()} está en el carrito`
      );
    } else {
      console.warn("El producto no está en el carrito");
    }
  } else {
    console.error("El producto no está en el carrito");
  }
}

//--------------------------------------------------------------------------------------------------------------

// - Filtrar productos según una palabra

//El método .filter crea un nuevo array con los resultados que filtra
// El método de los string indexof busca la posicion de la letra que buscamos(cuando no está devuelve un -1)
function filtrarProductos() {
  let producto = prompt("Ingrese producto a filtrar");

  if (producto) {
    let productos = carrito.filter(function (produc) {
      return produc.indexOf(producto.trim().toUpperCase()) > -1;
    });
    //console.log(productos);
    if (productos.length > 0) {
      return productos;
    } else {
      console.error("No se encontró ningun producto");
    }
  } else {
    console.error("Campo vacio");
  }
}

//--------------------------------------------------------------------------------------------------------------

//- Eliminar producto del carrito

//El método pasrseInt es para pasar a n° entero el n°que ingrese el usuario
//pos -1 es para
//El método confirm sirve para validar y devuelve un true o false
function eliminarProducto() {
  let pos = prompt("Ingrese el número del producto a eliminar");
  if (pos) {
    pos = parseInt(pos);
    let producto = carrito[pos - 1];
    if (producto !== undefined) {
      let validar = confirm(`Esta seguro que quiere eliminar ${producto}`);
      if (validar) {
        carrito.splice(pos - 1, 1);
        console.log(`Eliminado el producto ${producto}`);
        listarProductos();
      }
    } else {
      console.error("No hay producto con esa posición");
    }
  } else {
    console.error("Ocurrió un error y no es posible realizar la acción");
  }
}
