import Component from '../Component';
import KakaoLinkInfoModel from '../models/KakaoLinkInfo';

export default class KakaoLinkInfo extends Component {

    private readonly appID: undefined;
    private readonly templateID: string;

    constructor() {

        super();
        this.appID = undefined;
        this.templateID = '1111';

    }

    toJson(): KakaoLinkInfoModel {
        return {
            ai: this.appID,
            ti: this.templateID
        };
    }

}
