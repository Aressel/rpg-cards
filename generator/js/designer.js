var cardColors = [
	{val : "black", text: "Black"},
    {val : "navy", text: "Navy"},
    {val : "darkblue", text: "Dark Blue"},
    {val : "mediumblue", text: "Medium Blue"},
    {val : "blue", text: "Blue"},
    {val : "darkgreen", text: "Dark Green"},
    {val : "green", text: "Green"},
    {val : "teal", text: "Teal"},
    {val : "darkcyan", text: "Dark Cyan"},
    {val : "deepskyblue", text: "Deep Sky Blue"},
    {val : "darkturquoise", text: "Dark Turquoise"},
    {val : "mediumspringgreen", text: "Medium Spring Green"},
    {val : "lime", text: "Lime"},
    {val : "springgreen", text: "Spring Green"},
    {val : "aqua", text: "Aqua"},
    {val : "cyan", text: "Cyan"},
    {val : "midnightblue", text: "Midnight Blue"},
    {val : "dodgerblue", text: "Dodger Blue"},
    {val : "lightseagreen", text: "Light Sea Green"},
    {val : "forestgreen", text: "Forest Green"},
    {val : "seagreen", text: "Sea Green"},
    {val : "darkslategray", text: "Dark Slate Gray"},
    {val : "limegreen", text: "Lime Green"},
    {val : "mediumseagreen", text: "Medium Sea Green"},
    {val : "turquoise", text: "Turquoise"},
    {val : "royalblue", text: "Royal Blue"},
    {val : "steelblue", text: "Steel Blue"},
    {val : "darkslateblue", text: "Dark Slate Blue"},
    {val : "mediumturquoise", text: "Medium Turquoise"},
    {val : "indigo", text: "Indigo"},
    {val : "darkolivegreen", text: "Dark Olive Green"},
    {val : "cadetblue", text: "Cadet Blue"},
    {val : "cornflowerblue", text: "Cornflower Blue"},
    {val : "mediumaquamarine", text: "Medium Aquamarine"},
    {val : "dimgray", text: "Dim Gray"},
    {val : "slateblue", text: "Slate Blue"},
    {val : "olivedrab", text: "Olive Drab"},
    {val : "slategray", text: "Slate Gray"},
    {val : "lightslategray", text: "Light Slate Gray"},
    {val : "mediumslateblue", text: "Medium Slate Blue"},
    {val : "lawngreen", text: "Lawn Green"},
    {val : "chartreuse", text: "Chartreuse"},
    {val : "aquamarine", text: "Aquamarine"},
    {val : "maroon", text: "Maroon"},
    {val : "purple", text: "Purple"},
    {val : "olive", text: "Olive"},
    {val : "gray", text: "Gray"},
    {val : "skyblue", text: "SkyBlue"},
    {val : "lightskyblue", text: "Light Sky Blue"},
    {val : "blueviolet", text: "Blue Violet"},
    {val : "darkred", text: "Dark Red"},
    {val : "darkmagenta", text: "Dark Magenta"},
    {val : "saddlebrown", text: "Saddle Brown"},
    {val : "darkseagreen", text: "Dark Sea Green"},
    {val : "lightgreen", text: "Light Green"},
    {val : "mediumpurple", text: "Medium Purple"},
    {val : "darkviolet", text: "Dark Violet"},
    {val : "palegreen", text: "Pale Green"},
    {val : "darkorchid", text: "Dark Orchid"},
    {val : "yellowgreen", text: "Yellow Green"},
    {val : "sienna", text: "Sienna"},
    {val : "brown", text: "Brown"},
    {val : "darkgray", text: "Dark Gray"},
    {val : "lightblue", text: "Light Blue"},
    {val : "greenyellow", text: "Green Yellow"},
    {val : "paleturquoise", text: "Pale Turquoise"},
    {val : "lightsteelblue", text: "Light Steel Blue"},
    {val : "powderblue", text: "Powder Blue"},
    {val : "firebrick", text: "Fire Brick"},
    {val : "darkgoldenrod", text: "Dark Goldenrod"},
    {val : "mediumorchid", text: "Medium Orchid"},
    {val : "rosybrown", text: "Rosy Brown"},
    {val : "darkkhaki", text: "Dark Khaki"},
    {val : "silver", text: "Silver"},
    {val : "mediumvioletred", text: "Medium Violet Red"},
    {val : "indianred", text: "Indian Red"},
    {val : "peru", text: "Peru"},
    {val : "chocolate", text: "Chocolate"},
    {val : "tan", text: "Tan"},
    {val : "lightgray", text: "Light Gray"},
    {val : "thistle", text: "Thistle"},
    {val : "orchid", text: "Orchid"},
    {val : "goldenrod", text: "Goldenrod"},
    {val : "palevioletred", text: "Pale Violet Red"},
    {val : "crimson", text: "Crimson"},
    {val : "gainsboro", text: "Gainsboro"},
    {val : "plum", text: "Plum"},
    {val : "burlywood", text: "Burly Wood"},
    {val : "lightcyan", text: "Light Cyan"},
    {val : "lavender", text: "Lavender"},
    {val : "darksalmon", text: "Dark Salmon"},
    {val : "violet", text: "Violet"},
    {val : "palegoldenrod", text: "Pale Goldenrod"},
    {val : "lightcoral", text: "Light Coral"},
    {val : "khaki", text: "Khaki"},
    {val : "aliceblue", text: "Alice Blue"},
    {val : "honeydew", text: "Honeydew"},
    {val : "azure", text: "Azure"},
    {val : "sandybrown", text: "Sandy Brown"},
    {val : "wheat", text: "Wheat"},
    {val : "beige", text: "Beige"},
    {val : "whitesmoke", text: "White Smoke"},
    {val : "mintcream", text: "Mint Cream"},
    {val : "ghostwhite", text: "Ghost White"},
    {val : "salmon", text: "Salmon"},
    {val : "antiquewhite", text: "Antique White"},
    {val : "linen", text: "Linen"},
    {val : "lightgoldenrodyellow", text: "Light Goldenrod Yellow"},
    {val : "oldlace", text: "Old Lace"},
    {val : "red", text: "Red"},
    {val : "fuchsia", text: "Fuchsia"},
    {val : "magenta", text: "Magenta"},
    {val : "deeppink", text: "Deep Pink"},
    {val : "orangered", text: "Orange Red"},
    {val : "tomato", text: "Tomato"},
    {val : "hotpink", text: "Hot Pink"},
    {val : "coral", text: "Coral"},
    {val : "darkorange", text: "Dark Orange"},
    {val : "lightsalmon", text: "Light Salmon"},
    {val : "orange", text: "Orange"},
    {val : "lightpink", text: "LightPink"},
    {val : "pink", text: "Pink"},
    {val : "gold", text: "Gold"},
    {val : "peachpuff", text: "Peach Puff"},
    {val : "navajowhite", text: "Navajo White"},
    {val : "moccasin", text: "Moccasin"},
    {val : "bisque", text: "Bisque"},
    {val : "mistyrose", text: "Misty Rose"},
    {val : "blanchedalmond", text: "Blanched Almond"},
    {val : "papayawhip", text: "Papaya Whip"},
    {val : "lavenderblush", text: "Lavender Blush"},
    {val : "seashell", text: "Seashell"},
    {val : "cornsilk", text: "Cornsilk"},
    {val : "lemonchiffon", text: "Lemon Chiffon"},
    {val : "floralwhite", text: "Floral White"},
    {val : "snow", text: "Snow"},
    {val : "yellow", text: "Yellow"},
    {val : "lightyellow", text: "Light Yellow"},
    {val : "ivory", text: "Ivory"},
    {val : "white", text: "White"}
];

