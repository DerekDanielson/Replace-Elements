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


replaceFirstItem();
replaceSecondItem();