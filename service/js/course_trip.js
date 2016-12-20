$(document).ready(function () {  
   $(".course-trip-nav li").click(function(e) {
      $(this).addClass("trip-active").siblings().removeClass("trip-active");
	  var tripIndex=$(this).index();
	  $(".wrap-trip-table table").eq(tripIndex).show().siblings().hide();
  });

    //加入购物车
    $('.add-trip-to-cart').click(function(){
        var goods_id = $('#trip_goods_id').val();
        $.post(
            '/aboutus/triptocart',
            {goods_id:goods_id},
            function(responde){
                if(responde.status == 2){
                    if(confirm(responde.message)){
                        window.location.href = $('.denglu').attr('href');
                    }
                }
                if(responde.status == 0){
                    alert(responde.message);
                }
                if(responde.status == 1){
                    window.location.href = '/flow.php?step=cart';
                }
            },
            'json'
        );
    })


});
