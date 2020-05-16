import Model from './Model';
import TitleDescriptionModel from './TitleDescription';

export default interface ItemModel extends Model {
    TD: TitleDescriptionModel;
}