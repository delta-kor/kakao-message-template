# KAKAO-MESSAGE-TEMPLATE
A kakao custom message template builder

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

## Examples
### Sending Feed Message
```js
const {MessageTemplate, MessageInfo, MessageType, FeedContent, Button} = require('kakao-message-template');

const Header = new MessageInfo(MessageType.FEED, 'http://example.com', 'App Name', 'http://example.com/icon.png');

const Content = new FeedContent('My Feed Message', 'Using kakao-message-template', 'https://example.com/mypage');
Content.Buttons.push(new Button('Homepage', 'http://example.com/'));
Content.Buttons.push(new Button('Signup', 'http://example.com/signup'));

const Message = new MessageTemplate(Header, Content);
```
### Sending List Message
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
```

## License (MIT)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
* [MIT License](http://opensource.org/licenses/mit-license.php)
* See the [LICENSE file](https://github.com/delta-kor/kakao-message-template/blob/master/LICENSE) for details.