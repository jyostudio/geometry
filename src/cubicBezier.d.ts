import Vector2 from "./vector2";

/**
 * 三次贝塞尔曲线
 */
export default class CubicBezier {
  /**
   * 获取以相同速度开始至结束的三次贝塞尔曲线。
   * @returns {CubicBezier} 以相同速度开始至结束的三次贝塞尔曲线。
   */
  static get linear(): CubicBezier;

  /**
   * 获取慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线。
   * @returns {CubicBezier} 慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线。
   */
  static get ease(): CubicBezier;

  /**
   * 获取以慢速开始的三次贝塞尔曲线。
   * @returns {CubicBezier} 以慢速开始的三次贝塞尔曲线。
   */
  static get easeIn(): CubicBezier;

  /**
   * 获取以慢速结束的三次贝塞尔曲线。
   * @returns {CubicBezier} 以慢速结束的三次贝塞尔曲线。
   */
  static get easeOut(): CubicBezier;

  /**
   * 获取以慢速开始和结束的三次贝塞尔曲线。
   * @returns {CubicBezier} 以慢速开始和结束的三次贝塞尔曲线。
   */
  static get easeInOut(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInSine(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutSine(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutSine(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInQuad(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutQuad(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutQuad(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInCubic(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutCubic(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutCubic(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInQuart(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutQuart(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutQuart(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInQuint(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutQuint(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutQuint(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInExpo(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutExpo(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutExpo(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInCirc(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutCirc(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutCirc(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInBack(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutBack(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutBack(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInElastic(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutElastic(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutElastic(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInBounce(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeOutBounce(): CubicBezier;

  /**
   * 获取三次贝塞尔曲线。
   * @returns {CubicBezier} 三次贝塞尔曲线。
   */
  static get easeInOutBounce(): CubicBezier;

  /**
   * 三次贝塞尔曲线第二个控制点的 x 轴坐标。
   */
  x1: Number;

  /**
   * 三次贝塞尔曲线第二个控制点的 y 轴坐标。
   */
  y1: Number;

  /**
   * 三次贝塞尔曲线第三个控制点的 x 轴坐标。
   */
  x2: Number;

  /**
   * 三次贝塞尔曲线第三个控制点的 y 轴坐标。
   */
  y2: Number;

  /**
   * 获取三次贝塞尔曲线第一个控制点向量坐标。
   * @returns 三次贝塞尔曲线第一个控制点向量坐标。
   */
  get v1(): Vector2;

  /**
   * 获取三次贝塞尔曲线第二个控制点向量坐标。
   * @returns 三次贝塞尔曲线第二个控制点向量坐标。
   */
  get v2(): Vector2;

  /**
   * 获取三次贝塞尔曲线第三个控制点向量坐标。
   * @returns 三次贝塞尔曲线第三个控制点向量坐标。
   */
  get v3(): Vector2;

  /**
   * 获取三次贝塞尔曲线第四个控制点向量坐标。
   * @returns 三次贝塞尔曲线第四个控制点向量坐标。
   */
  get v4(): Vector2;

  /**
   * 构造并返回一个三次贝塞尔曲线。
   */
  constructor();

  /**
   * 构造并返回一个三次贝塞尔曲线。
   * @param v1 第二个控制点向量坐标。
   * @param v2 第三个控制点向量坐标。
   */
  constructor(v1: Vector2, v2: Vector2);

  /**
   * 构造并返回一个三次贝塞尔曲线。
   * @param x1 第二个控制点的 x 轴坐标。
   * @param y1 第二个控制点的 y 轴坐标。
   * @param x2 第三个控制点的 x 轴坐标。
   * @param y2 第三个控制点的 y 轴坐标。
   */
  constructor(x1: Number, y1: Number, x2: Number, y2: Number);

  /**
   * 确定指定的 CubicBezier 是否等于当前 CubicBezier。
   * @param other 用于与当前 CubicBezier 比较的 CubicBezier。
   * @returns 是否相等。
   */
  ["=="](other: CubicBezier): Boolean;

  /**
   * 确定指定的 CubicBezier 是否不等于当前 CubicBezier。
   * @param other 用于与当前 CubicBezier 比较的 CubicBezier。
   * @returns 是否不相等。
   */
  ["!="](other: CubicBezier): Boolean;

  /**
   * 求解贝塞尔曲线上的 x 轴坐标。
   * @param t 时间。
   * @returns x轴坐标。
   */
  getX(t: Number): Number;

  /**
   * 求解贝塞尔曲线上的 y 轴坐标。
   * @param t 时间。
   * @returns y轴坐标。
   */
  getY(t: Number): Number;

  /**
   * 求解贝塞尔曲线上的 y 轴坐标。
   * @param x x轴坐标。
   * @returns y轴坐标。
   */
  solve(x: Number): Number;

  /**
   * 确定指定的三次贝塞尔曲线是否等于当前三次贝塞尔曲线。
   * @param value 用于与当前三次贝塞尔曲线进行比较的三次贝塞尔曲线。
   * @returns 是否相等。
   */
  equals(value: CubicBezier): Boolean;

  /**
   * 返回当前三次贝塞尔曲线的字符串表示。
   */
  toString(): String;

  /**
   * 返回当前三次贝塞尔曲线的 JSON 格式表示。
   */
  toJSON(): Object;
}
