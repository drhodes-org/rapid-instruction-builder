/// <reference path="../common/Assert.ts"/>
/// <reference path="../common/Point2.ts"/>
/// <reference path="../common/Entity.ts"/>

module LogicCircle {
    import E = Entity
    
    export class Circle extends E.Entity {
        center: Point2        
        radius: number // in pixels
        angle: number // degrees.
        
        constructor(center: Point2, radius: number) {
            super("logic/Circle")
            this.center = center
            this.radius = radius
            this.angle = 0
            
            this.AddStart("idle")
            this.AddTransition("select", "idle", "selected")   
            this.AddTransition("deselect", "*", "idle")   
        }

        // this has to return a closure.
        Boundary(): (Point2) => boolean {
            // return a function that tests whether a point
            // is on the boundary of this Circle.
            // the unappealing part is that Circle mutates.
            var f = function(p: Point2): boolean {
                // hey dude, you've got a mutable reference, this
                // is potentially prone to future bugs.
                var exactDistance = this.center.DistanceTo(p)
                var wiggleRoom = 1
                return this.radius <= exactDistance + wiggleRoom
                    && this.radius >= exactDistance - wiggleRoom                    
            };

            return f;
        }

        
    }    
}