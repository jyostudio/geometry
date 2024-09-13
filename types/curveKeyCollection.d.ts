import List from "@jyostudio/list";
import CurveKey from "./curveKey";

/**
 * 包含组成 Curve 的 CurveKeys。
 */
export default class CurveKeyCollection extends List<CurveKey> {
  /**
   * 初始化新的 CurveKeyCollection 实例。
   * @returns {CurveKeyCollection} CurveKeyCollection 实例。
   */
  constructor();

  /**
   * 确定指定的 CurveKeyCollection 是否等于当前 CurveKeyCollection。
   * @param other 用于与当前 CurveKeyCollection 比较的 CurveKeyCollection。
   * @returns 是否相等。
   */
  ["=="](other: CurveKeyCollection): Boolean;

  /**
   * 确定指定的 CurveKeyCollection 是否不等于当前 CurveKeyCollection。
   * @param other 用于与当前 CurveKeyCollection 比较的 CurveKeyCollection。
   * @returns 是否不相等。
   */
  ["!="](other: CurveKeyCollection): Boolean;

  /**
   * 创建 CurveKeyCollection 的副本。
   * @returns {Collection} CurveKeyCollection 的副本。
   */
  clone(): CurveKeyCollection;

  /**
   * 确定指定的 CurveKeyCollection 是否等于当前 CurveKeyCollection。
   * @param other 用于与当前 CurveKeyCollection 比较的 CurveKeyCollection。
   * @returns 是否相等。
   */
  equals(other: CurveKeyCollection): Boolean;

  /**
   * 返回表示当前 CurveKeyCollection 的字符串。
   * @returns 表示当前 CurveKeyCollection 的字符串。
   */
  toString(): String;

  /**
   * 返回当前 CurveKeyCollection 的 JSON 表示。
   * @returns 当前 CurveKeyCollection 的 JSON 表示。
   */
  toJSON(): Object;
}
