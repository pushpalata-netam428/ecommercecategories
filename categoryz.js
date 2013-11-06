var CATEGORY = new function() {

	var __m = new Array(); //Menus
	var __c = new Array(); //Categories
	var __s = new Array(); //Sub Categories
	
	__m.push("Kitchen");

	__c["Kitchen"] = new Array();

	__c["Kitchen"].push("Spices");

    	__s["KitchenSpices"] = new Array(); 
	__s["KitchenSpices"].push("Masaala");
	__s["KitchenSpices"].push("Whole Spice");
	__s["KitchenSpices"].push("Ground Spices");
        
	__c["Kitchen"].push("Pickle, Sauce and Condiment"); 
	
		__s["KitchenPickle, Sauce and Condiment"] = new Array(); 
	__s["KitchenPickle, Sauce and Condiment"].push("Pickle"); 
	__s["KitchenPickle, Sauce and Condiment"].push("Sauce");
	__s["KitchenPickle, Sauce and Condiment"].push("Italian Condiments");
	__s["KitchenPickle, Sauce and Condiment"].push("Italian Spice");
	__s["KitchenPickle, Sauce and Condiment"].push("Mouth Freshener");
	__s["KitchenPickle, Sauce and Condiment"].push("Mayonnaise");
	__s["KitchenPickle, Sauce and Condiment"].push("Salad Dressing");
	__s["KitchenPickle, Sauce and Condiment"].push("Vinegar");
	__s["KitchenPickle, Sauce and Condiment"].push("Peanut Butter");
	
	
	__c["Kitchen"].push("Snacks");
	
		__s["KitchenSnacks"] = new Array();
	__s["KitchenSnacks"].push("Namkeen/Mixture");
	__s["KitchenSnacks"].push("Wafers/Chips");
	__s["KitchenSnacks"].push("Papads");
	__s["KitchenSnacks"].push("Popcorns");
	__s["KitchenSnacks"].push("SouthIndian-Snacks");
	__s["KitchenSnacks"].push("Cheese Balls");
	__s["KitchenSnacks"].push("Fried Items");
	
	__c["Kitchen"].push("Regional");
	
		__s["KitchenRegional"] = new Array();
	__s["KitchenRegional"].push("Kerala");
	__s["KitchenRegional"].push("Andhra");
	__s["KitchenRegional"].push("Rajasthan");
	__s["KitchenRegional"].push("Gujrat");
	__s["KitchenRegional"].push("Tamil");
	
	__c["Kitchen"].push("BiscuitsCookies");
	
		__s["KitchenBiscuitsCookies"] = new Array();
	__s["KitchenBiscuitsCookies"].push("Biscuits");
	__s["KitchenBiscuitsCookies"].push("CreamBiscuits");
	__s["KitchenBiscuitsCookies"].push("Cookies");
	__s["KitchenBiscuitsCookies"].push("Wafers");
	__s["KitchenBiscuitsCookies"].push("Rusks");
	
	__c["Kitchen"].push("BreakfastCereals");
	
		__s["KitchenBreakfastCereals"] = new Array();
	__s["KitchenBreakfastCereals"].push("Cereal");
	__s["KitchenBreakfastCereals"].push("Instant Made Foods");
	__s["KitchenBreakfastCereals"].push("Instant Made Soups");
	__s["KitchenBreakfastCereals"].push("Oats & Muesli");
	__s["KitchenBreakfastCereals"].push("Marmalade");
	__s["KitchenBreakfastCereals"].push("Jam");
	__s["KitchenBreakfastCereals"].push("Honey");
	__s["KitchenBreakfastCereals"].push("Bread");
	__s["KitchenBreakfastCereals"].push("Spread");
	
	
	__c["Kitchen"].push("Noodles and Pasta");
	
		__s["KitchenNoodles and Pasta"] = new Array();
	__s["KitchenNoodles and Pasta"].push("Noodles");
	__s["KitchenNoodles and Pasta"].push("Pastas");
	__s["KitchenNoodles and Pasta"].push("Vermicelli");
	__s["KitchenNoodles and Pasta"].push("Instants");
	
	__c["Kitchen"].push("Tea and Coffee");
	
		__s["KitchenTea and Coffee"] = new Array();
	__s["KitchenTea and Coffee"].push("Tea");
	__s["KitchenTea and Coffee"].push("Coffee");
	__s["KitchenTea and Coffee"].push("Dairy Whitener");
	__s["KitchenTea and Coffee"].push("TeaBag");
	
	__c["Kitchen"].push("Pulses");
	
		__s["KitchenPulses"] = new Array();
	__s["KitchenPulses"].push("Green Gram");
	__s["KitchenPulses"].push("Tur Dal");
	__s["KitchenPulses"].push("Urad Dal");
	__s["KitchenPulses"].push("whole Gram");
	
	__m.push("Cleaning");
	
	__c["Cleaning"] = new Array();
	
	__c["Cleaning"].push("HomeCare");
	
		__s["CleaningHomeCare"] = new Array();
	__s["CleaningHomeCare"].push("Insect Repellent");
	__s["CleaningHomeCare"].push("Room Freshners");
	__s["CleaningHomeCare"].push("Toilet Cleaners");
	__s["CleaningHomeCare"].push("Tissue Paper");
	__s["CleaningHomeCare"].push("Wipes");
	
	__c["Cleaning"].push("BodyCare");
	
		__s["CleaningBodyCare"] = new Array();
	__s["CleaningBodyCare"].push("Soaps");
	__s["CleaningBodyCare"].push("Liquid HandWash");
	__s["CleaningBodyCare"].push("Face Wash");
	__s["CleaningBodyCare"].push("Shampo and Conditioners");
	__s["CleaningBodyCare"].push("Wipes");
	
	__c["Cleaning"].push("DentalCare");
	
		__s["CleaningDentalCare"] = new Array();
	__s["CleaningDentalCare"].push("Tooth Paste");
	__s["CleaningDentalCare"].push("Mouth Cleaner");
	__s["CleaningDentalCare"].push("Tooth Brush");
	__s["CleaningDentalCare"].push("Tongue Cleaner");

	
	__m.push("Refrigerator");

	__c["Refrigerator"] = new Array();

	__c["Refrigerator"].push("Cold Drinks");

    	__s["RefrigeratorCold Drinks"] = new Array(); 
	__s["RefrigeratorCold Drinks"].push("Coke");
	__s["RefrigeratorCold Drinks"].push("Pepsi");
	__s["RefrigeratorCold Drinks"].push("Fanta");
	__s["RefrigeratorCold Drinks"].push("Mirinda");
	__s["RefrigeratorCold Drinks"].push("Mountain Dew");
	__s["RefrigeratorCold Drinks"].push("Sprite");
	__s["RefrigeratorCold Drinks"].push("Fruity");
    __s["RefrigeratorCold Drinks"].push("Mineral Water");

	__c["Refrigerator"].push("Juices");

    	__s["RefrigeratorJuices"] = new Array(); 
	__s["RefrigeratorJuices"].push("Real");
	__s["RefrigeratorJuices"].push("Tropicana");
	__s["RefrigeratorJuices"].push("Active");
	__s["RefrigeratorJuices"].push("Ruhafsa");
	
	
	
	
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

