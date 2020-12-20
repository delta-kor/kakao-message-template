import { Component } from '../types/component';
import { Model } from '../types/model';

export interface TitleDescModel extends Model {
  T: string;
  D: string;
}

export default class TitleDesc implements Component<TitleDescModel> {
  public title: string;
  public description: string;

  constructor(title: string);
  constructor(title: string, description: string);
  constructor() {
    this.title = arguments[0];
    this.description = arguments[1];
  }

  toJson(): Partial<TitleDescModel> {
    return {
      T: this.title,
      D: this.description,
    };
  }
}
