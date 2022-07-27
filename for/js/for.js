// creare un array che contiene una lista della spesa
// creare un algoritmo che stampa tutti gli elementi dell' array in una lista (li)
// prima con il ciclo for poi con il ciclo while

const listaSpesa = ['mele', 'biscotti', 'pasta', 'uova', 'marmellata', 'olio', 'acqua', 'patate']


const listWrapper = document.querySelector('.list-wrapper')
for(let i=0; i<listaSpesa.length; i++){
    const listElement = listaSpesa[i]

    const li = document.createElement('li')
    li.className = 'list-item'
    li.append(listElement)
    listWrapper.append(li)
}