import Component from '../Component';
import Content from './Content';
import ButtonList from './ButtonList';
import Header from './Header';
import ArticleList from './ArticleList';
import ArticleListItem from './ArticleListItem';
import ListContentModel from '../models/ListContent';

export default class ListContent extends Content {

    private articleList: ArticleList;
    private buttons: ButtonList;
    private buttonLayout: 'Horizontal' | 'Vertical';
    private header: Header;
    private rank: boolean;

    constructor(title: string = '', ...items: ArticleListItem[]) {

        super();
        this.articleList = new ArticleList();
        this.buttons = new ButtonList();
        this.buttonLayout = 'Vertical';
        this.header = new Header(title);
        this.rank = false;
        for(let item of items) this.articleList.push(item);

    }

    get ArticleList(): ArticleList {
        return this.articleList;
    }

    get Buttons(): ButtonList {
        return this.buttons;
    }

    get ButtonLayout(): 'Horizontal' | 'Vertical' {
        return this.buttonLayout;
    }

    get Header(): Header {
        return this.header;
    }

    get Rank(): boolean {
        return this.rank;
    }

    set ArticleList(query: ArticleList) {
        this.articleList = query;
    }

    set Buttons(query: ButtonList) {
        this.buttons = query;
    }

    set ButtonLayout(query: 'Horizontal' | 'Vertical') {
        this.buttonLayout = query;
    }

    set Header(query: Header) {
        this.header = query;
    }

    set Rank(query: boolean) {
        this.rank = query;
    }

    toJson(): ListContentModel {
        return {
            ITL: this.articleList.toJson(),
            BUL: this.buttons.toJson(),
            BUT: this.buttonLayout === 'Horizontal' ? 0 : 1,
            HD: this.header.toJson(),
            RK: this.rank
        };
    }

}