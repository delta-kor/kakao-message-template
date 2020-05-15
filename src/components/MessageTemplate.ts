import Component from '../Component';
import Content from './Content';
import MessageInfo from './MessageInfo';
import KakaoLinkInfo from './KakaoLinkInfo';
import MessageTemplateModel from '../models/MessageTemplate';

export default class MessageTemplate extends Component {

    private header: MessageInfo;
    private content: Content;
    private info: KakaoLinkInfo;
    
    constructor(header: MessageInfo, content: Content, info: KakaoLinkInfo) {

        super();
        this.header = header;
        this.content = content;
        this.info = info;

    }

    get Header(): MessageInfo {
        return this.header;
    }

    get Content(): Content {
        return this.content;
    }

    get Info(): KakaoLinkInfo {
        return this.info;
    }

    set Header(query: MessageInfo) {
        this.header = query;
    }

    set Content(query: Content) {
        this.content = query;
    }

    set Info(query: KakaoLinkInfo) {
        this.info = query;
    }

    toJson(): MessageTemplateModel {
        return {
            C: this.content.toJson(),
            P: this.header.toJson(),
            K: this.info.toJson()
        };
    }

}