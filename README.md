# 목적

- html, css, javascript 에 대한 기본적인 사용법을 익힌다.
- 추후 portfolio 를 만들기 위한 자료로 활용한다.

# 버그
- width 가 800 기준으로 변화할 때, 화면에 nav__menu 의 변화가 느리게 나타난다. 

# 참조 사이트

- https://developer.mozilla.org/ko/ html, css, javascript 에 대한 정보
- https://validator.w3.org/ 작성한 html 에 대한 검사
- https://www.canva.com/ 로고, 썸네일, 배너, 화이트보드 등
- https://svgtopng.com/ko/ SVG 파일을 PNG 로 변환
- https://fontawesome.com/ 아이콘, 폰트
- https://fonts.google.com/ 구글 폰트, 아이콘
- https://caniuse.com/ html tag 에 대한 지원 여부 검사(브라우저들)
- https://material.io/ 디자인
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background 플렉스박스
- https://viewportsizer.com/devices/ 각종 디바이스의 viewport size 정보
- https://cssgradient.io/ css 에 gradient 효과 넣기
- https://cssmatic.com/box-shadow css 에 shadow 효과 넣기
- https://www.favicon-generator.org/ 파비콘 생성
- https://tinypng.com/ png 파일의 크기를 축소하
- https://ngrok.com/
-

## CSS variable

- css 에서도 변수를 사용하는 것이 좋다.
- css 에서 -- 를 사용하면 custom property 를 생성할 수 있다.
- custom property 는 css 에서 변수처럼 사용할 수 있다.
- 정의한 변수는 모든 자식 요소에서 접근이 가능하다.
- 그래서 보통 :root { --font-size: 20px; ... } 와 같이 최고의 부모 요소를 생성하고 변수를 선언한다.
- 이후 사용할 때는 font-size: var(--font-size); 와 같이 접근하여 사용한다.
- 특히 이러한 변수 사용은 @media screen and (max-width: 768px) { ... } 에서 사용할 때 위력을 발휘한다.
- var(--font-size, 8px) 와 같이 default 값을 줄 수 있다.
- calc(var(--font-size) * 2) 와 같이 연산도 가능하다.

## HTML dataset

- html 의 attribute 에는 id 와 class 가 대표적이다.
- id 는 문법적으로 강요되지는 않지만 unique 한 값으로 사용한다.
- class 는 요소들을 group 짓고 구분하는데 사용한다.
- data-* 의 형식으로 attribute 를 지정할 수 있다.
- 이렇게 할 경우 DOMStringMap 의 property 로 지정된다.
- data- 접두사는 사라지고 - 는 CamelCase 로 변환된다.
- DOMStringMap 은 요소의 dataset property 로 접근할 수 있다.

## CSS class 이름

- BEM 이란 Block Element Modifier 이다.
- block__element--modifier 방식의 이름짓기 방법을 BEM 이라고 한다.

## CSS 정렬

- text-align 의 경우 자식 중에 block 요소는 영향을 받지 않는다. (inline, inline-block 에는 영향을 준다.)
- block 요소의 가운데 정렬은 margin 속성에 auto 를 주어야 한다.

## CSS position

- static 는 원래 있어야 할 자리를 의미한다. top, left 등의 속성은 무효화된다.
- relative 는 원래 있어야 할 영역이 유지되고(다른 요소들에게 영향을 미치지 않는다.) 그 위치로부터 이동한다.
- absolute 는 원래 있어야 할 영역이 사라지고(다른 요소들이 대신 채운다.) 조상 중에 static 이 아닌 최초의 부모로부터 이동한다.
- fixed 는 원래 있어야 할 영역이 사라지고(다른 요소들이 대신 채운다.) 화면을 기준으로 이동한다.
- sticky 는 원래 있어야 할 영역이 유지되고 (다른 요소들에게 영향을 미치지 않는다.) 위치 속성이 지시한 지점을 벗어나지 못한다.

## CSS background

- background: center/cover no-repeat url(...);

## CSS transform, transition

- transform 은 있었던 자리와 모양으로부터 변한다. (위치, 크기, 각도)
- transform: translate(100px, 200px) scale(1.8) rotate(60deg);
- transition 은 변화하는 시간과 속도를 지정한다. (무엇을, 얼마 동안, 어떤 패턴의 속도로)
- transition: all 300ms ease-in;

