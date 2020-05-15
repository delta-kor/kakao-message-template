import Model from './Model';

export default interface ThumbnailItemModel extends Model {
    // EX?: Extra
    H?: number; // Height
    SC?: 0 | 1; // Image Crop
    LI?: boolean; // Is Live
    PT?: number; // Play Time
    THU?: string; // Thumbnail URL
    W?: number; // Width
}