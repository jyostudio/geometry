import Vector3 from "./vector3";
import Quaternion from "./quaternion";
import Plane from "./plane";

/**
 * 定义一个矩阵。
 * @class
 */
export default class Matrix {
  /**
   * 返回标识矩阵的实例。
   */
  static get identity(): Matrix;

  /**
   * 矩阵的行 1 列 1 的值。
   */
  m11: Number;

  /**
   * 矩阵的行 1 列 2 的值。
   */
  m12: Number;

  /**
   * 矩阵的行 1 列 3 的值。
   */
  m13: Number;

  /**
   * 矩阵的行 1 列 4 的值。
   */
  m14: Number;

  /**
   * 矩阵的行 2 列 1 的值。
   */
  m21: Number;

  /**
   * 矩阵的行 2 列 2 的值。
   */
  m22: Number;

  /**
   * 矩阵的行 2 列 3 的值。
   */
  m23: Number;

  /**
   * 矩阵的行 2 列 4 的值。
   */
  m24: Number;

  /**
   * 矩阵的行 3 列 1 的值。
   */
  m31: Number;

  /**
   * 矩阵的行 3 列 2 的值。
   */
  m32: Number;

  /**
   * 矩阵的行 3 列 3 的值。
   */
  m33: Number;

  /**
   * 矩阵的行 3 列 4 的值。
   */
  m34: Number;

  /**
   * 矩阵的行 4 列 1 的值。
   */
  m41: Number;

  /**
   * 矩阵的行 4 列 2 的值。
   */
  m42: Number;

  /**
   * 矩阵的行 4 列 3 的值。
   */
  m43: Number;

  /**
   * 矩阵的行 4 列 4 的值。
   */
  m44: Number;

  /**
   * 获取或设置 Matrix 的后向矢量。
   */
  backward: Vector3;

  /**
   * 获取或设置 Matrix 的向下矢量。
   */
  down: Vector3;

  /**
   * 获取或设置 Matrix 的向前矢量。
   */
  forward: Vector3;

  /**
   * 获取和设置 Matrix 的向左矢量。
   */
  left: Vector3;

  /**
   * 获取和设置 Matrix 的向右矢量。
   */
  right: Vector3;

  /**
   * 获取或设置 Matrix 的平移矢量。
   */
  translation: Vector3;

  /**
   * 获取或设置 Matrix 的向上矢量。
   */
  up: Vector3;

  /**
   * 新建一个空的 Matrix 实例。
   */
  constructor();

  /**
   * 初始化新的 Matrix 实例。
   * @param m11 m11 的初始化值。
   * @param m12 m12 的初始化值。
   * @param m13 m13 的初始化值。
   * @param m14 m14 的初始化值。
   * @param m21 m21 的初始化值。
   * @param m22 m22 的初始化值。
   * @param m23 m23 的初始化值。
   * @param m24 m24 的初始化值。
   * @param m31 m31 的初始化值。
   * @param m32 m32 的初始化值。
   * @param m33 m33 的初始化值。
   * @param m34 m34 的初始化值。
   * @param m41 m41 的初始化值。
   * @param m42 m42 的初始化值。
   * @param m43 m43 的初始化值。
   * @param m44 m44 的初始化值。
   */
  constructor(
    m11: Number,
    m12: Number,
    m13: Number,
    m14: Number,
    m21: Number,
    m22: Number,
    m23: Number,
    m24: Number,
    m31: Number,
    m32: Number,
    m33: Number,
    m34: Number,
    m41: Number,
    m42: Number,
    m43: Number,
    m44: Number
  );

  /**
   * 将一个矩阵添加到另一个矩阵。
   * @param matrix1 源矩阵。
   * @param matrix2 源矩阵。
   * @returns 包含矩阵1和矩阵2的总和值的矩阵。
   */
  static add(matrix1: Matrix, matrix2: Matrix): Matrix;

  /**
   * 创建一个绕指定对象位置旋转的球形宣传物。
   * @param objectPosition 宣传物围绕旋转的对象的位置。
   * @param cameraPosition 摄影机位置。
   * @param cameraUpVector 摄影机向上矢量。
   * @param cameraForwardVector 可选的摄影机向前矢量。
   * @returns 创建的宣传位置。
   */
  static createBillboard(
    objectPosition: Vector3,
    cameraPosition: Vector3,
    cameraUpVector: Vector3,
    cameraForwardVector: Vector3 | null
  ): Matrix;

