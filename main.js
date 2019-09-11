$(function () {
    $main = $('.container');
    
    let inputstwo = document.querySelectorAll('form#one>.inputs');
    $inputs = $('.inputs');
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
            remove($price);
        }
        else{
            $qty.text($amount=0);
            $subtotal.text($amount*$price);
          
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


     $('#pnr').click(function() {
         let i = 0;
        $('form#one:first *:input[type!=hidden]:first').focus();
        let $inputsone = $('form#one>.inputs');
        $keypad.on('click','button.btn',function () {
        let data = $(this).val();
        if (data === 'delete') {
            i--;
            $inputsone.eq(i).prev('.inputs').focus();
            $inputsone.eq(i).val("");
        }
        else{
         $inputsone.eq(i).val(data);
        i++;
        if ($inputsone.eq(i).val().length == $inputsone.eq(i).maxLength) {
            $inputsone.eq(i).next('.inputs').focus();
            }
        }
        $('button#enter').on('click', function () {
            e.preventDefault();
            $inputsone.eq(i).trigger("focusout");
        })

         });
    });

    $('#mnr').click(function() {
        let i = 0;
        $('form#two:first *:input[type!=hidden]:first').focus();
        $('form#one:first').blur();
        let $inputstwo = $('form#two>.inputs');
        $keypad.on('click','button.btn',function () {
            let data = $(this).val();
            if (data === 'delete') {
                i--;
                $inputstwo.eq(i).prev('.inputs').focus();
                $inputstwo.eq(i).val("");
            }
            else{
             $inputstwo.eq(i).val(data);
            i++;
            if ($inputstwo.eq(i).val().length == $inputstwo.eq(i).maxLength) {
                $inputstwo.eq(i).next('.inputs').focus();
                }
            }
            $('button#enter').on('click', function () {
                e.preventDefault();
                $inputsone.eq(i).trigger("focusout");
            })
    
    
             });
    });

});