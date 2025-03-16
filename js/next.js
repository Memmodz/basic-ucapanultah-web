let currentIndex = 0;
const cards = document.querySelectorAll(".card");

function showCard(index) {
    cards.forEach((card, i) => {
        let offset = i - index;
        if (offset >= 0) {
            card.style.transform = `translateX(${offset * 8}px) translateY(${offset * 4}px) rotate(${offset * 2}deg)`;
            card.style.zIndex = cards.length - offset;
            card.style.opacity = `${1 - offset * 0.1}`;
            card.style.filter = `brightness(${1 - offset * 0.1})`;
        } else {
            card.style.opacity = "0";
            card.style.transform = "translateX(-50%) scale(0.8)";
        }
    });
}

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        showCard(currentIndex);
    }
});

document.getElementById("btnLanjut").addEventListener("click", function() {
    window.open("https://api.whatsapp.com/send/?phone=6285642650115&text&type=phone_number&app_absent=0", "_blank");
});


document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showCard(currentIndex);
    }
});

showCard(currentIndex);


