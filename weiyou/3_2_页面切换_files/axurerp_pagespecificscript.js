for(var i = 0; i < 88; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u38').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u38'); });
else {
    document.getElementById('u38').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u38'); }, true);
    document.getElementById('u38').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u38'); }, true);
}

widgetIdToSwipeRightFunction['u38'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u38', 'pd1u38','swing','right',500,'swing','left',500);

}

}
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u73'] = 'top';document.getElementById('u84_img').tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	SetPanelState('u38', 'pd0u38','swing','left',500,'swing','right',500);

}
});
gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u78'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u80'] = 'top';