import { Model } from '../types/model';
import TitleDesc, { TitleDescModel } from './title-desc';
import { Component } from '../types/component';

export interface ItemListModel extends Model {
  TD: Partial<TitleDescModel>;
}

export default class ItemList implements Component<ItemListModel> {
  public readonly content: TitleDesc;

  constructor(title: string, description?: string) {
    this.content = new TitleDesc(title, description);
  }

  toJson(): Partial<ItemListModel> {
    return {
      TD: this.content.toJson(),
    };
  }
}
