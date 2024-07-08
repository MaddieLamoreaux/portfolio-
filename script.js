$(document).ready(function() {
    // Smooth scroll for navigation links
    $('.nav-link').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Placeholder for project cards dynamic generation (optional)
    const projects = [
        { title: "Movie Rental Service", description: "A movie rental service built with Spring Boot and MySQL.", link: "#" },
        { title: "Portfolio", description: "A personal portfolio website using HTML, CSS, and JavaScript.", link: "#" },
        { title: "Book List", description: "A book list management application using JavaScript and Local Storage.", link: "#" }
    ];

    projects.forEach(project => {
        $('#projects .row').append(`
            <div class="col-md-4">
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn btn-primary">View Project</a>
                </div>
            </div>
        `);
    });
});
