export const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
}

export const getUser = (id: number = 1) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
}