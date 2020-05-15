import Component from '../Component';
import ThumbnailItemModel from '../models/ThumbnailItem';

export default class ThumbnailItem extends Component {

    private width: number;
    private height: number;
    private isLive: boolean;
    private playTime: number;
    private crop: boolean;
    private thumbnail: string;

    constructor(thumbnail: string, width: number, height: number) {

        super();
        this.thumbnail = thumbnail;
        this.width = width;
        this.height = height;
        this.isLive = false;
        this.playTime = 0;
        this.crop = false;

    }

    get Height(): number {
        return this.height;
    }

    get Crop(): boolean {
        return this.crop;
    }

    get IsLive(): boolean {
        return this.isLive;
    }

    get PlayTime(): number {
        return this.playTime;
    }

    get Thumbnail(): string {
        return this.thumbnail;
    }

    get Width(): number {
        return this.width;
    }

    set Height(query: number) {
        this.height = query;
    }

    set Crop(query: boolean) {
        this.crop = query;
    }

    set IsLive(query: boolean) {
        this.isLive = query;
    }

    set PlayTime(query: number) {
        this.playTime = query;
    }

    set Thumbnail(query: string) {
        this.thumbnail = query;
    }

    set Width(query: number) {
        this.width = query;
    }

    toJson(): ThumbnailItemModel {
        return {
            H: this.height,
            SC: this.crop ? 0 : 1,
            LI: this.isLive,
            PT: this.playTime,
            THU: this.thumbnail,
            W: this.width
        };
    }

}