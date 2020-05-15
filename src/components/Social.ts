import Component from '../Component';
import SocialModel from '../models/Social';

export default class Social extends Component {

    constructor(
        private comment: number = 0,
        private like: number = 0,
        private share: number = 0,
        private subscribe: number = 0,
        private view: number = 0
    ) {

        super();

    }

    get Comment(): number {
        return this.comment;
    }

    get Like(): number {
        return this.like;
    }

    get Share(): number {
        return this.share;
    }

    get Subscribe(): number {
        return this.subscribe;
    }

    get View(): number {
        return this.view;
    }

    set Comment(query: number) {
        this.comment = query;
    }

    set Like(query: number) {
        this.like = query;
    }

    set Share(query: number) {
        this.share = query;
    }

    set Subscribe(query: number) {
        this.subscribe = query;
    }

    set View(query: number) {
        this.view = query;
    }

    toJson(): SocialModel {
        return {
            CM: this.comment,
            LK: this.like,
            SH: this.share,
            SB: this.subscribe,
            VC: this.view
        };
    }

}