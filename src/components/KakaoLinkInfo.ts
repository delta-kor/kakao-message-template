import Component from '../Component';
import KakaoLinkInfoModel from '../models/KakaoLinkInfo';

export default class KakaoLinkInfo extends Component {

    private readonly appID: string;
    private readonly templateID: string;

    constructor() {

        super();
        this.appID = '331278';
        this.templateID = '3140';

    }

    toJson(): KakaoLinkInfoModel {
        return {
            ai: this.appID,
            ti: this.templateID
        };
    }

}