export interface Projects {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    buttons: Buttons[];
    redirectTo: string;
}

interface Buttons {
    name: string;
    url: string;
}