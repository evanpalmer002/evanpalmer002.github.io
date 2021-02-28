(function () {
    

    function Start()
    {
        //Question 2 B
        //Change the text on the nav element "products" to "projects"
       let navProjects =  document.getElementById("products");
       console.log(navProjects);
       navProjects.textContent = "Projects";

       let newNavItem = document.createElement("li");
       newNavItem.className="nav-item";
       newNavItem.html=`<a class="nav-link" href="./hr.html">Human Resources</a>`;
       console.log(newNavItem);
    }






    window.addEventListener("load", Start);

})();