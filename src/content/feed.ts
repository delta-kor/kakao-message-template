import { CarouselModel } from '../types/model';
import { CarouselContent } from '../types/content';
import Button, { ButtonModel } from '../components/button';
import Link, { LinkModel } from '../components/link';
import TextItem, { TextItemModel } from '../components/text-item';

export interface FeedContentModel extends CarouselModel {
  BUL: Partial<ButtonModel>[];
  BUT: number;
  HD: any;
  IMT: any;
  ITL: any;
  ILS: any;
  L: Partial<LinkModel>;
  PR: any;
  SO: any;
  TAM: any[];
  TI: Partial<TextItemModel>;
  THC: number;
  THL: any[];
}

export default class FeedContent extends CarouselContent<FeedContentModel> {
  public readonly buttons: Button[] = [];
  public readonly link: Link;
  public readonly textItem: TextItem;

  constructor(title: string, description?: string);
  constructor(title: string, description: string, url: string);
  constructor(title: string, description: string, link: Link);
  constructor() {
    super();
    this.textItem = new TextItem(arguments[0], arguments[1]);
    this.link = arguments[2] instanceof Link ? arguments[2] : new Link(arguments[2] || '');
  }

  toJson(): Partial<FeedContentModel> {
    return {
      BUL: this.buttons.map(button => button.toJson()),
      L: this.link.toJson(),
      TI: this.textItem.toJson(),
    };
  }
}
