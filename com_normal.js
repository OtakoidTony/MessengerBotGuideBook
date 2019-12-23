const scriptName="normal.js";



/**
 * 자동응답 메신저봇의 메인 루틴 함수입니다.
 * @param {String} room 메시지를 받은 방 이름
 * @param {String} msg 메시지 내용
 * @param {String} sender 전송자 닉네임
 * @param {Boolean} isGroupChat 단체/오픈채팅 여부
 * @param {Object} replier 응답용 객체.
 * @example <caption>메시지 보내기</caption>
 * replier.reply("메시지");
 * replier.reply("방이름", "메시지");
 * @param {Object} ImageDB ImageDB.getProfileImage(): 전송자의 프로필 이미지를 Base64로 인코딩하여 반환
 * @param {String} packageName 메시지를 받은 메신저의 패키지 이름.
 * @example
 * if (packageName=="com.kakao.talk"){
 *     replier.reply("카카오톡에서 보낸 메시지 입니다.");
 * }
 * if (packageName=="com.facebook.orca"){
 *     replier.reply("페이스북 메신저에서 보낸 메시지 입니다.");
 * }
 * if (packageName=="jp.naver.line.android"){
 *     replier.reply("라인에서 보낸 메시지 입니다.");
 * }
 * @param {Number} threadId 현재 쓰레드의 순번(스크립트별로 따로 매김)
 * @description Api,Utils객체에 대해서는 설정의 도움말 참조
 */
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

}

/** 컴파일 또는 Api.reload호출시, 컴파일 되기 이전에 호출되는 함수입니다.
 * @description	제안하는 용도: 리로드시 자동 백업
 */
function onStartCompile(){

}

/**
 * 액티비티 화면을 수정할때 사용됩니다.
 * @param {*} savedInstanceState 
 * @param {*} activity 
 */
function onCreate(savedInstanceState,activity) {
    var layout=new android.widget.LinearLayout(activity);
    layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var txt=new android.widget.TextView(activity);
    txt.setText("액티비티 사용 예시입니다.");
    layout.addView(txt);
    activity.setContentView(layout);
}

/**
 * 액티비티 화면을 수정할때 사용됩니다.
 * @param {*} activity 
 */
function onResume(activity) {}

/**
 * 액티비티 화면을 수정할때 사용됩니다.
 * @param {*} activity 
 */
function onPause(activity) {}

/**
 * 액티비티 화면을 수정할때 사용됩니다.
 * @param {*} activity 
 */
function onStop(activity) {}