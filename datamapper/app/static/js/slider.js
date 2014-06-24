//TODO: Fix first line when id's change
$(function() {
    $("#slider").slider({
        min: 1,
        max: 12,
        step : 1,
        slide: function(event, ui) {
            $.ajax("/mock-ajax", {
                type : 'GET',
                success : function(response){
                    var newData = {max : 46, data : response.data};
                    heatmap.setDataSet(newData);
                }
            });
        }
    });
});