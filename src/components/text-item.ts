import { Model } from '../types/model';
import Link, { LinkModel } from './link';
import TitleDesc, { TitleDescModel } from './title-desc';
import { Component } from '../types/component';

export interface TextItemModel extends Model {
  FT: boolean;
  L: Partial<LinkModel>;
  TD: Partial<TitleDescModel>;
}

export default class TextItem implements Component<TextItemModel> {
  public title: string;
  public description?: string;
  public link?: Link;
  public fullText: boolean = true;

  constructor(title: string);
  constructor(title: string, description: string);
  constructor(title: string, description: string, url: string);
  constructor() {
    switch (arguments.length) {
      case 1:
        this.title = arguments[0];
        break;
      case 2:
        this.title = arguments[0];
        this.description = arguments[1];
        break;
      case 3:
        this.title = arguments[0];
        this.description = arguments[1];
        this.link = new Link(arguments[2]);
        break;
      default:
        throw new ReferenceError('Invalid params');
    }
  }

  toJson(): Partial<TextItemModel> {
    return {
      FT: this.fullText,
      L: this.link?.toJson(),
      TD: new TitleDesc(this.title, this.description).toJson(),
    };
  }
}
