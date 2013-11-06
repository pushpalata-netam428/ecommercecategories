var CATEGORY = new function() {

	var __m = new Array(); //Menus
	var __c = new Array(); //Categories
	var __s = new Array(); //Sub Categories
	
	
	__m.push("Kitchen"); __c["Kitchen"] = new Array();
		__c["Kitchen"].push("Spices"); __s["m1c11"] = new Array(); 
				__s["m1c11"].push("m1c11s1");
				__s["m1c11"].push("m1c11s2");
				__s["m1c11"].push("m1c11s3");
		__c["Kitchen"].push("Pickle, Sauce and Condiment");__s["m1c12"] = new Array();
				__s["m1c12"].push("m1c12s1");
				__s["m1c12"].push("m1c12s2");
				__s["m1c12"].push("m1c12s3");
		__c["Kitchen"].push("Snacks");__s["m1c13"] = new Array();
				__s["m1c13"].push("m1c13s1");
				__s["m1c13"].push("m1c13s2");
				__s["m1c13"].push("m1c13s3");
		__c["Kitchen"].push("Biscuit & Cookie");__s["m1c13"] = new Array();
		__c["Kitchen"].push("Breakfast & Cereal");__s["m1c13"] = new Array();
				
	__m.push("m2");__c["m2"] = new Array();
		__c["m2"].push("c21"); __s["m2c21"] = new Array(); 
				__s["m2c21"].push("m2c21s1");
				__s["m2c21"].push("m2c21s2");
				__s["m2c21"].push("m2c21s3");
		__c["m2"].push("c22"); __s["m2c22"] = new Array(); 
				__s["m2c22"].push("m2c22s1");
				__s["m2c22"].push("m2c22s2");
				__s["m2c22"].push("m2c22s3");
		__c["m2"].push("c23"); __s["m2c23"] = new Array(); 
				__s["m2c23"].push("m2c23s1");
				__s["m2c23"].push("m2c23s2");
				__s["m2c23"].push("m2c23s3");
				
	__m.push("m3");__c["m3"] = new Array();
		__c["m3"].push("c31"); __s["m3c31"] = new Array(); 
				__s["m3c31"].push("m3c31s1");
				__s["m3c31"].push("m3c31s2");
				__s["m3c31"].push("m3c31s3");
		__c["m3"].push("c32"); __s["m3c32"] = new Array(); 
				__s["m3c32"].push("m3c32s1");
				__s["m3c32"].push("m3c32s2");
				__s["m3c32"].push("m3c32s3");
		__c["m3"].push("c33"); __s["m3c33"] = new Array(); 
				__s["m3c33"].push("m3c33s1");
				__s["m3c33"].push("m3c33s2");
				__s["m3c33"].push("m3c33s3");
	
	this.menuItems = function () {
		
		return __m;
	}
	
	this.categoryItems = function (menu) {
		
		return __c[menu];
	}
	
	this.subCategoryItems = function (menu, cat) {

		return __s[menu+""+cat];
	}

}

