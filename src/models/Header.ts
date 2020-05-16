import Model from './Model';
import ThumbnailItemModel from './ThumbnailItem';
import LinkModel from './Link';
import TitleDescriptionModel from './TitleDescription';

export default interface HeaderModel extends Model {
    BG?: ThumbnailItemModel;
    L?: LinkModel;
    TH?: ThumbnailItemModel;
    TD?: TitleDescriptionModel;
}