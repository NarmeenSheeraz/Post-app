

function post() {
    var fontSize = document.getElementById("fontSize").value;
    var bold = document.getElementById("bold").checked;
    var italic = document.getElementById("italic").checked;

    var style = `font-size:${fontSize};`;

    if (bold) {
        style += "font-weight:bold;";
    }
    if (italic) {
        style += "font-style:italic;";
    }

    var title = document.getElementById("title")
    var description = document.getElementById("description")
    var posts = document.getElementById("posts")
    if (title.value.trim() && description.value.trim()) {
        posts.innerHTML += `
 <div class="card text-center">
                    <div class="card-header bg-dark1 text-bdark fw-bold">
                       Post
                    </div>
                    <div class="card-body bg-light1">
                        <h5 class="card-title text-light" style="${style}">${title.value}</h5>
<p class="card-text my-3 text-light" style="${style}">${description.value}</p>
                        <a href="#" class="btn btn-success" onclick="deletepost(this)">Delete</a>
                    </div>
                    <div class="card-footer text-bdark bg-dark1">
                        2 days ago
                    </div>
                </div>
 `
        title.value = ""
        description.value = ""
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Title & description can't be empty!",
        });
    }

}

function deletepost(e) {
    e.closest('.card').remove();
}


