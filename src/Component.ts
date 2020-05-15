import Model from './models/Model';

export default abstract class Component {

    protected constructor() { }

    abstract toJson(): Model

}

