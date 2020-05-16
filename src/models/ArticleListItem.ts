import Model from './Model';
import LinkModel from './Link';
import ThumbnailItemModel from './ThumbnailItem';
import TitleDescriptionModel from './TitleDescription';

export default interface ArticleListItemModel extends Model {
    L?: LinkModel;
    TH?: ThumbnailItemModel;
    TD?: TitleDescriptionModel;
}