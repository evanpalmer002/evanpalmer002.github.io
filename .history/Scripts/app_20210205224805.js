(function () {
    

    function Start()
    {
        //Question 2 B
        //Change the text on the nav element "products" to "projects"
       let navProjects =  document.getElementById("products");
       console.log(navProjects);
       navProjects.textContent = "Projects";

       let newNavItem = document.createElement("li");
       newNavElement.className="nav-item";
       newNavElement.html=`<a class="nav-link" href="./hr.html">Human Resources</a>`
    }






    window.addEventListener("load", Start);

})();