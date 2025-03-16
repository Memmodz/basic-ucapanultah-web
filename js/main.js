document.addEventListener("DOMContentLoaded", () => {
    let sections = document.querySelectorAll('.section');
    let audio = document.getElementById("audio");
    let btnLanjut = document.getElementById("btnLanjut");

    // Waktu setiap perubahan teks dan gambar (harus sesuai dengan audio)
    let timing = [0, 1, 3, 5, 6, 9];
    let index = 0;

    function changeSection() {
        sections.forEach(sec => sec.classList.remove("active"));
        if (index < sections.length) {
            sections[index].classList.add("active");

            // Tampilkan tombol lanjut setelah bagian terakhir
            if (index === sections.length - 1) {
                setTimeout(() => {
                    btnLanjut.style.display = "block";
                }, 2000); // Muncul setelah 2 detik
            }
        }
    }

    audio.addEventListener("timeupdate", () => {
        let currentTime = Math.floor(audio.currentTime);
        if (timing.includes(currentTime)) {
            index = timing.indexOf(currentTime);
            changeSection();
        }
    });

    // Putar musik dan mulai animasi saat halaman dimuat
    setTimeout(() => {
        audio.play();
        changeSection();
    }, 1000);

    // Fungsi ketika tombol "Lanjut" diklik
    btnLanjut.addEventListener("click", () => {
        window.location.href = "next.html"; // Arahkan ke halaman selanjutnya
    });
});
