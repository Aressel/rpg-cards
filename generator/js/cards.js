// ============================================================================
// Card definition related functions
// ============================================================================
function card_default_options() {
    return {
        default_color: "black",
        default_icon: "ace",
        default_title_size: "normal",
        page_size: "US-Letter",
        page_rows: 3,
        page_columns: 3,
        icon_inline: true
    }
}

// ============================================================================
// Card definition related functions
// ============================================================================

function card_data_color_front(card_data, options) {
    return card_data.color_front || card_data.color || options.default_color || "black";
}

function card_data_color_back(card_data, options) {
    return card_data.color_back || card_data.color || options.default_color || "black";
}

function card_data_icon_front(card_data, options) {
    return card_data.icon_front || card_data.icon || options.default_icon || "ace";
}

function card_data_icon_back(card_data, options) {
    return card_data.icon_back || card_data.icon || options.default_icon || "ace";
}

function card_data_split_params(value) {
    return value.split("|").map(function (str) { return str.trim(); });
}

// ============================================================================
// Card element generating functions
// ============================================================================

function card_element_title(card_data, options) {
    var title = card_data.title || "";
    var title_size = card_data.title_size || options.default_title_size || 'normal';
    return '<div class="title title-' + title_size + '">' + title + '</div>';
}

function card_element_icon(card_data, options) {
    var icon = card_data_icon_front(card_data, options);
    var classname = "icon";
    if (options.icon_inline) {
        classname = "inlineicon";
    }

    var result = "";
    result += '<div class="title-'+classname+'-container">';
    result += '    <div class="title-' + classname + ' icon-' + icon + '">';
    result += '    </div>';
    result += '</div>';
    return result;
}

function card_element_subtitle(params, card_data, options) {
    var subtitle = params[0] || "";
    return '<div class="subtitle">' + subtitle + '</div>';
}

function card_element_ruler(params, card_data, options) {
    var color = card_data_color_front(card_data, options);
    var fill = 'fill="' + color + '"';
    var stroke = 'stroke="' + color + '"';

    var result = "";
    result += '<svg class="ruler" height="1" width="100" viewbox="0 0 100 1" preserveaspectratio="none" xmlns="http://www.w3.org/2000/svg">';
    result += '    <polyline points="0,0 100,0.5 0,1" ' + fill + '></polyline>';
    result += '</svg>';
    return result;
}

function card_element_property(params, card_data, options) {
    var result = "";
    result += '<div class="property-line">';
    result += '   <h4 class="property-name">' + params[0] + '</h4>';
    result += '   <p class="property-text">' + params[1] + '</p>';
    result += '</div>';
    return result;
}

function card_element_description(params, card_data, options) {
    var result = "";
    result += '<div class="description-line">';
    result += '   <h4 class="description-name">' + params[0] + '</h4>';
    result += '   <p class="description-text">' + params[1] + '</p>';
    result += '</div>';
    return result;
}

function card_element_text(params, card_data, options) {
    var result = "";
    result += '<div class="description-line">';
    result += '   <p class="description-text">' + params[0] + '</p>';
    result += '</div>';
    return result;
}

function card_element_section(params, card_data, options) {
    var color = card_data_color_front(card_data, options);
    var section = params[0] || "";
    return '<h3 style="color:' + color + '">' + section + '</h3>';
}

function card_element_fill(params, card_data, options) {
    var flex = params[0] || "1";
    return '<div class="fill" style="flex:' + flex + '"></div>';
}

function card_element_unknown(params, card_data, options) {
    return '<div>Unknown element: ' + params.join('<br />') + '</div>';
}

var card_element_generators = {
    subtitle: card_element_subtitle,
    property: card_element_property,
    rule: card_element_ruler,
    description: card_element_description,
    text: card_element_text,
    fill: card_element_fill,
    section: card_element_section
};

// ============================================================================
// Card generating functions
// ============================================================================

function card_generate_contents(contents, card_data, options) {
    var result = "";
    result += '<div class="content-container">';
    result += contents.map(function (value) {
        var parts = card_data_split_params(value);
        var element_name = parts[0];
        var element_params = parts.splice(1);
        var element_generator = card_element_generators[element_name];
        if (element_generator) {
            return element_generator(element_params, card_data, options);
        } else {
            return card_element_unknown(element_params, card_data, options);
        }
    }).join("\n");
    result += '</div>';
    return result;
}

function card_repeat(card, count) {
    var result = [];
    for (var i = 0; i < count; ++i) {
        result.push(card);
    }
    return result;
}

function card_generate_color_style(color, options) {
    return 'style="color:' + color + '; border-color:' + color + '; background-color:' + color + '"';
}

