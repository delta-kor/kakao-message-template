import Component from '../Component';
import TitleDescription from './TitleDescription';
import ImageTitleModel from '../models/ImageTitle';

export default class ImageTitle extends Component {

    private thumbnail: string;
    private title: TitleDescription;

    constructor(title: string = '', thumbnail: string = '') {

        super();
        this.thumbnail = thumbnail;
        this.title = new TitleDescription(title);

    }

    get Thumbnail(): string {
        return this.thumbnail;
    }

    get Text(): TitleDescription {
        return this.title;
    }

    set Thumbnail(query: string) {
        this.thumbnail = query;
    }

    set Text(query: TitleDescription) {
        this.title = query;
    }

    toJson(): ImageTitleModel {
        return {
            THU: this.thumbnail,
            TD: this.title.toJson()
        };
    }

}