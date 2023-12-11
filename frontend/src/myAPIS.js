import ky from "ky";

export const getTodos = async (token) => {
  try {
    return await ky.get("/api/todos/get-all" , {
       headers : {
        authorization: `token ${token}`
      }}).json()
  } catch (err) {
    console.log(err);
  }
};

export const postTodo = async (todo) => {
  try {
    const res = await ky.post(`/api/todos/post`, { json: todo });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const setCompleted = async (id) => {
  try {
    const res = await ky.put(`/api/todos/update-todo/${id}`, {
      json: { completed: true },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getTodoItem = async (id) => {
  try {
    const res = await ky.get(`/api/todos/get-todo/${id}`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const putUpdateTodo = async ({id , sidePanelItem}) => {
  try {
    const res = await ky.put(`/api/todos/update-todo/${id}`, {
      json: sidePanelItem,
    });
    const data = await res.json();
    return data
  } catch (err) {
    console.log(err);
  }
};



