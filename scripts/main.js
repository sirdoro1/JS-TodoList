
    var delHTML = "<i class='fa fa-trash'></i>";
    var doneHTML = "<i class='fa fa-check-circle'></i>";

    function chat(){
        
        var msg = document.getElementById("message").value;  
        var ul = document.getElementById("todo");


        // Delete Button
        var deletebtn = document.createElement("BUTTON");
        deletebtn.innerHTML = delHTML;
        deletebtn.classList.add('remove');
        deletebtn.addEventListener('click',removetask);


        // Done Button
        var donebtn = document.createElement("BUTTON"); 
        donebtn.innerHTML = doneHTML;
        donebtn.classList.add('complete');
        donebtn.addEventListener('click',completedtask)

        
        // Buttons Span
        var btnspan = document.createElement("SPAN");
        btnspan.classList.add('buttons');
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

    function completedtask(e){
        var child = this.parentNode.parentNode;
        var parent = child.parentNode;
        var id = parent.id;

        var target = (id == 'todo')? document.getElementById('completed'):document.getElementById('todo');

        parent.removeChild(child);
        target.insertBefore(child,target.childNodes[0]);

    }

    
    