define("TYPO3/CMS/BwIcons/IconSelection",["TYPO3/CMS/Backend/Modal","jquery"],((t,e)=>{return i={22:(t,e,i)=>{var n,s;n=[i,e,i(273),i(140)],void 0===(s=function(t,e,i,n){"use strict";return new class{onModalButtonClick(t){n.advanced({type:n.types.ajax,content:window.TYPO3.settings.ajaxUrls.icon_selection+"&pid="+this.pid,size:n.sizes.large,title:"Select Icon",callback:t=>{this.currentModal=t},ajaxCallback:this.onModalLoaded.bind(this),buttons:[{text:"Save changes",name:"save",icon:"actions-document-save",active:!0,btnClass:"btn-primary",dataAttributes:{action:"save"},trigger:this.onModalSave.bind(this)}]})}onModalSave(){const t=i(this.currentModal).find('*[data-icon-name="'+this.selectedIconName+'"]').clone();this.$hiddenElement.val(this.selectedIconName),i(this.$formElement).find(".input-icon-holder").html(t),this.selectedIconName&&this.$formElement.find(".close").css("visibility","visible"),n.currentModal.trigger("modal-dismiss")}onClearButtonClick(t){this.$formElement.find(".input-icon-holder").html(""),this.$formElement.find(".close").css("visibility","hidden"),this.$hiddenElement.val("")}onModalLoaded(){this.currentModal.find("a.thumbnail").on("click",this.onIconClick.bind(this)),this.currentModal.find(".nav-tabs a").on("click",this.onNavTabClick.bind(this)),this.currentModal.find("input.search").on("input",this.onFilterInput.bind(this)),this.currentModal.find(".close").on("click",this.onFilterResetClick.bind(this))}onFilterResetClick(t){i(t.currentTarget).parent().find(".search").val(""),this.currentModal.find("input.search").trigger("input")}onFilterInput(t){const e=i(t.currentTarget).val(),n=i(t.currentTarget).closest(".tab-content");n.find(".griditem").removeClass("hidden"),n.find("h1").removeClass("hidden"),n.find(".list-group-item").removeClass("hidden"),n.find(".icongrid").removeClass("hidden"),n.find(".close").css("visibility","hidden"),e&&(n.find("*[data-icon-name]").parent().parent().addClass("hidden"),n.find('*[data-icon-base-name*="'+e+'"]').parent().parent().removeClass("hidden"),n.find(".close").css("visibility","visible")),i(".list-group-item",n).each((function(t,e){const s=i(e).attr("href").substr(1),a=n.find('h1[id="'+s+'"] + .icongrid .griditem:not(.hidden)').length;i("span",e).html(a),0===a&&(n.find('h1[id="'+s+'"]').addClass("hidden"),n.find('h1[id="'+s+'"] + .icongrid').addClass("hidden"),i(e).addClass("hidden"))})),i("h1:not([id]) span",n).html(n.find(".griditem:not(.hidden)").length)}onNavTabClick(t){t.preventDefault();const e=i(t.currentTarget).attr("href").substr(1);this.currentModal.find(".nav-tabs li").removeClass("active"),this.currentModal.find('.nav-tabs a[href="#'+e+'"]').parent().addClass("active"),this.currentModal.find(".tab-content").removeClass("active"),this.currentModal.find(".tab-content#"+e).addClass("active")}onIconClick(t){t.preventDefault(),this.currentModal.find("a.thumbnail").removeClass("active"),this.selectedIconName=i(t.currentTarget).children().first().attr("data-icon-name"),i(t.currentTarget).addClass("active")}init(t,e,n){this.pid=t,n.forEach((t=>{parent.document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="'+t+'" />')})),this.itemFormElName=e,this.$formElement=i('div[data-form-element="'+e+'"]'),this.$hiddenElement=i('input[name="'+e+'"]'),this.$formElement.find(".t3js-form-field-iconselection").on("click",this.onModalButtonClick.bind(this)),this.$formElement.find(".close").on("click",this.onClearButtonClick.bind(this))}}}.apply(e,n))||(t.exports=s)},140:e=>{"use strict";e.exports=t},273:t=>{"use strict";t.exports=e}},n={},function t(e){var s=n[e];if(void 0!==s)return s.exports;var a=n[e]={exports:{}};return i[e](a,a.exports,t),a.exports}(22);var i,n}));