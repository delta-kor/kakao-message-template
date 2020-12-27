import ButtonType from '../button-type';
import { CarouselModel } from '../types/model';
import { CarouselContent } from '../types/content';
import Button, { ButtonModel } from '../components/button';
import Link, { LinkModel } from '../components/link';
import TextItem, { TextItemModel } from '../components/text-item';
import Thumbnail, { ThumbnailModel } from '../components/thumbnail';
import Social, { SocialModel } from '../components/social';
import Profile, { ProfileModel } from '../components/profile';
import Header, { HeaderModel } from '../components/header';
import ImageTitle, { ImageTitleModel } from '../components/image-title';

export interface FeedContentModel extends CarouselModel {
  BUL: Partial<ButtonModel>[];
  BUT: number;
  HD: Partial<HeaderModel>;
  IMT: Partial<ImageTitleModel>;
  ITL: any;
  ILS: any;
  L: Partial<LinkModel>;
  PR: Partial<ProfileModel>;
  SO: Partial<SocialModel>;
  TAM: any[];
  TI: Partial<TextItemModel>;
  THC: number;
  THL: Partial<ThumbnailModel>[];
}

export default class FeedContent extends CarouselContent<FeedContentModel> {
  public readonly text: TextItem;
  public readonly link: Link;
  public readonly buttons: Button[] = [];
  public readonly thumbnails: Thumbnail[] = [];
  public readonly header: Header = new Header();
  public readonly social: Social = new Social();
  public readonly profile: Profile = new Profile('', '');
  public readonly imageTitle: ImageTitle = new ImageTitle();
  public buttonType: ButtonType = ButtonType.HORIZONTAL;
  public thumbnailCount?: number;

  constructor(title: string, description?: string);
  constructor(title: string, description: string, url: string);
  constructor(title: string, description: string, link: Link);
  constructor() {
    super();
    this.text = new TextItem(arguments[0], arguments[1]);
    this.link = arguments[2] instanceof Link ? arguments[2] : new Link(arguments[2] || '');
  }

  toJson(): Partial<FeedContentModel> {
    return {
      BUL: this.buttons.map(button => button.toJson()),
      BUT: this.buttonType,
      HD: this.header.toJson(),
      IMT: this.imageTitle.toJson(),
      L: this.link.toJson(),
      PR: this.profile.toJson(),
      SO: this.social.toJson(),
      TI: this.text.toJson(),
      THC: this.thumbnailCount,
      THL: this.thumbnails.map(thumbnail => thumbnail.toJson()),
    };
  }
}
