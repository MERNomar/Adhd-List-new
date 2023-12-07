import ky from "ky";

export const getTodos = async () => {
  try {
    const res = await ky.get("/api/get-all");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const postTodo = async (todo) => {
  try {
    const res = await ky.post(`/api/post`, { json: todo });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const setCompleted = async (id) => {
  try {
    const res = await ky.put(`/api/update-todo/${id}`, {
      json: { completed: true },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getTodoItem = async (id) => {
  try {
    const res = await ky.get(`/api/get-todo/${id}`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const putUpdateTodo = async ({id , sidePanelItem}) => {
  try {
    const res = await ky.put(`/api/update-todo/${id}`, {
      json: sidePanelItem,
    });
    const data = await res.json();
    return data
  } catch (err) {
  }
};


