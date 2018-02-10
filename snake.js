function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspd = 1;
    this.yspd = 0;
    this.total = 0;
    this.tail = [];

    this.update = () => {
        if (this.total == this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x += this.xspd * scl;
        this.y += this.yspd * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = () => {
        fill(200);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        fill(255);
        rect(this.x, this.y, scl, scl);
    }

    this.death = () => {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.dir = (x, y) => {
        if (this.xspd != -x && this.yspd != -y) {

            this.xspd = x;
            this.yspd = y;
        }
    }

    this.eat = (food) => {
        var d = dist(this.x, this.y, food.x, food.y);
        if (d < 1) {
            this.total++;
            return true;
        } else { return false; }
    }
}