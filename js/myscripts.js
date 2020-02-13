function cambiarPaginaDeTienda(numeroDePagina) {
    var listaDeProductos = document.getElementsByClassName("product");
    const productosPorPagina = 12;
    for (let i = 0 ; i < listaDeProductos.length; i++) {
        if (i < (numeroDePagina * productosPorPagina) && i >= ((numeroDePagina - 1 ) * productosPorPagina) ){
            listaDeProductos[i].style.display = 'block';
        }
        else{
            listaDeProductos[i].style.display = 'none';
        }
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