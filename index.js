// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.PI * this.radius * 2
  }

  get area() {
    return this.radius ** 2 * Math.PI
  }

  set diameter(dia) {
    this.radius = dia / 2
  }

  set circumference(cir) {
    this.radius = cir / 2 / Math.PI
  }
}