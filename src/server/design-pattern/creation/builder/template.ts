export {};

// 제품 클래스 정의
class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

// 빌더 인터페이스 정의
interface Builder {
  productPartA(): void;
  productPartB(): void;
  productPartC(): void;
}

// 콘크리트 빌더 정의
class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.product = new Product1();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public productPartA(): void {
    this.product.parts.push("Part-A");
  }

  public productPartB(): void {
    this.product.parts.push("Part-B");
  }

  public productPartC(): void {
    this.product.parts.push("Part-C");
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.productPartA();
  }

  public buildFullFeatureProduct(): void {
    this.builder.productPartA();
    this.builder.productPartB();
    this.builder.productPartC();
  }
}

function clientCode() {
  const builder = new ConcreteBuilder1();
  const director = new Director(builder);

  director.buildMinimalViableProduct();
  const product1 = builder.getProduct();
  builder.reset();

  director.buildFullFeatureProduct();
  const product2 = builder.getProduct();

  return [product1, product2];
}
