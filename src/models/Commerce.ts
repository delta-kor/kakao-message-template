import Model from './Model';

export default interface CommerceModel extends Model {
    CU?: string; // Currency Unit
    CP?: number; // Current Position
    DP?: number; // Discount Price
    FD?: number; // Fixed Amount
    DR?: number; // Fixed Rate
    PM?: string; // Promotion
    RP?: number; // Regular Price
}