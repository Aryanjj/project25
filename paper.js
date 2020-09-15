class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 4
        }
        this.body = Bodies.circle(150, 70, 7, options);
        this.radius = 70;
        this.x = 150;
        this.y = 350;
        this.image = loadImage("paper.png")
        World.add(world, this.body);
    }
    display() {
        // circleMode(CENTER);
        // fill("red");
        circle(this.body.position.x, this.body.position.y, this.radius);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius);
    }

}