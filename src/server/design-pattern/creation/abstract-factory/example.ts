// 1. Abstract Product Family interface
interface Button {
  paint(): void;
}

interface Checkbox {
  paint(): void;
}

// 2. Concrete Product Family
class WinButton implements Button {
  paint(): void {
    console.info("WinButton paint!");
  }
}
class MacButton implements Button {
  paint(): void {
    console.info("MacButton paint!");
  }
}

class WinCheckbox implements Checkbox {
  paint(): void {
    console.info("WinCheckbox paint!");
  }
}
class MacCheckbox implements Checkbox {
  paint(): void {
    console.info("MacCheckbox paint!");
  }
}

// 3. Abstract Factory
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// 4. concrete factory
class WinGUIFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacGUIFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// 클라이언트 코드
class Application {
  private factory: GUIFactory;
  private button: Button | null;

  constructor(factory: GUIFactory) {
    this.factory = factory;
    this.button = null;
  }
  public createUI() {
    this.button = this.factory.createButton();
  }
  public paint() {
    if (!this.button) {
      throw new Error("button is not initialized");
    }
    this.button.paint();
  }
}

// let factory: GUIFactory | null = null;

// if (process.env.OS == "Windows") {
//   factory = new WinGUIFactory();
// } else {
//   factory = new MacGUIFactory();
// }

// if (!factory) {
//   throw new Error("factory is null");
// }

// const app = new Application(factory);
// app.createUI();
// app.paint();

export {};
