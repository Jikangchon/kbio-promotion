if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $feedback = $_POST["feedback"];

    $to = "jikang.chon@kbiotechsolutions.com";
    $subject = "Feedback: " . $name;
    $message = "이름: $name\n이메일: $email\n 피드백 내용: \n$feedback";

    // 이메일 보내는 코드
    mail($to, $subject, $message);

    echo "피드백이 전송되었습니다. 감사합니다!";
}