  /**
   * 创建一个绕指定轴旋转的圆柱形宣传物。
   * @param objectPosition 宣传物围绕旋转的对象的位置。
   * @param cameraPosition 摄影机位置。
   * @param rotateAxis 宣传物的旋转轴。
   * @param cameraForwardVector 可选的摄影机向前矢量。
   * @param objectForwardVector 可选的对象向前矢量。
   * @returns 宣传位置矩阵。
   */
  static createConstrainedBillboard(
    objectPosition: Vector3,
    cameraPosition: Vector3,
    rotateAxis: Vector3,
    cameraForwardVector: Vector3 | null,
    objectForwardVector: Vector3 | null
  ): Matrix;

  /**
   * 新建一个绕任意矢量旋转的 Matrix。
   * @param axis 要围绕旋转的轴。
   * @param angle 绕矢量旋转的角度。
   * @returns 旋转矩阵。
   */
  static createFromAxisAngle(axis: Vector3, angle: Number): Matrix;

  /**
   * 从 Quaternion 创建一个旋转 Matrix。
   * @param quaternion 用于创建 Matrix 的 Quaternion。
   * @returns 旋转矩阵。
   */
  static createFromQuaternion(quaternion: Quaternion): Matrix;

  /**
   * 用指定的偏转、俯仰和侧滚新建旋转矩阵。
   * @param yaw 绕 y 轴的旋转角度，以弧度计。
   * @param pitch 绕 x 轴的旋转角度，以弧度计。
   * @param roll 绕 z 轴的旋转角度，以弧度计。
   * @returns 旋转矩阵。
   */
  static createFromYawPitchRoll(
    yaw: Number,
    pitch: Number,
    roll: Number
  ): Matrix;

  /**
   * 创建视图矩阵。
   * @param cameraPosition 摄影机位置。
   * @param cameraTarget 摄影机指向的目标。
   * @param cameraUpVector 摄影机视点中的“上”方向。
   * @returns 视图矩阵。
   */
  static createLookAt(
    cameraPosition: Vector3,
    cameraTarget: Vector3,
    cameraUpVector: Vector3
  ): Matrix;

  /**
   * 构建一个正交投影矩阵。
   * @param width 视图体积宽度。
   * @param height 视图体积高度。
   * @param zNearPlane 视图体积的最小 z 值。
   * @param zFarPlane 视图体积的最大 z 值。
   * @returns 正交投影矩阵。
   */
  static createOrthographic(
    width: Number,
    height: Number,
    zNearPlane: Number,
    zFarPlane: Number
  ): Matrix;

  /**
   * 构建一个定制的正交投影矩阵。
   * @param left 视图体积的最小 x 值。
   * @param right 视图体积的最大 x 值。
   * @param bottom 视图体积的最小 y 值。
   * @param top 视图体积的最大 y 值。
   * @param zNearPlane 视图体积的最小 z 值。
   * @param zFarPlane 视图体积的最大 z 值。
   * @returns 正交投影矩阵。
   */
  static createOrthographicOffCenter(
    left: Number,
    right: Number,
    bottom: Number,
    top: Number,
    zNearPlane: Number,
    zFarPlane: Number
  ): Matrix;

  /**
   * 构建一个透视投影矩阵并返回结果值。
   * @param width 近处视图平面的视图体积宽度。
   * @param height 近处视图平面的视图体积高度。
   * @param nearPlaneDistance 与近处视图平面的距离。
   * @param farPlaneDistance 与远处视图平面的距离。
   * @returns 透视投影矩阵。
   */
  static createPerspective(
    width: Number,
    height: Number,
    nearPlaneDistance: Number,
    farPlaneDistance: Number
  ): Matrix;

  /**
   * 构建一个基于视野的透视投影矩阵并返回值。
   * @param fieldOfView y 方向的视野，以弧度计。
   * @param aspectRatio 纵横比，定义为视图空间宽度与高度的比率。 与视口纵横比匹配的属性 AspectRatio。
   * @param nearPlaneDistance 与近处视图平面的距离。
   * @param farPlaneDistance 与远处视图平面的距离。
   * @returns 透视投影矩阵。
   */
  static createPerspectiveFieldOfView(
    fieldOfView: Number,
    aspectRatio: Number,
    nearPlaneDistance: Number,
    farPlaneDistance: Number
  ): Matrix;

