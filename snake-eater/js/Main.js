function main() {
    // 顶点着色器
    let VSHADER_SOURCE =
    `
        attribute vec4 a_Position;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = 10.0;
        }
    `;
    // 片元着色器
    let FSHADER_SOURCE =
    `
        #ifdef GL_ES
            precision mediump float;
        #endif
        void main() {
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
        }
    `;
    let canvas = document.querySelector('#webgl');
    let scene = new Scene(canvas, VSHADER_SOURCE, FSHADER_SOURCE);
    scene.init();
    scene.start();

    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case KeyCode.UP:
                if (scene.player.direct != Direction.UP && scene.player.direct != Direction.DOWN) {
                    scene.player.direct = Direction.UP;
                }
                break;
            case KeyCode.DOWN:
                if (scene.player.direct != Direction.UP && scene.player.direct != Direction.DOWN) {
                    scene.player.direct = Direction.DOWN;
                }
                break;
            case KeyCode.LEFT:
                if (scene.player.direct != Direction.LEFT && scene.player.direct != Direction.RIGHT) {
                    scene.player.direct = Direction.LEFT;
                }
                break;
            case KeyCode.RIGHT:
                if (scene.player.direct != Direction.LEFT && scene.player.direct != Direction.RIGHT) {
                    scene.player.direct = Direction.RIGHT;
                }
                break;
        }
    }


}