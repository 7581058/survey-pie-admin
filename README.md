## survey-pie-admin

### Stack

전역 상태 관리: redux  
api 연동: useSWR, axios  
라우팅: react-router  
스타일링: styled-components  
데이터 불변성 유지: immer  
ui라이브러리: antd

</br>
</br>

## 스토리보드 정리

### 설문 조사 관리 페이지

설문조사 리스트가 보여지는 화면

- **사이드바**  
  관리자의 페이지 목록이 나열되는 영역

- **현재 페이지 타이틀**  
  현재 페이지의 타이틀이 노출됨

- **설문조사 생성 버튼**  
  버튼 클릭 시, 설문조사 생성 페이지로 이동

- **설문조사 리스트**  
  저장된 설문조사들이 나열됨  
  노출 정보: 설문조사 고유번호, 제목, 생성일(yyyy-mm-dd)  
  마지막 열은 액션 항목으로 해당 설문조사를 삭제할 수 있는 버튼이 있음  
  리스트에서 설문조사 최대 노출 갯수는 10개

- **삭제 버튼**  
  버튼 클릭 시 해당 목록을 삭제할 것인지에 대한 confirm창 노출  
  confirm창 문구: '정말 삭제하시겠습니까?'  
  '확인'버튼 클릭 시, 해당 설문조사 삭제  
  '취소'버튼 클릭 시, 아무 동작 안함

- **페이지네이션**  
  다른 페이지로 이동할 수 있는 버튼

</br>

### 설문조사 생성 페이지 - 객관식

설문조사 생성에서 객관식 문항을 선택했을 때 화면

- **설문조사 제목**  
  설문조사 제목을 입력할 수 있는 상자

- **문항 미리보기**  
  설정된 각 문항들이 나열됨  
  각 문항을 클릭하여 선택할 수 있음  
  선택 시, 오른쪽 문항 옵션에서 해당 문항에 대한 옵션을 설정 가능  
  객관식 문항: 객관식 문항은 답변 요소들이 라디오 버튼과 함께 단순 나열됨, 기능 동작 안함(단순 미리보기용)

- **질문 추가 버튼**  
  클릭 시, 질문 유형을 선택하는 팝오버 노출  
  팝오버에서 질문 유형 선택 시, 설문의 마지막 질문으로 새로운 질문 추가

- **문항 옵션 영역**  
  왼쪽 미리보기 영역에서 선택한 질문의 옵션을 선택하는 영역  
  옵션에는 공통 옵션과 질문 유형에 따른 세부 옵션 존재

- **공통 옵션**  
  질문: 질문 내용(문자열)  
  설명: 질문에 대한 설명(문자열)  
  필수 여부: 필수로 답변을 하고 넘어가야하는지 여부(yes/no)

- **세부 옵션**  
  답변: 객관식 항목 리스트(문자열), 각 항목을 세미콜론으로 구분  
  최대 선택 가능 개수: 중복으로 선택 가능한 항목 개수(숫자)

</br>

### 설문조사 생성 페이지 - 단답식

설문조사 생성에서 단답식 문항을 선택했을 때 화면

- **단답식 문항**  
  단순 입력 상자  
  placeholder 적용된 모습

- **공통 옵션**  
  질문: 질문 내용(문자열)  
  설명: 질문에 대한 설명(문자열)  
  필수 여부: 필수로 답변을 하고 넘어가야 하는지 여부(yes/no)

- **세부 옵션**  
  일부 글자 제한: 최대로 입력 가능한 글자 수(문자열), 해당 글자를 넘어갈 시 더이상 입력 불가  
  placeholder: 입력 상자에 뜨는 안내 문구(문자열)

</br>

### 설문조사 생성 페이지 - 서술식

설문조사 생성에서 서술식 문항을 선택했을 때 화면

- **서술식 문항**  
  단순 입력 상자(여러줄)  
  placeholder 적용된 모습

- **공통 옵션**  
  질문: 질문 내용(문자열)  
  설명: 질문에 대한 설명(문자열)  
  필수 여부: 필수로 답변을 하고 넘어가야 하는지 여부(yes/no)

- **세부 옵션**  
  일부 글자 제한: 최대로 입력 가능한 글자 수(문자열), 해당 글자를 넘어갈 시 더이상 입력 불가  
  placeholder: 입력 상자에 뜨는 안내 문구(문자열)

</br>
</br>

## 문제 해결

### antd 토큰 시스템 stylelint 오류

> Unexpected unknown value "colorBgContainer" for property "background" (declaration-property-value-no-unknown)Stylelintdeclaration-property-value-no-unknown
> Expected "colorBgContainer" to be "colorbgcontainer" (value-keyword-case)Stylelintvalue-keyword-case

colorBgContainer는 Ant Design(antd)의 CSS 변수가 아니라 Token System에서 제공하는 값이기 때문에, stylelint가 이를 알지 못하고 오류를 발생시키는 것

해결: Stylelint 설정에서 예외 처리를 추가

unknown 옵션은 css에서만 적합하다고 공식문서에 있으므로  
옵션을 `null` 로 끄고
`value-keyword-case` 옵션에서 ingnore에 추가

```json
"rules": {
    "declaration-property-value-no-unknown": null,
    "value-keyword-case": [
      "lower",
      {
        "ignoreKeywords": ["colorBgContainer"]
      }
    ]
  }
```

</br>

### antd, createBrowserRouter 에서 layout children 사용하기

각각의 페이지에서 레이아웃을 최상위에 선언하고 레이아웃에서 children을 받아 구현하는 방식은 이유는 모르겠지만 antd menu item의 link가 제대로 작동하지 않음

해결: createBrowserRouter 구조 변경, children에서 outlet 으로 변경

```javascript
//이 방식은 아예 create 로 이동은 되는데 화면이 안나오고
const router = createBrowserRouter([
  {
    path: '/',
    element: <ListPage />,
    children: [
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'create',
        element: <CreatePage />,
      },
    ],
  },
])
//이 방식은 화면은 나오는데 꼭 create만 두번클릭해야
//antd 메뉴에서 반영됨
const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <ListPage />,
      },

      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'create',
        element: <CreatePage />,
      },
    ],
  },
])
```

```javascript
const ListPage = () => {
  return <MainLayout>list</MainLayout>
}

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content style={{ margin: '0 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
```

구조에서

```javascript
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/list" />,
      },
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'create',
        element: <CreatePage />,
      },
    ],
  },
])
```

```javascript
const ListPage = () => {
  return <div>list</div>
}

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
```

로 변경

비교  
Outlet을 사용한 리다이렉트 구조는 공통 레이아웃을 한 번만 선언하고, 중첩된 라우팅을 통해 다양한 콘텐츠를 렌더링할 수 있어 코드가 깔끔해지고 관리가 용이. 대체로 권장되는 방법

페이지마다 레이아웃을 선언하고 children으로 받는 구조는 각 페이지마다 독립적인 레이아웃이 필요한 경우에 적합하며, 더 많은 코드 중복이 발생할 수 있음. 하지만 레이아웃이 전혀 달라지는 경우에는 유용할 수 있음

일반적으로 Outlet을 사용한 리다이렉트 구조가 더 유리하며, 페이지가 많고 공통 레이아웃을 많이 공유하는 경우 적합
