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

export const setCompleted = async (id , token) => {
  try {
    return await ky.put(`/api/todos/update-todo/${id}`, {
      json: { completed: true },
      headers : {
        authorization: `token ${token}`
      }
    }).json();
  } catch (err) {
    console.log(err);
  }
};

export const getTodoItem = async (id) => {
  try {
    return await ky.get(`/api/todos/get-todo/${id}` , {
      headers : {
        authorization: `token ${token}`
      }
    }).json();
  } catch (err) {
    console.log(err);
  }
};

export const putUpdateTodo = async ({id , sidePanelItem}) => {
  try {
    return await ky.put(`/api/todos/update-todo/${id}`, {
      json: sidePanelItem,
    }).json()
  } catch (err) {
    console.log(err);
  }
};



