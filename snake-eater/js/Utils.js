class Utils {
    /**
     * 获取一定范围内的随机整数
     * @param min
     * @param max
     * @returns {number}
     */
    static getRangeRandom(min, max) {
        return Math.floor(min + Math.random() * (max - min))
    }

    /**
     * canvas坐标转换WebGL坐标
     * @param point
     * @param canvasW
     * @param canvasH
     * @param unitW
     * @param unitH
     * @returns {{x: number, y: number}}
     */
    static coordinateCovertCW(point, canvasW, canvasH, unitW, unitH) {
        return {
            x: ((point.x + unitW/2) - canvasW/2) / (canvasW/2),
            y: ((point.y + unitH/2) - canvasH/2) / (canvasH/2)
        }
    }

    /**
     * WebGL坐标转换canvas坐标
     * @param point
     * @param canvasW
     * @param canvasH
     * @param unitW
     * @param unitH
     * @returns {{x: number, y: number}}
     */
    static coordinateCovertWC(point, canvasW, canvasH, unitW, unitH) {
        return {
            x: Math.round(point.x * (canvasW/2) + canvasW/2 - unitW/2),
            y: Math.round(point.y * (canvasH/2) + canvasH/2 - unitH/2)
        }
    }

}