 const box = document.getElementById("box");
        const button = document.getElementById("changeBtn");
 
        button.addEventListener("click", function () {
            box.textContent = "take that previous quote seriously";
            box.style.backgroundColor = "#1732D8";
            box.style.color = "#ffffff";
            box.style.fontSize = "24px";
        });