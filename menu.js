
//Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('active')
    )
    this.classList.add('active')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-side')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})