  /**
   * 构建一个定制的透视投影矩阵。
   * @param left 近处视图平面的视图体积的最小 x 值。
   * @param right 近处视图平面的视图体积的最大 x 值。
   * @param bottom 近处视图平面的视图体积的最小 y 值。
   * @param top 近处视图平面的视图体积的最大 y 值。
   * @param nearPlaneDistance 与近处视图平面的距离。
   * @param farPlaneDistance 与远处视图平面的距离。
   * @returns 透视投影矩阵。
   */
  static createPerspectiveOffCenter(
    left: Number,
    right: Number,
    bottom: Number,
    top: Number,
    nearPlaneDistance: Number,
    farPlaneDistance: Number
  ): Matrix;

  /**
   * 创建一个反映指定 Plane 的相关坐标系的 Matrix。
   * @param value 要创建反射的 Plane。
   * @returns 表示反射的新矩阵。
   */
  static createReflection(value: Plane): Matrix;

  /**
   * 返回一个可绕 x 轴旋转一组顶点的矩阵。
   * @param radians 绕 x 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
   * @returns 旋转矩阵。
   */
  static createRotationX(radians: Number): Matrix;

  /**
   * 返回一个可绕 y 轴旋转一组顶点的矩阵。
   * @param radians 绕 y 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
   * @returns 旋转矩阵。
   */
  static createRotationY(radians: Number): Matrix;

  /**
   * 返回一个可绕 z 轴旋转一组顶点的矩阵。
   * @param radians 绕 z 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
   * @returns 旋转矩阵。
   */
  static createRotationZ(radians: Number): Matrix;

  /**
   * 创建一个缩放 Matrix。
   * @param scale 缩放程度。
   * @returns 缩放矩阵。
   */
  static createScale(scale: Number): Matrix;

  /**
   * 创建一个缩放 Matrix。
   * @param xScale x 轴上的缩放值。
   * @param yScale y 轴上的缩放值。
   * @param zScale z 轴上的缩放值。
   * @returns 缩放矩阵。
   */
  static createScale(xScale: Number, yScale: Number, zScale: Number): Matrix;

  /**
   * 创建一个缩放 Matrix。
   * @param scales x、y 和 z 轴上的缩放程度。
   * @returns 缩放矩阵。
   */
  static createScale(scales: Vector3): Matrix;

  /**
   * 创建一个将几何体展平为指定 Plane 的 Matrix（就像从指定的光源投射阴影）。
   * @param lightDirection 指定投影灯光方向的 Vector3。
   * @param plane 新矩阵为投射阴影而将几何体展平到的 Plane。
   * @returns 可以用于从指定方向将几何图形平展到指定三维平面上的新矩阵。
   */
  static createShadow(lightDirection: Vector3, plane: Plane): Matrix;

  /**
   * 创建一个平移 Matrix。
   * @param xPosition x 轴上的平移值。
   * @param yPosition y 轴上的平移值。
   * @param zPosition z 轴上的平移值。
   * @returns 平移矩阵。
   */
  static createTranslation(
    xPosition: Number,
    yPosition: Number,
    zPosition: Number
  ): Matrix;

  /**
   * 创建一个平移 Matrix。
   * @param position x、y 和 z 轴上的平移程度。
   * @returns 平移矩阵。
   */
  static createTranslation(position: Vector3): Matrix;

  /**
   * 用指定的参数创建场景矩阵。
   * @param position 对象位置。该值被用于平移操作。
   * @param forward 对象的前方方向。
   * @param up 对象的上方向；通常是 [0, 1, 0]。
   * @returns 场景矩阵。
   */
  static createWorld(position: Vector3, forward: Vector3, up: Vector3): Matrix;

  /**
   * 用矩阵组件除以标量。
   * @param matrix1 源矩阵。
   * @param divider 除数。
   * @returns 操作后的新矩阵。
   */
  static divide(matrix1: Matrix, divider: Number): Matrix;

  /**
   * 用一个矩阵的组件除以另一个矩阵的相应组件。
   * @param matrix1 源矩阵。
   * @param matrix2 除数。
   * @returns 操作后的新矩阵。
   */
  static divide(matrix1: Matrix, matrix2: Matrix): Matrix;

  /**
   * 计算矩阵的逆矩阵。
   * @param matrix 源矩阵。
   * @returns 逆矩阵。
   */
  static invert(matrix: Matrix): Matrix;

  /**
   * 在两个矩阵的对应值之间执行线性插值。
   * @param matrix1 源矩阵。
   * @param matrix2 源矩阵。
   * @param amount 插值。
   * @returns 插值结果。
   */
  static lerp(matrix1: Matrix, matrix2: Matrix, amount: Number): Matrix;

  /**
   * 将一个矩阵乘以一个标量值。
   * @param matrix1 源矩阵。
   * @param scaleFactor 标量值。
   * @returns 缩放后的矩阵。
   */
  static multiply(matrix1: Matrix, scaleFactor: Number): Matrix;

