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

const Header = new MessageInfo(MessageType.FEED, 'http://example.com', 'App Name', 'http://example.com/icon.png');

const Content = new FeedContent('My Feed Message', 'Using kakao-message-template', 'https://example.com/mypage');
Content.Buttons.push(new Button('Homepage', 'http://example.com/'));
Content.Buttons.push(new Button('Signup', 'http://example.com/signup'));

const Message = new MessageTemplate(Header, Content);

// Sending attachment by node-kakao
const attachment = new AttachmentTemplate(Message);
chat.replyAttachment(attachment);
```
```js
const {MessageTemplate, MessageInfo, MessageType, ListContent, ArticleListItem} = require('kakao-message-template');

const Header = new MessageInfo(MessageType.LIST, 'http://example.com', 'App Name', 'http://example.com/icon.png');

const Content = new ListContent('Top 3');
Content.ArticleList.push(
    new ArticleListItem('Alice', 'HTML', 'http://example.com/alice'),
    new ArticleListItem('Bob', 'CSS', 'http://example.com/bob'),
    new ArticleListItem('Carol', 'JAVASCRIPT', 'http://example.com/carol')
);

const Message = new MessageTemplate(Header, Content);

// Sending attachment by node-kakao
const attachment = new AttachmentTemplate(Message);
chat.replyAttachment(attachment);
```