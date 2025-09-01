export type bestAuthor = {
    id: string;
    name: string;
    description: string;
    imageURL: string;
    favorite: boolean
    
}

export type NewBestAuthor = Omit<bestAuthor, "id">;