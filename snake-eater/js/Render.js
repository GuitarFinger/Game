class Render {
    constructor (canvas, vShaderSource, fShaderSource) {
        this.canvas = canvas;
        this.gl = getWebGLContext(canvas);
        this.vShaderSource = vShaderSource;
        this.fShaderSource = fShaderSource;
        this.a_Position = -1;
        this.g_points = [];
    }
    init () {
        if (!this.gl) {
            console.log('this render don`t have rendering context for WebGL');
            return;
        }
        // 初始化渲染器
        if (!initShaders(this.gl, this.vShaderSource, this.fShaderSource)) {
            console.log('Failed to initialize shaders');
            return;
        }
        // 获取a_Position变量的存储位置
        this.a_Position = this.gl.getAttribLocation(this.gl.program, 'a_Position');
        if (this.a_Position < 0) {
            console.log('Failed to get the storage location of a_Position');
            return;
        }
        // 设置canvas清除色
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // 清除canvas
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        // 绘制图形
        this.update();
        // this.gl.drawArrays(this.gl.POINTS, 0, 1);
    }
    update () {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        for (let i = 0, len = this.g_points.length; i < len; i++) {
            let pos = this.g_points[i];
            this.gl.vertexAttrib3f(this.a_Position, pos.x, pos.y, 0.0);
            this.gl.drawArrays(this.gl.POINTS, 0, 1);
        }
    }
}