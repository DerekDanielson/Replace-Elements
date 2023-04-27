function replaceFirstItem(){
    const firstItem = document.querySelector('li');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

replaceFirstItem();