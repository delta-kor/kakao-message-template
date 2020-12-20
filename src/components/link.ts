import { Component } from '../types/component';
import { Model } from '../types/model';

export interface LinkModel extends Model {
  LA: string;
  LAA: boolean;
  LAD: string;
  LAT: 'inweb' | 'web' | 'dialog' | 'page';
  LCA: string;
  LCI: string;
  LCM: string;
  LCP: string;
  LEW: string;
  LI: string;
  LMO: string;
  LPC: string;
}

export default class Link implements Component<LinkModel> {
  public windows: string;
  public mac: string;
  public android: string;
  public ios: string;

  constructor(url: string);
  constructor(pc: string, mobile: string);
  constructor(windows: string, mac: string, android: string, ios: string);
  constructor() {
    switch (arguments.length) {
      case 1:
        this.windows = arguments[0];
        this.mac = arguments[0];
        this.android = arguments[0];
        this.ios = arguments[0];
        break;
      case 2:
        this.windows = arguments[0];
        this.mac = arguments[0];
        this.android = arguments[1];
        this.ios = arguments[1];
        break;
      case 4:
        this.windows = arguments[0];
        this.mac = arguments[1];
        this.android = arguments[2];
        this.ios = arguments[3];
        break;
      default:
        throw new ReferenceError('Invalid params');
    }
  }

  toJson(): Partial<LinkModel> {
    return {
      LCP: this.windows,
      LCM: this.mac,
      LA: this.android,
      LI: this.ios,
      LCA: this.android,
      LCI: this.ios,
    };
  }
}
