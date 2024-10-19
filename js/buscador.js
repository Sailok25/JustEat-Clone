document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("buscarLocal");
    const localsSection = document.getElementById("locales");


    window.filtrar_locals = function () {
        const filter = searchInput.value.toLowerCase(); 
        const locals = localsSection.getElementsByClassName("local");


        for (let i = 0; i < locals.length; i++) {
            const nom_local = locals[i].getElementsByTagName("p")[0].textContent.toLowerCase(); // 
            const tipoVenta = locals[i].getElementsByClassName("tipo-venta")[0].textContent.toLowerCase(); 
            

            if (nom_local.includes(filter) || tipoVenta.includes(filter)) {
                locals[i].style.display = ""; 
            } else {
                locals[i].style.display = "none";
            }
        }
    };
});
