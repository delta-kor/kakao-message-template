import Model from './Model';
import TextItemModel from './TextItem';

export default interface FeedContentModel extends Model {
    TI?: TextItemModel;
}