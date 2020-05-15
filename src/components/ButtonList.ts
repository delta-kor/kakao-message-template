import ComponentList from '../ComponentList';
import Button from './Button';
import ButtonModel from '../models/Button';

export default class ButtonList extends ComponentList<Button> {

    constructor(...buttons: Button[]) {

        super(buttons);

    }

    toJson(): ButtonModel[] {

        const result: ButtonModel[] = [];
        for(let button of this) {
            result.push(button.toJson());
        }
        return result;

    }

}