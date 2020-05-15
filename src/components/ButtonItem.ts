import Component from '../Component';
import ButtonItemModel from '../models/ButtonItem';

export default class ButtonItem extends Component {

    private title: string;
    private show: 'both' | 'sender' | 'receiver' ;
    private highlight: boolean;

    constructor(title: string = '', show: 'both' | 'sender' | 'receiver' = 'both', highlight: boolean = true) {

        super();
        this.title = title;
        this.show = show;
        this.highlight = highlight;

    }

    get Title(): string {
        return this.title;
    }

    get Show(): 'both' | 'sender' | 'receiver' {
        return this.show;
    }

    get Highlight(): boolean {
        return this.highlight;
    }

    set Title(query: string) {
        this.title = query;
    }

    set Show(query: 'both' | 'sender' | 'receiver') {
        this.show = query;
    }

    set Highlight(query: boolean) {
        this.highlight = query;
    }

    toJson(): ButtonItemModel {
        return {
            T: this.title,
            SR: this.show,
            HL: this.highlight
        };
    }

}