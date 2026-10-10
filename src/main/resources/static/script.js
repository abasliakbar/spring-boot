const statusEl = document.getElementById("status");
const listEl = document.getElementById("product-list");
const loadBtn = document.getElementById("load-btn");

async function loadProducts() {
    try {
        const response = await fetch("/products");
        if (!response.ok) throw new Error("Server xətası: " + response.status);

        const products = await response.json();

        listEl.innerHTML = "";
        products.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            listEl.appendChild(li);
        });

        statusEl.textContent = "Backend ilə əlaqə var ✅";
        statusEl.className = "status ok";
    } catch (error) {
        statusEl.textContent = "Backend ilə əlaqə yoxdur ❌";
        statusEl.className = "status error";
        console.error(error);
    }
}

loadBtn.addEventListener("click", loadProducts);
loadProducts();