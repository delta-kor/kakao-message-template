import Model from './Model';

export default interface KakaoLinkInfoModel extends Model {
    ai?: string; // App ID
    ak?: string; // App Key
    av?: string; // App Ver
    lv?: string; // Link Ver
    ti?: string; // Template ID
}