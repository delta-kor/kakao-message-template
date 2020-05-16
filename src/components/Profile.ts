import Component from '../Component';
import ThumbnailItem from './ThumbnailItem';
import Link from './Link';
import {TitleDescription} from '../index';
import ProfileModel from '../models/Profile';

export default class Profile extends Component {

    private link: Link;
    private thumbnail: ThumbnailItem;
    private title: TitleDescription;

    constructor(name: string = '', icon: string = '', link: string | Link = new Link(''), width: number = 0, height: number = 0) {

        super();
        if(typeof link === 'string') link = new Link(link);
        this.link = link;
        this.thumbnail = new ThumbnailItem(icon, width, height);
        this.title = new TitleDescription(name);

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

    set Link(query: Link) {
        this.link = query;
    }

    set Image(query: ThumbnailItem) {
        this.thumbnail = query;
    }

    set Title(query: TitleDescription) {
        this.title = query;
    }

    toJson(): ProfileModel {
        return {
            L: this.link.toJson(),
            TH: this.thumbnail.toJson(),
            TD: this.title.toJson()
        };
    }

}