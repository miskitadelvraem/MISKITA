const productos = [
    
    {
        nombre: "Chocolate de Ajonjolí al 60% de Cacao",
        presentacion: "Caja de 45 gr.",
        origen: "Llochegua",
        precio: "S/ 12.00",
        img: "assets/chocolate_ajonjoli.jpg"
    },
    {
        nombre: "Chocolate de Aguaymanto al 60%",
        presentacion: "Caja de 45 gr.",
        origen: "Llochegua",
        precio: "S/ 12.00",
        img: "assets/chocolate_aguaymanto.jpg"
    },
    {
        nombre: "Chocolate de Arándano al 70% de Cacao",
        presentacion: "Caja de 45 gr.",
        origen: "Llochegua",
        precio: "S/ 12.00",
        img: "assets/chocolate_arandano.jpg"
    },
    {
        nombre: "Café Tostado y Molido Premium",
        presentacion: "Bolsa Bilaminada / Caja de 250 gr.",
        origen: "VRAEM - Ayacucho",
        precio: "S/ 20.00",
        img: "assets/cafe_premium.jpg"
    },
    {
        nombre: "Chococafetón Miskita",
        presentacion: "Caja de 800 gr.",
        origen: "Llochegua",
        precio: "S/ 35.00",
        img: "assets/chococafeton.jpg"
    }
];
// Asegúrate de que tu array de productos esté arriba

function cargarProductos() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    productos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}" class="card-img" onerror="this.src='https://via.placeholder.com/300x220?text=Miskita'">
            <h3>${prod.nombre}</h3>
            <p style="font-size:0.9rem; color:#666;">Origen: ${prod.origen}</p>
            <p class="precio">${prod.precio}</p>
            <button class="btn" onclick="enviarWhatsApp('${prod.nombre}', '${prod.precio}')" style="padding: 8px 15px; font-size: 0.8rem; margin-top: auto; border:none; cursor:pointer;">
                Pedir por WhatsApp
            </button>
        `;
        grid.appendChild(card);
    });
}

function enviarWhatsApp(nombre, precio) {
    const telefono = "51910117194"; // Tu número de WhatsApp Business
    const mensaje = `Hola Miskita! 👋%0A%0AMe interesa comprar el producto: *${nombre}*%0APrecio: *${precio}*%0A%0A¿Podrían indicarme los pasos para realizar el pago por Yape? Muchas gracias.`;
    
    // Abre la ventana de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', cargarProductos);