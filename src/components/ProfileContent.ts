import Content from './Content';
import ButtonList from './ButtonList';
import Profile from './Profile';
import Social from './Social';
import ProfileContentModel from '../models/ProfileContent';
import Link from './Link';

export default class ProfileContent extends Content {

    private buttons: ButtonList;
    private profile: Profile;
    private social: Social;

    constructor(name: string = '', icon: string = '', link: string | Link = new Link('')) {

        super();
        if(typeof link === 'string') link = new Link(link);
        this.buttons = new ButtonList();
        this.profile = new Profile(name, icon, link);
        this.social = new Social();

    }

    get Buttons(): ButtonList {
        return this.buttons;
    }

    get Profile(): Profile {
        return this.profile;
    }

    get Social(): Social {
        return this.social;
    }

    set Buttons(query: ButtonList) {
        this.buttons = query;
    }

    set Profile(query: Profile) {
        this.profile = query;
    }

    set Social(query: Social) {
        this.social = query;
    }

    toJson(): ProfileContentModel {
        return {
            BUL: this.buttons.toJson(),
            PR: this.profile.toJson(),
            SO: this.social.toJson()
        };
    }

}