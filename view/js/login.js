  //ログイン回数
  i=0;

  //ログインできるユーザ人数
  member=3;

  function CheckPass(){

    //ログイン回数
    i++;

    //フラグ
    flg=false;

    //ユーザ名、パスワード
    member=member-1;

    u=new Array(member);
    p=new Array(member);
    n=new Array(member);

    u[0]="admin";
    p[0]="admin";
    n[0]="RYO";

    u[1]="admin2";
    p[1]="admin2";
    n[1]="RYO2";

    u[2]="admin3";
    p[2]="admin3";
    n[2]="RYO3";

    //ブラウザ入力値
    inputUserName=document.PA.username.value;
    inputPass=document.PA.pass.value;

    //認証
    for(j=0;j<=member;j++){
      if(inputUserName==u[j] && inputPass==p[j])
      {
        alert("Welcome"+n[j]+"!");

        //フラグ成功
        flg=true;

        //画面遷移
        location.href="success.html";
      }
    }

    //認証失敗メッセージ
    if(!flg)
    {
      alert("try again!");
    }
  }

