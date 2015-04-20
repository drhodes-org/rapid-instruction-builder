/// <reference path="./cmd/Cmd.ts"/>

// import D = Display;
// import LC = LogicCircle;

// class LineSegment {
//     p1: Point2;
//     p2: Point2;
//     //
//     constructor(p1: Point2, p2: Point2) {
//         this.p1 = p1;
//         this.p2 = p2;
//     }
// }

// class Rectangle {
//     private width: number;
//     private height: number;
// }

// class CircleWidget{
//     center: Point2    
// }

// interface Draw {
// }



function main() {
    var cmd = new Cmd.Cmd()
    var c1 = cmd.Circle(new Point2(100, 100), 50)
    c1.Anchor(true)
    var c2 = cmd.Circle(new Point2(100, 100), 50)

    // cmd.Constrain(c2.Boundary(), c1.Boundary())
    // cmd.Attract(c2.Center(), cmd.Mouse.Pos())
    var b1 = c2.Boundary()

    
    console.log("exit sucessful")
    
    // var circle = this.paper.circle(10, 10, 10)
    // circle.attr("fill", "#f00")
    // circle.attr("stroke", "#fff")    
}
