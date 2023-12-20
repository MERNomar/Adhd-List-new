import ky from "ky";

export const getTodos = async (token) => {
  try {
    return await ky
      .get("/api/todos/get-all", {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const postTodo = async (todo, token) => {
  console.log(todo);
  try {
    return await ky.post(`/api/todos/post`, {
      json: todo,
      headers: {
        authorization: `bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setCompleted = async (id, token) => {
  try {
    return await ky
      .put(`/api/todos/update-todo/${id}`, {
        json: { completed: true },
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const getTodoItem = async (id) => {
  try {
    return await ky
      .get(`/api/todos/get-todo/${id}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const putUpdateTodo = async ({ id, sidePanelItem }) => {
  try {
    return await ky
      .put(`/api/todos/update-todo/${id}`, {
        json: sidePanelItem,
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const getRootCategories = async (token) => {
  try {
    return await ky
      .get("/api/category/get-category-root", {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const postRootCategories = async (item, token) => {
  console.log(item);
  try {
    return await ky.post(`/api/category/post-category-root`, {
      json: item,
      headers: {
        authorization: `bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
