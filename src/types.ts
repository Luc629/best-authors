export type bestAuthor = {
    id: string;
    name: string;
    description: string;
    imageURL: string;
    favorite: true
    
}

export type NewBestAuthor = Omit<bestAuthor, "id">;