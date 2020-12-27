import { Model } from '../types/model';
import TitleDesc, { TitleDescModel } from './title-desc';
import { Component } from '../types/component';

export interface ItemListSummaryModel extends Model {
  TD: Partial<TitleDescModel>;
}

export default class ItemListSummary implements Component<ItemListSummaryModel> {
  public readonly content: TitleDesc = new TitleDesc('');

  toJson(): Partial<ItemListSummaryModel> {
    return {
      TD: this.content.toJson(),
    };
  }
}
