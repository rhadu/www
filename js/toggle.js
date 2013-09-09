
<style type="text/css">
    .toggle {
        display: block;
    }
</style>
<script type="text/javascript">

  function toggleVisibility(newSection) {
        $(".toggle").not("#" + newSection).hide();
        $("#" + newSection).show();
    }

</script>

$.each( ['a','b','c'], function(i, l){
   alert( "Index #" + i + ": " + l );
 });
$.each( { name: "John", lang: "JS" }, function(k, v){
   alert( "Key: " + k + ", Value: " + v );
 });

  function toggleVisibility(newToggle) {

 
    $.each([ "home", "shop", "contact" ], function() {
      $(".toggle" + this).show();
       $.not("toggle" + newToggle).hide();
	});
 }
<script type="text/javascript" src="js/prototype.js"></script>