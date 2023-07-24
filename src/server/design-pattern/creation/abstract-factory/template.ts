interface ProductAInterface {
  chair(): void;
}
class KRProductA implements ProductAInterface {
  chair(): void {
    console.log("I am korea chair");
  }
}
class USAProductA implements ProductAInterface {
  chair(): void {
    console.log("I am usa chair");
  }
}

interface ProductBInterface {
  sofa(): void;
  chairSofa(productA: ProductAInterface): void;
}
class KRProductB implements ProductBInterface {
  sofa(): void {
    console.log("I am korea sofa");
  }
  chairSofa(krProductA: KRProductA): void {
    krProductA.chair();
  }
}
class USAProductB implements ProductBInterface {
  sofa(): void {
    console.log("I am usa sofa");
  }
  chairSofa(usaProductA: USAProductA): void {
    usaProductA.chair();
  }
}

interface AbstractFactory {
  createProductA(): ProductAInterface;
  createProductB(): ProductBInterface;
}
class KRFactory implements AbstractFactory {
  createProductA(): ProductAInterface {
    return new KRProductA();
  }
  createProductB(): ProductBInterface {
    return new KRProductB();
  }
}
class USAFactory implements AbstractFactory {
  createProductA(): ProductAInterface {
    return new USAProductA();
  }
  createProductB(): ProductBInterface {
    return new USAProductB();
  }
}

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();
  return productB.chairSofa(productA);
}

clientCode(new KRFactory());

export {};
