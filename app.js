function replaceFirstItem(){
    const firstItem = document.querySelector('li');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}


function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
}


function replaceAllItems(){
    const lis = document.querySelectorAll('li');

    lis.forEach((item, index) => {
        // item.outerHTML = '<li>Replace All</li>';
        //if(index === 1){
        //    item.innerHTML = 'Second Item';
        //} else {
        //item.innerHTML = 'Replace All';
        //}
    //});

    lis.forEach(
        (item, index) => 
            (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
    );
}


replaceFirstItem();
replaceSecondItem();
replaceAllItems();