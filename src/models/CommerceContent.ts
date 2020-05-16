import Model from './Model';
import ButtonModel from './Button';
import LinkModel from './Link';
import ProfileModel from './Profile';
import TextItemModel from './TextItem';
import ThumbnailModel from './Thumbnail';
import CommerceModel from './Commerce';

export default interface CommerceContentModel extends Model {
    BUL?: ButtonModel[]; // Button List
    BUT?: 0 | 1; // Button Count
    CMC?: CommerceModel // Commerce
    L?: LinkModel; // Link
    PR?: ProfileModel; // Profile
    TI?: TextItemModel; // Text Item
    THC?: number; // Thumbnail Count
    THL?: ThumbnailModel[]; // Thumbnail List
}