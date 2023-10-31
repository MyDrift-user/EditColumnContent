// ==UserScript==
// @name        Edit Column Content
// @namespace   Edit Column Content
// @match       https://moodle.bbbaden.ch/*
// @grant       none
// @version     1.0
// @author      -
// @description 30.10.2023, 12:57:39
// ==/UserScript==

// To Create an additional item to be edited, you need to add:
// -  a row "shouldRemoveX" in "var elementMapping" with the data-block and "var removalStatus" with true/false 
// - On the Bottom add a "removeElementX" 

(function() {
    'use strict';

    // Create a mapping of boolean names to data-block values
    var elementMappings = {
        shouldAdministration: 'settings',
        shouldRemoveKursabschnitte: 'section_links',
        shouldRemoveAnkuendigungen: 'news_items',
        shouldRemoveKalender: 'calendar_upcoming',
        shouldRemoveAktivitaeten: 'recent_activity',
        shouldRemoveRSScontent: 'rss_client'
    };

    // Create an object to store the removal status for each element by their boolean names
    var removalStatus = {
        shouldAdministration: true,
        shouldRemoveKursabschnitte: false,
        shouldRemoveAnkuendigungen: true,
        shouldRemoveKalender: true,
        shouldRemoveAktivitaeten: true,
        shouldRemoveRSScontent: false
    };

    // Function to remove an element if its removal status is true
    function removeElement(booleanName) {
        var dataBlockValue = elementMappings[booleanName];
        var elements = document.querySelectorAll('[data-block="' + dataBlockValue + '"]');
        if (removalStatus[booleanName]) {
            elements.forEach(function(element) {
                element.remove();
            });
        }
    }

    // Call removeElement for each boolean name as needed
    removeElement('shouldAdministration');
    removeElement('shouldRemoveKursabschnitte');
    removeElement('shouldRemoveAnkuendigungen');
    removeElement('shouldRemoveKalender');
    removeElement('shouldRemoveAktivitaeten');
    removeElement('shouldRemoveRSScontent');
})();
