import compareAsc from 'date-fns/compareAsc';

const taskDates = () => {
  const allTasks = JSON.parse(localStorage.getItem('allTasks'));
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  let datesArray = [];
  allTasks.forEach((task) => {
    datesArray.push(task.dueDate);
  });
  datesArray = datesArray.filter((item, index) => {
    const date = new Date(item);
    if (datesArray.indexOf(item) === index && (compareAsc(todayDate, date) === -1
    || compareAsc(todayDate, date) === 0)) {
      return true;
    }
    return false;
  });

  return datesArray;
};

export default taskDates;
