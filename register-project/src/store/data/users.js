export const usersData = [{id: 0, name: 'Admin User', password: '12345', email: 'admin@gmail.com', role: "admin"}];

export const addUser = (data) => {
    data.role = "registrator";
    usersData.push(data);
}

export const setCurrentUser = (user) => {
    currentUser = user;
}

export const removeCurrentUser = () => {
    currentUser = {};
}

export let currentUser = {};
