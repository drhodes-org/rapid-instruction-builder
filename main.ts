/// <reference path="display/Display.ts"/>
import D = Display;

class Point2 {
    x: number;
    y: number;
    //
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class LineSegment {
    p1: Point2;
    p2: Point2;
    //
    constructor(p1: Point2, p2: Point2) {
        this.p1 = p1;
        this.p2 = p2;
    }
}

class Rectangle {
    private width: number;
    private height: number;
}

class Circle {
    center: Point2    
}

interface Draw {
}

function main() {
    var dsp = new D.Display();
}
