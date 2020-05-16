import Model from './Model';
import TitleDescriptionModel from './TitleDescription';

export default interface ItemListSummaryModel extends Model {
    TD: TitleDescriptionModel;
}