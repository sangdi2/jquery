$(function(){
    load();
    $('#title').on("keydown",function(e){
       if(e.keyCode==13)
       {
         var data=getdata();
        
         data.push({title:$(this).val(),done:false});
         savedata(data);
        load();
       }
    });
    function getdata(){
        var data =localStorage.getItem("todolist");
        if(data!=null)
        {
            return JSON.parse(data);
        }else {
            return [];
        }
    }
    function savedata(data){
        var local =JSON.stringify(data);
        localStorage.setItem("todolist",local);
        
    }
    function load()
    {
        var loca =getdata();
        $("ol").empty();
        console.log(loca);
        $.each(loca,function(i,ele){
           
            $("ol").prepend("<li><input type='checkbox'><p>"+ele.title+"</p><a href='javascript:;'></a></li>");
        })
    }
});