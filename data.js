$(document).ready (function(){
  update_amounts();  
  $ ('.qty, .price').on('keyup keypress blur change', function (e){
    update_amounts();  
  });
  
});

function update_amounts(){
    var sum =0.0;
    $ ('#myTable > tbody > tr').each(function(){
var qty = $ (this).find('.qty').val();
var price = $ (this).find('.price').val();
var amount = (qty * price)
sum+=amount;
$(this).find ('.amount').text(''+amount);

    });

 $('.total').text(sum);   
}

