const openModal = (modal) => {
  modal.style.display = 'flex';
};

const closeModal = (modal) => {
  modal.style.display = 'none';
};

// window.onclick = (e) => {
//   const modal = document.getElementsByClassName('modal')[0];
//   if (e.target === modal) {
//     modal.style.display = 'none';
//   }
// };

export {
  openModal,
  closeModal,
};
