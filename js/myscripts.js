function cambiarPaginaDeTienda(numeroDePagina) {
    var listaDeProductos = document.getElementsByClassName("product");
    const productosPorPagina
    for (let i = 0 ; i < listaDeProductos.length; i++) {
        console.log(i);
        listaDeProductos[i].style.display = 'none';
    }

    for (let i = 1; i < 6; i++){
        var x = document.getElementById("liNumPag" + i);
        if (i == numeroDePagina){
            x.className = "active";
        }
        else{
            x.className = "";
        }
    }
} 