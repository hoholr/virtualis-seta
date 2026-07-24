// ===== Teljes képernyő gomb =====

const btn = document.getElementById("fullscreenBtn");

btn.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
    } else {
        await document.exitFullscreen();
    }
});

// ===== Fullscreen után újraméretezés =====

document.addEventListener("fullscreenchange", () => {
    window.dispatchEvent(new Event("resize"));
});