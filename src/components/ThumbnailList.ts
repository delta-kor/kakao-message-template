import ComponentList from '../ComponentList';
import Thumbnail from './Thumbnail';
import ThumbnailModel from '../models/Thumbnail';
import ButtonModel from '../models/Button';

export default class ThumbnailList extends ComponentList<Thumbnail> {

    constructor(...thumbnails: Thumbnail[]) {

        super(thumbnails);

    }

    toJson(): ThumbnailModel[] {

        const result: ThumbnailModel[] = [];
        for(let thumbnail of this) {
            result.push(thumbnail.toJson());
        }
        return result;

    }

}