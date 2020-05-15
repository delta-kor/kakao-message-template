import TextItemModel from './TextItem';
import ContentModel from './Content';
import ButtonModel from './Button';

export default interface FeedContentModel extends ContentModel {
    BUL?: ButtonModel[];
    BUT?: 0 | 1;
    TI?: TextItemModel;
}