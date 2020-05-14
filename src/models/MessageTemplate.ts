import Model from './Model';
import ContentModel from './Content';
import MessageInfoModel from './MessageInfo';
import KakaoLinkInfoModel from './KakaoLinkInfo';

export default interface MessageTemplateModel extends Model {
    // CAL?: CalendarContent;
    C: ContentModel;
    P: MessageInfoModel;
    K?: KakaoLinkInfoModel;
    // MKW?: JsonElement;
}