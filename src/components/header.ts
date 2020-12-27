import { Model } from '../types/model';
import Thumbnail, { ThumbnailModel } from './thumbnail';
import Link, { LinkModel } from './link';
import TitleDesc, { TitleDescModel } from './title-desc';
import { Component } from '../types/component';

export interface HeaderModel extends Model {
  BG: Partial<ThumbnailModel>;
  ICO: string;
  L: Partial<LinkModel>;
  TH: Partial<ThumbnailModel>;
  TD: Partial<TitleDescModel>;
  TOP: boolean;
}

export default class Header implements Component<HeaderModel> {
  public readonly background: Thumbnail = new Thumbnail('');
  public readonly image: Thumbnail = new Thumbnail('');
  public readonly link: Link = new Link('');
  public readonly content: TitleDesc = new TitleDesc('');
  public top: boolean = true;
  public icon?: string;

  toJson(): Partial<HeaderModel> {
    return {
      BG: this.background.toJson(),
      ICO: this.icon,
      L: this.link.toJson(),
      TH: this.image.toJson(),
      TD: this.content.toJson(),
      TOP: this.top,
    };
  }
}
