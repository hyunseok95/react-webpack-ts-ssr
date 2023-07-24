// 1. 제품 인터페이스 선언
interface Button {
  //제품 공통 메소드 정의
  render(shape: string): string;
  onClick(event: string): void;
}

// 2. 제품군 구현
class WindowButton implements Button {
  render(shape: string): string {
    return `windowbutton is ${shape}`;
  }

  onClick(event: string): void {
    console.log(`${event} is ${this}`);
  }
}

class HTMLButton implements Button {
  render(shape: string): string {
    return `html button is ${shape}`;
  }

  onClick(event: string): void {
    console.log(`${event} is ${this}`);
  }
}

// 3. 크리에이터 생성
abstract class Dialog {
  // 팩토리 메서드 정의
  createButton(): Button {
    return new WindowButton();
  }

  render(): string {
    const whatButton = this.createButton();
    return whatButton.render("circle");
  }
}

// 4. 콘크리트 크리에이터 생성
class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowButton();
  }
}

class HTMLDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}

class Application {
  dialog: Dialog | void = undefined;

  // 앱은 현재 설정 또는 환경 설정에 따라 크리에이터의 유형을 선택합니다.
  initialize(): void {
    if (process.env.OS == "Windows") {
      this.dialog = new WindowsDialog();
    } else if (process.env.OS == "Web") {
      this.dialog = new HTMLDialog();
    } else throw new Error("Error! Unknown operating system.");
  }

  // 클라이언트 코드는 비록 구상 크리에이터의 기초 인터페이스를 통하는 것이긴
  // 하지만 구상 크리에이터의 인스턴스와 함께 작동합니다. 클라이언트가
  // 크리에이터의 기초 인터페이스를 통해 크리에이터와 계속 작업하는 한 모든
  // 크리에이터의 자식 클래스를 클라이언트에 전달할 수 있습니다.
  main(): void {
    this.initialize();
    this.dialog && this.dialog.render();
  }
}

export {};
