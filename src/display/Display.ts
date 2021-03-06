/// <reference path="../../raphael/raphael.d.ts"/>
/// <reference path="Circle.ts"/>
/// <reference path="../common/Assert.ts"/>
/// <reference path="../common/StateMachine.ts"/>
module Display {
    
    import SM = StateMachine;

    export class Display extends SM.StateMachine {
        private paper: any // Raphael canvas
        
        constructor(w: number, h: number) {
            super("Display")            
            this.paper = Raphael("canvas", w, h)
            
            this.AddStart("idle")
            this.AddTransition("start-drawing", "idle", "drawing")   
            this.AddTransition("stop-drawing", "drawing", "idle")
        }

        // Shape API
        public Circle(): Circle.Circle {
            // eventually this will have a reference in an
            // entity store.
            return new Circle.Circle(this.paper);
        }

        public CmdGetPaper(): any {
            return this.paper;
        }

        
        toString(): string {
            return "<DisplaySystem>"
        }
    }
}