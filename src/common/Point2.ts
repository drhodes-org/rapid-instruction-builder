

class Point2 {
    x: number;
    y: number;
    //
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    DistanceTo(other: Point2): number {
        var dx = this.x - other.x
        var dy = this.y - other.y
        
        return Math.sqrt(dx*dx + dy*dy)
    }
}
