import Model from './Model';
import ButtonModel from './Button';
import HeaderModel from './Header';
import ArticleListItemModel from './ArticleListItem';

export default interface ListContentModel extends Model {
    ITL?: ArticleListItemModel[]; // Article List
    BUL?: ButtonModel[]; // Button List
    BUT?: 0 | 1; // Button Type
    HD?: HeaderModel; // Header
    RK?: boolean; // Is Rankable
}