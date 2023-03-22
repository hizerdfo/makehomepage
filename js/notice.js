
window.addEventListener('DOMContentLoaded', function(){
	let button = document.querySelector("#add-content-button");
	button.onclick = addBoardContent;
});


let title = [
	"개인정보처리방침 변경 안내",
	"이달의 맛 투표 결과 발표",
	"[신제품 출시] HNU 새로운 아이스크림과 함께!",
	"[신제품 출시] 이번여름은 이걸로 어때요?",
	"ALL NEW MENU",
	"최고의 아이스크림 탄생!",
	"[신제품 출시] 그동안 이런맛은 없었다",
	"[신제품 출시] 무더운 여름은 이제 안녕!",
	"이달의 이벤트 안내",
	"가격은 그대로, 사이즈는 UP UP UP",
	"Welcome HNU ICECREAM"
];


function addBoardContent(){
	let tbody = document.querySelector("#board-body");
	let first_tr = tbody.firstElementChild;
	let last_number = 1;

	if( first_tr !== null) {
		last_number = first_tr.firstElementChild.innerText;
		last_number = Number(last_number) + 1;
	}

	let tr = document.createElement('tr');

	let num = document.createElement('td');  //게시글 번호
	let text = document.createElement('td'); // 게시글 제목
	let user = document.createElement('td'); // 작성자
	let view = document.createElement('td'); // 조회수

    num.innerText = last_number;
    let idx = parseInt(Math.random() * title.length);
    text.innerText = title[idx];
    user.innerText = "운영자";
    view.innerText = parseInt(Math.random()*9999);

	tr.append(num, text, user, view);
	tbody.insertBefore(tr, tbody.firstElementChild);

}
