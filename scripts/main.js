
window.onclick = function (event) {
    if (event.target.classList.contains('modal-box')) {
        event.target.style.display = 'none';
    }
};

window.onload = function startUp() {
    hideSidebar();
    
    if(isHiddenSidebar == false)
        hideSidebar();
}(); 

function goThirdCol(colToShow) {
    var c = document.getElementById('sidebar').children;
    c[0].style.left = '-18.5em';
    c[2].style.left = '0em';
}

function goSecondCol(colToShow) {
    var c = document.getElementById('sidebar').children;
    c[0].style.left = '-18.5em';
    c[1].style.left = '0em';
}

function goFirstCol() {
    var c = document.getElementById('sidebar').children;
    var i;
    for(i=0; i < c.length; i++) {
        c[i].style.left = 18.5*i + 'em';
    }
    /*c[0].style.left = '0em';
    c[1].style.left = '18.5em';
    c[2].style.left = '37em';*/
}


function hideSidebar() {
    var sidebarE = document.getElementById('sidebar');
    
    if (sidebarE.style.left === '-17.5em') {
        document.getElementById('sidebar').style.left = '0em';
        
        document.getElementById('toggle-btn').style.transform = 'rotate(-90deg)';
        document.getElementById('container').style.left = '17.5em';
    } else {
       
        document.getElementById('toggle-btn').style.transform = 'rotate(0deg)'; document.getElementById("sidebar").style.left = "-17.5em"; document.getElementById("container").style.left = "0em";

        goFirstCol();
    }
}

function toggleMenu(str){
    var strElem = document.querySelector('#'+str);
    
    if (strElem.style.display === "block")
        strElem.style.display = "none";
    else
        strElem.style.display = "block";
}

function handleFileSelect(evt) {

    var files = evt.target.files;
    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function (theFile) {
        return function (e) {
            // Render thumbnail.
            document.getElementById('input-profile-pic').style.backgroundImage = "url('" + e.target.result + "')";
        };
    })(files[0]);

    // Read in the image file as a data URL.
    reader.readAsDataURL(files[0]);
}

document.getElementById('file-profile-pic').addEventListener('change', handleFileSelect, false);

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
// Great success! All the File APIs are supported.

} else {
    alert('The File APIs are not fully supported in this browser.');
}



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}