const quiz = [
    {
        question:"Q1.32ビットで表現できるビットパターンの個数は、24ビットで表現できる個数の何倍か？（残り5問）",
        answers:[
            "8倍",
            "16倍",
            "128倍",
            "256倍"
        ],
        correct:"256倍"
    },{
        question: "Q2.Web環境での動的処理を実現するプログラムであって、Webサーバ上だけで動作するものはどれか？（残り4問）",
        answers: [
          "JavaScript",
          "Javaアプレット",
          "Javaサーブレット",
          "VBScript"
        ],
        correct: "JavaScript"
    },{
        question: "Q3.TCP/IPネットワークにおいて、IPアドレスを動的に割り当てるプロトコルはどれか？（残り3問）",
        answers: [
          "ARP",
          "DHCP",
          "RIP",
          "SMTP"
        ],
        correct: "DHCP"
    },{
        question: "Q4.コンピュータウイルスを作成する高位を処罰の対象とする法律はどれか？（残り2問）",
        answers: [
          "刑法",
          "不正アクセス禁止法",
          "不正競争防止法",
          "プロバイダ責任制限法"
        ],
        correct: "刑法"
    },{
        question: "Q5.CRMの目的はどれか？（残り1問）",
        answers: [
          "顧客ロイヤリティの獲得と顧客生涯価値の最大化",
          "在庫不足による販売機会損失の削減",
          "製造に必要な資源の発注量と発注時期の決定",
          "販売時点での商品ごとの販売情報の把握"
        ],
        correct: "顧客ロイヤリティの獲得と顧客生涯価値の最大化"
    }
];

let quizIndex = 0;
let score = 0;
let quizLength = quiz.length;
const $button = document.getElementsByTagName("button")

//クイズの問題文と選択回答の書き換え
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < $button.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++
    }
}
setupQuiz();

//クリックした後の処理（取得した情報のテキストで正誤判定）
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score++
    } else {
        window.alert("不正解！");
    }

    quizIndex++

    if(quizIndex < quiz.length){
        setupQuiz();
    }else{
        window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です！");
    }
}

//ボタンをクリックしたら情報を取得する
let handlerIndex = 0;
while (handlerIndex < $button.length){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);//（クリックしたら）前述の条件分岐を入れた関数を呼び出す
    });
    handlerIndex++
}
