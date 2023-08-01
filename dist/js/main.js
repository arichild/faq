const tabs = document.querySelector('.ui-tab');
const content = document.querySelectorAll('.ui-tabcontent');

if(tabs || content.length) {
  tabs.addEventListener('click', (e) => {
    const currTab = e.target.dataset.tab;
    const tab = e.target;
    const tabContent = content[currTab - 1]

    if (!currTab) {
      return;
    }

    tab.classList.toggle('active')
    tabContent.classList.toggle('active')
  })
}