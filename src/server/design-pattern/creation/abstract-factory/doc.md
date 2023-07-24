# Abstract Factory

## 1. 의도

- 관련 객체들의 구상 클래스를 지정하지 않고도 관련 객체들의 모음을 생성할 수 있도록 하는 패턴
- 관련 객체들이란 즉 제품군을 말한다

## 2. 구조

![structure-indexed](./structure-indexed.png)

### 1\) Abstract Product Family interface

- 제품군 마다 개별적인 인터페이스를 만든다

### 2\) Concrete Product Family

- 제품군 마다 제품들 구현

### 3\) Abstract Factory

- 제품군들을 생성하기 위한 추상 팩토리

### 4\) Concrete Creator

- 추상 팩토리를 구현하여 각각의 제품군을 만드는 구현화된 팩토리

## 3. 적용
