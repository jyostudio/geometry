
import { suite } from '../runner';
import Rectangle from '../../src/rectangle';
import Point from '../../src/point';

suite('Rectangle', (s) => {
    const rect1 = new Rectangle(0, 0, 100, 100);
    const rect2 = new Rectangle(50, 50, 100, 100);
    const point = new Point(50, 50);

    s.add('constructor', () => {
        new Rectangle(0, 0, 100, 100);
    });

    s.add('contains (point)', () => {
        rect1.contains(point);
    });

    s.add('contains (rect)', () => {
        rect1.contains(rect2);
    });

    s.add('intersects', () => {
        rect1.intersects(rect2);
    });

    s.add('intersect', () => {
        Rectangle.intersect(rect1, rect2);
    });

    s.add('union', () => {
        Rectangle.union(rect1, rect2);
    });

    s.add('equals', () => {
        rect1.equals(rect2);
    });

    s.add('offset', () => {
        rect1.offset(10, 10);
    });

    s.add('inflate', () => {
        rect1.inflate(10, 10);
    });
});
