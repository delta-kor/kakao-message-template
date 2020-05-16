import Component from '../Component';
import TitleDescription from './TitleDescription';
import ItemListSummaryModel from '../models/ItemListSummary';

export default class ItemListSummary extends Component {

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

    toJson(): ItemListSummaryModel {
        return {
            TD: this.text.toJson()
        };
    }

}