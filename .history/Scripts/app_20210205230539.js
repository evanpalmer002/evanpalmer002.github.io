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
       let navBar =  document.getElementById("navBar");
       let newA = document.createElement("a");
       newA.className = "nav-link";
       newA.href = "./hr.html"
       newA.textContent = "Human Resources";
       console.log(navBar);
       newNavItem.className="nav-item";
       newNavItem.html=`<a class="nav-link" href="./hr.html">Human Resources</a>`;
       console.log(newNavItem);
       navBar.appendChild(newNavItem);
      
    }






    window.addEventListener("load", Start);

})();