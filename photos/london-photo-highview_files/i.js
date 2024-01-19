(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome|snap-prefetch|remotasks|woorank|uptime\.com|facebookexternalhit|facebookcatalog/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":2813,"name":"Conde Nast - CN Traveler","cookie_name":"bounceClientVisit2813","domain":"cntraveler.com","ct":"bind_to_domain","ally":1,"ei":0,"tcjs":"","cjs":"(function () {\n\twindow.bouncex = window.bouncex || {};\n\n\twindow.bouncex.addAllyFeatures = function (params) {\n\t\tif (!params || !params.campaignId ) { return false; }\n\n\t\tvar $campaign = window.bouncex.campaigns[params.campaignId].obj1;\n\n         /* focus on first actionable element*/\n        if(!bouncex.browser.android && !bouncex.browser.iphone && !bouncex.browser.ipad) {\n            $campaign.find('form').addClass('bx-ally-no-focus');\n        }\n\n        $campaign.find('.bx-close').attr('role','button');\n        \n        bouncex.on(bouncex.document, 'bxValidateFormComplete.bx-' + params.campaignId, function(e){\n            var $nextStep = $campaign.find('.bx-step-'+(bouncex.campaigns[params.campaignId].current_step));\n            if(!e.response || !e.response.errors || e.response.errors.length === 0 && (params.campaignId === e.campaign_id)){\n                $campaign.removeAttr('role');\n                var step2labelID = $nextStep.find('.bx-row-image-logo h2').attr('id'),\n                    step2descrID = $nextStep.find('.bx-group-primary').attr('id');\n                $campaign.attr({'aria-labelledby' : step2labelID, 'aria-describedby': step2descrID});\n                $campaign.attr('role', 'dialog');\n            } \n        });\n        \n\t\tparams.steps.forEach(function (step, i) {\n            var $step = $campaign.find('.bx-step-'+step.step_number);\n\n            /* Associate microcopy with input */\n            if(step.hasMicroCopy){\n                var $inputRow = $step.find('.bx-row-input'),\n                    $emailInput = params.eCap ? $inputRow.find('input[type=\"email\"]') : $inputRow.find('input'),\n                    $micro = $step.find('.bx-group-micro'),\n                    privacyPolicyIds = '';\n                \n                if($emailInput.length > 0 && $micro.length > 0){\n                    $micro.find('.bx-row-text >*:first-child p').each(function(x,y){\n                        var privacyPolicyId = 'bx-micro-'+params.campaignId+'-'+(x+1)+'-step-' + (i+1);\n                        y.setAttribute('id', privacyPolicyId);\n                        y.setAttribute('tabindex', '-1');\n                        privacyPolicyIds +=  privacyPolicyId + ' ';\n                    });\n                    var validationID = $inputRow.find('.bx-vtext').attr('tabindex', '-1').text('').attr('id');\n                    $emailInput.attr('aria-describedby', privacyPolicyIds + validationID);\n                }\n            }\n\n\t\t});\n\n\t};\n\n})();\n\n// PD: https://www.wrike.com/open.htm?id=322595888\nbouncex.report_ga = function(action, label, bypass) {\n    var parsedAction = action.replace(/[a-z]/, function(letter) { return letter.toUpperCase(); });\n    if (window.dataLayer) {\n        window.dataLayer.push({'event': 'BounceX '+parsedAction, 'bouncex-action':label});\n    }\n};\nbouncex.et.onVisible('#onetrust-accept-btn-handler', function(){\n    bouncex.setVar('ccpa_cali', false);\n    setBounceCookie();\n    bouncex.reload_campaigns();\n});\n\njQuery('#onetrust-accept-btn-handler').on('click', function(){\n    bouncex.setVar('ccpa_cali', true);\n    setBounceCookie();\n    bouncex.reload_campaigns();\n});\n\n","force_https":false,"waypoints":false,"content_width":900,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":1,"gmp":0,"whitelist_check":0},"burls":[{"prop":"contains","val":"video.cntraveler"},{"prop":"contains","val":"/what-editors-are-shopping-black-friday-cyber-monday-2022"}],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":1,"ettm":true,"etjs":"","dge":false,"bxidLoadFirst":false,"pie":false,"cme":false,"gbi_enabled":0,"bpush":false,"pt":{"article":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('article').length > 0;"}]]},"category":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"bouncex.utils.gtmLookup('content.contentType') === 'bundle';"}]]},"home":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"bouncex.utils.gtmLookup('content.contentType') === 'homepage';"}]]}},"els":{"Endcap":".recirc-list-wrapper","Infeed":".content-body p + p, .article__body p + p","Masthead":"#cns-ads-slot-type-post-nav-0, #cns-ads-slot-type-hero-0"},"vars":[{"name":"page_type","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    var pageType = bouncex.utils.gtmLookup('content.contentType');\n\n    if (pageType === 'homepage') {\n        return 'home';\n    }\n    if (pageType === 'bundle') {\n        return 'category';\n    }\n    if (document.querySelectorAll('article').length > 0) {\n        return 'article';\n    }\n    return false;\n})();","trigger":""},{"name":"video_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('figure.cne-interlude-container').length > 0 || jQuery('.clip-component video').prop('autoplay') ? true : null;","trigger":""},{"name":"article_name","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.page_type === 'article' || bouncex.vars.page_type === 'video' ? jQuery('meta[property=\"og:title\"]').attr('content') : null;","trigger":""},{"name":"gallery_name","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.page_type === 'gallery' ? jQuery('meta[property=\"og:title\"]').attr('content') : null;","trigger":""},{"name":"article_category","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.page_type === 'article' || bouncex.vars.page_type === 'video' ? window.digitalData.section : null;","trigger":""},{"name":"submitted_onsite","polling":"all","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"jQuery('p.success-text:visible').length > 0 || jQuery('.newsletter-sub-unsub__content .subscribe:visible').text() === \"Thank you for signing up!\" || jQuery('.intel-page__newsletter-subscribe__hed.subscribe:visible').text() === \"Thank you!\" || null;","trigger":"pageload"},{"name":"modal_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.cns-ads-container iframe[id*=\"_2\"]:visible').length > 0 || jQuery('.cns-ads-container iframe[id*=\"home_0\"]:visible').length > 0 || jQuery('.cns-ads-container iframe[title=\"Advertisement\"]:visible').length > 0;","trigger":"pageload"},{"name":"dfp_rblock","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    if (!bouncex.dfpRan) {\n        bouncex.dfpRan = true;\n        return 'not_ready';\n    }\n    function check() {\n        bouncex.dfp_loaded = false || bouncex.dfp_loaded;\n        \n        var event = bouncex.gbi2.getDfpEndPageViewEvent();\n        \n        if (event && event.dfp_status) {\n            if (event.dfp_status == 'pending') {\n                return 'not_ready';\n            } \n            \n            bouncex.dfp_loaded = true;\n\n            if (event.dfp_status == 'suppressed') {\n                return 'sponsor';\n            }\n\n            return 'allow';\n        }\n\n        return 'not_ready';\n    }\n\n    if (bouncex.website.gbi.rblocks) {\n        if (bouncex.dfp_loaded) {\n            return null;\n        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady && bouncex.gbi2) {\n            return check();\n        } else if (typeof window.googletag === 'undefined') {\n            return 'no_googletag';\n        }\n        return 'fallback';\n    } else {\n        return 'not_ready';\n    }\n})()","trigger":"pageload"},{"name":"content_keywords","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('meta[name=\"news_keywords\"]').attr('content') || false;","trigger":"pageload"},{"name":"tag_element","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n\tif (bouncex.utils.gtmLookup(\"content\").pageType === 'article' || bouncex.utils.gtmLookup(\"content\").pageType === 'gallery') {\n\t\tvar tags = bouncex.utils.getNestedProp('cns.pageContext.keywords.tags');\n\t\tif (tags.length > 0) {\n\t\t\tfor (var i=0;i < tags.length; i++) {\n\t\t\t\tswitch (tags[i].toLowerCase()) {\n\t\t\t\t\tcase \"beaches\":\n\t\t\t\t\t\treturn \"beaches\";\n\t\t\t\t\tcase \"tokyo\":\n\t\t\t\t\t\treturn \"tokyo\";\n\t\t\t\t\tcase \"paris\":\n\t\t\t\t\t\treturn \"paris\";\n\t\t\t\t\tcase \"trains\":\n\t\t\t\t\t\treturn \"trains\";\n\t\t\t\t\tcase \"nyc\":\n\t\t\t\t\t\treturn \"nyc\";\n\t\t\t\t\tcase \"tsa-precheck\":\n\t\t\t\t\t\treturn \"tsa precheck\";\n\t\t\t\t\tcase \"beautiful-places\":\n\t\t\t\t\t\treturn \"beautiful places\";\n\t\t\t\t\tdefault:\n\t\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn null;\n})();","trigger":"pageload"},{"name":"privacy_popup_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"document.querySelectorAll('iframe#privacy-policy-user-agreement-popup').length > 0;","trigger":"pageload"},{"name":"cn_email_subscriber","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.utils.cookies.read('CN_segments') && bouncex.utils.cookies.read('CN_segments').indexOf('en.nl') > -1;","trigger":"pageload"},{"name":"ccpa_cali","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"true","code":"null;","trigger":"pageload"},{"name":"topbar_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.bx-type-nanobar.bx-impress').is(':visible');","trigger":"pageload"},{"name":"order_form","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function(){\n\tvar str = bouncex.utils.getNestedProp('circ.campaignName', '', HEARST).toLowerCase();\n\tvar badMatches = str.match(/remail|_dm/g);\n\t\n\tif (!!badMatches) return false;\n\n    if (str.includes('_nat_')) {\n        return '_nat_';\n    } else if (str.includes('eml')) {\n        return '_eml_';\n    } else if (str.includes('email')) {\n        return '_eml_';\n    } else {\n        return false;\n    }\n})();","trigger":"pageload"},{"name":"submitted_email_daily","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_email_wwt","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_email_next","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_email_next_dupe","polling":"none","persist":"no","page_types":[],"testmode":true,"default":"false","code":"null;","trigger":"pageload"},{"name":"logged_in","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function(){\n    var loggedInStatus = bouncex.utils.getNestedProp('_aam_dataLayer.user.account.loginStatus', '');\n\n    if (loggedInStatus === '') {\n        return null\n    } \n\n    return loggedInStatus;\n})();","trigger":"pageload"},{"name":"section_name","polling":"all","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"jQuery('[data-testid=\"ContentHeaderRubric\"]').text();","trigger":"pageload"},{"name":"submitted_email_intel","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_email_packing","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"ecap_seen_this_visit","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"registration_wall","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('div[class^=\"PersistentBottomWrapper-\"] .registration-gate').length > 0;","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":0,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":"","enabled":0},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":true,"gamNetwork":"3379","spa":0,"spatm":1,"preinit_cjs":"","crs":{"integrations":null,"pageCount":null},"mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":false,"fme":false,"fmx":"","sdk":{"android":{"enabled":false,"enabledVersions":[]},"ios":{"enabled":false,"enabledVersions":[]}},"onsite":{"enabled":1},"ads":{"enabled":0},"pubs":{"enabled":1},"ga4_property_id":"","ga4_measurement_id":""}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 1
		};
		bouncex.assets = {"ads":"819439fb0a227cfadd8d833ac0dc19d6","creativesBaseStyles":"a53944a2","gam_3379":"//assets.bounceexchange.com/assets/gam/3379/1f032a37033a71bcb3222f61f007017c.json","inbox":"02b49e81fdce836ab814f9ce203fce36","onsite":"bda9c9f9310c72a80bd530888378f236","sms":"2579b6aa71148c3eb940153c85a653a0"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}
		var script = document.createElement('script');
		script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/main_f8216d0602277e8f456d8bf82fa4aa07.br.js');
		script.setAttribute('async', 'async');

		document.body.appendChild(script);
	}



}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();