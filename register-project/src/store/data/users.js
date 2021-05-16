export const usersData = [];

export const addUser = (data) => {
    usersData.push(data);
}

export const setCurrentUser = (user) => {
    currentUser = user;
}

export const removeCurrentUser = () => {
    currentUser = {};
}

export let currentUser = {};
