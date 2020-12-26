import { Model } from '../types/model';
import Link, { LinkModel } from './link';
import { Component } from '../types/component';

interface ThumbnailContentModel extends Model {
  THU: string;
  H: number;
  W: number;
  SC: CropType;
  LI: boolean;
  PT: number;
}

export interface ThumbnailModel extends Model {
  L: Partial<LinkModel>;
  TH: Partial<ThumbnailContentModel>;
}

export default class Thumbnail implements Component<ThumbnailModel> {
  public thumbnail: string;
  public width: number;
  public height: number;
  public link: Link;
  public cropType: CropType = CropType.ORIGINAL;
  public live: boolean = false;
  public playTime?: number;

  constructor(thumbnail: string);
  constructor(thumbnail: string, url: string);
  constructor(thumbnail: string, link: Link);
  constructor(thumbnail: string, width: number, height: number, url: string);
  constructor(thumbnail: string, width: number, height: number, link: Link);
  constructor() {
    this.thumbnail = arguments[0];
    this.width = 0;
    this.height = 0;
    this.link = new Link('');
    switch (arguments.length) {
      case 2:
        this.link = arguments[1] instanceof Link ? arguments[1] : new Link(arguments[1]);
        break;
      case 4:
        this.width = arguments[1];
        this.height = arguments[2];
        this.link = arguments[3] instanceof Link ? arguments[3] : new Link(arguments[3]);
        break;
      default:
        throw new ReferenceError('Invalid params');
    }
  }

  toJson(): Partial<ThumbnailModel> {
    return {
      L: this.link.toJson(),
      TH: {
        THU: this.thumbnail,
        H: this.height,
        W: this.width,
        SC: this.cropType,
        LI: this.live,
        PT: this.playTime,
      },
    };
  }
}
