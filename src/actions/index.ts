import uuid from "uuid/v4";

export const actions = {
  addTodo: (label: string) => ({ type: "addTodo", id: uuid(), label }),
  remove: (id: string) => ({ type: "remove", id }),
  complete: (id: string) => ({ type: "complete", id }),
  clear: () => ({ type: "clear" }),
  edit: (id: string, label: string) => ({ type: "edit", id, label }),
  setFilter: (filter: string) => ({ type: "setFilter", filter })
};
