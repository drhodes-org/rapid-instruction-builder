/// <reference path="../common/StateMachine.ts"/>
/// <reference path="../common/Assert.ts"/>

module Circle {
    import SM = StateMachine;
    
    export class Circle extends SM.StateMachine {        
        private rafCircle: any;
        
        constructor(paper) {            
            super("Circle")            
            this.rafCircle = paper.circle(10, 10, 10)
            
            this.AddStart("idle")
            this.AddTransition("select", "idle", "selected")   
            this.AddTransition("deselect", "*", "idle")   
        }

        public setCenter(p: Point2) {
            this.rafCircle.attr("cx", p.x)
            this.rafCircle.attr("cy", p.y)
        }
        
        public setRadius(r: number) {
            this.rafCircle.attr("r", r)
        }
    }
}