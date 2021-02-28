(function () {
    

    function Start()
    {
        //Question 2 B
        //Change the text on the nav element "products" to "projects"

        //Create the reference
       let navProjects =  document.getElementById("products");
       console.log(navProjects);
       //Change the text content of the reference 
       navProjects.textContent = "Projects";
        
       //Question 2 C
       //Append a new nav item to the nav bar

       //Create the new element
       let newNavItem = document.createElement("li");
       let navbar = document.getElementById("navbar");
       newNavItem.className="nav-item";
       newNavItem.html=`<a class="nav-link" href="./hr.html">Human Resources</a>`;
       console.log(newNavItem);
       navbar.appendChild(newNavItem);
    }






    window.addEventListener("load", Start);

})();