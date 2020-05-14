import Component from '../component';
import MessageInfoModel from '../models/MessageInfo';
import {MessageType} from '..';
import Link from './Link';

export default class MessageInfo extends Component {

    private type: MessageType;
    private link: Link;
    private serviceLink: Link;
    private serviceName: string;
    private serviceIcon: string;
    private readonly versionAndroid: string;
    private readonly versionIphone: string;
    private readonly versionWindows: string;
    private readonly versionMac: string;
    private readonly serviceID: string;
    private readonly documentID: string;

    constructor(type: MessageType, link: string | Link = new Link(''), serviceName: string = '', serviceIcon: string = '') {

        super();

        if(typeof link === 'string') link = new Link(link);

        this.type = type;
        this.link = link;
        this.serviceLink = link;
        this.serviceName = serviceName;
        this.serviceIcon = serviceIcon;
        this.versionAndroid = '6.4.5';
        this.versionIphone = '6.4.5';
        this.versionWindows = '2.3.5';
        this.versionMac = '2.6.1';
        this.serviceID = 'plusfriend_bot';
        this.documentID = 'profile_id=256584582';

    }

    get Type(): MessageType {
        return this.type;
    }

    get Link(): Link {
        return this.link;
    }

    get ServiceLink(): Link {
        return this.serviceLink;
    }

    get ServiceName(): string {
        return this.serviceName;
    }

    get ServiceIcon(): string {
        return this.serviceIcon;
    }

    set Type(query: MessageType) {
        this.type = query;
    }

    set Link(query: Link) {
        this.link = query;
    }

    set ServiceLink(query: Link) {
        this.serviceLink = query;
    }

    set ServiceName(query: string) {
        this.serviceName = query;
    }

    set ServiceIcon(query: string) {
        this.serviceIcon = query;
    }

    toJson(): MessageInfoModel {

        return {
            TP: this.type,
            ME: '카카오링크',
            SNM: this.serviceName,
            SIC: this.serviceIcon,
            L: this.link.toJson(),
            SL: this.serviceLink.toJson(),
            VA: this.versionAndroid,
            VI: this.versionIphone,
            VW: this.versionWindows,
            VM: this.versionMac,
            SID: this.serviceID,
            DID: this.documentID
        };

    }

}