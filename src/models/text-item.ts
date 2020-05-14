import Model from './model';
import TitleDescriptionModel from './title-description';
import LinkModel from './link';

export default interface TextItemModel extends Model {
    TD?: TitleDescriptionModel;
    L?: LinkModel;
    FT?: boolean;
}