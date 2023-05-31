import { createInboxList } from "../inbox/dom/inbox-dom";

const updatePages = () => {
  const element = document.getElementById('task-list');
  createInboxList(element);
};

export default updatePages;
