import Component from '../component';
import Model from '../models/model';
import LinkModel from '../models/link';

export default class Link extends Component {

    private linkPC: string;
    private linkMobile: string;

    constructor(href: string = '') {

        super();
        this.linkPC = href;
        this.linkMobile = href;

    }

    get Global(): string {
        return this.linkPC || this.linkMobile;
    }

    get PC(): string {
        return this.linkPC;
    }

    get Mobile(): string {
        return this.linkMobile;
    }

    set Global(query: string) {
        this.linkPC = query;
        this.linkMobile = query;
    }

    set PC(query: string) {
        this.linkPC = query;
    }

    set Mobile(query: string) {
        this.linkMobile = query;
    }

    toJson(): LinkModel {

        return {
            LPC: this.linkPC,
            LMO: this.linkMobile,
            LCP: this.linkPC,
            LCM: this.linkPC,
            LCA: this.linkMobile,
            LCI: this.linkMobile
        };

    }

}