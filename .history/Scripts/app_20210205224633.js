(function () {
    

    function Start()
    {
        //Question 2 B
        //Change the text on the nav element "products" to "projects"
       let navProjects =  document.getElementById("products");
       console.log(navProjects);
       navProjects.textContent = "Projects";

       let newNavElement = document.createElement("li");
       newNavElement.className="nav-item";
    }






    window.addEventListener("load", Start);

})();