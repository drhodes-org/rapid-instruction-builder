/// <reference path="../../raphael/raphael.d.ts"/>
/// <reference path="../common/StateMachine.ts"/>
/// <reference path="../common/Assert.ts"/>
/// <reference path="Circle.ts"/>

module Display {
    import SM = StateMachine;

    export class Display extends SM.StateMachine {
        private paper: any // Raphael canvas
        
        constructor() {
            super("Display")            
            this.paper = Raphael("canvas", 400, 400)

            this.AddStart("idle")
            this.AddTransition("start-drawing", "idle", "drawing")   
            this.AddTransition("stop-drawing", "drawing", "idle")
        }

        // Shape API
        public Circle(): Circle.Circle {
            // eventually this will have a reference in an
            // entity store.
            return new Circle.Circle()
        }
        
        toString(): string {
            return "<DisplaySystem>"
        }
    }
}