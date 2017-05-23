var hide = true, a, texts = ['You laugh because you think it is a joke. I laugh because you think I am joking'];

jQuery.ajax({
	type: "GET",
	url: 'https://newsapi.org/v1/articles?source=cnn&apiKey=ebd34b2e3d1a4c0f8fac60e1c78afa00',
	success: function(result){
		for(var i=0; i<result.articles.length; i++){
			texts.push(result.articles[i].title + "<a href=' "+result.articles[i].url + "' target='_blank'> &rarr; </a>");
		}
	}
});

function randomText(){
	return texts[Math.floor(Math.random() * texts.length)];
}

function hideDot(hide, start,end) {
	for (i = start; i < end; i++) {
		var x = document.getElementsByClassName('UFICommentBody')[i].querySelector("span");

		if (x !== null) {
			var comment = x.innerHTML;
			if (comment.match(/^[.,*]+$/) || comment == "thoplo" || comment == "dot") {
				x.innerHTML = randomText();
			}
		}
	}
}

function replacedots() {
	setTimeout(function () {
		var end = document.getElementsByClassName('UFICommentBody').length;
		hideDot(hide, 0, end);
		replacedots();
	}, 1000);
}

replacedots();