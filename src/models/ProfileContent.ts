import Model from './Model';
import ButtonModel from './Button';
import ProfileModel from './Profile';
import SocialModel from './Social';

export default interface ProfileContentModel extends Model {
    BUL?: ButtonModel[];
    PR?: ProfileModel;
    SO?: SocialModel;
}