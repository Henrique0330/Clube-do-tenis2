document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body"),
        sidebar = document.querySelector(".sidebar"),
        toggle = document.querySelector(".toggle"),
        modeSwitch = document.querySelector(".toggle-switch"),
        modeText = document.querySelector(".mode-text");
    if (sidebar) {
        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");
            if (body.classList.contains("dark")) {
                modeText.innerText = "Light Mode";
            } else {
                modeText.innerText = "Dark Mode";
            }
        });
    } else {
        console.error("Elemento com a classe '.sidebar' não encontrado.");
    }
    if (toggle) {
        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });
    } else {
        console.error("Elemento com a classe '.toggle' não encontrado.");
    }
    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});
function adicionarAoCarrinho(id) {
    const button = document.getElementById(`button-${id}`);

    if (button.innerText === 'Adicionar ao Carrinho') {
        button.innerText = 'Remover do Carrinho';
        button.classList.add('remover'); 
        // Lógica para adicionar o item ao carrinho...
    } else {
        button.innerText = 'Adicionar ao Carrinho';
        button.classList.remove('remover'); // Remove a classe "remover"
        // Lógica para remover o item do carrinho...
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imagesPerSlide = 5;
    let currentSlide = 0;
    function showSlides() {
        slides.forEach((slide, index) => {
            if (index >= currentSlide && index < currentSlide + imagesPerSlide) {
                slide.style.display = 'block'; // Exibir imagens dentro do intervalo
            } else {
                slide.style.display = 'none'; // Esconder as outras imagens
            }
        });
    }
    function transitionSlides() {
        slides.forEach(slide => {
            slide.style.transition = 'opacity 0.5s ease-in-out'; // Aplicar transição
        });
    }
    function resetTransition() {
        slides.forEach(slide => {
            slide.style.transition = 'none'; // Remover transição após a troca
        });
    }
    nextBtn.addEventListener('click', function () {
        currentSlide += imagesPerSlide;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        transitionSlides();
        showSlides();
        setTimeout(resetTransition, 500); // Remover transição após a troca (0.5 segundos)
    });
    prevBtn.addEventListener('click', function () {
        currentSlide -= imagesPerSlide;
        if (currentSlide < 0) {
            currentSlide = slides.length - imagesPerSlide;
        }
        transitionSlides();
        showSlides();
        setTimeout(resetTransition, 500); // Remover transição após a troca (0.5 segundos)
    });
    showSlides();
});





  

