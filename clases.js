//Se crea la clase Producto
class Producto {
  id;
  nombre;
  descripcion;
  precio;
  imagen;
  altimagen;
  categoria;
  infoextra;

  constructor(
    id,
    nombre,
    descripcion,
    precio,
    imagen,
    altimagen,
    categoria,
    infoextra
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    this.altimagen = altimagen;
    this.categoria = categoria;
    this.infoextra = infoextra;
  }

  //Método para crear los productos en el HTML como cards.
  mostrarProducto() {

    //div general que mostratá los productos
    let divProducto = document.createElement("div");
    divProducto.className = "card";

    //contenedor de imagen con sus atributos obligatorios
    let img = document.createElement("img");
    img.className = "card-img";
    img.setAttribute("src", `${this.imagen}`);
    img.setAttribute("alt", `${this.altimagen}`);

    //contenedor de categoria del producto
    let categoriaProducto = document.createElement("span");
    categoriaProducto.className = "card-category";
    categoriaProducto.innerText = `${this.categoria}`;

    //se agregan al div general los contenedores de imagen y de categoría
    divProducto.append(categoriaProducto);
    divProducto.append(img);

    //div del body del card de productos
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    //botón que mostrará un modal con el detalle del producto
    let botonDetalleProducto = document.createElement("button");
    botonDetalleProducto.className = "fa-solid fa-circle-info btn btn-secondary";
    botonDetalleProducto.innerText = "";
    botonDetalleProducto.setAttribute(
      "onclick",
      `mostrarModalDetalle(${this.id})`
    );
    cardBody.append(botonDetalleProducto);

    //nombre del producto
    let nombreProducto = document.createElement("h3");
    nombreProducto.className = "card-title";
    nombreProducto.innerText = `${this.nombre}`;
    cardBody.append(nombreProducto);

    //precio del producto
    let precioProdcuto = document.createElement("p");
    precioProdcuto.className = "card-price";
    precioProdcuto.innerText = `$ ${this.precio}`;
    cardBody.append(precioProdcuto);

    //descripción del producto
    let descripcionProducto = document.createElement("p");
    descripcionProducto.className = "card-text";
    descripcionProducto.innerText = `${this.descripcion}`;
    cardBody.append(descripcionProducto);

    //botón de agregar al carrito
    let botonAgregarCarrito = document.createElement("button");
    botonAgregarCarrito.className = "btn btn-primary addCart";
    botonAgregarCarrito.innerText = "Agregar al carrito";
    botonAgregarCarrito.setAttribute("onclick", `agregarAlCarrito(${this.id})`);
    cardBody.append(botonAgregarCarrito);

    //Se agrega el cardBody al div general del producto
    divProducto.append(cardBody);

    return divProducto;
  }

  //Método para imprimir el modal del detalle del producto
  imprimirModal(producto){

    //div general del Modal de detalle de producto
    let divModal = document.createElement("div");
    divModal.className = "modal";

    let divModalContainer = document.createElement("div");
    divModalContainer.className = "modal-container";

    let divModalImage = document.createElement("div");
    divModalImage.className = "modal-img";

    let imgProducto = document.createElement("img");
    imgProducto.className = "img";
    imgProducto.setAttribute("src",`${producto.imagen}`);
    imgProducto.setAttribute("alt",`${producto.altimagen}`);
    divModalImage.append(imgProducto);

    divModalContainer.append(divModalImage);

    let divModalContent = document.createElement("div");
    divModalContent.className = "modal-content";

    let tituloDetalle = document.createElement("h3");
    tituloDetalle.className = "modal-title";
    tituloDetalle.innerText = `${producto.nombre}`;
    divModalContent.append(tituloDetalle);

    let productoDescripcion = document.createElement("p");
    productoDescripcion.className = "modal-description";
    productoDescripcion.innerText = `${producto.descripcion}`;
    divModalContent.append(productoDescripcion);

    let productoInfoExtra = document.createElement("p");
    productoInfoExtra.className = "modal-long-description";
    productoInfoExtra.innerText = `${producto.infoextra}`;
    divModalContent.append(productoInfoExtra);


    let precioProductoPrecio = document.createElement("p");
    precioProductoPrecio.className = "modal-price";
    precioProductoPrecio.innerText = `$ ${producto.precio}`;
    divModalContent.append(precioProductoPrecio);

    let botonCompraCardBody = document.createElement("button");
    botonCompraCardBody.className = "btn btn-primary";
    botonCompraCardBody.innerText = "Agregar al carrito";
    botonCompraCardBody.setAttribute("onclick",`agregarAlCarrito(${this.id})`);

    //botón para cerrar Modal detalle producto
    let botonCerrarCard = document.createElement("button");
    botonCerrarCard.className = "fa-regular fa-circle-xmark btn btn-secondary";
    botonCerrarCard.innerText = "";

    divModalContainer.append(botonCerrarCard);
    botonCerrarCard.addEventListener ("click", (e) => {

      const target = e.target; //para guardar quién disparó el evento
      divModal.remove();
  });

    divModalContent.append(botonCompraCardBody);
    divModalContent.append(botonCerrarCard);

    divModalContainer.append(divModalContent);

    divModal.append(divModalContainer);

    return divModal;

  }
}

//Clase para el Carrito
class Carrito {
  productos;

  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  devolverProductos() {
    return this.productos;
  }

  cantidadDeProductos() {
    return this.productos.length;
  }


  mostrarPrecioTotalDeLaCompra() {
    let total = 0;
    this.productos.forEach((p) => {
      total += p.precio;
    });
    return total;
  }

}
