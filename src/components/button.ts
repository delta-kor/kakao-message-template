import Link, { LinkModel } from './link';
import { Model } from '../types/model';
import { Component } from '../types/component';

interface ButtonContentModel extends Model {
  HL: boolean;
  ICO: string;
  SR: string;
  T: string;
}

export interface ButtonModel extends Model {
  BU: Partial<ButtonContentModel>;
  L: Partial<LinkModel>;
}

export default class Button implements Component<ButtonModel> {
  public content: string;
  public readonly link: Link;

  constructor(content: string);
  constructor(content: string, url: string);
  constructor(content: string, link: Link);
  constructor() {
    switch (arguments.length) {
      case 1:
        this.content = arguments[0];
        this.link = new Link('');
        break;
      case 2:
        this.content = arguments[0];
        this.link = arguments[1] instanceof Link ? arguments[1] : new Link(arguments[1]);
        break;
      default:
        throw new ReferenceError('Invalid params');
    }
  }

  toJson(): Partial<ButtonModel> {
    return {
      BU: {
        T: this.content,
      },
      L: this.link.toJson(),
    };
  }
}
