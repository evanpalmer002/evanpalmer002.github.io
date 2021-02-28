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

       //Create the new elements and references
       let newNavItem = document.createElement("li");
       let navBar =  document.getElementById("navBar");
       let newA = document.createElement("a");

       //Edit the A elements properties
       newA.className = "nav-link";
       newA.href = "./hr.html"
       newA.textContent = "Human Resources";
       console.log(navBar);
       //Edit the nav items properties
       newNavItem.className="nav-item";
       console.log(newNavItem);
       //append the A to the nav item
       newNavItem.appendChild(newA);
       //append the new nav item to the nav bar
       navBar.appendChild(newNavItem);


       //Question 2 D
       //Create a new navbar with copyright

       let newNavBar = document.createElement("nav");
       newNavBar.className = "navbar navbar-expand-lg navbar-light bg-light"
       document.appendChild(newNavBar);
      
    }






    window.addEventListener("load", Start);

})();