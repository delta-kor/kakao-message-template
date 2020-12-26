import { Model } from '../types/model';
import { Component } from '../types/component';

export interface SocialModel extends Model {
  CM: number;
  LK: number;
  SH: number;
  SB: number;
  VC: number;
}

export default class Social implements Component<SocialModel> {
  public comment?: number;
  public like?: number;
  public share?: number;
  public subscribe?: number;
  public view?: number;

  constructor(comment?: number, like?: number, share?: number, subscribe?: number, view?: number) {
    this.comment = comment;
    this.like = like;
    this.share = share;
    this.subscribe = subscribe;
    this.view = view;
  }

  toJson(): Partial<SocialModel> {
    return {
      CM: this.comment,
      LK: this.like,
      SH: this.share,
      SB: this.subscribe,
      VC: this.view,
    };
  }
}
