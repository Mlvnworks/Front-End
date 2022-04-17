$(document).ready(function (){
    // DELETE BUTTON
    $('#delete-btn').click(function (){
        $('.del-btn').fadeToggle(100);
       
        
    })
    // REMOVE ITEMS
    $('#items').click(function(e){
        if(e.target.classList.contains('del-btn')){
            if(confirm('are you sure you want to Delete?')){
            let li=e.target.parentElement;
           li.remove()
            }
        }
    })
    //CLEAR ALL
    $('#clear-all').click(function(){
        if(confirm('Are you sure you want to delete all?')){
       li=$('#items li');
       for(i=0; i < li.length ; i++){
            li[i].remove();
       }
    }
    })
    // SEARCH BAR
    $('#search-bar').keyup(function(e){
        const keyword=e.target.value.toLowerCase();
        const lists = $('#items li');
        Array.from(lists).forEach(function(list){
            const itemName=list.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(keyword) != -1){
                list.style.display='block';
            }else{
                list.style.display='none'
            }
        })
        
    
    
    })

})