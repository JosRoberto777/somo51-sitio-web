document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("grid-productos-proveedor");
    
    if (typeof productosDemo === "undefined") {
        console.error("No se encontró la base de datos.");
        return;
    }

    // Dejamos las categorías preparadas para cuando lleguen los productos
    const categorias = {
        "Almacenamiento (Tinacos/Cisternas)": productosDemo.filter(p => p.proveedor === "EquiPluss" && p.categoria === "Almacenamiento"),
        "Paquetes y Kits": productosDemo.filter(p => p.proveedor === "EquiPluss" && p.categoria === "Kits"),
        "Bombas y Tubería": productosDemo.filter(p => p.proveedor === "EquiPluss" && p.categoria === "Equipamiento")
    };

    let htmlContenido = "";
    let hayProductos = false;

    for (const [nombreCategoria, items] of Object.entries(categorias)) {
        if (items.length === 0) continue;
        hayProductos = true;
        // ... (Aquí va tu mismo código de htmlContenido += ... para renderizar las tarjetas, idéntico al de Honey Whale) ...
    }

    // Mensaje temporal de espera si no hay productos dados de alta aún
    if (!hayProductos) {
        htmlContenido = `
            <div style="text-align: center; padding: 80px 20px; color: #7f8c8d;">
                <i class="fas fa-tools fa-4x" style="color: #bdc3c7; margin-bottom: 20px;"></i>
                <h2>Catálogo en Construcción</h2>
                <p>Estamos afinando los últimos detalles de los convenios con EquiPluss. Vuelve pronto.</p>
            </div>
        `;
    }

    contenedor.innerHTML = htmlContenido;
});

