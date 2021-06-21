export const getPhotos = () => {
    return fetch("https://jsonplaceholder.typicode.com/photos");
}

export const getPhoto = (id: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
}