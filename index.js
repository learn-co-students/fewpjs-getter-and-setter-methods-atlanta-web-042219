class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }
    
  set circumference(circumference) {
    this.radius = circumference / ( Math.PI * 2 );
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return (this.radius * this.radius) * Math.PI;
  }

}