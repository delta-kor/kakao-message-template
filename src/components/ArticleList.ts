import ComponentList from '../ComponentList';
import ArticleListItem from './ArticleListItem';
import ThumbnailModel from '../models/Thumbnail';
import ArticleListItemModel from '../models/ArticleListItem';

export default class ArticleList extends ComponentList<ArticleListItem> {

    constructor(...articleListItem: ArticleListItem[]) {

        super(articleListItem);

    }

    toJson(): ArticleListItemModel[] {

        const result: ArticleListItemModel[] = [];
        for(let articleListItem of this) {
            result.push(articleListItem.toJson());
        }
        return result;

    }

}