function card_generate_color_gradient_style(color, options) {
    return 'style="background: radial-gradient(ellipse at center, white 20%, ' + color + ' 120%)"';
}

function card_generate_front(data, options) {
    var color = card_data_color_front(data, options);
    var style_color = card_generate_color_style(color, options);
    var count = data.count || 1;

    var result = "";
    result += '<div class="card card-' + options.page_size + '" ' + style_color + '>';
    result += card_element_icon(data, options);
    result += card_element_title(data, options);
    result += card_generate_contents(data.contents, data, options);
    result += '</div>';

    return card_repeat(result, count);
}

function card_generate_back(data, options) {
    var color = card_data_color_back(data, options)
    var style_color = card_generate_color_style(color, options);
    var style_gradient = card_generate_color_gradient_style(color, options);
    var icon = card_data_icon_back(data, options);
    var count = data.count || 1;

    var result = "";
    result += '<div class="card card-' + options.page_size + '" ' + style_color + '>';
    result += '  <div class="card-back" ' + style_gradient + '>';
    result += '    <div class="card-back-inner">';
    result += '      <div class="back-icon icon-' + icon + '" ' + style_color + '></div>';
    result += '    </div>';
    result += '  </div>';
    result += '</div>';

    return card_repeat(result, count);
}

function card_generate_empty(count, options) {
    var style_color = card_generate_color_style("white");

    var result = "";
    result += '<div class="card card-' + options.page_size + '" ' + style_color + '>';
    result += '</div>';

    return card_repeat(result, count);
}

// ============================================================================
// Functions that generate pages of cards
// ============================================================================

function card_pages_split(data, rows, cols) {
    var cards_per_page = rows * cols;
    var result = [];
    for (var i = 0; i < data.length; i += cards_per_page) {
        var page = data.slice(i, i + cards_per_page);
        result.push(page);
    }
    return result;
}

function card_pages_merge(front_pages, back_pages) {
    var result = [];
    for (var i = 0; i < front_pages.length; ++i) {
        result.push(front_pages[i]);
        result.push(back_pages[i]);
    }
    return result;
}

function cards_pages_flip_left_right(cards, rows, cols) {
    var result = [];
    for (var r = 0; r < rows; ++r) {
        for (var c = 0; c < cols; ++c) {
            var i = r*cols + (cols-1-c);
            result.push(cards[i]);
        }
    }
    return result;
}

function card_pages_add_padding(cards, rows, cols, options) {
    var cards_per_page = rows * cols;
    var last_page_cards = cards.length % cards_per_page;
    if (last_page_cards !== 0) {
        return cards.concat(card_generate_empty(cards_per_page - last_page_cards, options));
    } else {
        return cards;
    }
}

function card_pages_wrap(pages, options) {
    var size = options.page_size || "A4";

    var result = "";
    for (var i = 0; i < pages.length; ++i) {
        result += '<page size="' + size + '">\n';
        result += pages[i].join("\n");
        result += '</page>\n';
    }
    return result;
}

function card_pages_generate_html(card_data, options) {
    options = options || card_default_options();
    var rows = options.page_rows || 3;
    var cols = options.page_columns || 3;

    // Generate the HTML for each card
    var front_cards = [];
    var back_cards = [];
    card_data.forEach(function (data) {
        front_cards = front_cards.concat(card_generate_front(data, options));
        back_cards = back_cards.concat(card_generate_back(data, options));
    });

    // Add padding cards so that the last page is full of cards
    front_cards = card_pages_add_padding(front_cards, rows, cols, options);
    back_cards = card_pages_add_padding(back_cards, rows, cols, options);

    // Split cards to pages
    var front_pages = card_pages_split(front_cards, rows, cols);
    var back_pages = card_pages_split(back_cards, rows, cols);

    // Shuffle back cards so that they line up with their corresponding front cards
    back_pages = back_pages.map(function (page) {
        return cards_pages_flip_left_right(page, rows, cols);
    });

    // Interleave front and back pages so that we can print double-sided
    var pages = card_pages_merge(front_pages, back_pages);

    // Wrap all pages in a <page> element
    return card_pages_wrap(pages, options);
}

function card_pages_insert_into(card_data, container) {

    // Clear the previous content of the document
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    // Insert the HTML
    var html = card_pages_generate_html(card_data);
    container.innerHTML = html;
}

function card_insert_front_into(card_data, container, options) {
	options = options || card_default_options();
    
    // Clear the previous content of the document
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    // Insert the HTML
    var html = card_generate_front(card_data, options);
    container.innerHTML = html;
}

function card_insert_back_into(card_data, container, options) {
	options = options || card_default_options();
	
    // Clear the previous content of the document
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    // Insert the HTML
    var html = card_generate_back(card_data, options);
    container.innerHTML = html;
}
