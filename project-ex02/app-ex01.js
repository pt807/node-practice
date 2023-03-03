/**
 * douzone-math 파일 모듈 테스트
 * 하나의 프로젝트 안의 모듈간 export/import 할 때 방식
 */

var math = require('../douzone-math/index');

console.log(math.PI);
console.log(math.min(1,2,3,4,5));
console.log(math.max(1,2,3,4,5));