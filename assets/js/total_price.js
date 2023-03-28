$("#wishlist_table").on('click', '.remove_row a', function () {
    $(this).closest('tr').remove();
    var nubCart =  $(".cart_table_wrapper table tbody tr").length;
    $(".cart_count").html(nubCart);
    if(nubCart == 0){
        $('.cart_table_wrapper').closest('.col-12').remove();
        $('.empty_cart').show();
        $('.summary_wrappeer').closest('.col-md-6').remove();
        $('.total_cart_wrapper').closest('.col-md-6').remove();
        $(".cart_count").html(0);
        $(".offcanvas .offcanvas-body .add_cart").remove();
        $(".offcanvas .offcanvas-body .total_price.bm_b #total_price").html("<span class='cerncy_symbole'>$</span>0")
    }
});


var nubCart =  $(".cart_table_wrapper table tbody tr").length;
$(".cart_count").html(nubCart)


var incrementPlus;
var incrementMinus;

var buttonPlus = $(".plus");
var buttonMinus = $(".minus");

var incrementPlus = buttonPlus.click(function () {
    var $n = $(this).parent(".quantity").find(".qty");
    $n.val(Number($n.val()) + 1);
    var qut = $(this).parent().parent().parent().find('.product_quantity_wrapper .quantity .qty').val();
    var pri = $(this).parent().parent().parent().find('.procuct_price span.text_black').html();
    var proTot = (parseInt(pri) * parseInt(qut)).toFixed(2);
    $(this).parent().parent().parent().find(".total-price").text(proTot);
    $(".cart_amount").text($(".qty").val());

    var dataId = $(this).parent().parent().parent().attr("data-id");
    console.log(dataId);

    
});

var incrementMinus = buttonMinus.click(function () {
    var $n = $(this).parent(".quantity").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount - 1);
    }
    var qut = $(this).parent().parent().parent().find('.product_quantity_wrapper .quantity .qty').val();
    var pri = $(this).parent().parent().parent().find('.procuct_price span.text_black').html();
    var proTot = (parseInt(pri) * parseInt(qut)).toFixed(2);
    $(this).parent().parent().parent().find(".total-price").text(proTot);
    $(".cart_amount").text($(".qty").val());
    var dataId = $(this).parent().parent().parent().attr("data-id");
    // console.log(dataId);
    var dataQut = $(".offcanvas p").find("qty span[class='qty']").html();
    console.log(dataQut);
    
});

// document.getElementById('cart_table').addEventListener('click', function (item) {
    
    //     // To get tr tag 
//     // In the row where we click
//     var row = item.path[1];

//     var row_value = "";

//     for (var j = 0; j < row.cells.length; j++) {

//         row_value += row.cells[j].innerHTML;
//         row_value += " | ";
//     }

//     console.log(row.cells.length);
//     alert(row_value);

//     // Toggle the highlight
//     if (row.classList.contains('highlight'))
//         row.classList.remove('highlight');
//     else
//         row.classList.add('highlight');
// });

$(document).ready(function () {

    // Get value on button click 
    $(".updateBtn").click(function () {
        var count = 0
        $("#cart_table tbody tr").each(function () {
            count += parseInt($(this).find(".total_price .total-price").html());
        })
        total2 = count.toFixed(2)
    
        $(".subtotal_price, #subtotal_price").html(total2)
        $(".offcanvas .offcanvas-body .total_price.bm_b #total_price").html("<span class='cerncy_symbole'>$</span>" + total2)
    });



});

