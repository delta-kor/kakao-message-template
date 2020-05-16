# KAKAO-MESSAGE-TEMPLATE
A kakao custom message template builder for [node-kakao](https://github.com/storycraft/node-kakao)

## Getting Started

### Installation
This is a module available by the [npm registry](https://npmjs.com).  
Tested on [Node.js](https://nodejs.org/en/) v10.16.2, Node.js 8.0 or higher is required.  
Installation can be done by using the ```npm install``` command.  
Make sure to create ```package.json``` by ```npm init``` command.

Important! : The package is unpublished from the npm registry for personal reasons.

```bash
$ npm install kakao-message-template
```

### Features
* Creating Custom Message Template
* Full Customizable Message Template
* Sending Through node-kakao

### Examples
```js
const {MessageTemplate, MessageInfo, MessageType, FeedContent, Button} = require('kakao-message-template');

const Header = new MessageInfo(MessageType.FEED, 'https://google.com/', 'KAKAO-MESSAGE-TEMPLATE', 'http://lt2.kr/izone.png');

const Content = new FeedContent('A Message Title', 'And a description', 'https://naver.com/');
Content.Buttons.push(new Button('My Homepage', 'http://lt2.kr/'));
Content.Buttons.push(new Button('Dummy Button', 'http://kakao.com/'));

const Message = new MessageTemplate(Header, Content);

// Sending attachment by node-kakao
const attachment = new AttachmentTemplate(Message);
chat.replyAttachment(attachment);
```
