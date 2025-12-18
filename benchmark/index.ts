
import { suites } from './runner';
import './suites/vector2.bench';
import './suites/vector3.bench';
import './suites/vector4.bench';
import './suites/matrix.bench';
import './suites/quaternion.bench';
import './suites/plane.bench';
import './suites/bounding-box.bench';
import './suites/bounding-frustum.bench';
import './suites/bounding-sphere.bench';
import './suites/ray.bench';
import './suites/rectangle.bench';
import './suites/point.bench';
import './suites/math-helper.bench';
import './suites/cubic-bezier.bench';
import './suites/curve.bench';
import './suites/curve-key.bench';
import './suites/curve-key-collection.bench';

// Expose suites to the global scope so the HTML can access them
(window as any).benchmarkSuites = suites;
