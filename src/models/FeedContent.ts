import TextItemModel from './TextItem';
import ContentModel from './Content';
import ButtonModel from './Button';
import LinkModel from './Link';
import SocialModel from './Social';
import ThumbnailModel from './Thumbnail';
import ProfileModel from './Profile';
import HeaderModel from './Header';
import ImageTitleModel from './ImageTitle';

export default interface FeedContentModel extends ContentModel {
    BUL?: ButtonModel[];
    BUT?: 0 | 1;
    HD?: HeaderModel;
    IMT?: ImageTitleModel;
    // ITL?: ItemList;
    // ILS?: ItemListSummary;
    L?: LinkModel;
    PR?: ProfileModel;
    SO?: SocialModel;
    // TAM?: TextAlignList;
    TI?: TextItemModel;
    THC?: number; // Thumbnail Count
    THL?: ThumbnailModel[]; // Thumbnail List
}