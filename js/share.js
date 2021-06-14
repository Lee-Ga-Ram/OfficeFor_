const url = 'https://twelvelevetype.netlify.app/';
const title = '십이간지로 알아보는 연애 유형';

var art = document.querySelector('.art')

function checkImage(){
	if(art.hasChildNodes){
		console.log("has");
		var artImage = art.firstChild.alt;
		return Number(artImage);
	} else {
		console.log("error");
		alert("구현중입니다.");
	}
	return error;
}

function sendKakaoLink(shareTitle, shareDescription, shareImageUrl) {
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
			title: shareTitle,
			description: shareDescription,
			imageUrl:
				shareImageUrl,
			link: {
				mobileWebUrl: 'https://twelvelevetype.netlify.app/',
				webUrl: 'https://twelvelevetype.netlify.app/',
			},
		},
		buttons: [
			{
				title: '나도 테스트 하러가기',
				link: {
					mobileWebUrl: 'https://twelvelevetype.netlify.app/',
					webUrl: 'https://twelvelevetype.netlify.app/',
				},
			},
		],
	});
}

function createDescription(){
	const imageNumber = checkImage();
	console.log(imageNumber);
	if(imageNumber === "error"){
		return 0;
	}
	switch (imageNumber) {
		case 0:
			var shareDescription = infoList[0].name;
			break;
		case 1:
			var shareDescription = infoList[1].name;
			break;
		case 2:
			var shareDescription = infoList[2].name;
			break;
		case 3:
			var shareDescription = infoList[3].name;
			break;
		case 4:
			var shareDescription = infoList[4].name;
			break;
		case 5:
			var shareDescription = infoList[5].name;
			break;
		case 6:
			var shareDescription = infoList[6].name;
			break;
		case 7:
			var shareDescription = infoList[7].name;
			break;
		case 8:
			var shareDescription = infoList[8].name;
			break;
		case 9:
			var shareDescription = infoList[9].name;
			break;
		case 10:
			var shareDescription = infoList[10].name;
			break;
		case 11:
			var shareDescription = infoList[11].name;
			break;		
	}
	var shareTitle = '십이간지 연예유형 결과'
	const shareImageUrl = url + '/img/image/' + imageNumber + '.png';
	sendKakaoLink(shareTitle, shareDescription, shareImageUrl);
}

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}