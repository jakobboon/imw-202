document.addEventListener("DOMContentLoaded", function () {
    const blob = document.getElementById("blurred-blob");

    document.addEventListener("mousemove", function (event) {
        const hue = (event.clientX / window.innerWidth) * 360;
        const saturation = (event.clientY / window.innerHeight) * 100;
        blob.style.backgroundColor = `hsla(${hue}, ${saturation}%, 50%, 0.5)`;
    });
});
