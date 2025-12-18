import List from "@jyostudio/list";
import Matrix from "./matrix";
import Quaternion from "./quaternion";
import Vector2 from "./vector2";
declare const CONSTRUCTOR_SYMBOL: unique symbol;
/**
 * 定义具有三个组件的矢量。
 * @class
 */
export default class Vector3 {
    #private;
    /**
     * 返回在右手坐标系 (0, 0, 1) 中指定向后方向的单位 Vector3。
     */
    static get backward(): Vector3;
    /**
     * 返回指定向下方向 (0, −1, 0) 的单位 Vector3。
     */
    static get down(): Vector3;
    /**
     * 返回在右手坐标系 (0, 0,−1) 中指定向前方向的单位 Vector3。
     */
    static get forward(): Vector3;
    /**
     * 返回指定向左方向 (−1, 0, 0) 的单位 Vector3。
     */
    static get left(): Vector3;
    /**
     * 返回所有组件为一体的 Vector3。
     */
    static get one(): Vector3;
    /**
     * 返回指向右侧 (1, 0, 0) 的单位 Vector3。
     */
    static get right(): Vector3;
    /**
     * 返回 x 单位 Vector3 (1, 0, 0)。
     */
    static get unitX(): Vector3;
    /**
     * 返回 y 单位 Vector3 (0, 1, 0)。
     */
    static get unitY(): Vector3;
    /**
     * 返回 z 单位 Vector3 (0, 0, 1)。
     */
    static get unitZ(): Vector3;
    /**
     * 返回一个指定向上方向 (0, 1, 0) 的单位矢量。
     */
    static get up(): Vector3;
    /**
     * 返回所有组件均设置为零的 Vector3。
     */
    static get zero(): Vector3;
    /**
     * 获取矢量的 x 色差。
     */
    get x(): number;
    /**
     * 设置矢量的 x 色差。
     */
    set x(value: number);
    /**
     * 获取矢量的 y 色差。
     */
    get y(): number;
    /**
     * 设置矢量的 y 色差。
     */
    set y(value: number);
    /**
     * 获取矢量的 z 色差。
     */
    get z(): number;
    /**
     * 设置矢量的 z 色差。
     */
    set z(value: number);
    /**
     * 新建一个空的 Vector3 实例。
     */
    constructor();
    /**
     * 新建 Vector3 实例。
     * @param value 每个色差的初始化值。
     */
    constructor(value: number);
    /**
     * 初始化新的 Vector3 实例。
     * @param x 矢量 x 色差的初始值。
     * @param y 矢量 y 色差的初始值。
     * @param z 矢量 z 色差的初始值。
     */
    constructor(x: number, y: number, z: number);
    /**
     * 初始化新的 Vector3 实例。
     * @param value 包含 x 和 y 色差的初始化值的矢量。
     * @param z 矢量 z 色差的初始值。
     */
    constructor(value: Vector2, z: number);
    /**
     * 结构化构造函数。
     * @returns Vector3 实例。
     */
    static ["##STRUCT_CONSTRUCTOR##"](): Vector3;
    private static [CONSTRUCTOR_SYMBOL];
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * 将两个矢量相加。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 相加后的矢量。
     */
    static add(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 将两个矢量相加。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 源矢量之和。
     */
    static add(value1: Vector3, value2: Vector3, result: Vector3): void;
    /**
     * 返回一个相对于 3D 三角形的质心坐标中某指定点的 3D Cartesian 坐标所在的 Vector3。
     * @param value1 包含三角形顶点 1 的 3D Cartesian 坐标的 Vector3。
     * @param value2 包含三角形顶点 2 的 3D Cartesian 坐标的 Vector3。
     * @param value3 包含三角形顶点 3 的 3D Cartesian 坐标的 Vector3。
     * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @returns 相对于 3D 三角形的质心坐标中某指定点的 3D Cartesian 坐标所在的 Vector3。
     */
    static barycentric(value1: Vector3, value2: Vector3, value3: Vector3, amount1: number, amount2: number): Vector3;
    /**
     * 返回一个相对于 3D 三角形的质心（重心）坐标中某指定点的 3D Cartesian 坐标所在的 Vector3。
     * @param value1 包含三角形顶点 1 的 3D Cartesian 坐标的 Vector3。
     * @param value2 包含三角形顶点 2 的 3D Cartesian 坐标的 Vector3。
     * @param value3 包含三角形顶点 3 的 3D Cartesian 坐标的 Vector3。
     * @param amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @param result [OutAttribute] 在退出时，指定点的 3D Cartesian 坐标放置在该 Vector3 中。
     */
    static barycentric(value1: Vector3, value2: Vector3, value3: Vector3, amount1: number, amount2: number, result: Vector3): void;
    /**
     * 用指定的位置执行 Catmull-Rom 插值。
     * @param value1 插值中的第一个位置。
     * @param value2 插值中的第二个位置。
     * @param value3 插值中的第三个位置。
     * @param value4 插值中的第四个位置。
     * @param amount 权重因子。
     * @returns 插值结果。
     */
    static catmullRom(value1: Vector3, value2: Vector3, value3: Vector3, value4: Vector3, amount: number): Vector3;
    /**
     * 用指定的位置执行 Catmull-Rom 插值。
     * @param value1 插值中的第一个位置。
     * @param value2 插值中的第二个位置。
     * @param value3 插值中的第三个位置。
     * @param value4 插值中的第四个位置。
     * @param amount 权重因子。
     * @param result [OutAttribute] 作为 Catmull-Rom 插值结果的矢量。
     */
    static catmullRom(value1: Vector3, value2: Vector3, value3: Vector3, value4: Vector3, amount: number, result: Vector3): void;
    /**
     * 将值限制在指定范围内。
     * @param value1 要限制的值。
     * @param min 最小值。
     * @param max 最大值。
     * @returns 限制后的值。
     */
    static clamp(value1: Vector3, min: Vector3, max: Vector3): Vector3;
    /**
     * 将值限制在指定范围内。
     * @param value1 要限制的值。
     * @param min 最小值。
     * @param max 最大值。
     * @param result [OutAttribute] 限制的值。
     */
    static clamp(value1: Vector3, min: Vector3, max: Vector3, result: Vector3): void;
    /**
     * 计算两个矢量的叉积。
     * @param vector1 源矢量。
     * @param vector2 源矢量。
     * @returns 两个矢量的叉积。
     */
    static cross(vector1: Vector3, vector2: Vector3): Vector3;
    /**
     * 计算两个矢量的叉积。
     * @param vector1 源矢量。
     * @param vector2 源矢量。
     * @param result [OutAttribute] 矢量叉积。
     */
    static cross(vector1: Vector3, vector2: Vector3, result: Vector3): void;
    /**
     * 计算两个矢量之间的距离。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个矢量之间的距离。
     */
    static distance(value1: Vector3, value2: Vector3): number;
    /**
     * 计算两个平方矢量之间的距离。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 两个平方矢量之间的距离。
     */
    static distanceSquared(value1: Vector3, value2: Vector3): number;
    /**
     * 用一个矢量除以一个标量值。
     * @param value1 源矢量。
     * @param value2 除数。
     * @returns 结果矢量。
     */
    static divide(value1: Vector3, value2: number): Vector3;
    /**
     * 用一个矢量除以一个标量值。
     * @param value1 源矢量。
     * @param value2 除数。
     * @param result [OutAttribute] 相除结果。
     */
    static divide(value1: Vector3, value2: number, result: Vector3): void;
    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @param value1 源矢量。
     * @param value2 除数矢量。
     * @returns 结果矢量。
     */
    static divide(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @param value1 源矢量。
     * @param value2 除数。
     * @param result [OutAttribute] 相除结果。
     */
    static divide(value1: Vector3, value2: Vector3, result: Vector3): void;
    /**
     * 计算两个矢量的点积。如果两个矢量均为单位矢量，则点积返回 -1 到 1 之间的浮点值，该值可以用来确定两个矢量之间的角度的一些性质。例如，它可以显示这些矢量是正交、平行，还是互为锐角或钝角。
     * @param vector1 源矢量。
     * @param vector2 源矢量。
     * @returns 点积。
     */
    static dot(vector1: Vector3, vector2: Vector3): number;
    /**
     * 执行 Hermite 样条插值。
     * @param value1 源位置矢量。
     * @param tangent1 源切线矢量。
     * @param value2 源位置矢量。
     * @param tangent2 源切线矢量。
     * @param amount 权重因子。
     * @returns 插值结果。
     */
    static hermite(value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: number): Vector3;
    /**
     * 执行 Hermite 样条插值。
     * @param value1 源位置矢量。
     * @param tangent1 源切线矢量。
     * @param value2 源位置矢量。
     * @param tangent2 源切线矢量。
     * @param amount 权重因子。
     * @param result [OutAttribute] Hermite 样条插值的结果。
     */
    static hermite(value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: number, result: Vector3): void;
    /**
     * 在两个矢量之间执行线性插值。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns 插值结果。
     */
    static lerp(value1: Vector3, value2: Vector3, amount: number): Vector3;
    /**
     * 在两个矢量之间执行线性插值。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param amount 指示 value2 权重的 0 到 1 之间的值。
     * @param result [OutAttribute] 插值的结果。
     */
    static lerp(value1: Vector3, value2: Vector3, amount: number, result: Vector3): void;
    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    static max(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 最大化的矢量。
     */
    static max(value1: Vector3, value2: Vector3, result: Vector3): void;
    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    static min(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 最小化的矢量。
     */
    static min(value1: Vector3, value2: Vector3, result: Vector3): void;
    /**
     * 将一个矢量乘以一个标量值。
     * @param value1 源矢量。
     * @param scaleFactor 标量值。
     * @returns 结果矢量。
     */
    static multiply(value1: Vector3, scaleFactor: number): Vector3;
    /**
     * 将一个矢量乘以一个标量值。
     * @param value1 源矢量。
     * @param scaleFactor 标量值。
     * @param result [OutAttribute] 相乘的结果。
     */
    static multiply(value1: Vector3, scaleFactor: number, result: Vector3): void;
    /**
     * 将两个矢量的组件彼此相乘。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    static multiply(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 将两个矢量的组件彼此相乘。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 相乘的结果。
     */
    static multiply(value1: Vector3, value2: Vector3, result: Vector3): void;
    /**
     * 返回指向反方向的矢量。
     * @param value 源矢量。
     * @returns 结果矢量。
     */
    static negate(value: Vector3): Vector3;
    /**
     * 返回指向反方向的矢量。
     * @param value 源矢量。
     * @param result [OutAttribute] 指向反方向的矢量。
     */
    static negate(value: Vector3, result: Vector3): void;
    /**
     * 根据指定的矢量创建单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     * @param value 源 Vector3。
     * @returns 结果矢量。
     */
    static normalize(value: Vector3): Vector3;
    /**
     * 根据指定的矢量创建单位矢量，将结果写入到用户指定的变量中。结果是与原始矢量相同方向的长度矢量单位。
     * @param value 源矢量。
     * @param result [OutAttribute] 法线化的矢量。
     */
    static normalize(value: Vector3, result: Vector3): void;
    /**
     * 返回具有指定法线的表面的矢量反射。
     * @param vector 源矢量。
     * @param normal 表面的法线。
     * @returns 结果矢量。
     */
    static reflect(vector: Vector3, normal: Vector3): Vector3;
    /**
     * 返回具有指定法线的表面的矢量反射。
     * @param vector 源矢量。
     * @param normal 表面的法线。
     * @param result [OutAttribute] 反射的矢量。
     */
    static reflect(vector: Vector3, normal: Vector3, result: Vector3): void;
    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @returns 插值结果。
     */
    static smoothStep(value1: Vector3, value2: Vector3, amount: number): Vector3;
    /**
     * 使用三次方程计算两个值之间的插值。
     * @param value1 源值。
     * @param value2 源值。
     * @param amount 权重值。
     * @param result [OutAttribute] 插入值。
     */
    static smoothStep(value1: Vector3, value2: Vector3, amount: number, result: Vector3): void;
    /**
     * 将一个矢量减去一个矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @returns 结果矢量。
     */
    static subtract(value1: Vector3, value2: Vector3): Vector3;
    /**
     * 将一个矢量减去一个矢量。
     * @param value1 源矢量。
     * @param value2 源矢量。
     * @param result [OutAttribute] 相减结果。
     */
    static subtract(value1: Vector3, value2: Vector3, result: Vector3): void;
    /**
     * 通过给定矩阵变换 3D 矢量。
     * @param position 源矢量。
     * @param matrix 变换矩阵。
     * @returns 结果矢量。
     */
    static transform(position: Vector3, matrix: Matrix): Vector3;
    /**
     * 通过给定 Matrix 变换 Vector3。
     * @param position 源 Vector3。
     * @param matrix 变换 Matrix。
     * @param result [OutAttribute] 变换的矢量。
     */
    static transform(position: Vector3, matrix: Matrix, result: Vector3): void;
    /**
     * 通过指定 Quaternion 旋转变换 Vector3。
     * @param value 要旋转的 Vector3。
     * @param rotation 要应用的 Quaternion 旋转。
     * @returns 结果矢量。
     */
    static transform(value: Vector3, rotation: Quaternion): Vector3;
    /**
     * 通过指定 Quaternion 旋转变换 Vector3。
     * @param value 要旋转的 Vector3。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param result [OutAttribute] 使用旋转结果进行填充的现有 Vector3。
     */
    static transform(value: Vector3, rotation: Quaternion, result: Vector3): void;
    /**
     * 将指定变换 Matrix 应用到 Vector3 数组的指定范围，并将结果写入到目标数组的指定范围。
     * @param sourceArray 源数组。
     * @param sourceIndex 要启动的源数组中的索引。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 现有目标数组。
     * @param destinationIndex 要启动的目标数组中的索引。
     * @param length 要变换的 Vector3 数量。
     */
    static transform(sourceArray: List<Vector3>, sourceIndex: number, matrix: Matrix, destinationArray: List<Vector3>, destinationIndex: number, length: number): void;
    /**
     * 将指定 Quaternion 旋转应用到 Vector3 数组的指定范围，并将结果写入到目标数组的指定范围。
     * @param sourceArray 源数组。
     * @param sourceIndex 要启动的源数组中的索引。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param destinationArray 现有目标数组。
     * @param destinationIndex 要启动的目标数组中的索引。
     * @param length 要变换的 Vector3 数量。
     */
    static transform(sourceArray: List<Vector3>, sourceIndex: number, rotation: Quaternion, destinationArray: List<Vector3>, destinationIndex: number, length: number): void;
    /**
     * 通过指定 Matrix 变换 Vector3 的源数组，并将结果写入现有的目标数组。
     * @param sourceArray 源数组。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 变换后的 Vector3 被写入的现有目标数组。
     */
    static transform(sourceArray: List<Vector3>, matrix: Matrix, destinationArray: List<Vector3>): void;
    /**
     * 通过指定 Quaternion 旋转变换 Vector3 的源数组，并将结果写入现有的目标数组。
     * @param sourceArray 源数组。
     * @param rotation 要应用的 Quaternion 旋转。
     * @param destinationArray 变换后的 Vector3 被写入的现有目标数组。
     */
    static transform(sourceArray: List<Vector3>, rotation: Quaternion, destinationArray: List<Vector3>): void;
    /**
     * 通过矩阵变换 3D 矢量法线。
     * @param normal 源矢量。
     * @param matrix 变换矩阵。
     * @returns 变换后的矢量。
     */
    static transformNormal(normal: Vector3, matrix: Matrix): Vector3;
    /**
     * 通过矩阵变换矢量法线。
     * @param normal 源矢量。
     * @param matrix 变换 Matrix。
     * @param result [OutAttribute] 通过变换得到的 Vector3。
     */
    static transformNormal(normal: Vector3, matrix: Matrix, result: Vector3): void;
    /**
     * 通过指定 Matrix 变换 3D 矢量法线数组中的指定范围，并将结果写入目标数组的指定范围内。
     * @param sourceArray Vector3 法线的源数组。
     * @param sourceIndex 源数组中的起始索引。
     * @param matrix 要应用的变换 Matrix。
     * @param destinationArray 目标 Vector3 数组。
     * @param destinationIndex 目标数组中的起始索引。
     * @param length 要变换的矢量的数量。
     */
    static transformNormal(sourceArray: List<Vector3>, sourceIndex: number, matrix: Matrix, destinationArray: List<Vector3>, destinationIndex: number, length: number): void;
    /**
     * 通过指定 Matrix 变换 3D 矢量法线数组。
     * @param sourceArray 要变换的 Vector3 法线数组。
     * @param matrix 要应用的变换矩阵。
     * @param destinationArray 要将变换结果写入到的现有 Vector3 数组。
     */
    static transformNormal(sourceArray: List<Vector3>, matrix: Matrix, destinationArray: List<Vector3>): void;
    /**
     * 对传入的 Vector3 取反。
     * @param other 用于取反的 Vector3。
     * @returns 取反后的 Vector3。
     */
    static ["-"](other: Vector3): Vector3;
    /**
     * 将当前 Vector3 与另一个 Vector3 相加。
     * @param other 用于相加的 Vector3。
     * @returns 相加后的 Vector3。
     */
    ["+"](other: Vector3): Vector3;
    /**
     * 将当前 Vector3 与另一个 Vector3 相减。
     * @param other 用于相减的 Vector3。
     * @returns 相减后的 Vector3。
     */
    ["-"](other: Vector3): Vector3;
    /**
     * 将当前 Vector3 与另一个 Vector3 相乘。
     * @param other 用于相乘的 Vector3。
     * @returns 相乘后的 Vector3。
     */
    ["*"](other: Vector3): Vector3;
    /**
     * 将当前 Vector3 与另一个 Vector3 相除。
     * @param other 用于相除的 Vector3。
     * @returns 相除后的 Vector3。
     */
    ["/"](other: Vector3): Vector3;
    /**
     * 确定指定的 Vector3 是否等于当前 Vector3。
     * @param other 用于与当前 Vector3 比较的 Vector3。
     * @returns 是否相等。
     */
    ["=="](other: Vector3): boolean;
    /**
     * 确定指定的 Vector3 是否不等于当前 Vector3。
     * @param other 用于与当前 Vector3 比较的 Vector3。
     * @returns 是否不相等。
     */
    ["!="](other: Vector3): boolean;
    /**
     * 确定指定的 Vector3 是否等于当前 Vector3。
     * @param other 用于与当前 Vector3 比较的 Vector3。
     * @returns 是否相等。
     */
    equals(other: Vector3): boolean;
    /**
     * 计算矢量的长度。
     * @returns 矢量的长度。
     */
    length(): number;
    /**
     * 计算平方矢量的长度。
     * @returns 平方矢量的长度。
     */
    lengthSquared(): number;
    /**
     * 将当前矢量转为单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     */
    normalize(): void;
    /**
     * 检索当前对象的字符串呈现。
     * @returns 当前对象的字符串呈现。
     */
    toString(): string;
    /**
     * 返回当前 Vector3 的 JSON 表示形式。
     * @returns 当前 Vector3 的 JSON 表示形式。
     */
    toJSON(): object;
}
export {};
