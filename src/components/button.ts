import { Component, Model } from '../component';
import { Link, LinkModel } from './link';

export enum ButtonDisplay {
    BOTH = 'both',
    SENDER = 'sender',
    RECEIVER = 'receiver'
}

export interface ButtonModel extends Model {
    BU: {
        HL: boolean;
        SR: string;
        T: string;
    };
    L: LinkModel;
}

export class Button extends Component {

    public Link: Link;
    public Text: string;
    public Highlight: boolean;
    public Display: ButtonDisplay;

    constructor(title: string);
    constructor(title: string, link: Link);
    constructor(title: string, url: string);
    constructor(title: string, link: Link, highlight: boolean, display: ButtonDisplay);
    constructor(title: string, url: string, highlight: boolean, display: ButtonDisplay);
    constructor(...params: any[]) {
        super();

        if(params.length === 1) {

            this.Link = new Link('');
            this.Text = params[0];
            this.Highlight = false;
            this.Display = ButtonDisplay.BOTH;

        } else if(params.length === 2) {

            this.Text = params[0];
            this.Highlight = false;
            this.Display = ButtonDisplay.BOTH;

            if(typeof params[1] === 'string')
                this.Link = new Link(params[1]);
            else
                this.Link = params[1];

        } else if(params.length === 4) {

            this.Text = params[0];
            this.Highlight = params[2];
            this.Display = params[3];

            if(typeof params[1] === 'string')
                this.Link = new Link(params[1]);
            else
                this.Link = params[1];

        } else {

            throw new SyntaxError('Invalid button parameters. There must be 1, 2, 4 parameters.');

        }
    }

    toJson(): ButtonModel {
        return {
            BU: {
                HL: this.Highlight,
                SR: this.Display,
                T: this.Text
            },
            L: this.Link.toJson()
        };
    }

}
