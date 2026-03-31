

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
                        <a href="#" class="btn btn-success" onclick="editpost(this)">Edit</a>
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

// function deletepost(e) {
//     e.closest('.card').remove();
// }
function deletepost(e) {
event.preventDefault()

  Swal.fire({
    title: 'Are you sure?',
    text: "This post will be deleted!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it',
    cancelButtonText: 'No'
  }).then(function(result) {

    if (result.isConfirmed) {

      e.closest('.card').remove();

      
      Swal.fire(
        'Deleted!',
        'Your post has been deleted.',
        'success'
      );
    }

  });
}
// function editpost(e) {
//    var card = event.target.parentNode.parentNode
//    var titleval = card.children[1].children[0]
//    var descriptionval = card.children[1].children[1]
//     console.log(titleval);
    
//    title.value = titleval.innerHTML
//    description.value = descriptionval.innerHTML
//    e.closest('.card').remove();
// }
function editpost(e) {

  Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to edit this post?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then(function(result) {

    if (result.isConfirmed) {

      var card = e.parentNode.parentNode

      var titleval = card.children[1].children[0]
      var descriptionval = card.children[1].children[1]

      title.value = titleval.innerHTML
      description.value = descriptionval.innerHTML

      e.closest('.card').remove();

      // ✅ Success Alert
      Swal.fire(
        'Edited!',
        'Your post is ready to edit.',
        'success'
      );
    }

  });
}

// login function 

function signup(){
    var userName = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    
    if(userName.value.trim() && email.value.trim() && password.value.trim()){
        var loginA = document.getElementById("signup")
        loginA.setAttribute('href', 'login.html')
    }else{
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong. Please fill out the form.",
  
});
    }
}
function login(){
    var userName = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    
    if(email.value.trim() && password.value.trim()){
        // var loginA = document.getElementById("login")
        // loginA.setAttribute('href', 'dashboard.html')
        Swal.fire({
            title: 'Login!',
            text: 'Successfully Login.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            // Redirect after alert is closed
            window.location.href = 'dashboard.html';
        });
    }else{
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong. Please fill out correct email & password .",
  
});
    }
}
