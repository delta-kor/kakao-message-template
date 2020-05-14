import Model from './model';
import LinkModel from './link';

export default interface MessageInfoModel extends Model {
    LI?: string;
    VI?: string; // Client Version
    VM?: string; // Client Version
    VW?: string; // Client Version
    AD?: boolean;
    BT?: boolean;
    VA?: string; // Client Version
    DID?: string; // Document ID
    FW?: boolean; // Forward Able
    INFO?: string; // Info
    LA?: string; // Install URL
    BC?: boolean; // Is Big Chat Bubble
    LOCK?: boolean; // Is Lock
    KV?: boolean; // Is Verified
    L?: LinkModel; // Link
    ME?: string; // Message
    RF?: string; // Referer
    SIC?: string; // Service Icon
    SID?: string; // Service ID
    SL?: LinkModel; // Service Link
    SNM?: string; // Service Name
    // SST?: ServiceSetting; // Service Setting
    SDID?: string; // Sub Document ID
    TP?: string; // Sub Type
    WT?: string; // Wide Type
}