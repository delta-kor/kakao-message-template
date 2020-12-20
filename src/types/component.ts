import { Model } from './model';

export interface Component<T extends Model> {
  toJson(): Partial<T>;
}
