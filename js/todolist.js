$(function(){
    load();
    $('#title').on("keydown",function(e){
       if(e.keyCode==13)
       {
           if($(this)==null)
           {
               alert("请输入待办事项");
           }else {
            var data=getdata();
        
            data.push({title:$(this).val(),done:false});
            savedata(data);
           load();
           $(this).val("");
           }
         
       }
    });
    $("ul,ol").on("click","a",function(){
        
        var data =getdata();
        var index =$(this).attr("id");
        data.splice(index,1);
        savedata(data);
        load();
    });
    $("ul,ol").on("click","input",function(){
       
        var data =getdata();
        var index =$(this).siblings("a").attr("id");
        console.log(data);
        data[index].done=$(this).prop("checked");
        savedata(data);
        load();
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
    {   var tododone=0;
        var countdone=0;
        var loca =getdata();
        $("ol").empty();
        $("ul").empty();
        
        $.each(loca,function(i,ele){
           if(ele.done)
           {
            $("ul").prepend("<li><input type='checkbox' checked='checked'><p>"+ele.title+"</p><a href='javascript:;' id="+i+" ></a></li>");
            tododone++;
           }else{
            $("ol").prepend("<li><input type='checkbox'><p>"+ele.title+"</p><a href='javascript:;' id="+i+"></a></li>");
            countdone++;
           }
            
        })
        $("#todocount").text(countdone);
        $("#donecount").text(tododone);
    }
});