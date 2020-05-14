import Component from '../component';
import TextItemModel from '../models/text-item';
import Link from './link';
import TitleDescription from './title-description';

export default class TextItem extends Component {

    private titleDescription: TitleDescription;
    private link: Link;
    private isFullText: boolean;

    constructor(title: string = '', description: string = '', link: string | Link = new Link(''), isFullText: boolean = true) {

        super();
        if(typeof link === 'string') link = new Link(link);
        this.titleDescription = new TitleDescription(title, description);
        this.link = link;
        this.isFullText = isFullText;

    }

    get Title(): string {
        return this.titleDescription.Title;
    }

    get Description(): string {
        return this.titleDescription.Description;
    }

    get Link(): Link {
        return this.link;
    }

    get IsFullText(): boolean {
        return this.isFullText;
    }

    set Title(query: string) {
        this.titleDescription.Title = query;
    }

    set Description(query: string) {
        this.titleDescription.Description = query;
    }

    set Link(query: Link) {
        this.link = query;
    }

    set IsFullText(query: boolean) {
        this.isFullText = query;
    }

    toJson(): TextItemModel {
        return {
            TD: this.titleDescription.toJson(),
            L: this.link.toJson(),
            FT: this.isFullText
        };
    }

}