var cardIcons = [
	{val : "disabled", text: "--- Weapons ---"},
	{val : "custom-wand", text: "Wand", icon: "img/crystal-wand.png"},
	{val : "custom-swords", text: "Sword", icon: "img/crossed-swords.png"},
	{val : "custom-arrows", text: "Arrow", icon: "img/target-arrows.png"},
	{val : "custom-swordarrow", text: "Sword + Arrow", icon: "img/mixed-swords.png"},
	{val : "disabled", text: "--- Armor ---"},
	{val : "custom-armor-light", text: "Light Armor", icon: "img/leather-vest.png"},
	{val : "custom-armor-medium", text: "Medium Armor", icon: "img/lamellar.png"},
	{val : "custom-armor-heavy", text: "Heavy Armor", icon: "img/breastplate.png"},
	{val : "custom-shield", text: "Shield", icon: "img/round-shield.png"},
	{val : "disabled", text: "--- Equipment ---"},
	{val : "custom-potion", text: "Potion", icon: "img/drink-me.png"},
	{val : "custom-light", text: "Light", icon: "img/candle-flame.png"},
	{val : "custom-flask", text: "Flask", icon: "img/fizzing-flask.png"},
	{val : "custom-vial", text: "Vial", icon: "img/chemical-drop.png"},
	{val : "custom-poison", text: "Poison", icon: "img/poison-bottle.png"},
	{val : "custom-trap", text: "Trap", icon: "img/wolf-trap.png"},
	{val : "custom-item", text: "Item", icon: "img/knapsack.png"},
	{val : "disabled", text: "--- Spells ---"},
	{val : "custom-spell", text: "Blank Spell", icon: "img/white-book.png"},
	{val : "custom-spell-0", text: "Level 0 Spell", icon: "img/white-book-0.png"},
	{val : "custom-spell-1", text: "Level 1 Spell", icon: "img/white-book-1.png"},
	{val : "custom-spell-2", text: "Level 2 Spell", icon: "img/white-book-2.png"},
	{val : "custom-spell-3", text: "Level 3 Spell", icon: "img/white-book-3.png"},
	{val : "custom-spell-4", text: "Level 4 Spell", icon: "img/white-book-4.png"},
	{val : "custom-spell-5", text: "Level 5 Spell", icon: "img/white-book-5.png"},
	{val : "custom-spell-6", text: "Level 6 Spell", icon: "img/white-book-6.png"},
	{val : "custom-spell-7", text: "Level 7 Spell", icon: "img/white-book-7.png"},
	{val : "custom-spell-8", text: "Level 8 Spell", icon: "img/white-book-8.png"},
	{val : "custom-spell-9", text: "Level 9 Spell", icon: "img/white-book-9.png"},
	{val : "custom-spell-holy", text: "Holy Spell", icon: "img/white-book-cd.png"},
	{val : "custom-spell-runes", text: "Runes Spell", icon: "img/book-cover.png"},
	{val : "disabled", text: "--- Classes ---"},
	{val : "custom-class-arcane", text: "Arcane Spellcaster", icon: "img/robe.png"},
	{val : "custom-class-cleric", text: "Cleric", icon: "img/holy-symbol.png"},
	{val : "custom-class-rogue", text: "Rogue", icon: "img/cloak-dagger.png"},
];

