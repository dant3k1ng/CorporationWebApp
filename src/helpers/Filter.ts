import { Items } from '../components/MainWrapper/Selector';

export const filter = (items: Array<any>, keyToSearch: string, filterText: string) => {
    return items.filter(item => (item[keyToSearch].toLowerCase()).indexOf(filterText.toLowerCase()) !== -1);    
}

export const filterByUser = (items: Array<any>, keyToSearch: string, type: Items, userId: number | null | undefined) => {
    if(userId === null || userId === undefined)
        return items;
    else if(type === Items.All)
        return items;

        return items.filter(item => {
            switch (type) {
                case Items.My: return item[keyToSearch] === userId;
                default: return true;
            }
        });
}