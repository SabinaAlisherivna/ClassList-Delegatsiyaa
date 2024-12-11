window.addEventListener('DOMContentLoaded', () =>{
 const tabs = document.querySelectorAll('.tabheader__item'),
 tabContents = document.querySelectorAll('.tab__content'),
 tabParents = document.querySelectorAll('.tabheader__items')

function hideTabContents(){
 tabContents.forEach(tabContents =>{
  tabContents.style.display = 'none'
 })
 tabs.forEach(tab =>{
  tab.classList.remove('tabheader__item_active')
 })
}
function showTabContent(index){
 tabContents[index].style.display = 'flex'
 tabs[index].classList.add('tabheader_item_active')
}
  hideTabContents()
  showTabContent(1)
})