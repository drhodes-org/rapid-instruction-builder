/// <reference path="../common/Assert.ts"/>
/// <reference path="../common/Point2.ts"/>
/// <reference path="../common/StateMachine.ts"/>
/// <reference path="../display/Display.ts"/>
/// <reference path="../logic/Circle.ts"/>
/// <reference path="../cmd/Evt.ts"/>
/// <reference path="../common/Entity.ts"/>

module Cmd {
    import LC = LogicCircle
    import E = Entity
    
    export class Cmd {
        display: Display.Display
        event: Evt.Evt
        
        constructor() {
            this.display = new Display.Display(640, 480)
            var paper = this.display.CmdGetPaper();
            this.event = new Evt.Evt(paper)
            // paper.dblclick(function(){ alert("hello") })
        }

        Circle(p: Point2, radius: number): LC.Circle {
            // grab a display circle
            var dc = this.display.Circle()
            // get a logical circle
            var lc = new LC.Circle(p, radius)
            dc.setCenter(p);
            dc.setRadius(radius);
            return lc;
        }

        

        
        Constrain(e1: E.Entity, e2: E.Entity) {
        }
    }
}