const doorScreen = document.getElementById("doorScreen");
const cryingScreen = document.getElementById("cryingScreen");
const wrongNameScreen = document.getElementById("wrongNameScreen");

const knockButton = document.getElementById("knockButton");
const leaveButton = document.getElementById("leaveButton");


// ====================
// 문 두드리기
// ====================

knockButton.addEventListener("click", function() {

  const doorMessage = document.getElementById("doorMessage");
  const messageText = document.getElementById("messageText");
  const buttons = document.querySelector(".buttons");
  const nameInput = document.getElementById("nameInput");

  buttons.style.display = "none";
  doorMessage.style.display = "block";

  messageText.textContent = "•••";

  setTimeout(function() {

    messageText.textContent = "누구세요~..";

    setTimeout(function() {

      nameInput.style.display = "flex";

    }, 1000);

  }, 2000);

});


// ====================
// 그냥 나가기
// ====================

leaveButton.addEventListener("click", function() {

  doorScreen.style.display = "none";
  cryingScreen.style.display = "flex";

});


// ====================
// 아니 / 1 / 2
// ====================

const choiceButtons = document.querySelectorAll(".choice-buttons button");

choiceButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    cryingScreen.style.display = "none";
    doorScreen.style.display = "flex";

  });

});


// ====================
// 이름 확인
// ====================

const nameField = document.getElementById("nameField");
const nameSubmit = document.getElementById("nameSubmit");

nameSubmit.addEventListener("click", function() {

  const name = nameField.value.trim();

  const correctNames = [
    "서현석",
    "현석",
    "만두",
    "자기",
    "애기",
    "아기"
  ];

  const isCorrect = correctNames.some(function(word) {
    return name.includes(word);
  });

if (isCorrect) {

  document.getElementById("nameInput").style.display = "none";

  const doorMessage = document.getElementById("doorMessage");
  const messageText = document.getElementById("messageText");
  const peekFace = document.getElementById("peekFace");

  // 처음: •••
  doorMessage.style.display = "block";
  messageText.textContent = "•••";

  // 2초 후: ••• 사라지고 🥺 빼꼼
  setTimeout(function() {

    doorMessage.style.display = "none";

    peekFace.style.display = "block";
    peekFace.textContent = "🥺";

    // 2초 후: 😄 + 진짜네 !
    setTimeout(function() {

      peekFace.textContent = "😄";

      doorMessage.style.display = "block";
      messageText.textContent = "진짜네 !";

      // 3초 후: 문 열어줄게...
      setTimeout(function() {

        messageText.textContent = "문 열어줄게, 들어와 석아 ~";

        // 다시 3초 후: 얼굴과 말풍선 사라지고 문만 남음
        setTimeout(function() {

  peekFace.style.display = "none";
  doorMessage.style.display = "none";

  // 문 열기 버튼 등장
  document.getElementById("openDoorButton").style.display = "block";

}, 3000);

      }, 3000);

    }, 2000);

  }, 2000);

} else {
  
    // 잘못된 이름
    doorScreen.style.display = "none";
    wrongNameScreen.style.display = "flex";

  }

});
// ====================
// 나가주세요 화면 → 처음으로
// ====================

const wrongNameExitButton = document.getElementById("wrongNameExitButton");

wrongNameExitButton.addEventListener("click", function() {

  // 나가주세요 화면 숨기기
  wrongNameScreen.style.display = "none";

  // 처음 화면 보이기
  doorScreen.style.display = "flex";

  // 초기 상태로 되돌리기
  document.querySelector(".buttons").style.display = "flex";

  document.getElementById("doorMessage").style.display = "none";
  document.getElementById("peekFace").style.display = "none";
  document.getElementById("nameInput").style.display = "none";

  document.getElementById("nameField").value = "";

});
// ====================
// 문 열기
// ====================

const openDoorButton = document.getElementById("openDoorButton");

openDoorButton.addEventListener("click", function() {

  const door = document.querySelector(".door");

  // 문 열기 애니메이션 시작
  door.classList.add("opening");

  // 버튼 사라지기
  openDoorButton.style.display = "none";

  // 문이 열리는 동안 배경도 천천히 핑크색으로
  document.body.classList.add("door-opened");

  // 애니메이션이 끝난 후 문 완전히 숨기기
  setTimeout(function() {

  door.style.display = "none";

  // 문이 사라진 뒤 방 등장
  document.getElementById("roomScreen").style.display = "flex";

}, 1500);

});
// ====================
// 침대 클릭
// ====================

const bedButton = document.getElementById("bedButton");
const bedScreen = document.getElementById("bedScreen");

bedButton.addEventListener("click", function() {

  bedScreen.style.display = "flex";

});
const speakerButton = document.getElementById("speakerButton");
const bgm = document.getElementById("bgm");

speakerButton.addEventListener("click", function() {
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
});
