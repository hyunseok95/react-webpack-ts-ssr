// This is an example of a third-party store
// that you might need to integrate with React.

// If your app is fully built with React,
// we recommend using React state instead.

let nextId = 0;
// let todos = [{ id: 1, text: "1" }];
let todos = { text: "1" };
let listeners: any[] = [];

export const todosStore = {
  addTodo(text: string) {
    todos.text = text;
    emitChange();
  },
  subscribe(listener: any) {
    console.log(listener());
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
