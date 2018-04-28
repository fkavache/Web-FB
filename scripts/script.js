
var frinedsBar = document.querySelector('.friends-bar');
var friend = frinedsBar.querySelector('.friend');
friend.querySelector('.fr-bar-text').innerHTML = friends[0].name;
friend.querySelector('.fr-bar-avatar').src = friends[0].img;

function friendsList(data, x){
	data.forEach(function(elem, idx){
		if(idx == x) return;
		var clnNode = friend.cloneNode(true);
		clnNode.querySelector('.fr-bar-text').innerHTML = elem.name;
		clnNode.querySelector('.fr-bar-avatar').src = elem.img;
		frinedsBar.appendChild(clnNode);
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
	document.getElementsByClassName('post-button')[0].style.display = 'block';
	document.getElementsByClassName('make-post-textarea')[0].style.fontSize = '25px';
}

function postOverlayEvent(){
	var overlay = document.getElementsByClassName('post-overlay')[0];
	overlay.style.cursor = 'pointer';
	overlay.onclick = function() {
	   postOverlayRemove(overlay);
	};
}

function postOverlayRemove(overlay){
	overlay.style.display = "none";
	document.getElementsByClassName('mkp-body')[0].style.height = '71px'
	document.getElementsByClassName('make-post')[0].style.zIndex  = '0';
	document.getElementsByClassName('post-button')[0].style.display = 'none';
	document.getElementsByClassName('make-post-textarea')[0].style.fontSize = '13px';
}

function searchOverlay(){
	document.getElementsByClassName('recent-searches')[0].style.display = 'block';
	document.getElementsByClassName('search-overlay')[0].style.zIndex  = '0';
}

function searchOverlayEvent(){
	var overlay = document.getElementsByClassName('search-overlay')[0];
	overlay.style.cursor = 'pointer';
	overlay.onclick = function() {
	 	document.getElementsByClassName('recent-searches')[0].style.display = 'none';
	 	document.getElementsByClassName('search-overlay')[0].style.zIndex  = '-1';
	};
}


function makePost() {
	var postText = document.getElementsByClassName("make-post-textarea")[0].value; 
	document.getElementsByClassName("make-post-textarea")[0].value = ""; 
	var clnNode = post.cloneNode(true);
	clnNode.querySelector('.post-author-text').innerHTML = user.name;
	clnNode.querySelector('.post-avatar').src = user.avatar;
	clnNode.querySelector('.post-img').src = '';
	clnNode.querySelector('.emotions-text').innerHTML = "1";
	clnNode.querySelector('.num-comments').innerHTML = "1 Comment";
	clnNode.querySelector('.post-body-text').innerHTML = postText;
	clnNode.querySelector('.post-mini-text').innerHTML = "1 mins";
	newsFeed.insertBefore(clnNode, newsFeed.childNodes[2]);
	var overlay = document.getElementsByClassName('post-overlay')[0];
	overlay.style.cursor = 'pointer';
	postOverlayRemove(overlay);
}

function filterFriends(){
	var searched = document.getElementsByClassName("frb-search")[0].value;
	var filteredData = friends.filter(fr => fr.name.toLowerCase().includes(searched.toLowerCase()));

	var k = 0;
	var length = frinedsBar.childNodes.length;
	for(i=0; i<100; i++){
		var child = frinedsBar.childNodes[i];

		if(child != null){
			if(child.className === "friend"){
				child.remove();
				i--;
			}
		}
	}
	friendsList(filteredData, -1);
}

friendsList(friends, 0);
postsList();
postOverlayEvent();	
searchOverlayEvent();