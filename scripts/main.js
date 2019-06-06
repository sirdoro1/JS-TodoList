
    var delHTML = "<i class='fa fa-trash'></i>";
    var doneHTML = "<i class='fa fa-check-circle'></i>";

    function chat(){
        
        var msg = document.getElementById("message").value;  
        var ul = document.getElementById("todo");


        // Delete Button
        var deletebtn = document.createElement("BUTTON");
        deletebtn.innerHTML = delHTML;
        deletebtn.classList.add('btn','remove');
        deletebtn.addEventListener('click',removetask);


        // Done Button
        var donebtn = document.createElement("BUTTON"); 
        donebtn.innerHTML = doneHTML;
        donebtn.classList.add('btn','complete');

        
        // Buttons Span
        var btnspan = document.createElement("SPAN");
        btnspan.classList.add('listbutton','buttons');
        btnspan.appendChild(deletebtn);
        btnspan.appendChild(donebtn);


        // LI ELEMENT
        var node = document.createElement("LI");              
        node.innerText = msg;  
        node.classList.add('list-group-item')                                  
        node.appendChild(btnspan);                            
        ul.insertBefore(node,ul.childNodes[0]); 
    }

    function removetask(e){
        var child = this.parentNode.parentNode;
        var parent = child.parentNode;

        parent.removeChild(child);
    }


    
    