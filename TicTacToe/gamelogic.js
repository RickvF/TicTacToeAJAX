function editButton(clicked_id){
	if(localStorage.getItem("playerNumber") === "1"){
		document.getElementById('clicked_id').text  = "X"; 
	} else if(localStorage.getItem("playerNumber") === "2"){
		document.getElementById('clicked_id').text  = "O"; 
	}
}

function editButtonFromField(clicked_id, character){
	document.getElementById('clicked_id').text  = character; 
}
