var cardColors = [
	{val : "Black", text: "Black"},
    {val : "Navy", text: "Navy"},
    {val : "DarkBlue", text: "Dark Blue"},
    {val : "MediumBlue", text: "Medium Blue"},
    {val : "Blue", text: "Blue"},
    {val : "DarkGreen", text: "Dark Green"},
    {val : "Green", text: "Green"},
    {val : "Teal", text: "Teal"},
    {val : "DarkCyan", text: "Dark Cyan"},
    {val : "DeepSkyBlue", text: "Deep Sky Blue"},
    {val : "DarkTurquoise", text: "Dark Turquoise"},
    {val : "MediumSpringGreen", text: "Medium Spring Green"},
    {val : "Lime", text: "Lime"},
    {val : "SpringGreen", text: "Spring Green"},
    {val : "Aqua", text: "Aqua"},
    {val : "Cyan", text: "Cyan"},
    {val : "MidnightBlue", text: "Midnight Blue"},
    {val : "DodgerBlue", text: "Dodger Blue"},
    {val : "LightSeaGreen", text: "Light Sea Green"},
    {val : "ForestGreen", text: "Forest Green"},
    {val : "SeaGreen", text: "Sea Green"},
    {val : "DarkSlateGray", text: "Dark Slate Gray"},
    {val : "LimeGreen", text: "Lime Green"},
    {val : "MediumSeaGreen", text: "Medium Sea Green"},
    {val : "Turquoise", text: "Turquoise"},
    {val : "RoyalBlue", text: "Royal Blue"},
    {val : "SteelBlue", text: "Steel Blue"},
    {val : "DarkSlateBlue", text: "Dark Slate Blue"},
    {val : "MediumTurquoise", text: "Medium Turquoise"},
    {val : "Indigo", text: "Indigo"},
    {val : "DarkOliveGreen", text: "Dark Olive Green"},
    {val : "CadetBlue", text: "Cadet Blue"},
    {val : "CornflowerBlue", text: "Cornflower Blue"},
    {val : "MediumAquaMarine", text: "Medium Aquamarine"},
    {val : "DimGray", text: "Dim Gray"},
    {val : "SlateBlue", text: "Slate Blue"},
    {val : "OliveDrab", text: "Olive Drab"},
    {val : "SlateGray", text: "Slate Gray"},
    {val : "LightSlateGray", text: "Light Slate Gray"},
    {val : "MediumSlateBlue", text: "Medium Slate Blue"},
    {val : "LawnGreen", text: "Lawn Green"},
    {val : "Chartreuse", text: "Chartreuse"},
    {val : "Aquamarine", text: "Aquamarine"},
    {val : "Maroon", text: "Maroon"},
    {val : "Purple", text: "Purple"},
    {val : "Olive", text: "Olive"},
    {val : "Gray", text: "Gray"},
    {val : "SkyBlue", text: "SkyBlue"},
    {val : "LightSkyBlue", text: "Light Sky Blue"},
    {val : "BlueViolet", text: "Blue Violet"},
    {val : "DarkRed", text: "Dark Red"},
    {val : "DarkMagenta", text: "Dark Magenta"},
    {val : "SaddleBrown", text: "Saddle Brown"},
    {val : "DarkSeaGreen", text: "Dark Sea Green"},
    {val : "LightGreen", text: "Light Green"},
    {val : "MediumPurple", text: "Medium Purple"},
    {val : "DarkViolet", text: "Dark Violet"},
    {val : "PaleGreen", text: "Pale Green"},
    {val : "DarkOrchid", text: "Dark Orchid"},
    {val : "YellowGreen", text: "Yellow Green"},
    {val : "Sienna", text: "Sienna"},
    {val : "Brown", text: "Brown"},
    {val : "DarkGray", text: "Dark Gray"},
    {val : "LightBlue", text: "Light Blue"},
    {val : "GreenYellow", text: "Green Yellow"},
    {val : "PaleTurquoise", text: "Pale Turquoise"},
    {val : "LightSteelBlue", text: "Light Steel Blue"},
    {val : "PowderBlue", text: "Powder Blue"},
    {val : "FireBrick", text: "Fire Brick"},
    {val : "DarkGoldenRod", text: "Dark Goldenrod"},
    {val : "MediumOrchid", text: "Medium Orchid"},
    {val : "RosyBrown", text: "Rosy Brown"},
    {val : "DarkKhaki", text: "Dark Khaki"},
    {val : "Silver", text: "Silver"},
    {val : "MediumVioletRed", text: "Medium Violet Red"},
    {val : "IndianRed", text: "Indian Red"},
    {val : "Peru", text: "Peru"},
    {val : "Chocolate", text: "Chocolate"},
    {val : "Tan", text: "Tan"},
    {val : "LightGray", text: "Light Gray"},
    {val : "Thistle", text: "Thistle"},
    {val : "Orchid", text: "Orchid"},
    {val : "GoldenRod", text: "Goldenrod"},
    {val : "PaleVioletRed", text: "Pale Violet Red"},
    {val : "Crimson", text: "Crimson"},
    {val : "Gainsboro", text: "Gainsboro"},
    {val : "Plum", text: "Plum"},
    {val : "BurlyWood", text: "Burly Wood"},
    {val : "LightCyan", text: "Light Cyan"},
    {val : "Lavender", text: "Lavender"},
    {val : "DarkSalmon", text: "Dark Salmon"},
    {val : "Violet", text: "Violet"},
    {val : "PaleGoldenRod", text: "Pale Goldenrod"},
    {val : "LightCoral", text: "Light Coral"},
    {val : "Khaki", text: "Khaki"},
    {val : "AliceBlue", text: "Alice Blue"},
    {val : "HoneyDew", text: "Honeydew"},
    {val : "Azure", text: "Azure"},
    {val : "SandyBrown", text: "Sandy Brown"},
    {val : "Wheat", text: "Wheat"},
    {val : "Beige", text: "Beige"},
    {val : "WhiteSmoke", text: "White Smoke"},
    {val : "MintCream", text: "Mint Cream"},
    {val : "GhostWhite", text: "Ghost White"},
    {val : "Salmon", text: "Salmon"},
    {val : "AntiqueWhite", text: "Antique White"},
    {val : "Linen", text: "Linen"},
    {val : "LightGoldenRodYellow", text: "Light Goldenrod Yellow"},
    {val : "OldLace", text: "Old Lace"},
    {val : "Red", text: "Red"},
    {val : "Fuchsia", text: "Fuchsia"},
    {val : "Magenta", text: "Magenta"},
    {val : "DeepPink", text: "Deep Pink"},
    {val : "OrangeRed", text: "Orange Red"},
    {val : "Tomato", text: "Tomato"},
    {val : "HotPink", text: "Hot Pink"},
    {val : "Coral", text: "Coral"},
    {val : "DarkOrange", text: "Dark Orange"},
    {val : "LightSalmon", text: "Light Salmon"},
    {val : "Orange", text: "Orange"},
    {val : "LightPink", text: "LightPink"},
    {val : "Pink", text: "Pink"},
    {val : "Gold", text: "Gold"},
    {val : "PeachPuff", text: "Peach Puff"},
    {val : "NavajoWhite", text: "Navajo White"},
    {val : "Moccasin", text: "Moccasin"},
    {val : "Bisque", text: "Bisque"},
    {val : "MistyRose", text: "Misty Rose"},
    {val : "BlanchedAlmond", text: "Blanched Almond"},
    {val : "PapayaWhip", text: "Papaya Whip"},
    {val : "LavenderBlush", text: "Lavender Blush"},
    {val : "SeaShell", text: "Seashell"},
    {val : "Cornsilk", text: "Cornsilk"},
    {val : "LemonChiffon", text: "Lemon Chiffon"},
    {val : "FloralWhite", text: "Floral White"},
    {val : "Snow", text: "Snow"},
    {val : "Yellow", text: "Yellow"},
    {val : "LightYellow", text: "Light Yellow"},
    {val : "Ivory", text: "Ivory"},
    {val : "White", text: "White"}
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
	$.widget( "custom.iconselectmenu", $.ui.selectmenu, {
		_renderItem: function( ul, item ) {
			var li = $( "<li>", { text: item.label } );
		
			if ( item.disabled ) {
				li.addClass( "ui-state-disabled" );
			}
		
			$( "<span>", {
				style: item.element.attr( "data-style" ),
				"class": "ui-icon"
			}).appendTo( li );
		
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
			previewCard.color = data.item.value;
			refreshPreview(previewCard);
		},
		change: function( event, data ) {
			activeCard.color = data.item.value;
			refreshPreview(activeCard);
		},
		close: function( event, data ) {
			refreshPreview(activeCard);
		}
	});
	
	$( "#backgroundcolor" ).val(activeCard.color);
	$( "#backgroundcolor" ).iconselectmenu("refresh");
});

refreshPreview(activeCard);