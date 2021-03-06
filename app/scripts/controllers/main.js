'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];


    $scope.toggleSize = true;
    $scope.recruit = {
    	'<div>지원자격</div>' : "<div>· <span> 커넥트스쿨 파트너 대학에 재학중 또는 휴학중인 학생</span> <br>· 학부 2학년 이상 (전공 무관, 휴학생 가능), 남녀 모두 지원 가능<br>· 기획부터 운영까지 소프트웨어 교육의 모든 것을 경험하고 싶은 분<br>· 1년간 성실하게 온/오프라인 사전교육과 프로그램에 참여 가능한 분<br>· 평소 소프트웨어 교육에 대한 관심이 깊은 분</div>",
    	'<div>우대조건</div>' : "<div>· 사회배려대상자 (관련 증빙자료 제출) <br>· 경찰, 소방관, 군부사관 자녀 및 국가 유공자 자녀 <br>· 엔트리, 스크래치를 활용한 소프트웨어 교육 경험자 </div>",
    	'<div>모집일정</div>' : "<div>· <span>지원기간: 2017.03.10(금) ~ 2017.03.30(목) 24시까지 </span><br>· 서류합격자 발표: 2017.03.31(메일, 문자)<br>· 면접전형: 2017.04.03 ~ 2017.04.09(지역별 실시)<br>· 최종합격자 발표: 2017.04.11(메일, 문자)</div>",
    	'<div>활동기간</div>' : "<div>2017.04 ~ 2017.12</div>",
    	"<div>선발인원</div>" : "<div>약 200여명</div>",
    	'<div>지원방법</div>' : "<div>개별 온라인 지원</div>"
    };

    $scope.activities = [
    	{
    		'제목' : '소프트웨어 교실',
    		'일정' : '5월 13일 ~ 6월 3일(상반기, 매주 토요일) </br> 11월 4일 ~ 12월 2일(하반기, 매주 토요일)',
    		'대상' : '소프트웨어 교육을 희망하는 초등학생(4~6학년)',
    		'장소' : '강릉원주대학교 외 23곳',
    		'내용' : "대학생 선생님이 지역의 초등학생에게 5주간 블록코딩 도구인 엔트리를 활용하여 소프트웨어의 원리를 가르치고, 학생이 팀을 이뤄 프로젝트를 기획하고 실현할 수 있도록 지도하는 프로그램입니다. <br>* 교육생 모집은 소프트웨어야 놀자 사이트를 통해 이루어집니다."
    	},
    	{
    		'제목' : '소프트웨어 캠프',
    		'일정' : '미정 (상세 일정 추후 공지)',
    		'대상' : '소프트웨어 교육에 흥미와 관심이 많은 초·중등학생(학년무관)',
    		'장소' : '강릉원주대학교 외 23곳',
    		'내용' : "커넥트재단이 후원하는 소프트웨어 교육 캠프로 각 지역 파트너 대학에서 주도하는 교육 프로그램입니다.소프트웨어 교육에 대한 궁금증을 가진 학부모님과 학생에게 대학에서 기획한 양질의 교육을 제공합니다.<br>* 본 프로그램은 일부 파트너 대학에서만 개최됩니다. <br>* 참가자 모집은 소프트웨어야 놀자 사이트를 통해 이루어집니다.",
    	},
    	{
    		'제목' : '찾아가는 소프트웨어 교실',
    		'일정' : '연중 지속 운영(상세 일정 추후 공지)',
    		'대상' : '소프트웨어 교육의 기회가 적은 학생들',
    		'장소' : '지역 중학교(자유학기제), 청소년 수련관 등',
    		'내용' : "학습에 대한 관심과 열정은 있으나 현실적인 이유로 교육받을 기회가 부족한 학생들을 위해 대학생 봉사단 선생님이 중학교(자유학기제)와 기관으로 직접 찾아가는 7주간의 프로그램입니다. 엔트리, 앱인벤터를 통해 소프트웨어와 관련된 진로를 탐색합니다.<br>* 본 프로그램은 개별 신청이 불가합니다."
    	},
    	{
    		'제목' : '찾아가는 소프트웨어 캠프',
    		'일정' : '7~8월 (상세 일정 추후 공지)',
    		'대상' : '소프트웨어 교육의 기회가 적은 학생들',
    		'장소' : '도서,산간지역 초등학교',
    		'내용' : "대학생 선생님이 직접 기획하고 운영하는 여름방학 프로그램입니다. 도서, 산간지역 학생들과 교감하고 소프트웨어 교육을 보급합니다.<br>* 본 프로그램은 개별 신청이 불가합니다. "
    	}
    ];



    $scope.capacity = {
    	"주제강연: 확률론의 선과 악" : ['http://www.edwith.org/probability' , 'http://m.post.naver.com/viewer/postView.nhn?volumeNo=6180291&memberNo=23260204&navigationType=push'],
    	'분야강연 1: 물리학 속의 확률' : ['http://www.edwith.org/insight1-2' , 'http://m.post.naver.com/viewer/postView.nhn?volumeNo=6760612&memberNo=23260204&navigationType=push'],
    	'분야강연 2: 금융 속의 확률 ' : ['http://www.edwith.org/insight1-3' , 'http://m.post.naver.com/my/series/detail.nhn?seriesNo=243492&memberNo=23260204'],
        '분야강연 3: 인공지능 속의 확률 ' : ['http://www.edwith.org/insight1-4' , 'http://m.post.naver.com/my/series/detail.nhn?seriesNo=243492&memberNo=23260204'],
    	'분야강연 4: 사회현상 속의 확률' : ['http://www.edwith.org/insight1-5' , 'http://m.post.naver.com/my/series/detail.nhn?seriesNo=243492&memberNo=23260204']
    };

    // $scope.capacity = {
    //     "주제강연: 확률론의 선과 악" : "<span class='naverTvLink' ng-click='go('http://tv.naver.com/connect/playlists')'> 네이버 TV >> </span> <span class='naverPostLink' ng-click='go('http://m.post.naver.com/viewer/postView.nhn?')'> 네이버 포스트 >> </span> ",
    //     '분야강연 1: 물리학 속의 확률' : "<span class='naverTvLink' ng-click='go('http://tv.naver.com/connect/playlists')'> 네이버 TV >> </span> <span class='naverPostLink' ng-click='go('http://m.post.naver.com/viewer/postView.nhn?')'> 네이버 포스트 >> </span> ",
    //     '분야강연 2: 금융 속의 확률 ' : "<span class='naverTvLink' ng-click='go('http://tv.naver.com/connect')'> 네이버 TV >> </span> <span class='naverPostLink' ng-click='go('http://m.post.naver.com/my/series/detail.nhn?seriesNo=243492&memberNo=23260204')'> 네이버 포스트 >> </span> ",
    //     '분야강연 3: 인공지능 속의 확률 ' : "<span class='naverTvLink' ng-click='go('http://tv.naver.com/connect')'> 네이버 TV >> </span> <span class='naverPostLink' ng-click='go('http://m.post.naver.com/my/series/detail.nhn?seriesNo=243492&memberNo=23260204')'> 네이버 포스트 >> </span> ",
    //     '분야강연 4: 사회현상 속의 확률' : "<span class='naverTvLink' ng-click='go('http://tv.naver.com/connect')' > 네이버 TV >> </span> <span class='naverPostLink' ng-click='go('http://m.post.naver.com/my/series/detail.nhn?seriesNo=243492&memberNo=23260204')'> 네이버 포스트 >> </span> "
    // };
    // $scope.support = {
    // 	"학점 항목에서 직전학기 평점을 기준으로 선택해야 하나요? 전체학기 누적 평점을 기준으로 선택해야 하나요?" : '지원서 작성일 기준, 성적 증명서에 기재된 전체학기 누적 평점을 기준으로 본인의 학점에 해당하는 항목을 선택하시면 됩니다.',
    // 	"최종 제출 후, 내용을 잘못 입력하여 수정하고 싶습니다. 어떻게 해야하나요?" : "최종 제출 후에는 지원서 수정 및 제출 취소 모두 불가합니다.<br> 제출 전 반드시 별도의 파일로 저장해두시기 바라며, 작성 내용을 꼼꼼히 확인하신 후 제출하시기 바랍니다."
    // };

    // $scope.document = {
    // 	"지원서 작성시 소프트웨어 교육 관련 활동 경험 또는 봉사활동 경험이 없는 경우 증빙서류를 제출하지 않아도 되나요?" : "네, 제출하지 않아도 됩니다. <br> 하지만 관련 경험이 있을 시 서류합격에 영향을 끼칠 수 있습니다.",
    // 	"지원서에 내용을 잘못 기재하거나 기재하지 않아 증빙 서류의 내용과 일치하지 않을 경우 어떤 불이익이 있나요?" : "서류 전형에 합격했더라도 합격이 취소됩니다. <br> 지원서를 최종 제출하신 후에는 어떠한 상황에도 수정이 불가하기 때문에 유의사항을 반드시 숙지하시고 <br> 잘못 기재하거나 기재하지 않아 발생하는 불이익이 없도록 지원서 제출 전 꼼꼼하게 확인하시기 바랍니다.",
    // 	"증빙 서류는 언제, 어떤 것을 제출하나요?" : "성적증명서, 사회배려대상자, 국가유공자자녀 증빙서류 중 <br> 본인에게 해당하는 모든 내용에 대한 증빙 서류를 면접 당일 프로그램 담당자에게 제출하시면 됩니다. <br> 모든 증빙서류는 발급일 기준 3개월 이내의 것만 유효합니다. <br><br> [공통 필수 제출] <br> - 성적증명서(원본) [작성자 제출] <br><br>[유형별 제출]<br>- 사회배려대상자(기초생활수급대상자/차상위 계층) 증명서 중 1종 <br>- 경찰, 소방관, 군부사관 자녀 및 국가 유공자 자녀 증명서 ",
    // 	"사본 혹은 캡쳐본으로 제출해도 되나요?" : "성적증명서, 기초생활수급자/차상위 계층 증빙 서류, 국가유공자 자녀 증빙서류는 원본 제출만 가능합니다.",
    // 	"가족 명의로 기초생활수급자 또는 차상위 계층이 등록되어 있습니다. 증빙 서류 제출 시 어떻게 해야 하나요? " : "본인 명의가 아닌 경우, 기초생활수급자, 차상위 계층 증빙 서류와 함께 가족관계증명서를 제출하시기 바랍니다." 
    // };

    // $scope.interview = {
    // 	"면접 일정과 장소를 어떻게 알 수 있나요?" : "서류 합격자 발표 시 메일을 통해 면접 일시, 장소를 안내할 예정입니다. <br> 면접은 지역별로 실시됩니다.",
    // 	"면접 일정과 장소 변경이 가능한가요?" : "면접 일정과 장소는 변경이 불가합니다.<br> 예를 들어, 주거지는 서울이지만 소속 대학교가 강원권일 경우 강원 지역 면접에 응시하셔야 합니다.",
    // 	"교통비 지원 기준이 궁금합니다."  : "교통비는 지급되지 않습니다.",
    // 	"면접 참석 확인서 발급이 가능한가요?" : "별도의 면접 참석 확인서는 희망자에 한하여 제공 가능합니다."
    // };

    // $scope.activity = {
    // 	"최종합격자 발표 이후 발대식 일정과 장소가 궁금합니다." : " 최종합격자 발표 후 4월 중순경 발대식을 진행합니다.(장소, 일정 추후 공지)",
    // 	"일정상 발대식 참석이 어려울 경우 봉사단 프로그램에 참여를 못하게 되나요?" : "네, 발대식은 반드시 참석하셔야 합니다. (불참시 증빙 자료 제출 필)",
    // 	"여름방학 소프트웨어 캠프는 모든 파트너 대학에서 개최되는 건가요?" : "아니요, 모든 파트너 대학에서 개최되지는 않습니다. 정확한 일정 및 장소는 추후 소프트웨어야 놀자 홈페이지를 통해 별도 공지드릴 예정입니다.",
    //     "커넥트스쿨의 모든 교육 프로그램은 무료로 이루어지나요?" : "네, 커넥트스쿨은 여러 가지 현실적인 이유로 소프트웨어 교육을 받지 못하는 학생들을 위해 마련된 교육 프로그램입니다.<br> 소프트웨어 교육을 받길 희망하는 학생이라면 누구나 비용 부담 없이 참여할 수  있습니다. ",
    //     "찾아가는 소프트웨어 교실을 운영할 때 중학교나 지역 기관은 저희가 선정하는 건가요?" : "아니요, 커넥트재단에서 소속 대학교가 위치한 지역의 중학교 또는 기관을 미리 선정 후 대학생 봉사단을 연결시켜 드립니다.",
    // 	"찾아가는 소프트웨어 캠프는 도서,산간지역 초등학교에 허락을 받고 기획해야 하나요?" : "아니요, 학교와 상관없이 봉사단 소속 대학생 선생님이 자체적으로 기획하여 진행할 수 있습니다.",
    // 	"찾아가는 소프트웨어 캠프의 경우 제 소속 대학과 가까운 지역의 초등학교로 지원해야하나요?" : "아니요,  찾아가는 여름방학 소프트웨어 캠프의 경우 본인이 현재 살고있는 실거주지 기준으로 지원하셔도 됩니다." ,
    // 	"찾아가는 소프트웨어 캠프의 경우 대학별로 활동해야 하나요?" : "4개의 주요활동 중 찾아가는 소프트웨어 캠프의 경우 실거주지 기준이므로 개별로 활동하셔도 됩니다."

    // }

    $scope.currentTab = 'capacity';

    $scope.menus = {
    	capacity : false
    }

    $('.img-responsive').css('width' , 100+'%');
    $('.img-responsive').css('height' , window.innerHeight+'px');
    
    if(window.innerWidth > 768)
        $('.img-responsive').css('background-size' , window.innerWidth + 'px' + '' + window.innerHeight+'px');
    else {
        $('.img-responsive').css('background-size' , 1000 + 'px' +'' + 1000+'px');
    }

    window.onresize = function(event) {
        $('.img-responsive').css('width' , window.innerWidth+'px');
        $('.img-responsive').css('height' , window.innerHeight+'px');
    };


    var initMenu = function(){
	    $scope.menus = {
	    	capacity : false
	    }    	
    };

    $scope.getText = function(key){
    	var obj = {
	    	capacity : '시즌 1'
    	};

    	return obj[key];
    }
    
    $scope.showData = function(key) {
    	$scope.currentTab = key;
    }

    $scope.getContent = function(){
    	return $scope[$scope.currentTab];
    }

    $scope.clickToggle = function(){
        $scope.toggleSize = !$scope.toggle;
    }

    $scope.go = function(url) {
        window.open(url,'_blank');
    }

  });
 