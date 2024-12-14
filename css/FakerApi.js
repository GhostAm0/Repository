const dataTypeSelect = document.getElementById("data-type");
const fetchDataButton = document.getElementById("fetch-data-button");
const dataRows = document.getElementById("data-rows");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

// Base URL de la API
const API_BASE = "https://fakerapi.it/api/v1";

function fetchData(dataType) {
  fetch(`${API_BASE}/${dataType}?_quantity=10`)
    .then((response) => {
      if (!response.ok) throw new Error("Error al obtener los datos");
      return response.json();
    })
    .then((data) => {
      displayData(dataType, data.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayData(dataType, data) {
  dataRows.innerHTML = ""; // Limpiar contenido previo

  data.forEach((item, index) => {
    const row = document.createElement("tr");

    const imageCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.image || `https://via.placeholder.com/100?text=${dataType}`;
    img.alt = "Imagen";
    imageCell.appendChild(img);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name || item.title || "Sin Nombre";

    const detailsCell = document.createElement("td");
    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Ver Detalles";
    detailsButton.addEventListener("click", () => showDetails(item));
    detailsCell.appendChild(detailsButton);

    row.appendChild(imageCell);
    row.appendChild(nameCell);
    row.appendChild(detailsCell);
    dataRows.appendChild(row);
  });
}

function showDetails(item) {
  modalTitle.textContent = item.name || item.title || "Sin Título";
  modalDescription.textContent = item.description || "Sin Descripción";
  modalImage.src = item.image || `https://via.placeholder.com/200?text=Detalles`;
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

fetchDataButton.addEventListener("click", () => {
  const dataType = dataTypeSelect.value;
  fetchData(dataType);
});
