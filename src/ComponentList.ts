import Component from './Component';
import Model from './models/Model';

export default abstract class ComponentList<T extends Component> extends Array<T> implements Component {

    protected constructor(components: T[]) {

        super();

        for(let component of components)
            this.push(component);

    }

    abstract toJson(): any[]

}