export const getPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}