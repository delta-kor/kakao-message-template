import Model from './models/model';

export default abstract class Component {

    protected constructor() { }

    abstract toJson(): Model

}

