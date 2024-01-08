// ==UserScript==
// @name        Edit Column Content
// @namespace   Edit Column Content
// @match       https://moodle.bbbaden.ch/*
// @icon        https://github.com/MyDrift-user/EditColumnContent/raw/main/column-logo.svg
// @downloadURL https://github.com/MyDrift-user/EditColumnContent/raw/main/edit-column-content.user.js
// @updateURL   https://github.com/MyDrift-user/EditColumnContent/raw/main/edit-column-content.user.js
// @grant       none
// @version     1.0.3
// @author      MyDrift (https://github.com/MyDrift-user/)
// @description edit the content of the columns
// ==/UserScript==

// TODO: allow to block specific elements

(function() {
    'use strict';

    function deleteChildElements(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    var elementClassMapping = {
        links: 'block_html',
        course_list: 'block_course_list',
        calendar_month: 'block_calendar_month'
    };

    var removeList = {
        links: true,
        course_list: true,
        calendar_month: true
    };

    for (var elementKey in elementClassMapping) {
        if (removeList[elementKey]) {
            // If the element should be removed, proceed
            var elementClass = elementClassMapping[elementKey];
            var elements = document.querySelectorAll('.' + elementClass);

            elements.forEach(function(element) {
                deleteChildElements(element);
                element.parentNode.removeChild(element); // Remove the element
            });
        }
    }
})();

