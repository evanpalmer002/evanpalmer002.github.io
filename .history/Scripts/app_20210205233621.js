 (function () {
    

    function Start()
    {
        //Question 1 A
        //Change body copy
        let indexBody = document.getElementById("body");
        indexBody.textContent = "This is my website that will meet all requirements for WEBD-6201 Lab One!!!(edited with JS)"


        //Question 2 B
        //Change the text on the nav element "products" to "projects"

         //Create the reference
        let navProjects =  document.getElementById("products");
       console.log(navProjects);
       //Change the text content of the reference 
       navProjects.textContent = "Projects";  
         
/       //Question 2 C
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

       //Create the new elements and references
       let newNavBar = document.createElement("nav");
       let main = document.getElementById("main");
       let navText = document.createElement("h2");

       //Change the inner html of the new text item
       navText.innerHTML = "&copy; Copyright 2021"
       //Change the class of the new nav bar
       newNavBar.className = "navbar navbar-expand-lg fixed-bottom navbar-dark bg-dark"
       //Append the new nodes
       newNavBar.appendChild(navText);
       main.appendChild(newNavBar);  
      
    }






    window.addEventListener("load", Start);

})(); 