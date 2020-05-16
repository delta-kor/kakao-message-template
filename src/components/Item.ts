import Component from '../Component';
import TitleDescription from './TitleDescription';
import ItemModel from '../models/Item';

export default class Item extends Component {

    private text: TitleDescription;

    constructor(title: string = '', description: string = '') {

        super();
        this.text = new TitleDescription(title, description);

    }

    get Text(): TitleDescription {
        return this.text;
    }

    set Text(query: TitleDescription) {
        this.text = query;
    }

    toJson(): ItemModel {
        return {
            TD: this.text.toJson()
        };
    }

}