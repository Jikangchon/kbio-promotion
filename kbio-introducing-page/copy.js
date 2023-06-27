var copyElement = document.getElementById("copyElement");
// 버튼 클릭 이벤트

copyElement.addEventListener("click", function(){
    // 복사할 텍스트를 변수에 할당
    var text = document.getElementById("newsletter-section").innerText;
    // input text 태그를 생성
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    // 가상으로 가져올 태그에 만들어준 input 태그를 붙여준다.
    document.getElementById("newsletter-section").appendChild(createInput);
    // 만든 input 태그의 value 값에 복사할 텍스트 값을 추가
    createInput.value = text;
    // 복사 기능을 수행한 후
    createInput.select();
    document.exeCommand('copy');
    // 가상으로 붙여주었던 input 태그를 제거
    document.getElementById("newsletter-section").removeChild(createInput);
    alert('뉴스레터 복사가 완료되었습니다.');
});