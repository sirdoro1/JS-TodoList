function chat(){
    var node = document.createElement("LI");               //Create the list element
    var delbtn = document.createElement("BUTTON");
    var donebtn = document.createElement("BUTTON"); 
    var delattr = document.createAttribute("class");
    var doneattr = document.createAttribute("class");
    var deltxt = document.createTextNode(<i class='fa fa-check-circle'></i>);
    var donetxt = document.createTextNode(<i class='fa fa-trash'></i>);
    delattr.value = "btn delbtn";
    doneattr.value = "btn donebtn";
    delbtn.setAttributeNode(delattr);
    donebtn.setAttributeNode(doneattr);
    delbtn.appendChild(deltxt);
    donebtn.appendChild(donetxt);
    var msg = document.getElementById("message").value;     //The String value from the Input
    var textnode = document.createTextNode(msg);            //Creating TextNode with the String from the input
    node.appendChild(textnode);                             // Appending the String to the Created list element
    node.appendChild(delbtn);
    node.appendChild(donebtn);
    var att = document.createAttribute("class");            //Creating attrinbute for the created list
    att.value = "list-group-item";                          // Value of the attribute
    node.setAttributeNode(att);                             //Attaching the attribute to the list element
    document.getElementById("uncompletedlist").appendChild(node); // Appending the list element to the UL(Unordered List Element)
}