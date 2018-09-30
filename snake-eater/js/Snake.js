class Sanke {
    constructor (speed, canvasW, canvasH) {
        this.body = [];
        this.canvasW = canvasW;
        this.canvasH = canvasH;
        this.unitW = 10.0;
        this.unitH = 10.0;
        this.speed = Math.floor(speed);
        this.moveX = this.unitW / (this.canvasW/2);
        this.moveY = this.unitH / (this.canvasH/2);
        this.direct = 0;
        this.isDead = false;
    }
    init () {
        let firstPoint = {
            x: 10 * Utils.getRangeRandom(0, this.canvasW/this.unitW),
            y: 10 * Utils.getRangeRandom(0, this.canvasH/this.unitH)
        };
        let secondPoint = {
            x: firstPoint.x+10,
            y: firstPoint.y
        };
        let thirdPoint = {
            x: secondPoint.x+10,
            y: secondPoint.y
        };
        this.eat(firstPoint);
        this.eat(secondPoint);
        this.eat(thirdPoint);
    }
    move () {
        let nextHeadPos = this.calcNextHeadPos(); // 计算蛇头下一个位置
        if (nextHeadPos) {
            this.body.unshift(nextHeadPos);
            this.body.splice(this.body.length-1, 1);
        }
    }
    update(food, callback) {
        if (this.isDead)return;

        if (this.isCanEat(food)) {
            this.eat(food, callback);
        }
        this.move();
    }
    eat (point, callback) {
        point = Utils.coordinateCovertCW(point, this.canvasW, this.canvasH, this.unitW, this.unitH);
        this.body.unshift(point);
        callback && callback();
    }
    dead () {
        this.isDead = true;
        console.log('I will come back!!!');
    }

    /**
     * 计算蛇头移动的下一个位置
     * @returns {{x: (*|number|Number), y: (number|*|Number)}}
     */
    calcNextHeadPos() {
        let nextHeadPos = { x: this.body[0].x, y: this.body[0].y };
        switch (this.direct) {
            case Direction.UP:
                nextHeadPos.y += this.moveY;
                break;
            case Direction.DOWN:
                nextHeadPos.y -= this.moveY;
                break;
            case Direction.LEFT:
                nextHeadPos.x -= this.moveX;
                break;
            case Direction.RIGHT:
                nextHeadPos.x += this.moveX;
                break;
            default:
                return null;
        }
        return nextHeadPos;
    }
    isCanEat (food) {
        let nextHeadPos = this.calcNextHeadPos();
        if (!nextHeadPos) return false;
        nextHeadPos = Utils.coordinateCovertWC(nextHeadPos, this.canvasW, this.canvasH, this.unitW, this.unitH);
        if (food.x == nextHeadPos.x && food.y == nextHeadPos.y) {
            return true;
        }
        return false;
    }
}