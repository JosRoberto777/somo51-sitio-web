    document.addEventListener("DOMContentLoaded", () => {
        const contenedor = document.getElementById("grid-productos-proveedor");
        
        // Verificamos que la base de datos de productos exista
        if (typeof productosDemo === "undefined") {
            console.error("No se encontró la base de datos productosDemo en Productos Honey Wale.js");
            return;
        }

        // ORDEN EXACTO SOLICITADO: Parejas simétricas por categoría
        const categorias = {
            "Scooters": productosDemo.filter(p => p.id === "hw-m1-elite" || p.id === "hw-gt1"),
            "Bicicletas": productosDemo.filter(p => p.id === "hw-f6" || p.id === "hw-k6-pro"),
            "Motobicis": productosDemo.filter(p => p.id === "hw-u1" || p.id === "hw-sz110"),
            "Motos": productosDemo.filter(p => p.id === "hw-dm04" || p.id === "hw-dm06"),
            "Infantiles": productosDemo.filter(p => p.id === "hw-e11" || p.id === "hw-jl009")
        };

        let htmlContenido = "";

        // Iteramos sobre el objeto en el orden exacto en el que lo declaramos
        for (const [nombreCategoria, items] of Object.entries(categorias)) {
            if (items.length === 0) continue;

            htmlContenido += `
                <div class="category-section">
                    <h2 class="category-title">${nombreCategoria}</h2>
                    <div class="products-grid">
            `;

            items.forEach(producto => {
                htmlContenido += `
                    <div class="product-card">
                        <div class="card-image-box">
                            <img src="../${producto.imgPrincipal}" alt="${producto.nombre}" class="card-img">
                        </div>
                        <div class="card-info-box">
                            <span class="card-brand">HONEY WHALE</span>
                            <h3 class="card-product-name">${producto.nombre}</h3>
                            <p class="card-description">${producto.descripcion || 'Equipo de movilidad eficiente con rendimiento premium.'}</p>
                            
                            <div class="card-footer-action">
                                <button class="btn-view-details" onclick="window.location.href='../ProductoInterfaz.html?id=${producto.id}'">
                                    Ver Detalles <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });

            htmlContenido += `
                    </div>
                </div>
            `;
        }

        contenedor.innerHTML = htmlContenido;
    });