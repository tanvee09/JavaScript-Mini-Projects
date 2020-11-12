const form = {}
form.noteText = document.querySelector('#formNoteText');
form.addButton = document.querySelector('#formAddButton');
form.color = document.querySelector('#formColor');
form.noteTitle = document.querySelector('#formTitle');

const notes = document.querySelector('#notes');

function addNote() {
    let notetext = form.noteText.value;
    let notetitle = form.noteTitle.value;

    var note = document.createElement("div");
    note.classList.add("note");
	note.classList.add(form.color.value);

    var heading = document.createElement("h3");
    heading.classList.add("noteTitle");
    var node2 = document.createTextNode(notetitle);
    heading.appendChild(node2);
	note.appendChild(heading);

	var titlePreview = document.createElement("h3");
	if (notetitle.length <= 14) {
		var titlepreviewnode = document.createTextNode(notetitle);
	} else {
		var titlepreviewnode = document.createTextNode(notetitle.substring(0, 12) + "...");
	}
	titlePreview.appendChild(titlepreviewnode);
	note.appendChild(titlePreview);

    var para = document.createElement("p");
    para.classList.add("noteText");
    var node = document.createTextNode(notetext);
    para.appendChild(node);
	note.appendChild(para);

	var preview = document.createElement("p");
    var previewnode = document.createTextNode(notetext.substring(0, 10) + "...");
    preview.appendChild(previewnode);
	note.appendChild(preview);

    var deleteButton = document.createElement("span");
    deleteButton.classList.add('note-delete');
	deleteButton.innerHTML = '&times;';
	addListenerDeleteButton(deleteButton);
	note.appendChild(deleteButton);

	var expandButton = document.createElement("button");
    expandButton.classList.add('note-expand');
	expandButton.innerHTML = "Show More";
	addListenerExpandButton(expandButton);
	note.appendChild(expandButton);

    var element = document.getElementById("notes");
	element.appendChild(note);

    form.noteText.value = '';
	form.noteTitle.value = '';
}

form.addButton.addEventListener('click', function (e) {
    e.preventDefault();  
    if (form.noteTitle.value == '') {
		alert("You must give a title!");
    } else if (form.noteText.value == '') {
		alert("You must write something!");
    } else {
      addNote();
    }
})

function addListenerDeleteButton(deleteButton) {
	deleteButton.addEventListener('click', function (e) {
		e.stopPropagation();      
		deleteNote(e);
	});
}

function deleteNote(e) {
	let eventNote = e.target.parentNode;
	eventNote.parentNode.removeChild(eventNote);
}

function addListenerExpandButton(expandButton) {
	expandButton.addEventListener('click', function (e) {
	  e.stopPropagation();      
	  expandNote(e);
	});
  }
  
function expandNote(e) {
	let eventNote = e.target.parentNode;
	var myNote = eventNote.getElementsByClassName("noteText")[0];
	var myTitle = eventNote.getElementsByClassName("noteTitle")[0];
	document.getElementById("text").innerHTML = myNote.innerHTML;
	document.getElementById("popup-title").innerHTML = myTitle.innerHTML
	document.getElementById("popup").style.display = "block";
}

function on() {
	document.getElementById("popup").style.display = "block";
}
  
function off() {
	document.getElementById("popup").style.display = "none";
}