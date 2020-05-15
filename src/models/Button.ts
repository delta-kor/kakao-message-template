import Model from './Model';
import ButtonItemModel from './ButtonItem';
import LinkModel from './Link';

export default interface ButtonModel extends Model {
    BU: ButtonItemModel;
    L: LinkModel;
}