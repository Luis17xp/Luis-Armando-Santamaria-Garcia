// Datos de ejemplo
const inventory = {
  "1": {
    "puntos a medir": <input type="text"> </input>,
    "ficha tecnica": ["Rojo", "Azul", "Verde", "cafe"],
    "total": 15
  },
  "2": {
    "puntos a medir": "********",
    "ficha tecnica": ["Naranja", "Amarillo", "Morado", "lila",],
    "total": 20
  },
  "3": {
    "punots a medir": "********",
    "ficha tecnica": ["blanco", "negro", ],
    "total": 10
  },
  
};

// Generar la tabla dinámicamente
const tablaBody = document.getElementById("tablaBody");

for (const productId in inventory) {
  const product = inventory[productId];

  // Crear una fila para cada producto
  const fila = document.createElement("tr");

  // Crear celdas para cada columna
  const puntosAMedir = document.createElement("td");
  const fichaTecnica = document.createElement("td");
  const noPrendaColores = document.createElement("td");
  const totalDePrendas = document.createElement("td");

  // Agregar el nombre del producto a la celda de "Puntos a medir"
  puntosAMedir.textContent = product.name;

  // Agregar los colores del producto a la celda de "Ficha Tecnica"
  fichaTecnica.textContent = product.colors.join(", ");

  // Agregar el número de prendas y colores a la celda de "No. Prenda/Colores"
  noPrendaColores.textContent = `${product.total} prendas, ${product.colors.length} colores`;

  // Agregar el total de prendas a la celda de "Total De Prendas"
  totalDePrendas.textContent = product.total;

  // Agregar las celdas a la fila
  fila.appendChild(puntosAMedir);
  fila.appendChild(fichaTecnica);
  fila.appendChild(noPrendaColores);
  fila.appendChild(totalDePrendas);

  // Agregar la fila a la tabla
  tablaBody.appendChild(fila);
}

