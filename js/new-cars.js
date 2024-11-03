const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');


Array.from(tabItem).forEach(function(item) {
  item.addEventListener("click" , open)
  
});

function open(event) {
  const tabTarget = event.currentTarget;
  const btn = tabTarget.dataset.button;

  Array.from(tabItem).forEach(function(item) {
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');


  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${btn}`).classList.add('tabs__content-item--active');
}