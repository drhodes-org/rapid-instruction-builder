/// <reference path="../raphael/raphael.d.ts"/>
/// <reference path="../common/StateMachine.ts"/>
/// <reference path="../common/Assert.ts"/>
/// <reference path="../common/Draw.ts"/>
import SM = StateMachine;

module Display {
    export class Display extends SM.StateMachine {
        private paper: any // Raphael canvas
        
        constructor() {
            super("Display")            
            this.paper = Raphael("canvas", 400, 400)

            this.AddStart("idle")
            this.AddTransition("start-drawing", "idle", "drawing")   
            this.AddTransition("stop-drawing", "drawing", "idle")
        }
        
        draw() {
            assertState(this, "idle")
            this.Trigger("start-drawing")
            //
            

            
            
            //
            this.Trigger("stop-drawing")
            assertState(this, "idle")
        }

        
        
        
        toString(): string {
            return "<DisplaySystem>"
        }
    }
}