# GitHub
# [GitHub Tistory](https://gaekobalding.tistory.com/category/github)

<!-- github-markdown-css -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.css" rel="stylesheet">

## Git workflow

### 전체 플로우
1. github main repo create ${\color{#b9ffeb}(open\ repo(main\  branch))}$
2. local PC main clone ${\color{#b9ffeb}(local\ pull\ only\ branch)}$
3. local PC SUB Branch create ${\color{#b9ffeb}(local\ my\ branch)}$
4. github SUB Branch push ${\color{#b9ffeb}(local\ my\ branch -> open\ repo)}$
5. github에서 pull request ${\color{#b9ffeb}(local\ my\ branch -> main\ branch)}$
   <br>
=> ${\color{#ff8d9d}github\ main\ repo\ (main\ branch)에\ 추가됨}$

---

1. local PC main pull
   <br>
=> ${\color{#ff8d9d}업데이트\ 된\ main\ repo\ 적용}$

---
### info
- 원격 저장소가 자신의 소유이거나 collaborator로 등록되어 있는 경우에 가능
- master에 직접 개발하는 것이 아니라, 기능별로 브랜치를 따로 만들어서 개발
- Pull Request를 같이 사용하여 팀원 간 변경 내용에 대한 소통

---

## .gitignore 란?
- 무시하다
- .gitignore라는 파일을 만들어서 내부에 아래 형식으로 작성을 하면 파일을 git에서 무시하여 업로드되지 않는다.
### 사용법
- #, 빈라인 : #은 주석을 의미하며, 빈라인은 아무런 영향을 주지 않습니다.
- *.a : 확장자가 .a 인 모든 파일을 무시합니다.
- folder_name/ : 해당 폴더의 모든 파일을 무시합니다.
- folder_name/*.a : 해당 폴더의 확장자가 .a 인 모든 파일을 무시합니다.
- folder_name/*/.a : 해당 폴더 포함한 하위 모든 폴더에서 확장자가 .a 인 모든 파일을 무시합니다.
- /*.a : 현재 폴더의 확장자가 .a 인 모든파일을 무시합니다.

### 특징
- .확장자 = 해당 확장자 전부 ignore
- 파일명.확장자 = 해당 파일 ignore
- 이미 올라간 파일은 안됨 -> 프로젝트 시작 전 미리 생성하고 지정.
- .gitkeep 빈 디렉토리를 만들기 위해 만드는 더미 파일
- -> .ignore에 지정하면 기록도 남지 않는다.

## branch?
- 나뭇가지, 분기
- 실행하거나 수정할 수 있는 공간을 하나더 만드는 것이다.

### branch -> 여러 가지를 만들어 테스트 할 수 있다.
- 평행 세계가 생기는 것. 새로운 브랜치를 만들어 혼자 작업한다.
> 메인 브랜치에서 -> git merge '가져올 서브브랜치 명'을 하면 서브 브런치에 있는 것을 메인으로 갖올 수 있다.
