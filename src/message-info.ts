import MessageType from './message-type';
import { Model } from './types/model';
import { Component } from './types/component';
import Link, { LinkModel } from './components/link';

export interface MessageInfoModel extends Model {
  A: any;
  AD: boolean;
  BC: boolean;
  BT: boolean;
  DID: string;
  FW: boolean;
  INFO: string;
  L: Partial<LinkModel>;
  LA: string;
  LI: string;
  LOCK: boolean;
  ME: string;
  PC: boolean;
  RF: string;
  SIC: string;
  SID: string;
  SL: Partial<LinkModel>;
  SNM: string;
  SST: any;
  SDID: string;
  TP: MessageType;
  V: any;
  VA: string;
  VI: string;
  VM: string;
  VW: string;
  KV: boolean;
  WT: string;
}

export default class MessageInfo implements Component<MessageInfoModel> {
  public type: MessageType;
  public serviceName: string;
  public readonly serviceLink: Link;
  public serviceIcon: string;
  public forwardable: boolean = false;
  public verified: boolean = false;

  constructor(type: MessageType, serviceName?: string, serviceUrl?: string, serviceIcon?: string);
  constructor(type: MessageType, serviceName?: string, serviceLink?: Link, serviceIcon?: string);
  constructor() {
    this.type = arguments[0];
    this.serviceName = arguments[1] || '';
    this.serviceLink = arguments[2] instanceof Link ? arguments[2] : new Link(arguments[2] || '');
    this.serviceIcon = arguments[3] || '';
  }

  toJson(): Partial<MessageInfoModel> {
    return {
      DID: 'profile_id=12341234',
      FW: this.forwardable,
      ME: '카카오링크',
      SIC: this.serviceIcon,
      SID: 'plusfriend_bot',
      SL: this.serviceLink.toJson(),
      SNM: this.serviceName,
      TP: this.type,
      VA: '6.0.0',
      VI: '5.9.8',
      VW: '2.5.1',
      VM: '2.2.0',
      KV: this.verified,
    };
  }
}
