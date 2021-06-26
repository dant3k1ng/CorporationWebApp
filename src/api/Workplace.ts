import { IWorkplace } from '../entities/Workplace';

export const getWorkplaces = (): Promise<IWorkplace[]> => {
    return new Promise((resolve, reject) => {
        resolve(staticData)
    });
}

export const getWorkplace = (id: number): Promise<IWorkplace|null> => {
    return new Promise((resolve, reject) => {
        const data = staticData;

        for( let i = 0; i < data.length; i++ ) {
            if( data[i].id === id)
            {
                resolve(data[i]);
            }
        }

        resolve(null);
    });
}

const staticData = [
    {
        id: 1,
        title: "Client contract",
        description: "Cras in maximus urna. Sed fringilla fermentum ante. Etiam aliquet arcu id posuere auctor. Donec dapibus ipsum ac nisi porttitor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        userCount: 150,
        type: "Contract",
        backgroundImageUrl: "/media/contract.jpg",
        image: "/media/icons/contract.png",
        lastUpdate: "2 days ago"
    },
    {
        id: 2,
        title: "Supplier contract",
        description: "Cras in maximus urna. Sed fringilla fermentum ante. Etiam aliquet arcu id posuere auctor. Donec dapibus ipsum ac nisi porttitor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        userCount: 25,
        type: "Contract",
        backgroundImageUrl: "/media/contract.jpg",
        image: "/media/icons/contract.png",
        lastUpdate: "2 days ago"
    },
    {
        id: 3,
        title: "Corporate",
        description: "Cras in maximus urna. Sed fringilla fermentum ante. Etiam aliquet arcu id posuere auctor. Donec dapibus ipsum ac nisi porttitor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        userCount: 25,
        type: "Corporate",
        backgroundImageUrl: "/media/office.jpg",
        image: "/media/icons/entities2.png",
        lastUpdate: "2 days ago"
    },
    {
        id: 4,
        title: "Group Norms",
        description: "Cras in maximus urna. Sed fringilla fermentum ante. Etiam aliquet arcu id posuere auctor. Donec dapibus ipsum ac nisi porttitor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        userCount: 25,
        type: "Norms",
        backgroundImageUrl: "/media/books.jpg",
        image: "/media/icons/book.png",
        lastUpdate: "2 days ago"
    },
    {
        id: 5,
        title: "Real estate contracts",
        description: "Cras in maximus urna. Sed fringilla fermentum ante. Etiam aliquet arcu id posuere auctor. Donec dapibus ipsum ac nisi porttitor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        userCount: 150,
        type: "Contract",
        backgroundImageUrl: "/media/estate.jpg",
        image: "/media/icons/contract.png",
        lastUpdate: "2 days ago"
    }
];