var activeCard = {
	"count": 1,
	"color": "Maroon",
	"title": "Burning Hands",
	"icon": "custom-spell-1",
	"icon_back": "custom-class-arcane",
	"contents": [
		"subtitle | 1st level evocation",
		"rule",
		"property | Casting time | 1 action",
		"property | Range | Self (15ft cone)",
		"property | Components | V,S",
		"rule",
		"fill | 2",
		"text | Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes <b>3d6 fire damage</b> on a failed save, or half as much damage on a successful one.",
		"text | The fire ignites any flammable objects in the area that aren’t being worn or carried.",
		"fill | 3",
		"section | At higher levels",
		"text | +1d6 damage for each slot above 1st"
	]
};

var previewCard = {};

function refreshPreview(card)
{
	var container = document.getElementById("front");
	card_insert_front_into(card, container);

	container = document.getElementById("back");
	card_insert_back_into(card, container);
}

$(function() {
	$('#cardtitle').on('input', function() {
    	activeCard.title = $('#cardtitle').val(); 
		refreshPreview(activeCard);
	});
	
	$.widget( "custom.iconselectmenu", $.ui.selectmenu, {
		_renderItem: function( ul, item ) {
			var li = $( "<li>", { text: item.label } );
			
			if ( item.disabled || item.value === "disabled") {
				li.addClass( "ui-state-disabled" );
			}
			else
			{
				$( "<span>", {
					style: item.element.attr( "data-style" ),
					"class": "ui-icon"
				}).appendTo( li );
			}
		
			return li.appendTo( ul );
		}
	});

	$(cardColors).each(function() {
		$( "#backgroundcolor" ).append($("<option>").attr('value',this.val).attr('data-style', 'background-color: ' + this.val + '; background-image: none !important;').text(this.text));
	});
	
	$( "#backgroundcolor" ).iconselectmenu({
		open: function( event, data ) {
			previewCard = jQuery.extend(true, {}, activeCard);
			$( "#backgroundcolor-menu" ).css("height", "200px");
		},
		focus: function( event, data ) {
			previewCard.color = data.item.value.toLowerCase(); 
			refreshPreview(previewCard);
		},
		change: function( event, data ) {
			activeCard.color = data.item.value.toLowerCase(); 
			refreshPreview(activeCard);
		},
		close: function( event, data ) {
			refreshPreview(activeCard);
		}
	});
	
	$(cardIcons).each(function() {
		$( "#fronticon" ).append($("<option>").attr('value',this.val).attr('data-style', 'background: dimgrey url("' + this.icon + '") no-repeat 0 0; background-size: 100% 100%;').text(this.text));
		$( "#backicon" ).append($("<option>").attr('value',this.val).attr('data-style', 'background: dimgrey url("' + this.icon + '") no-repeat 0 0; background-size: 100% 100%;').text(this.text));
	});
	
	$( "#fronticon" ).iconselectmenu({
		open: function( event, data ) {
			previewCard = jQuery.extend(true, {}, activeCard);
			$( "#fronticon-menu" ).css("height", "200px");
		},
		focus: function( event, data ) {
			previewCard.icon = data.item.value.toLowerCase(); 
			refreshPreview(previewCard);
		},
		change: function( event, data ) {
			activeCard.icon = data.item.value.toLowerCase(); 
			refreshPreview(activeCard);
		},
		close: function( event, data ) {
			refreshPreview(activeCard);
		}
	});
	
	$( "#backicon" ).iconselectmenu({
		open: function( event, data ) {
			previewCard = jQuery.extend(true, {}, activeCard);
			$( "#backicon-menu" ).css("height", "200px");
		},
		focus: function( event, data ) {
			previewCard.icon_back = data.item.value.toLowerCase(); 
			refreshPreview(previewCard);
		},
		change: function( event, data ) {
			activeCard.icon_back = data.item.value.toLowerCase(); 
			refreshPreview(activeCard);
		},
		close: function( event, data ) {
			refreshPreview(activeCard);
		}
	});
	
	$( "#cardtitle" ).val(activeCard.title);
	$( "#backgroundcolor" ).val(activeCard.color.toLowerCase());
	$( "#backgroundcolor" ).iconselectmenu("refresh");
	$( "#fronticon" ).val(activeCard.icon.toLowerCase());
	$( "#fronticon" ).iconselectmenu("refresh");
	if (activeCard.icon_back)
	{
		$( "#backicon" ).val(activeCard.icon_back.toLowerCase());
		$( "#backicon" ).iconselectmenu("refresh");
	}
	else
	{
		$( "#backicon" ).val(activeCard.icon.toLowerCase());
		$( "#backicon" ).iconselectmenu("refresh");
	}
});

refreshPreview(activeCard);