const removePage = (element, page) => {
  element.removeChild(page);
};

const addPage = (element, page) => {
  element.appendChild(page);
};

const setActivePage = (item) => {
  // resets active button
  const sidebarButtons = document.querySelectorAll('.sidebar-item');
  sidebarButtons.forEach((ele) => {
    ele.classList.remove('active');
  });

  const pageButton = document.getElementById(item);
  pageButton.classList.add('active');
};

export {
  removePage,
  addPage,
  setActivePage,
};
