import Component from '../Component';
import ThumbnailModel from '../models/Thumbnail';
import Link from './Link';
import ThumbnailItem from './ThumbnailItem';

export default class Thumbnail extends Component {

    private link: Link;
    private thumbnail: ThumbnailItem;

    constructor(thumbnail: string = '', link: string | Link = new Link(''), width: number = 0, height: number = 0) {

        super();
        if(typeof link === 'string') link = new Link(link);
        this.link = link;
        this.thumbnail = new ThumbnailItem(thumbnail, width, height);

    }

    get Link(): Link {
        return this.link;
    }

    get Thumbnail(): ThumbnailItem {
        return this.thumbnail;
    }

    set Link(query: Link) {
        this.link = query;
    }

    set Thumbnail(query: ThumbnailItem) {
        this.thumbnail = query;
    }

    toJson(): ThumbnailModel {
        return {
            L: this.link.toJson(),
            TH: this.thumbnail.toJson()
        };
    }

}