function copyBtn(id) {
    var r = document.createRange();

    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copyBtn');
    window.getSelection().removeAllRanges();

    alert("뉴스레터가 복사되었습니다.")
}