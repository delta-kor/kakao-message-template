import { Model } from '../types/model';
import Thumbnail, { ThumbnailModel } from './thumbnail';
import Link, { LinkModel } from './link';
import TitleDesc, { TitleDescModel } from './title-desc';
import { Component } from '../types/component';

export interface ProfileModel extends Model {
  BG: Partial<ThumbnailModel>;
  L: Partial<LinkModel>;
  TH: Partial<ThumbnailModel>;
  TD: Partial<TitleDescModel>;
}

export default class Profile implements Component<ProfileModel> {
  public readonly background: Thumbnail = new Thumbnail('');
  public readonly image: Thumbnail;
  public readonly link: Link;
  public readonly content: TitleDesc;

  constructor(thumbnail: string, nickname: string, link: string | Link = new Link('')) {
    this.image = new Thumbnail(thumbnail);
    this.content = new TitleDesc(nickname);
    this.link = link instanceof Link ? link : new Link(link);
  }

  toJson(): Partial<ProfileModel> {
    return {
      BG: this.background.toJson(),
      L: this.link.toJson(),
      TH: this.image.toJson(),
      TD: this.content.toJson(),
    };
  }
}
