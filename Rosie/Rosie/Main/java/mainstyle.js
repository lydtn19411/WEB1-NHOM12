function changePagination(type, element) {
    let pages = document.getElementsByClassName('page-item');
    for (i = 0; i < pages.length; i++) {
        pages[i].style.background = "#ffffff";
    }
    element.style.background = "#8B3A62";

}

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small_img");
SmallImg[0].onclick = function () {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
}
SmallImg[4].onclick = function () {
    ProductImg.src = SmallImg[4].src;
}


function menu_list(type, element) {
    console.log('element');

    switch (type) {
        case 'menu':
            document.getElementById('menu_hor').style.display = 'block';
            break;
        case 'menu_none':
            document.getElementById('menu_hor').style.display = 'none';
            break;
    }

}





