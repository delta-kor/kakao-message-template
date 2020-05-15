import Component from '../Component';
import TitleDescriptionModel from '../models/TitleDescription';

export default class TitleDescription extends Component {

    private title: string;
    private description: string;

    constructor(title: string = '', description: string = '') {

        super();
        this.title = title;
        this.description = description;

    }

    get Title(): string {
        return this.title;
    }

    get Description(): string {
        return this.description;
    }

    set Title(query: string) {
        this.title = query;
    }

    set Description(query: string) {
        this.description = query;
    }

    toJson(): TitleDescriptionModel {
        return {
            T: this.title,
            D: this.description
        };
    }

}