/// <reference path="../common/StateMachine.ts"/>
/// <reference path="../common/Assert.ts"/>

module Circle {
    import SM = StateMachine;
    
    export class Circle extends SM.StateMachine {
        constructor() {
            super("Circle")            

            this.AddStart("idle")
            this.AddTransition("select", "idle", "selected")   
            this.AddTransition("deselect", "*", "idle")   
        }
    }
}