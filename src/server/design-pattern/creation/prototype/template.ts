export {};

// 기초 프로토
class Prototype {
  // 원시 타입
  primitive: string;
  // 오브젝트
  component: Date;

  constructor(prototype?: Prototype) {
    if (prototype === undefined) {
      this.primitive = "werbkjbad";
      this.component = new Date();
    } else {
      // js 에서 원시타입은 딥카피 신경 쓸필요 없음
      this.primitive = prototype.primitive;
      //   this.primitive = new String(prototype.primitive).toString();
      //   this.primitive = JSON.stringify(JSON.parse(prototype.primitive));

      // date 딥카피
      //   this.component = new Date(prototype.component.getTime());
      this.component = Object.create(prototype.component);
    }
  }

  clone(): Prototype {
    return new Prototype(this);
  }
}

class SubPrototype extends Prototype {
  public circularReference: ComponentWithBackReference;

  constructor(subPrototype?: SubPrototype) {
    super(subPrototype);
    if (subPrototype === undefined) {
      this.circularReference = new ComponentWithBackReference(this);
    } else {
      //   this.circularReference = subPrototype.circularReference;
      this.circularReference = {
        ...subPrototype.circularReference,
        subPrototype: { ...this },
      };
    }
  }

  clone(): SubPrototype {
    return new SubPrototype(this);
  }
}

class ComponentWithBackReference {
  public subPrototype;

  constructor(subPrototype: SubPrototype) {
    this.subPrototype = subPrototype;
  }
}

/**
 * The client code.
 */
function clientCode() {
  const p1 = new SubPrototype();
  //   p1.date = "245";
  //   p1.component = new Date();
  //   p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();
  if (p1.primitive === p2.primitive) {
    console.log("Primitive field values have not been copied. Booo!");
  } else {
    console.log(
      "Primitive field values have been carried over to a clone. Yay!"
    );
  }

  if (p1.component === p2.component) {
    console.log("Simple component has not been cloned. Booo!");
  } else {
    console.log("Simple component has been cloned. Yay!");
  }

  if (p1.circularReference === p2.circularReference) {
    console.log("Component with back reference has not been cloned. Booo!");
  } else {
    console.log("Component with back reference has been cloned. Yay!");
  }

  if (p1.circularReference.subPrototype === p2.circularReference.subPrototype) {
    console.log(
      "Component with back reference is linked to original object. Booo!"
    );
  } else {
    console.log("Component with back reference is linked to the clone. Yay!");
  }
}
