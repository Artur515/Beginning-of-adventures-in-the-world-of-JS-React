export let init = function () {
    function undisplay() {
        for (let baner = 0; baner < baners.length; baner++) {
            baners[baner].style.display = "none";
        }
    }
    let carusel = document.getElementById("carusel");
    if (!carusel) return;
    let baners = carusel.getElementsByTagName("img");
    if (!baners) return;
    undisplay();

    let ActiveBaner = 0;
    baners[ActiveBaner].style.display = "block";
    window.setInterval(function () {
        ActiveBaner++;
        if (ActiveBaner >= baners.length) {
            ActiveBaner = 0;
        }
        undisplay();
        baners[ActiveBaner].style.display = "block";
    }, 5000);
};
window.addEventListener("load", init, false);
