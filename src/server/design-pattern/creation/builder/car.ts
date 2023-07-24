// 빌더 패턴을 사용하는 것은 제품에 매우 복잡하고 광범위한 설정이 필요한 경우에만
// 의미가 있다. 다음 두 제품은 공통된 인터페이스는 없지만 관련되어 있다.
class Car {
  // 좌석이 다 다르고, 엔진이 다 다르고, ..
}

class Manual {
  // 각 자동차마다 다른 메뉴얼
}

// 빌더 인터페이스는 제품 객체들의 다른 부분들을 지정한다.
// 이말은 new 로 제품을 전달할때 공통된 기능들은 구현을 먼저 할수도 있다.
interface Builder {
  reset(): void;
  setSeats(seat: number): void;
  setEngine(): void;
  setTripComputer(): void;
  setGPS(): void;
}

// 빌더패터는 초기 제품들이 공통된 인터페이스를 따를 필요가 없다
class CarBuilder implements Builder {
  car!: Car;

  constructor() {
    this.reset();
  }

  reset() {
    this.car = new Car();
  }

  setSeats(): void {
    console.log("Set seats to car");
  }

  setEngine(): void {
    console.log("Set engine to car");
  }

  setTripComputer(): void {
    console.log("Set trip computer to car");
  }

  setGPS(): void {
    console.log("Set gps computer to car");
  }

  getCar(): Car {
    const car = this.car;
    this.reset();
    return car;
  }
}

class CarManualBuilder implements Builder {
  manual!: Manual;

  constructor() {
    this.reset();
  }

  reset() {
    this.manual = new Manual();
  }

  setSeats(): void {
    console.log("Set seats m to car");
  }

  setEngine(): void {
    console.log("Set engine m to car");
  }

  setTripComputer(): void {
    console.log("Set trip computer m to car");
  }

  setGPS(): void {
    console.log("Set gps computer m to car");
  }

  getManual(): Manual {
    const manual = this.manual;
    this.reset();
    return manual;
  }
}

// 클라이언트 코드나 파라미터 값에 따라 달라지는 디렉터 클래스 구조

class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  changeBuilder(builder: Builder) {
    this.builder = builder;
  }

  constructSportsCar(): void {
    this.builder.reset();
    this.builder.setSeats(2);
    this.builder.setEngine();
    this.builder.setTripComputer();
    this.builder.setGPS();
  }

  constructSUV(): void {
    //...
  }

  constructBenzManual(): void {
    //...
  }
}

class Client {
  constructor() {}
  makeCar() {
    const carBuilder = new CarBuilder();
    const director = new Director(carBuilder);
    director.constructSportsCar();
    const sportsCar = carBuilder.getCar();

    const carManualBuilder = new CarManualBuilder();
    director.changeBuilder(carManualBuilder);
    director.constructSportsCar();
    const sportsCarManual = carManualBuilder.getManual();

    return [sportsCar, sportsCarManual];
  }
}

export {};
