let addtolist=document.getElementById("addToYourList");

addtolist.addEventListener("click" ,function(){
    CheckBox();
});

function CheckBox()
{
    if(document.getElementById("input").value!="" || checkbox.checked)
    {

        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.style.border = '1px solid blue';


        let Text=document.getElementById("input").value;
        document.getElementById("input").value="";

        let textElement=document.createElement('h4');
        textElement.textContent=Text;
        textElement.style.color ='blue'
        textElement.style.padding='5px'

        textElement.style.color='black';
        textElement.style.marginLeft='5px';
        textElement.style.marginBottom='5px';


        let container=document.createElement('div');
        container.style.display="flex";
        container.appendChild(checkbox);
        container.appendChild(textElement);

        let br=document.createElement('br');    
        container.appendChild(br);
        container.appendChild(br);

        checkbox.addEventListener("click" , function(){
            del(textElement);
            });
        function del(textElement)
        {   
            let del = textElement.querySelector('del');
            if (!del) { 
                let del = document.createElement('del');
                del.innerHTML = textElement.innerHTML;
                textElement.innerHTML = "";
                textElement.appendChild(del);
            }
            else{
                if (checkbox.checked) {
                    del.style.textDecoration = 'line-through';
                } 
                else  {
                    del.style.textDecoration = 'none';
                }
            }
        }
        let Parent_=document.getElementById("checkbox_div");
        Parent_.appendChild(container);

        let dots=document.createElement('button');
        textElement.appendChild(dots);

        Object.assign(dots.style, {
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            padding: '10px'
        });

        for(let i=0;i<=2;i++){
            let dot =document.createElement('div');
            Object.assign(dot.style,{
            width: '4px',
            height: '4px',
            backgroundColor: 'black',
            borderRadius: '50%',
            margin: '2px '
            });
            dots.appendChild(dot);
        }
        let delIcon=document.createElement('i');
        delIcon.className='material-icons';
        delIcon.innerHTML='&#xe872;';  // Delicon
        delIcon.style.display='none';
        delIcon.style.color='black';
        delIcon.style.marginLeft='10px';
        dots.appendChild(delIcon);

        dots.addEventListener("click"  , function() {
            delButton(delIcon);
        });
        function delButton(delIcon)
        {
            if(delIcon.style.display==='none'){
              delIcon.style.display='block';
            }
            else{
               delIcon.style.display='none'
            }
        }
        delIcon.addEventListener("click" ,function()
        {
            delCheckBox();
        });
        function delCheckBox()
        {
            Parent_.removeChild(container);
        }

        let clearALL=document.getElementById("clearall");
        clearALL.addEventListener("click",function(){
            clearALLTAsks();
        });
        function clearALLTAsks()
        {
            if(checkbox.checked)
            {
                Parent_.removeChild(container);
            }
        }
    }
    else
    {
        alert("Please Enter Task");
    }
}