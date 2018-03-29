# Optional Property

```javascript
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
```
- 인터페이스 프로퍼티를 Optional 로 정의할 수 있음
- Optional 프로퍼티는 구현여부에 강제성이 없음
- 하나의 객체안에 옵션값들을 넣어 함수를 실행하는 "option bags" 패턴에 활용됨

