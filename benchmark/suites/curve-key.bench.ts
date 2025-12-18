
import { suite } from '../runner';
import CurveKey from '../../src/curve-key';

suite('CurveKey', (s) => {
    const key1 = new CurveKey(0, 10);
    const key2 = new CurveKey(1, 20);

    s.add('constructor', () => {
        new CurveKey(0, 10);
    });

    s.add('clone', () => {
        key1.clone();
    });

    s.add('compareTo', () => {
        key1.compareTo(key2);
    });

    s.add('equals', () => {
        key1.equals(key2);
    });
});
