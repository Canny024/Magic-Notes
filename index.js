console.log('HELLO');
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function () {

    let addText = document.getElementById("addText");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addText.value = "";

    // pushing title into an array

    let addTitle = document.getElementById("addTitle");
    let nTitle = localStorage.getItem('nTitle');
    if (nTitle == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(nTitle);
    }
    titleObj.push(addTitle.value);
    localStorage.setItem("nTitle", JSON.stringify(titleObj));
    addTitle.value = "";

    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

// for title

    let nTitle = localStorage.getItem('nTitle');
    if (nTitle == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(nTitle);
    }

    // creating note and title
    
    let html = "";
 for( let i=0; i<notesObj.length;i++){
        html += `  
        <div class=" noteCard card my-2 mx-2" style="width: 18rem;">

                <div class="card-body">
                <h5 class="card-title"> ${titleObj[i]}</h5>
                    <p class="card-text">${notesObj[i]}</p>
                    <button  id ="${i}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                </div>
            </div>
        
        `
 }

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }

}

// deleting the notes


function deleteNote(index) {

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes();


}

// search function

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();

    let noteCard = document.getElementsByClassName("noteCard")

    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    });
})