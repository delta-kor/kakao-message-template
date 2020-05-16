import Component from '../Component';
import CommerceModel from '../models/Commerce';

export default class Commerce extends Component {

    private currencyUnit: string;
    private currentPosition: number;
    private discountPrice: number;
    private amount: number;
    private rate: number;
    private promotion: string;
    private regularPrice: number;

    constructor(regularPrice: number = 0, discountPrice: number = 0, rate: number = 0) {

        super();
        this.currencyUnit = '원';
        this.currentPosition = 0;
        this.discountPrice = discountPrice;
        this.amount = 0;
        this.rate = rate;
        this.promotion = '';
        this.regularPrice = regularPrice;

    }

    get CurrencyUnit(): string {
        return this.currencyUnit;
    }

    get CurrentPosition(): number {
        return this.currentPosition;
    }

    get DiscountPrice(): number {
        return this.discountPrice;
    }

    get Amount(): number {
        return this.amount;
    }

    get Rate(): number {
        return this.rate;
    }

    get Promotion(): string {
        return this.promotion;
    }

    get RegularPrice(): number {
        return this.regularPrice;
    }

    set CurrencyUnit(query: string) {
        this.currencyUnit = query;
    }

    set CurrentPosition(query: number) {
        this.currentPosition = query;
    }

    set DiscountPrice(query: number) {
        this.discountPrice = query;
    }

    set Amount(query: number) {
        this.amount = query;
    }

    set Rate(query: number) {
        this.rate = query;
    }

    set Promotion(query: string) {
        this.promotion = query;
    }

    set RegularPrice(query: number) {
        this.regularPrice = query;
    }

    toJson(): CommerceModel {
        return {
            CU: this.currencyUnit,
            CP: this.currentPosition,
            DP: this.discountPrice,
            FD: this.amount,
            DR: this.rate,
            PM: this.promotion,
            RP: this.regularPrice
        };
    }

}