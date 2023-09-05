export interface IPeople {
    name: string;
    species: {
        name: string;
    } | null;
    filmConnection: {
        films: {
            title: string;
        }[];
    }
    birthYear: string;
    homeworld: {
        title: string;
    };
    id: string;
}
