/// <reference path="../raphael/raphael.d.ts"/>
/// <reference path="../common/StateMachine.ts"/>
/// <reference path="../common/Assert.ts"/>
import SM = StateMachine;

module Display {
    export class Display {
        private paper: any // Raphael canvas
        private sm: SM.StateMachine
        
        constructor() {
            this.paper = Raphael("canvas", 400, 400)
            var circle = this.paper.circle(10, 10, 10)
            circle.attr("fill", "#f00")
            circle.attr("stroke", "#fff")

            this.sm = new SM.StateMachine()
            this.sm.AddStart("idle")
            this.sm.AddTransition("go", "idle", "running")   
            this.sm.AddTransition("stop", "running", "idle")
            this.sm.Trigger("go")
        }
        
        draw() {
            assertState(this, "running")
        }
        
        toString(): string {
            return "<DisplaySystem>"
        }
    }
}