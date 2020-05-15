# KAKAO-MESSAGE-TEMPLATE (WIP)
A kakao custom message template builder for [node-kakao](https://github.com/storycraft/node-kakao)

## Getting Started

### Installation
This is a module available by the [npm registry](https://npmjs.com).
Tested on [Node.js](https://nodejs.org/en/) v10.16.2, Node.js 8.0 or higher is required.
Installation can be done by using the ```npm install``` command.
Make sure to create ```package.json``` by ```npm init``` command.
```bash
$ npm install kakao-message-template
```

### Features
* Creating Custom Message Template
* Full Customizable Message Template
* Sending Through node-kakao (WIP)

### Examples
```js
const Kakao = require('kakao-message-template');

const Header = new Kakao.MessageInfo(Kakao.MessageType.FEED, 'https://google.com/', 'KAKAO-MESSAGE-TEMPLATE', 'http://lt2.kr/izone.png');

const Content = new Kakao.FeedContent('A Message Title', 'And a description', 'https://naver.com/');
Content.Buttons.push(new Kakao.Button('My Homepage', 'http://lt2.kr/'));
Content.Buttons.push(new Kakao.Button('Dummy Button', 'http://kakao.com/'));

const Info = new Kakao.KakaoLinkInfo();
const Message = new Kakao.MessageTemplate(Header, Content, Info);

Message.toJson();
```