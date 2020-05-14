import Model from './model';
import TextItemModel from './text-item';

export default interface FeedContentModel extends Model {
    TI?: TextItemModel;
}