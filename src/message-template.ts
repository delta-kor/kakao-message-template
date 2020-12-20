import { ChatAttachment, ChatType } from 'node-kakao';

export default class MessageTemplate implements ChatAttachment {
  toJsonAttachment(): any {}

  readAttachment(rawJson: any) {}

  get RequiredMessageType() {
    return ChatType.Custom;
  }
}
