
import { suite } from '../runner';
import Point from '../../src/point';

suite('Point', (s) => {
    const p1 = new Point(10, 20);
    const p2 = new Point(30, 40);

    s.add('constructor', () => {
        new Point(10, 20);
    });

    s.add('equals', () => {
        p1.equals(p2);
    });

    s.add('add', () => {
        p1['+'](p2);
    });

    s.add('subtract', () => {
        p1['-'](p2);
    });

    s.add('multiply', () => {
        p1['*'](p2);
    });

    s.add('divide', () => {
        p1['/'](p2);
    });

    s.add('negate', () => {
        Point['-'](p1);
    });
});
