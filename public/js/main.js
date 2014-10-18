var API_URL = '//test2.me:9091/api/';
var usersControllerUrl = 'users';
var ul = null;
function loadUsers(){
    console.log('loadUsers');
    $.ajax({
        url: API_URL + usersControllerUrl, 
        success: function(data){
            ul = $('#content ul');
            if (ul.length == 0) {
                ul = $('<ul></ul>');
                console.log(ul)
                $('#content').append(ul);
            }            
            data.map(function(el){
                var li = document.createElement('li');
                $(li).click(function(ev){
                    console.log(ev, this);
                    var self = this;
                    $(this).hide(1000,function(){
                        $(self).remove();    
                    });
                }).html(el.username)                
                ul.append(li)
            })            
        }
    })
}
$('#loadData').click(loadUsers);

