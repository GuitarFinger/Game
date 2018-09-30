class FoodFactory {
    constructor(canvasW, canvasH, unitW, unitH) {
        this.id = 1;
        this.stock = []; // 仓库
        this.originStock = []; // 原始仓库
        this.canvasW = canvasW;
        this.canvasH = canvasH;
        this.unitW = unitW;
        this.unitH = unitH;
    }
    // 生产食物
    generateFood() {
        let food = {
            x: 10 * Utils.getRangeRandom(0, this.canvasW/this.unitW),
            y: 10 * Utils.getRangeRandom(0, this.canvasH/this.unitH)
        };
        this.storageFood(food);
        this.iterationID();
    }

    /**
     * 存储食物
     * @param food
     */
    storageFood(food) {
        this.originStock = [food];
        food = Utils.coordinateCovertCW(food, this.canvasW, this.canvasH, this.unitW, this.unitH);
        this.stock = [food];
    }
    // 迭代id
    iterationID() {
        this.id++;
    }
}