export {};

// 콘크이트 프로토타입
abstract class Shape {
  x: number;
  y: number;
  color: string;

  constructor(source?: Shape) {
    if (source === undefined) {
      this.x = 0;
      this.y = 0;
      this.color = "#000000";
    } else {
      this.x = source.x;
      this.y = source.y;
      this.color = source.color;
    }
  }

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(source: Rectangle) {
    super(source);
    if (source === undefined) {
      this.width = 0;
      this.height = 0;
    } else {
      this.width = source.width;
      this.height = source.height;
    }
  }
  clone(): Rectangle {
    return new Rectangle(this);
  }
}
