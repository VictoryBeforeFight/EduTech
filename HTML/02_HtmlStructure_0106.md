# HTML Structure

### <!DOCTYPE>

> 문서의 유형을 정의하기 위해 사용하는 선언문 입니다.

HTML 문서의 최상단에 위치하며, 그 아래에 <html> 태그가 위치하게 됩니다.

### <html>

> 문서의 최상위 요소(root)입니다.

선언문을 제외한 모든 요소를 감싸는 태그입니다. <html> 태그는 <head> 태그와 <body> 태그로 나뉘게 됩니다.

### <head>

> 메타데이터(다른 데이터를 설명하는 데이터)를 통해 문서의 정보를 나타냅니다.

<aside>
💡 <head> 태그 안의 내용들은 문서의 정보를 나타낼 뿐, 실제 브라우저 안에서 렌더링 되지는 않습니다.

</aside>

다음의 태그들은 <head> 태그 안에 쓰이는 태그들입니다.

1. `link`

> 외부 리소스를 연결해 주는 태그입니다.

CSS 파일 불러오기는 다음과 같은 방식으로 진행합니다.

`rel`속성으로 관계를 명시하고, `href` 속성으로 주소를 명시합니다.  

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
```

<aside>
💡 속성과 속성값에 대해서는 추후 다뤄지게 됩니다.

</aside>

1. `meta` 

> <link>, <script>, <style>, <title> 등으로 나타낼 수 없는 메타데이터를 담습니다.
> 

`charset` 속성으로 HTML 문서의 문자 인코딩 방식을 나타낼 수 있습니다.

1. `title` 

> 브라우저 페이지 탭의 문서 제목에 대한 정보를 담습니다.

```html
<title>탭 제목</title>
```


1. `style` 

> 문서의 CSS 스타일 정보를 담습니다. 해당 태그는 link로 별도의 스타일 시트를 지정하지 않고 직접 문서를 스타일링 할 때 사용합니다.

```html
 <style>
   /* CSS 코드 */
 </style>
```

1. `script` 

> Javascript 코드를 작성하는 공간입니다.

`src` 속성을 통해 외부 리소스를 참조할 수 있습니다.

### <body>

> 실제 브라우저 화면에 레이아웃될 태그들이 위치하게 됩니다.

모던 브라우저에서는 <body>태그 안의 요소들만 나열해도 렌더링을 해줍니다.