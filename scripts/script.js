
var each = document.querySelector('.friends-bar');
var friend = each.querySelector('.friend');
friend.querySelector('.fr-bar-text').innerHTML = friends[0].name;
friend.querySelector('.fr-bar-avatar').src = friends[0].img;

function friendsList(){
	friends.forEach(function(elem, idx){
		if(idx == 0) return;
		var clnNode = friend.cloneNode(true);
		clnNode.querySelector('.fr-bar-text').innerHTML = elem.name;
		clnNode.querySelector('.fr-bar-avatar').src = elem.img;
		each.appendChild(clnNode);
	})
}

var newsFeed = document.querySelector('.news-feed');
var post = newsFeed.querySelector('.post');
post.querySelector('.post-author-text').innerHTML = posts[0].author;
post.querySelector('.post-avatar').src = posts[0].avatar;
post.querySelector('.post-img').src = posts[0].img;
post.querySelector('.emotions-text').innerHTML = posts[0].likes;
post.querySelector('.num-comments').innerHTML = posts[0].commentShare;
post.querySelector('.post-body-text').innerHTML = posts[0].text;
post.querySelector('.post-mini-text').innerHTML = posts[0].time;

function postsList(){
	posts.forEach(function(elem, idx){
		if(idx == 0) return;
		console.log(elem);
		var clnNode = post.cloneNode(true);
		clnNode.querySelector('.post-author-text').innerHTML = elem.author;
		clnNode.querySelector('.post-avatar').src = elem.avatar;
			clnNode.querySelector('.post-img').src = elem.img;
		clnNode.querySelector('.emotions-text').innerHTML = elem.likes;
		clnNode.querySelector('.num-comments').innerHTML = elem.commentShare;
		clnNode.querySelector('.post-body-text').innerHTML = elem.text;
		clnNode.querySelector('.post-mini-text').innerHTML = elem.time;
		newsFeed.appendChild(clnNode);
	})
}

function postOverlay(){
	document.getElementsByClassName('post-overlay')[0].style.display = 'block';
	document.getElementsByClassName('make-post')[0].style.zIndex  = '992';
	document.getElementsByClassName('mkp-body')[0].style.height = '200px'
}

function postOverlayRemove(){
	var overlay = document.getElementsByClassName('post-overlay')[0];
	overlay.style.cursor = 'pointer';
	overlay.onclick = function() {
	    overlay.style.display = "none";
		document.getElementsByClassName('mkp-body')[0].style.height = '71px'
		document.getElementsByClassName('make-post')[0].style.zIndex  = '988';
	};
}

friendsList();
postsList();
postOverlayRemove();	