$(document).ready(function() {var $navlist=$("#navlist"),$tabContainer=$("#tab-container"),$panels=$("#panels");function findAdjacentTab(e,i,t){var a=37===t||38===t?"prev":"next",n="prev"===a?$(e.parentNode).prev()[0]:$(e.parentNode).next()[0];if(!n){var r=i.find("li");n="prev"===a?r[r.length-1]:r[0]}return $(n).find("a")[0]}function setActiveAndInactive(e,i){i.find("li").each(function(){var i=$(this).find("a").first().attr("aria-controls"),t=$(this).find("a")[0];this!==e.parentNode?($(this).removeClass("active"),t.tabIndex=-1,t.setAttribute("aria-selected","false"),$("#"+i).removeClass("current").attr("aria-hidden","true")):($(this).addClass("active"),t.tabIndex=0,t.setAttribute("aria-selected","true"),$("#"+i).addClass("current").attr("aria-hidden","false"))})}$navlist.on("keydown","li a",function(e){var i=e.which,t=e.target;if($.inArray(i,[37,38,39,40])>-1){var a=findAdjacentTab(t,$navlist,i);a&&(e.preventDefault(),a.focus(),setActiveAndInactive(a,$navlist))}else if(13===i||32===i)e.preventDefault(),t.click();else if(34===i){e.preventDefault();var n=$("#"+this.getAttribute("aria-controls"));n&&n.prop("tabIndex",-1).focus()}}),$(document.body).on("keydown",".panel",function(e){if(33===e.which){e.preventDefault();var i=$navlist.find("li.active a")[0];i&&i.focus()}}),$navlist.on("click","li a",function(e){e.preventDefault(),setActiveAndInactive(this,$navlist)});
var curYear=new Date().getFullYear();$("#copyright-year").text(curYear);$("#footer-ins").html('<p>&copy;'+ curYear + ' <a href="https://hadits.net/">hadits.net</a>. All Rights Reserved.</p>');/* selectHadits */ var optHadits="",el_label="",inputBtn="",selectedImam="";var iscount = hadits_count ?  'min="1" max="'+hadits_count+'"': "";var isNumbered = hadits_number ?  hadits_number : "1";el_label += '<label class="select"><select title="Pilih Hadits (Imam)" name="inputImam" id="inputImam" class="form-control tooltip"></select></label>';inputBtn = '<input title="Masukkan Nomor Hadits" type="number" class="inputNum form-control toolip" id="inputNumber" name="inputNumber" value="'+isNumbered+'" '+iscount+'><button data-imam="'+ hadits_dir +'" data-number="'+ isNumbered +'" type="submit" class="searchNum"><i class="fa fa-search"></i></button>';var dataHadits = [{"name": "Abu Daud","slug": "abu-daud","count": 4590},{"name": "Ahmad","slug": "ahmad","count": 26363},{"name": "Bukhari","slug": "bukhari","count": 7008},{"name": "Darimi","slug": "darimi","count": 3367},{"name": "Ibnu Majah","slug": "ibnu-majah","count": 4332},{"name": "Malik","slug": "malik","count": 1594},{"name": "Muslim","slug": "muslim","count": 5362},{"name": "Nasai","slug": "nasai","count": 5662},{"name": "Tirmidzi","slug": "tirmidzi","count": 3891}];$(el_label).prependTo($("<div/>", {"class": "row"}).append(inputBtn).appendTo( "#selectHadits" ));for (var i = 0; i < dataHadits.length; i++) {var isHadits = hadits_dir == dataHadits[i].slug ?  true : false;optHadits += '<option data-count="'+ dataHadits[i].count + '" ' + (isHadits ? "selected " : "") + 'value="'+dataHadits[i].slug+'">'+dataHadits[i].name+'</option>';}$('#inputImam').html(optHadits) ;$("#inputImam").change(function(){var dataCount = $(this).children("option:selected").attr("data-count");$("#inputNumber").attr("max", dataCount);$(".searchNum").attr("data-imam",$(this).children("option:selected").val() );$("#h-count").text(dataCount);});$("#inputNumber").change(function(){$(".searchNum").attr("data-number",$(this).val() );});$( ".searchNum" ).click(function() {var dataNumber = parseInt($("#inputImam").children("option:selected").attr("data-count"));var i_num = parseInt($.trim($('#inputNumber').val()));if(i_num <= dataNumber ){var getUri ='/hadits/' + $(this).attr("data-imam") + '/' + $(this).attr("data-number") + '/';window.location.href = getUri;if ($('.notify').hasClass('show')) {$('.notify').removeClass('show');}} else {$('.notify').addClass('show');}});$( ".searchbox-icon" ).click(function() {$(this).toggleClass('active');$('#qhCse').fadeToggle("fast", function() {$("input.searchTerm").focus();});});function searchCse(){query = encodeURIComponent($.trim($('.searchTerm').val()));if(!query){$('.searchTerm').addClass('warning');} else {$('.searchTerm').removeClass('warning');url ='/search.html?q=' + query;window.location.href = url;}}$( ".searchButton" ).click(function() {searchCse();});$("input.searchTerm").keydown(function(e){if(e.which === 13){$(".searchButton").click();}});
function showDropdownMenu(e) {var menuContent = ".dropdown-content";$(menuContent).removeClass("show");$(e).next(menuContent).toggleClass("show");};$(".dropbtn").click(function() {showDropdownMenu(this);});window.onclick = function(event) {if (!event.target.matches(".dropbtn")) {var dropdowns = $(".dropdown-content");var i;for (i = 0; i < dropdowns.length; i++) {var openDropdown = dropdowns[i];if (openDropdown.classList.contains("show")) {openDropdown.classList.remove("show");}}}}
});