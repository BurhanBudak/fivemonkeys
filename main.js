$(function () {
    $main = $('.container');

    $pm = $('.plus_minus');
    $basket= $('.basket');
    $total = $('#total');
    $moms = $('#moms');
    $keypad =$('.keypad');
    let totalCost = 0;
    let tax = 0;
    $subt = $('#subt');

     
    function add(subtotal) {
        totalCost += subtotal;
        tax = totalCost * 0.25;
        $total.text(totalCost);
        $moms.text(tax);
        
    }
    function remove(amount) {
        totalCost -= amount;
        tax = totalCost * 0.25;
        $total.text(totalCost);
        $moms.text(tax);
    } 
    


    $count = $('#count');


    $basket.on('click','button#plus',function () {
        $article = $(this).parents('div.row');
        $id = $article.attr('id');
        let $qty = $(`#${$id}`).find('span#count');
        let $subtotal = $(`#${$id}`).find('span#subt');
        let $price = Number($subtotal.attr('value'));
        $amount = Number($qty.text());
        $qty.text($amount+=1);
        $subtotal.text($amount*$price);
        
        add($price);
    });
    
    $basket.on('click','button#minus',function () {
        $article = $(this).parents('div.row');
        $id = $article.attr('id');
        let $qty = $(`#${$id}`).find('span#count');
        let $subtotal = $(`#${$id}`).find('span#subt');
        let $price = Number($subtotal.attr('value'));
        $amount = Number($qty.text());
        if ($amount>0) {
            $qty.text($amount-=1);
            $subtotal.text($amount*$price);
            console.log($price);
            console.log(Number($subtotal.text()));
            remove($price);
        }
        else{
            $qty.text($amount=0);
            $subtotal.text($amount*$price);
            // remove($price);
            // console.log(Number($subtotal.text()));
        }
    });


















    $('input[type="checkbox"]').on('change', function() {
        $('input[type="checkbox"]').not(this).prop('checked', false);
        let $cargo = Number($(this).attr('value'));
        console.log($cargo);
        if ($cargo !== 79) {
            let cargo = 79;
            remove(cargo);
        } else {
            add($cargo);
        }
     });

    //  $keypad.on('click','button.btn',function () {
    //     let data = $(this).val();
    //     $(".inputs").append(data);
    //     $('.inputs').keyup(function () {
    //         if (this.value.length == this.maxLength) {
    //           $(this).next('.inputs').focus();
    //         }
    //     });
        
    //  });

    //  $('.form').click(function() {
    //     $('form:first *:input[type!=hidden]:first').focus();
    // });


    //  function inputs(data) {
    //     $('.inputs').val() = data;
    //     if (this.value.length == this.maxLength) {
    //         $(this).next('.inputs').focus();
    //       }
    //  }
    $('.inputs').on('click','.keypad.button.btn',function () {
        $(".inputs").val() = $(this).val();
        if (this.value.length == this.maxLength) {
          $(this).next('.inputs').focus();
        }
    }); 
});