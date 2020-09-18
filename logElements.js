logItemsOutsideBoundingClientRect();
function logItemsOutsideBoundingClientRect () {
    const allItems = [...document.getElementsByTagName("*")], docWidth = document.documentElement.offsetWidth;
    allItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.right > docWidth || rect.left < 0){
            console.log(item);
        }
    })
}