  /**
   * 将一个矩阵乘以另一个矩阵。
   * @param matrix1 源矩阵。
   * @param matrix2 源矩阵。
   * @returns 乘积矩阵。
   */
  static multiply(matrix1: Matrix, matrix2: Matrix): Matrix;

  /**
   * 将一个矩阵乘以另一个矩阵并赋值给额外矩阵。
   * @param matrix1 源矩阵。
   * @param matrix2 源矩阵。
   * @param outMatrix 额外矩阵。
   * @returns 乘积矩阵。
   */
  static multiply(matrix1: Matrix, matrix2: Matrix, outMatrix: Matrix): Matrix;

  /**
   * 对矩阵的单个元素求反。
   * @param matrix 源矩阵。
   * @returns 求反后的矩阵。
   */
  static negate(matrix: Matrix): Matrix;

  /**
   * 减去矩阵。
   * @param matrix1 源矩阵。
   * @param matrix2 源矩阵。
   * @returns 包含从矩阵1中的每个元素中减去矩阵2中的对应元素得到的值的矩阵。
   */
  static subtract(matrix1: Matrix, matrix2: Matrix): Matrix;

  /**
   * 通过应用 Quaternion 旋转变换 Matrix。
   * @param value 要变换的 Matrix。
   * @param rotation 要应用的旋转,表达为 Quaternion。
   * @returns 变换后的矩阵。
   */
  static transform(value: Matrix, rotation: Quaternion): Matrix;

  /**
   * 转置矩阵的行和列。
   * @param matrix 源矩阵。
   * @returns 转置矩阵。
   */
  static transpose(matrix: Matrix): Matrix;

  /**
   * 对矩阵的单个元素求反。
   * @param matrix 源矩阵。
   * @returns 求反后的矩阵。
   */
  static ["-"](matrix: Matrix): Matrix;

  /**
   * 将当前 Matrix 与另一个 Matrix 相加。
   * @param other 要添加到当前 Matrix 的 Matrix。
   * @returns 包含两个矩阵总和的矩阵。
   */
  ["+"](other: Matrix): Matrix;

  /**
   * 将当前 Matrix 与另一个 Matrix 相减。
   * @param other 要从当前 Matrix 中减去的 Matrix。
   * @returns 包含两个矩阵差值的矩阵。
   */
  ["-"](other: Matrix): Matrix;

  /**
   * 将当前 Matrix 与另一个 Matrix 相乘。
   * @param other 要与当前 Matrix 相乘的 Matrix。
   * @returns 两个矩阵的乘积。
   */
  ["*"](other: Matrix): Matrix;

  /**
   * 将当前 Matrix 与另一个 Matrix 相除。
   * @param other 要被当前 Matrix 除的 Matrix。
   * @returns 两个矩阵的商。
   */
  ["/"](other: Matrix): Matrix;

  /**
   * 确定指定的 Matrix 是否等于当前 Matrix。
   * @param other 用于与当前 Matrix 比较的 Matrix。
   * @returns 是否相等。
   */
  ["=="](other: Matrix): Boolean;

  /**
   * 确定指定的 Matrix 是否不等于当前 Matrix。
   * @param other 用于与当前 Matrix 比较的 Matrix。
   * @returns 是否不相等。
   */
  ["!="](other: Matrix): Boolean;

  /**
   * 从 3D 缩放/旋转/平移 (SRT) Matrix 中提取标量、平移和旋转组件。
   * @param scale [OutAttribute] 转换矩阵的标量组件，表达为 Vector3。
   * @param rotation [OutAttribute] 转换矩阵的旋转组件，表达为 Quaternion。
   * @param translation [OutAttribute] 转换矩阵的平移组件，表达为 Vector3。
   * @returns 是否可以被分解。
   */
  decompose(
    scale: Vector3,
    rotation: Quaternion,
    translation: Vector3
  ): Boolean;

  /**
   * 计算矩阵的决定因子。
   * @returns 矩阵的行列式。
   */
  determinant(): Number;

  /**
   * 确定指定的 Object 是否等于 Matrix。
   * @param other 用于与当前 Matrix 比较的 Object。
   * @returns 是否相等。
   */
  equals(other: Matrix): Boolean;

  /**
   * 检索当前对象的字符串呈现。
   * @returns 当前对象的字符串呈现。
   */
  toString(): String;

  /**
   * 返回当前 Matrix 的 JSON 表示形式。
   * @returns 当前 Matrix 的 JSON 表示形式。
   */
  toJSON(): Object;
}
