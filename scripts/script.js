var friends = [ 
	{
		name : "Lasha Edilashvili",
		img : "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/c91.218.316.316/s100x100/22405456_1641755512526758_4859570458442661103_n.jpg?_nc_cat=0&oh=7b219956751b07202250276479f86efb&oe=5B67DF30"
 	},
	{
		name : "Sandro Shanshiashvili",
		img : "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/p100x100/12802843_1030669396979562_4714449103160304201_n.jpg?_nc_cat=0&oh=a8931f7c8589f49f403d493aa60284c8&oe=5B658B63"
	},
	{
		name: "Giorgi Sirbiladze",
		img : "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/p100x100/14606512_1449072395120058_6461035292057782952_n.jpg?_nc_cat=0&oh=62867e35fa8d8eb844ff6331f1107536&oe=5B94BD80"
	},
	{
		name : "ლუკა მაზმიშვილი",
		img : "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/p100x100/20430036_1658356570872052_5519126694741594934_n.jpg?_nc_cat=0&oh=0c1a9e4fb41fff45ed41723b659774a8&oe=5B575DE5"
	},
	{
		name : "თამუნა გარდაფხაძე",
		img : "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/c35.97.467.467/s100x100/18403268_1523511274348003_6120404876925640721_n.jpg?_nc_cat=0&oh=d48e6f41cb6850742e192e368b268901&oe=5B5DC1FD"
	},
	{
		name : "Nodo Sanaia",
		img : "https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-1/p100x100/18119035_1476655045718548_3695045088900175596_n.jpg?_nc_cat=0&oh=c605a8c69ce3be02595ba687a072eeb5&oe=5B5FD931"
	},
]

var each = document.querySelector('.friends-bar');
var friend = each.querySelector('.friend');
friend.querySelector('.fr-bar-text').innerHTML = friends[0].name;
friend.querySelector('.fr-bar-avatar').src = friends[0].img;

function friendsList(x){
	friends.forEach(function(elem, idx){
		if(idx == x) return;
		var clnNode = friend.cloneNode(true);
		clnNode.querySelector('.fr-bar-text').innerHTML = elem.name;
		clnNode.querySelector('.fr-bar-avatar').src = elem.img;
		each.appendChild(clnNode);
	})
}

friendsList(0);
friendsList(-1);

