// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/** Popup-window */

function openPop() {
    document.getElementById("author-popup").style.display = "block";
  }
  
  function closePop() {
    document.getElementById("author-popup").style.display = "none";
  }

/** Language swtich */

function switchToEng() {
    // document.querySelectorAll(".en").style.display = "block";
    // document.getElementById("lv").style.display = "none";
    const nodeEn = document.querySelectorAll(".en");
    for (let i = 0; i < nodeEn.length; i++) {
        nodeEn[i].style.display = "block";
    }

    const nodeLv = document.querySelectorAll(".lv");
    for (let i = 0; i < nodeLv.length; i++) {
        nodeLv[i].style.display = "none";
    }

    const lat = document.querySelectorAll(".lat-lang");
    lat[0].style.color = "#FCA311";
    const eng = document.querySelectorAll(".en-lang");
    eng[0].style.color = "#FFFFFF";

  }

function switchToLat() {
    // document.querySelectorAll(".en").style.display = "none";
    // document.getElementById("lv").style.display = "block";
    const nodeEn = document.querySelectorAll(".en");
    for (let i = 0; i < nodeEn.length; i++) {
        nodeEn[i].style.display = "none";
    }

    const nodeLv = document.querySelectorAll(".lv");
    for (let i = 0; i < nodeLv.length; i++) {
        nodeLv[i].style.display = "block";
    }

    const lat = document.querySelectorAll(".lat-lang");
    lat[0].style.color = "#FFFFFF";
    const eng = document.querySelectorAll(".en-lang");
    eng[0].style.color = "#FCA311";

}

