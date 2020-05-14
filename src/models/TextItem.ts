import Model from './Model';
import TitleDescriptionModel from './TitleDescription';
import LinkModel from './Link';

export default interface TextItemModel extends Model {
    TD?: TitleDescriptionModel;
    L?: LinkModel;
    FT?: boolean;
}