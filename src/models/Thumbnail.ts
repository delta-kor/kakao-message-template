import Model from './Model';
import LinkModel from './Link';
import ThumbnailItemModel from './ThumbnailItem';

export default interface ThumbnailModel extends Model {
    L?: LinkModel;
    TH?: ThumbnailItemModel;
}