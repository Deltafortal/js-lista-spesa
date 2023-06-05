// Prendo gli elementi dal DOM

const list = document.getElementById('list');

let listItem = '';


//Creo la lista della spesa

buyItems = ["uova", "latte", "caramelle", "pane", "pasta"]



// Creo il ciclo FOR

/* for(let i = 0; i < buyItems.length ;i++) 
{
    listItem += `<li>${buyItems[i]}<li>` 
}

*/


// Soluzione con il While

let i = 0;
while (i < buyItems.length) {
    listItem += `<li>${buyItems[i]}` 
    i++
}

list.innerHTML = listItem;