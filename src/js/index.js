(function () {
  const d = document,
    tabs = d.querySelector('.tabs'),
    tab = d.querySelectorAll('li'),
    contents = d.querySelectorAll('.content');

  tabs.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === 'LI') {
      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('active');
      }
      e.target.classList.toggle('active');

      for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
      }

      const tabId = '#' + e.target.dataset.tabId;
      d.querySelector(tabId).classList.toggle('active');
    }
  });
})();