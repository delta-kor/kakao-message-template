import Component from '../Component';
import Link from './Link';
import TitleDescription from './TitleDescription';
import ThumbnailItem from './ThumbnailItem';
import ArticleListItemModel from '../models/ArticleListItem';

export default class ArticleListItem extends Component {

    private link: Link;
    private thumbnail: ThumbnailItem;
    private text: TitleDescription;

    constructor(title: string = '', description: string = '', thumbnail: string = '', link: string | Link = new Link('')) {

        super();
        if(typeof link === 'string') link = new Link(link);
        this.link = link;
        this.thumbnail = new ThumbnailItem(thumbnail);
        this.text = new TitleDescription(title, description);

    }

    get Link(): Link {
        return this.link;
    }

    get Image(): ThumbnailItem {
        return this.thumbnail;
    }

    get Text(): TitleDescription {
        return this.text;
    }

    set Link(query: Link) {
        this.link = query;
    }

    set Image(query: ThumbnailItem) {
        this.thumbnail = query;
    }

    set Text(query: TitleDescription) {
        this.text = query;
    }

    toJson(): ArticleListItemModel {
        return {
            L: this.link.toJson(),
            TH: this.thumbnail.toJson(),
            TD: this.text.toJson()
        };
    }

}