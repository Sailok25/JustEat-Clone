function myFunction() {
    const entregas = document.querySelectorAll("#metodo .entrega");
    
    entregas.forEach(entrega => {
        entrega.classList.toggle("desactivado");
    });
}
