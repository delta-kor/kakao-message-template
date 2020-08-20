import { Component } from '../component';
import { Link, LinkModel } from './link';

export enum ImageCrop {
    CENTER, ORIGINAL
}

export interface ImageModel {
    L: LinkModel;
    TH: {
        H: number;
        SC: ImageCrop;
        LI: boolean;
        PT: number;
        THU: string;
        W: number;
    };
}

export class Image extends Component {

    public Link: Link;
    public Width: number;
    public Height: number;
    public Live: boolean;
    public PlayTime: number;
    public Crop: ImageCrop;
    public Thumbnail: string;

    constructor(thumbnail: string);
    constructor(thumbnail: string, width: number, height: number);
    constructor(thumbnail: string, width: number, height: number, crop: ImageCrop);
    constructor(thumbnail: string, width: number, height: number, crop: ImageCrop, live: boolean, playTime: number);
    constructor(...params: any[]) {
        super();
        this.Link = new Link('');

        if(params.length === 1) {

            this.Width = 0;
            this.Height = 0;
            this.Live = false;
            this.PlayTime = 0;
            this.Crop = ImageCrop.ORIGINAL;
            this.Thumbnail = params[0];

        } else if(params.length === 3) {

            this.Width = params[1];
            this.Height = params[2];
            this.Live = false;
            this.PlayTime = 0;
            this.Crop = ImageCrop.ORIGINAL;
            this.Thumbnail = params[0];

        } else if(params.length === 4) {

            this.Width = params[1];
            this.Height = params[2];
            this.Live = false;
            this.PlayTime = 0;
            this.Crop = params[3];
            this.Thumbnail = params[0];

        } else if(params.length === 6) {

            this.Width = params[1];
            this.Height = params[2];
            this.Live = params[4];
            this.PlayTime = params[5];
            this.Crop = params[3];
            this.Thumbnail = params[0];

        } else {

            throw new SyntaxError('Invalid button parameters. There must be 1, 3, 4, 6 parameters.');

        }
    }

    toJson(): ImageModel {
        return {
            L: this.Link.toJson(),
            TH: {
                H: this.Height,
                SC: this.Crop,
                LI: this.Live,
                PT: this.PlayTime,
                THU: this.Thumbnail,
                W: this.Width
            }
        };
    }

}
