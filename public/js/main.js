$( document ).ready(function(){
    var $select = $('select');
    var API_URL = 'http://localhost:3000/api/beers';
    function setData(data) {
        $('span').html(data._id);
        for (var k in data) {
            $('#'+k).val(data[k]);
        }
    }
    $select.change(function(ev){
        var data = $( "select option:selected" ).data();
        setData(data);
    });
    $('[type=submit]').click(function(e){
        e.preventDefault();
        var data = $( "select option:selected" ).data();
        for (var k in data) {             
            var v = $('#'+k).val();
            if (typeof v != 'undefined') data[k] = v;
        }
        $.ajax({
            type: "PUT",
            url: API_URL + '/'+data._id,
            data: data
          });
    })
    $.getJSON(API_URL,function(data){
        for (var i = 0; i < data.length; i++) {
            var match = data[i].name.match(/c[\.,o]+l/i);
            if (match) continue;
            var $o = $('<option>').html(data[i].name);
            for (var k in data[i]) {              
                $o.data(k, data[i][k]);
            }
            $select.append($o);
        }
        $select.change();
    })
    
})