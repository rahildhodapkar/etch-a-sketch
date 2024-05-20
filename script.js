const container = document.querySelector("#container");
const btn = document.querySelector("button");

function createGrid(dim) {
    container.innerHTML = "";

    flexBasis = (1 / dim) * 100 + '%';

    for (let i = 0; i < dim * dim; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.flexBasis = flexBasis;
        div.style.aspectRatio = "1";
        div.style.opacity = "0.1";
        container.appendChild(div);
    }
    
    document.querySelectorAll(".grid").forEach(item => {
        item.addEventListener("mouseover", () => {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            item.style.opacity = String(Math.min(1.0, Number(item.style.opacity) + 0.1));
        });
    });
}

createGrid(16);

btn.addEventListener("click", () => {
    res = prompt("Enter the number of squares you want on both sides!");
    if (typeof Number(res) === "number" && res > 0 && res <= 100) {
        createGrid(res);
    }
});
