import { Model } from '../types/model';
import TitleDesc, { TitleDescModel } from './title-desc';
import { Component } from '../types/component';

export interface ImageTitleModel extends Model {
  THU: string;
  TD: Partial<TitleDescModel>;
}

export default class ImageTitle implements Component<ImageTitleModel> {
  public thumbnail: string = '';
  public content: TitleDesc = new TitleDesc('');

  toJson(): Partial<ImageTitleModel> {
    return {
      THU: this.thumbnail,
      TD: this.content.toJson(),
    };
  }
}
