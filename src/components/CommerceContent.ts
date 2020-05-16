import Component from '../Component';
import ButtonList from './ButtonList';
import Link from './Link';
import TextItem from './TextItem';
import ThumbnailList from './ThumbnailList';
import Profile from './Profile';
import Commerce from './Commerce';
import CommerceContentModel from '../models/CommerceContent';
import Content from './Content';

export default class CommerceContent extends Content {

    private buttons: ButtonList;
    private buttonLayout: 'Horizontal' | 'Vertical';
    private commerce: Commerce;
    private link: Link;
    private profile: Profile;
    private textItem: TextItem;
    private thumbnailCount: number;
    private thumbnailList: ThumbnailList;

    constructor(title: string = '', description: string = '', link: string | Link = new Link(''), regularPrice: number = 0, discountPrice: number = 0, rate: number = 0) {

        super();
        if(typeof link === 'string') link = new Link(link);
        this.buttons = new ButtonList();
        this.buttonLayout = 'Vertical';
        this.commerce = new Commerce(regularPrice, discountPrice, rate);
        this.link = link;
        this.profile = new Profile();
        this.textItem = new TextItem(title, description)
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
        return this.link;
    }

    get Buttons(): ButtonList {
        return this.buttons;
    }

    get ButtonLayout(): 'Horizontal' | 'Vertical' {
        return this.buttonLayout;
    }

    get Profile(): Profile {
        return this.profile;
    }

    get ThumbnailCount(): number {
        return this.thumbnailCount;
    }

    get ThumbnailList(): ThumbnailList {
        return this.thumbnailList;
    }

    get Commerce(): Commerce {
        return this.commerce;
    }

    set Title(query: string) {
        this.textItem.Title = query;
    }

    set Description(query: string) {
        this.textItem.Description = query;
    }

    set Link(query: Link) {
        this.link = query;
    }

    set Buttons(query: ButtonList) {
        this.buttons = query;
    }

    set ButtonLayout(query: 'Horizontal' | 'Vertical') {
        this.buttonLayout = query;
    }

    set Profile(query: Profile) {
        this.profile = query;
    }

    set ThumbnailCount(query: number) {
        this.thumbnailCount = query;
    }

    set ThumbnailList(query: ThumbnailList) {
        this.thumbnailList = query;
    }

    set Commerce(query: Commerce) {
        this.commerce = query;
    }

    toJson(): CommerceContentModel {
        return {
            BUL: this.buttons.toJson(),
            BUT: this.buttonLayout === 'Horizontal' ? 0 : 1,
            CMC: this.commerce.toJson(),
            L: this.link.toJson(),
            PR: this.profile.toJson(),
            TI: this.textItem.toJson(),
            THC: this.thumbnailCount,
            THL: this.thumbnailList.toJson()
        }
    }

}