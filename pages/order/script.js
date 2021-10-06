function showInfoDown(str) {
    var e, i, f, j, elem;

    elem = document.querySelector("#" + str).parentElement.firstElementChild.firstElementChild.children;
    e = elem[2].children;

    for (i = 0; i < e.length; i++) {
        e[i].classList.toggle('default-hidden');
    }

    f = document.getElementsByClassName('item-down');

    if (document.getElementById(str).classList.contains('default-hidden')) {
        for (j = 0; j < f.length; j++) {
            console.log(j + " - " + "\n");
            if (!f[j].classList.contains('default-hidden'))
                f[j].classList.add('default-hidden');
        }
    }

    document.getElementById(str).classList.toggle('default-hidden');


}

function openDishGroup(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("order-item-list");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("order-item-links");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
        console.log('\n' + tablinks[i].tagName)
    }

    tablinks = document.getElementsByClassName("order-item-btns");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
        console.log('\n' + tablinks[i].tagName)
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");

    collapseVertList('igl-list');
}

function collapseList(str) {
    var c = document.getElementsByClassName('order-sublist');
    /*
    var i;
    for(i = 0; i < c.length; i++) {
        c[i].style.display = 'none';
    }*/
    if (document.getElementById(str).style.display == 'block')
        document.getElementById(str).style.display = 'none';
    else
        document.getElementById(str).style.display = 'block';
}
var isHiddenSidebar = true;


function collapseVertList(str) {
    document.getElementById(str).classList.toggle('default-hidden');
}