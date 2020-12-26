import { ChatAttachment, ChatType } from 'node-kakao';
import MessageInfo from './message-info';
import { Content } from './types/content';
import { Model } from './types/model';

export default class MessageTemplate implements ChatAttachment {
  public readonly info: MessageInfo;
  public readonly content: Content<Model>;
  public templateId: string;
  public appId?: string;

  constructor(
    info: MessageInfo,
    content: Content<Model>,
    templateId: string = '9310',
    appId: string = '63119'
  ) {
    this.info = info;
    this.content = content;
    this.templateId = templateId;
    this.appId = appId;
  }

  toJsonAttachment(): any {
    return {
      C: this.content.toJson(),
      P: this.info.toJson(),
      K: {
        ai: this.appId,
        ti: this.templateId,
      },
    };
  }

  readAttachment(rawJson: any) {}

  get RequiredMessageType() {
    return ChatType.Custom;
  }
}
