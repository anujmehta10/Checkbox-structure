var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
$(document).ready(function(){
    $('#btn').click(function(){
        var result =$('input[type="checkbox"]:checked');
        if(result.length>0)
        {
            var resultString=result.length+ "checkboxes checked<br />";

            result.each(function(){
                resultString+=$(this).val()+"<br />";
            });

            $('#divResult').html(resultString);
        }
        else{
            $('#divResult').html("No Checkbox checked");

        }
    });
});
// $('input[type="checkbox"]').change(function(e){
//     var checked=$(this).prop("checked"),
//     container=$(this).parent(),
//     siblings=container.siblings();

//     container.find('input[type="checkbox"]').prop({
//         indeterminate:false,
//         checked: checked
//     });
//     function checkSiblings(el) {
//         var parent=el.parent().parent(),
//         all=true;
//         el.siblings().each(function(){
//             return all= ($(this).children('input[type="checkbox"]').prop("checked") === checked);
//         });
//         if(all && checked){
//             parent.children('input[type="checkbox"]').prop({
//                 indeterminate:false,
//                 checked: checked
//             });
//             checkSiblings(parent);
//         }
//         else if(all && !checked){
//             parent.children('input[type="checked"]').prop("checked",checked);
//             parent.children('input[type="checked"]').prop("indeterminate",(parent.find('input[type="checkbox"]:checked').length>0));
//             checkSiblings(parent);
//         }
//         else{
//             el.parents("li").children('input[type="checkbox"]').prop({
//                 indeterminate:true,
//                 checked: false
//             });
//         }
//     }
//     checkSiblings(container);
// });
 
  // $(document).ready(function(){
  //  // Check or Uncheck All checkboxes
  //  $("#checkall").change(function(){
  //    var checked = $(this).is(':checked');
  //    if(checked){
  //      $(".caret").each(function(){
  //        $(this).prop("checked",true);
  //      });
  //    }else{
  //      $(".caret").each(function(){
  //        $(this).prop("checked",false);
  //      });
  //    }
  //  });
 
  // Changing state of CheckAll checkbox 
//   $(".caret").click(function(){
 
//     if($(".caret").length == $(".caret:checked").length) {
//       $("#checkall").prop("checked", true);
//     } else {
//       $("#checkall").removeAttr("checked");
//     }

//   });
// });

    $(document).on('change', '#selectAll', function(){
        var currentele= $(this);
        if($(this).prop("checked")){
            console.log("1");
            $("input[type=checkbox]").each(function(){
            $(this).prop("checked",true);
        });
        }
        else{
            console.log("2");
            $("input[type=checkbox]").each(function(){
            $(this).prop("checked",false);
        });
        }
    });


    $(document).on('change','#parent',function(){
        var currentele= $(this);
        if($(this).prop("checked")){
            $("input[type=checkbox]").each(function(){
                $('#childp1').prop("checked",true);
                $('#childp2').prop("checked",true);
            });
        }
        else{
            $("input[type=checkbox]").each(function(){
                $('#childp1').prop("checked",false);
                $('#childp2').prop("checked",false);
            });
        }
    });

    $(document).on('change','#childp1',function(){
        var currentele= $(this);
        if($(this).prop("checked")){
            $("input[type=checkbox]").each(function(){
                $('#subchild1').prop("checked",true);
                $('#subchild2').prop("checked",true);
            });
        }
        else{
            $("input[type=checkbox]").each(function(){
                $('#subchild1').prop("checked",false);
                $('#subchild2').prop("checked",false);
            });
        }
    });

    $(document).on('change','#subchild1',function(){
        var currentele= $(this);
        if($(this).prop("checked")){
            $("input[type=checkbox]").each(function(){
                $('#leavechild1').prop("checked",true);
                $('#leavechild2').prop("checked",true);
                $('#leavechild3').prop("checked",true);
            });
        }
        else{
            $("input[type=checkbox]").each(function(){
                $('#leavechild1').prop("checked",false);
                $('#leavechild2').prop("checked",false);
                $('#leavechild3').prop("checked",false);
            });
        }
    });

     $(document).on('change','#subchild2',function(){
        var currentele= $(this);
        if($(this).prop("checked")){
            $("input[type=checkbox]").each(function(){
                $('#leavechild4').prop("checked",true);
            });
        }
        else{
            $("input[type=checkbox]").each(function(){
                $('#leavechild4').prop("checked",false);
            });
        }
    });



    $(document).on('change','#childp2',function(){
        var currentele= $(this);
        if($(this).prop("checked")){
            $("input[type=checkbox]").each(function(){
                $('#subchildp2').prop("checked",true);
                $('#subchildp3').prop("checked",true);
            });
        }
        else{
            $("input[type=checkbox]").each(function(){
                $('#subchildp2').prop("checked",false);
                $('#subchildp3').prop("checked",false);
            });
        }
    }); 

    $(document).on('change','#subchildp2',function(){
        var currentele= $(this);
        if($(this).prop("checked")){
            $("input[type=checkbox]").each(function(){
                $('#leavep21').prop("checked",true);
                $('#leavep22').prop("checked",true);
                $('#leavep23').prop("checked",true);
                $('#leavep24').prop("checked",true);
                $('#leavep25').prop("checked",true);
            });
        }
        else{
            $("input[type=checkbox]").each(function(){
                $('#leavep21').prop("checked",false);
                $('#leavep22').prop("checked",false);
                $('#leavep23').prop("checked",false);
                $('#leavep24').prop("checked",false);
                $('#leavep25').prop("checked",false);
            });
        }
    }); 

    $(document).on('change','#subchildp3',function(){
        var currentele= $(this);
        if($(this).prop("checked")){
            $("input[type=checkbox]").each(function(){
                $('#leave26').prop("checked",true);
                $('#leave27').prop("checked",true);
                $('#leave28').prop("checked",true);
                $('#leave29').prop("checked",true);
                $('#leave30').prop("checked",true);
                $('#leave31').prop("checked",true);
            });
        }
        else{
            $("input[type=checkbox]").each(function(){
                $('#leave26').prop("checked",false);
                $('#leave27').prop("checked",false);
                $('#leave28').prop("checked",false);
                $('#leave29').prop("checked",false);
                $('#leave30').prop("checked",true);
                $('#leave31').prop("checked",false);
            });
        }
    });

    $('.child').click(function(){
        var currentele= $(this);
        if(!$(this).prop("checked")){
            $('#parent').prop("checked",false);
        }
        else{
            $('#parent').prop("checked",true);
        }
    });


     $("input[type=checkbox]").click(function(){
        if($(this).prop('checked')){
            $(this).parent().find('li input[type=checkbox]').prop('checked', true);
            $(this).parent().prev().prop('checked', true);
    } else {
        // uncheck all children
        $(this).parent().find('li input[type=checkbox]').prop('checked', false);
    }
});





















// $("input[type=checkbox]").click(function() {
//   if (!$(this).prop("checked")) {
//     $("#selectAll").prop("checked", false);
//   }
// });




$('#btn').click(function(){
            $.ajax({
                url: 'https://fbapi.sellernext.com/acl-group/getRoleResource?group_code=admin',
                type: 'POST',
                // data:{
                //     id: 2
                // },
                dataType: 'json',
                // contentType: "application/json; charset=utf-8",
                success: function(result) {
                    // alert(result);
                    console.log(result)

                },
                error:function(){
                    alert("error");
                }
            });
    });