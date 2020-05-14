import TextItemModel from './TextItem';
import ContentModel from './Content';

export default interface FeedContentModel extends ContentModel {
    TI?: TextItemModel;
}