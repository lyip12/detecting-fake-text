document.getElementById("result_empty").style.height = Math.floor(window.innerHeight - 230 - document.getElementById("result_desc").clientHeight) + "px";

function request_result() {
    document.getElementById("result_empty").style.display = "none";
    document.getElementById("all_result").style.height = Math.floor(window.innerHeight - 230 - document.getElementById("result_desc").clientHeight) + "px";
}

function openFullscreen() {

    document.getElementById("openFull").style.display = "none";
    document.getElementById("unFull").style.display = "flex";

    if (document.body.requestFullscreen) {
        document.body.requestFullscreen();
    } else if (document.body.webkitRequestFullscreen) {
        /* Safari */
        document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) {
        /* IE11 */
        document.body.msRequestFullscreen();
    }

    resize();
}

function undoFullscreen() {

    document.getElementById("unFull").style.display = "none";
    document.getElementById("openFull").style.display = "flex";

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
    }

    resize();
};

function resize(){
    setTimeout(function(){
        document.getElementById("result_empty").style.height = Math.floor(window.innerHeight - 230 - document.getElementById("result_desc").clientHeight) + "px";
    }, 100)
}