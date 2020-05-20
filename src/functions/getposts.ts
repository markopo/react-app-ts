
export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export async function getPost(id: number): Promise<Post> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const result = await fetch(url);
    return result.json() as Promise<Post>;
}