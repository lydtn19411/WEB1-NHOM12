function changePagination(type, element)
{
    let pages = document.getElementsByClassName('page-item');
    for (i = 0; i < pages.length; i++) {
        pages[i].style.background = "#ffffff";
    }
    element.style.background = "#8B3A62";
   
}