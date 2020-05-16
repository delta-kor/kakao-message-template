import Model from './Model';
import TitleDescriptionModel from './TitleDescription';

export default interface ImageTitleModel extends Model {
    THU?: string; // Thumbnail
    TD?: TitleDescriptionModel;
}