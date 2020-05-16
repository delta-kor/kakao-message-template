import Component from '../Component';
import HeaderModel from '../models/Header';
import Link from './Link';
import ThumbnailItem from './ThumbnailItem';
import TitleDescription from './TitleDescription';

export default class Header extends Component {

    private background: ThumbnailItem;
    private link: Link;
    private thumbnail: ThumbnailItem;
    private title: TitleDescription;

    constructor(name: string = '', icon: string = '', link: string | Link = new Link(''), width: number = 0, height: number = 0) {

        super();
        if(typeof link === 'string') link = new Link(link);
        this.background = new ThumbnailItem();
        this.link = link;
        this.thumbnail = new ThumbnailItem(icon, width, height);
        this.title = new TitleDescription(name);

    }

    get Background(): ThumbnailItem {
        return this.background;
    }

    get Link(): Link {
        return this.link;
    }

    get Image(): ThumbnailItem {
        return this.thumbnail;
    }

    get Title(): TitleDescription {
        return this.title;
    }

    set Background(query: ThumbnailItem) {
        this.background = query;
    }

    set Link(query: Link) {
        this.link = query;
    }

    set Image(query: ThumbnailItem) {
        this.thumbnail = query;
    }

    set Title(query: TitleDescription) {
        this.title = query;
    }

    toJson(): HeaderModel {
        return {
            BG: this.background.toJson(),
            L: this.link.toJson(),
            TH: this.thumbnail.toJson(),
            TD: this.title.toJson()
        };
    }

}