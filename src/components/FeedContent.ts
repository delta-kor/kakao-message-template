import Component from '../Component';
import TextItem from './TextItem';
import Link from './Link';
import FeedContentModel from '../models/FeedContent';
import Content from './Content';
import ButtonList from './ButtonList';
import Social from './Social';
import ThumbnailList from './ThumbnailList';
import Profile from './Profile';
import Header from './Header';
import ImageTitle from './ImageTitle';
import ItemList from './ItemList';
import ItemListSummary from './ItemListSummary';

export default class FeedContent extends Content {

    private textItem: TextItem;
    private buttons: ButtonList;
    private buttonLayout: 'Horizontal' | 'Vertical';
    private header: Header;
    private imageTitle: ImageTitle;
    private itemList: ItemList;
    private itemListSummary: ItemListSummary;
    private profile: Profile;
    private social: Social;
    private thumbnailCount: number;
    private thumbnailList: ThumbnailList;

    constructor(title: string = '', description: string = '', link: string | Link = new Link('')) {

        super();
        this.textItem = new TextItem(title, description, link, true);
        this.buttons = new ButtonList();
        this.buttonLayout = 'Vertical';
        this.header = new Header();
        this.imageTitle = new ImageTitle();
        this.itemList = new ItemList();
        this.itemListSummary = new ItemListSummary();
        this.profile = new Profile();
        this.social = new Social();
        this.thumbnailCount = 0;
        this.thumbnailList = new ThumbnailList();

    }

    get Title(): string {
        return this.textItem.Title;
    }

    get Description(): string {
        return this.textItem.Description;
    }

    get Link(): Link {
        return this.textItem.Link;
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

    get ImageTitle(): ImageTitle {
        return this.imageTitle;
    }

    get ItemList(): ItemList {
        return this.itemList;
    }

    get ItemListSummary(): ItemListSummary {
        return this.itemListSummary;
    }

    get Profile(): Profile {
        return this.profile;
    }

    get Social(): Social {
        return this.social;
    }

    get ThumbnailCount(): number {
        return this.thumbnailCount;
    }

    get ThumbnailList(): ThumbnailList {
        return this.thumbnailList;
    }

    set Title(query: string) {
        this.textItem.Title = query;
    }

    set Description(query: string) {
        this.textItem.Description = query;
    }

    set Link(query: Link) {
        this.textItem.Link = query;
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

    set ImageTitle(query: ImageTitle) {
        this.imageTitle = query;
    }

    set ItemList(query: ItemList) {
        this.itemList = query;
    }

    set ItemListSummary(query: ItemListSummary) {
        this.itemListSummary = query;
    }

    set Profile(query: Profile) {
        this.profile = query;
    }

    set Social(query: Social) {
        this.social = query;
    }

    set ThumbnailCount(query: number) {
        this.thumbnailCount = query;
    }

    set ThumbnailList(query: ThumbnailList) {
        this.thumbnailList = query;
    }

    toJson(): FeedContentModel {
        return {
            BUL: this.buttons.toJson(),
            BUT: this.buttonLayout === 'Horizontal' ? 0 : 1,
            HD: this.header.toJson(),
            IMT: this.imageTitle.toJson(),
            ITL: this.itemList.toJson(),
            ILS: this.itemListSummary.toJson(),
            PR: this.profile.toJson(),
            SO: this.social.toJson(),
            THC: this.thumbnailCount,
            TI: this.textItem.toJson(),
            THL: this.thumbnailList.toJson()
        }
    }

}