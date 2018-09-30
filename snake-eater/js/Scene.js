class Scene {
    constructor (canvas, vShaderSource, fShaderSource) {
        this.canvas = canvas;
        this.render = null; // 渲染器
        this.player = null; // 贪吃蛇对象
        this.foodFactory = null; // 食物生产工厂
        this.score = 0; // 分数
        this.timeInterval = 1000/2;
        this.gameIntervalId = null; // 循环id
        this.isGameOver = false;
        this.vShaderSource = vShaderSource;
        this.fShaderSource = fShaderSource;

    }
    init () {
        this.render = new Render(this.canvas, this.vShaderSource, this.fShaderSource);
        this.player = new Sanke(1, this.canvas.width, this.canvas.height);
        this.foodFactory = new FoodFactory(this.canvas.width, this.canvas.height, this.player.unitW, this.player.unitH);
        this.player.init();
        this.foodFactory.generateFood();
        this.render.g_points = this.foodFactory.stock.concat(this.player.body);
        this.render.init();

    }
    start () {
        if (!this.isGameOver) {
            let that = this;
            this.gameIntervalId = setInterval(function () {
                that.update();
            }, this.timeInterval);
        }
    }
    update () {
        if (this.isGameOver) {
            return;
        }
        let that = this;
        this.player.update(this.foodFactory.originStock[0], function () {
            that.foodFactory.generateFood();
        });
        this.render.g_points = this.foodFactory.stock.concat(this.player.body);
        this.render.update();
    }
    pause () {
        this.gameIntervalId && clearInterval(this.gameIntervalId);
    }
    end () {

    }
}
