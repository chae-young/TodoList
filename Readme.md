<br>
<br>

# React Todolist

![TODOLIST](https://user-images.githubusercontent.com/28029685/133736839-7230ed25-d599-47d0-87f3-548894398f2e.png)
<br>
<br>

## &#127912; 프로젝트 목적 및 동기

리액트를 처음 배우고 나서 추가,삭제,반복문을 활용한 프로젝트를 만들고 싶었습니다. Todolist가 3가지 기능을 구현하기에 적합하다고 생각되어 프로젝트를 작업하게 되었습니다.

<br>
<br>

## 👀 stack

React,webpack,antd

<br>
<br>

## 💻 구현기능 및 동작 원리

1. 리스트 추가 </br></br>
   ![TODOLIST_리스트](https://user-images.githubusercontent.com/28029685/133736842-b4da4bc6-d955-46b6-bb06-cd043e615f09.gif)

    ADD 버튼 클릭,엔터키로 리스트를 추가하도록 하였습니다. </br>
    리스트는 배열로 이루어져 있으며 리스트가 추가될때 배열에 값이 저장됩니다.

<br>
<br>

2. 모든 리스트 삭제</br></br>
   ![TODOLIST_모두삭제](https://user-images.githubusercontent.com/28029685/133736847-79ac96cf-9128-4d87-ab3d-bcbea6a59e2e.gif)

    clear 버튼을 클릭하면 모든 리스트가 삭제됩니다.</br>
    state를 빈배열로 바꾸어 모든 리스트값이 삭제되도록 하였습니다.

<br>
<br>

## 🔨 보완하고 싶은점

1. 완료된 일정만 보여주기</br>
   완료된 일정 버튼을 만들어 클릭시 체크완료된 일정들만 나오도록 구현 하고싶습니다.

2. 컴포넌트 분리

<br>
<br>

## 🤷 프로젝트에서 어려웠던 점 및 해결(MY TALK!)

-   일정 체크 기능 </br>
    생각보다 체크 기능을 구현하는게 어려웠다.</br>
    completedCheck state를 만들어서 새리스트가 추가될때 completedCheck도 같이 값이 추가되도록 하여
    체크되면 0 , 안되면 1 로 값을 저장하도록 하여 체크 된 리스트가 취소선이 되도록 하였다.
    또한 보완할점에 완료된 일정만 나오도록 구현하고 싶었는데 completedCheck state로 추가하면 될거같다!
