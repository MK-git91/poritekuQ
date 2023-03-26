const quiz = [
    {
        question:"Q1.商品やサービスなどを中心とする価格以外のものによる競争の総称を何か？",
        answers:[
            "需要創造",
            "販売中枢性",
            "主体性維持",
            "非価格競争"
        ],
        correct:"非価格競争"
    },{
        question: "デモグラフィック要因は何次データが利用可能な場合が多いか？",
        answers: [
          "１次",
          "２次",
          "３次",
          "４次"
        ],
        correct: "２次"
    },{
        question: "商品を品種単位で取り揃えるのではなく、ライフスタイルのさまざまな場面から取り揃え、それらをテーマ設定して売場づくりに活かすことを何と言うか？",
        answers: [
          "ライフスタイルアソートメント",
          "ライフスタイルコンテクスト",
          "スペシフィックマーチャンダイジング",
          "ライフスタイルセグメント"
        ],
        correct: "ライフスタイルアソートメント"
    },{
        question: "あちこちの小売店で特売品だけを買い回る顧客を何と言うか？",
        answers: [
          "キャロル・コンビニエンス",
          "ステュアート・スプリット",
          "シェリー・チェリー",
          "ラッセル・レギュラー"
        ],
        correct: "シェリー・チェリー"
    },{
        question: "商品の陳列位置や陳列量などを意図的にコントロールし、特定したスペースにおいて売上高と利益の最大化をはかる購買促進策を何と呼ぶか。？",
        answers: [
          "アトラクティブプロモーション",
          "インストアプロモーション",
          "VPスペース",
          "スペースマネジメント"
        ],
        correct: "スペースマネジメント"
    }
];

let quizIndex = 0;
let score = 0;
let quizLength = quiz.length;



const $button = document.getElementsByTagName("button")

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < $button.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++
    }
}
setupQuiz();

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

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < $button.length){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++
}


