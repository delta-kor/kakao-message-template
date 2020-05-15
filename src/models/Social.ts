import Model from './Model';

export default interface SocialModel extends Model {
    CM: number; // Comment
    LK: number; // Like
    SH: number; // Share
    SB: number; // Subscribe
    VC: number; // View
}