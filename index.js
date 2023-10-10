// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// $(".tab-links").on("click",function(event) {
//     $(".tab-links").classList.remove("active-link");
//     $(".tab-contents").classList.remove("active-tab");

// })
// // alert("dgjd")


// Get all elements with class "tab-links"
var tabLinks = document.querySelectorAll(".tab-links");

// Get all elements with class "tab-contents"
var tabContents = document.querySelectorAll(".tab-contents");

// Add click event listener to each tab link
tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener("click", function(event) {
        // Remove "active-link" class from all tab links
        tabLinks.forEach(function(link) {
            link.classList.remove("active-link");
        });

        // Remove "active-tab" class from all tab contents
        tabContents.forEach(function(content) {
            content.classList.remove("active-tab");
        });

        // Add "active-link" class to the clicked tab link
        tabLink.classList.add("active-link");

        // Find the corresponding tab content index
        var index = Array.from(tabLinks).indexOf(tabLink);

        // Add "active-tab" class to the corresponding tab content
        tabContents[index].classList.add("active-tab");
    });
});

$(".arrow").on("click", function() {
    // $(".extra").toggle(); // This will toggle the visibility of the hidden content
    $(this).toggleClass(".extra"); // Optionally, toggle the down class for your arrow styling
  });