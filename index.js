// Add your Circle class here

class Circle {
    constructor(radius) {
        this._radius = radius
    }

    get radius() {
        return this._radius
    }

    get diameter() {
      return this._radius * 2
    }

    get circumference() {
      return Math.PI * this.diameter
    }

    get area() {
       return Math.PI * this._radius * this._radius
    }

    set diameter(num) {
       this._radius = num / 2
    }

    set circumference(num) {
        let diameter = num / Math.PI 
        this._radius = diameter / 2 
    }

    set area(num) {
        this._radius = Math.sqrt(num / Math.PI)
    }

}

// let circle1 = new Circle(5)