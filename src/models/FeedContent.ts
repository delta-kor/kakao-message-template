import TextItemModel from './TextItem';
import ContentModel from './Content';
import ButtonModel from './Button';
import LinkModel from './Link';
import SocialModel from './Social';

export default interface FeedContentModel extends ContentModel {
    BUL?: ButtonModel[];
    BUT?: 0 | 1;
    // HD?: Header;
    // IMT?: ImageTitle;
    // ITL?: ItemList;
    // ILS?: ItemListSummary;
    L?: LinkModel;
    // PR?: Profile;
    SO?: SocialModel;
    // TAM?: TextAlignList;
    TI?: TextItemModel;
    THC?: number; // Thumbnail Count
    // THL?: ThumbnailList
}