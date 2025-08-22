export type bestAuthor = {
    id: string;
    name: string;
    description: string;
    imageURL: string;
    
}

export type NewBestAuthor = Omit<bestAuthor, "id">;