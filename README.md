# @jyostudio/geometry

一个功能丰富的 TypeScript 几何运算库，提供了常用的数学和几何类，适用于图形学、游戏开发等场景。

## 特性

本库包含以下主要模块：

*   **基础向量与矩阵**: `Vector2`, `Vector3`, `Vector4`, `Matrix`, `Quaternion`
*   **几何图元**: `Point`, `Rectangle`, `Plane`, `Ray`
*   **包围体**: `BoundingBox`, `BoundingSphere`, `BoundingFrustum`
*   **曲线**: `Curve`, `CubicBezier`
*   **辅助工具**: `MathHelper`

## 安装

### 浏览器 (ES Modules)

```html
<script type="importmap">
  {
    "imports": {
      "@jyostudio/geometry": "https://unpkg.com/@jyostudio/geometry"
    }
  }
</script>
```

### Node.js

```bash
npm install @jyostudio/geometry
```

根据环境引用后，用法完全一致，不需要在使用时区分引用地址和方式。

## 示例

```typescript
import { Vector3, Matrix } from "@jyostudio/geometry";

// 向量运算
const v1 = new Vector3(1, 2, 3);
const v2 = new Vector3(4, 5, 6);
const v3 = Vector3.add(v1, v2); // Vector3(5, 7, 9)

// 矩阵变换
const position = new Vector3(10, 0, 0);
const matrix = Matrix.createRotationY(Math.PI / 2);
const transformed = Vector3.transform(position, matrix);
```

## 文档

本库使用 TypeScript 编写，包含完整的类型定义和 JSDoc 注释。在使用支持 TypeScript 的编辑器（如 VS Code）时，可以获得完善的代码提示。

## 许可证

MIT License

Copyright (c) 2025 nivk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
