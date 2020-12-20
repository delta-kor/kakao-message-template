import { Component } from './component';
import { Model, CarouselModel } from './model';

export abstract class Content<T extends Model> implements Component<T> {
  abstract toJson(): Partial<T>;
}

export abstract class CarouselContent<T extends CarouselModel> extends Content<T> {}
