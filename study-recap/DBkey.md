# key 속성
* key는 리스트의 각 요소를 고유하게 식별하는 데 사용, 렌더링과 리렌더링의 효율적인 수행을 도운다.

### 성능 최적화
* React는 컴포넌트의 상태가 변경될 때 컴포넌트를 리렌더링 한다.
* 리스트에서 일부 항목이 추가,삭제 또는 재정렬되는 경우 key속성을 통해 항목을 식별.
* key를 사용하지 않으면 React는 리스트의 모든 요소를 하나씩 비교하며 업데이트하므로 성능에 비효율적

### 컴포넌트 상태의 정확한 관리
* key를 통해 리스트 항목의 식별성을 유지함으로 항목이 가지는 state(상태)도 올바르게 관리될 수 있다.
* 예: 특정 리스트 항목에 입력한 데이터가 다른 항목으로 이동하지 않도록 할 수 있음.