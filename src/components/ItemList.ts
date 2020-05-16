import ComponentList from '../ComponentList';
import Item from './Item';
import ItemModel from '../models/Item';

export default class ItemList extends ComponentList<Item> {

    constructor(...items: Item[]) {

        super(items);

    }

    toJson(): ItemModel[] {

        const result: ItemModel[] = [];
        for(let item of this) {
            result.push(item.toJson());
        }
        return result;

    }

}