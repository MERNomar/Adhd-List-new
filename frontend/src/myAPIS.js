import ky from "ky";

const getFunction = async (token, param) => {
  try {
    return await ky
      .get(`/api/${param}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const postFunction = async (token, param, json) => {
  try {
    return await ky
      .post(`/api/${param}`, {
        json: json,
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const putFunction = async (token, param, json) => {
  try {
    return await ky
      .put(`/api/${param}`, {
        json: json,
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getTodos = async (token) => {
  const GET_ALL_TODOS_PARAM = "/todos/get-all";
  return await getFunction(token, GET_ALL_TODOS_PARAM);
};

export const getTodoItem = async (TODO_ID, token) => {
  const GET_TODO_ITEM_PARAM = `/todos/get-todo/${TODO_ID}`;
  return await getFunction(token, GET_TODO_ITEM_PARAM);
};

export const getRootCategories = async (token) => {
  const GET_ROOT_CATEGORY_ITEMS_PARAM = `/category/get-category-root`;
  return await getFunction(token, GET_ROOT_CATEGORY_ITEMS_PARAM);
};

export const getWorkDays = async (token) => {
  const GET_WORK_DAYS_PARAM = `/work-day/get-work-day`;
  return await getFunction(token, GET_WORK_DAYS_PARAM);
};

export const postTodo = async (todoItem, token) => {
  const POST_TODO_ITEM_PARAM = "/todos/post";
  return await postFunction(token, POST_TODO_ITEM_PARAM, todoItem);
};

export const postRootCategories = async (categoryItem, token) => {
  const POST_ROOT_CATEGORY_ITEM_PARAM = "/category/post-category-root";
  return await postFunction(token, POST_ROOT_CATEGORY_ITEM_PARAM, categoryItem);
};

export const postWokDay = async (workDayItem, token) => {
  const POST_WORK_DAY_ITEM_PARAM = "/work-day/post-work-day";
  return await postFunction(token, POST_WORK_DAY_ITEM_PARAM, workDayItem);
};

export const putUpdateTodo = async (id, token, sidePanelItem) => {
  const jsonObjectData = sidePanelItem;
  const PUT_SET_COMPLETED_PARAM = `/todos/update-todo/${id}`;
  return await putFunction(token, PUT_SET_COMPLETED_PARAM, jsonObjectData);
};
