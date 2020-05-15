import Model from './Model';

export default interface ButtonItemModel extends Model {
    HL: boolean; // Highlight
    SR: string; // Send Or Receive
    T: string; // Title
    // TP: ??; // Type
}