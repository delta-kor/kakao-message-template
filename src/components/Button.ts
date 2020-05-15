import Component from '../Component';
import ButtonModel from '../models/Button';
import ButtonItem from './ButtonItem';
import Link from './Link';

export default class Button extends Component {

    private item: ButtonItem;
    private link: Link;

    constructor(title: string = '', link: string | Link = new Link('')) {

        super();
        if(typeof link === 'string') link = new Link(link);
        this.item = new ButtonItem(title);
        this.link = link;

    }

    get Link(): Link {
        return this.link;
    }

    get Item(): ButtonItem {
        return this.item;
    }

    set Link(query: Link) {
        this.link = query;
    }

    set Item(query: ButtonItem) {
        this.item = query;
    }

    toJson(): ButtonModel {
        return {
            BU: this.item.toJson(),
            L: this.link.toJson()
        };
    }

}