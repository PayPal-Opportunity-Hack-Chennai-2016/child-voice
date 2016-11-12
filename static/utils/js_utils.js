var UtilsModule;
(function (UtilsModule) {
    var js_util = (function () {
        function js_util() {
        }
        js_util.getName = function (obj) {
            var funcNameRegex = /function (.{1,})\(/;
            var results = (funcNameRegex).exec((obj).constructor.toString());
            return (results && results.length > 1) ? results[1] : "";
        };
        ;
        js_util.genUuid = function () {
            return (+new Date).toString() + Math.floor((Math.random() * 10) + 1);
        };
        ;
        js_util.print = function (obj) {
            console.log(JSON.stringify(obj, null, 2));
        };
        ;
        js_util.copyTextToClipboard = function (text) {
            var textArea = document.createElement("textarea");
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            textArea.style.width = '2em';
            textArea.style.height = '2em';
            textArea.style.padding = '0';
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';
            textArea.style.background = 'transparent';
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            }
            catch (err) {
                console.log('Oops, unable to copy');
            }
            document.body.removeChild(textArea);
        };
        return js_util;
    }());
    UtilsModule.js_util = js_util;
    var jsonfactory = (function () {
        function jsonfactory() {
        }
        jsonfactory.getRow = function (list, property, value) {
            if (property.constructor == Array) {
                for (var i = 0; i < list.length; i++) {
                    var row = list[i];
                    for (var j = 0; j < property.length; j++) {
                        if (row[property[j]] != value[j]) {
                            break;
                        }
                        if (j == property.length - 1) {
                            return row;
                        }
                    }
                }
                return null;
            }
            else {
                for (var i = 0; i < list.length; i++) {
                    if (list[i][property] == value) {
                        return list[i];
                    }
                }
                return null;
            }
        };
        ;
        jsonfactory.getRowIndexByField = function (list, property, value) {
            for (var i = 0; i < list.length; i++) {
                if (list[i][property] == value) {
                    return i;
                }
            }
            return -1;
        };
        ;
        jsonfactory.insertAtIndex = function (list, index, item) {
            list.splice(index, 0, item);
        };
        ;
        jsonfactory.removeAtIndex = function (list, index) {
            list.splice(index, 1);
        };
        ;
        jsonfactory.setColumnValue = function (list, columnNames, columnValues, prop, value) {
            for (var i = 0; i < list.length; i++) {
                var row = list[i];
                for (var j = 0; j < columnNames.length; j++) {
                    if (row[columnNames[j]] != columnValues[j]) {
                        break;
                    }
                    if (j == columnNames.length - 1) {
                        row[prop] = value;
                        return;
                    }
                }
            }
        };
        ;
        jsonfactory.getRows = function (list, property, value) {
            var retList = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i][property] == value) {
                    retList.push(list[i]);
                }
            }
            return retList;
        };
        jsonfactory.swapListElements = function (list, targetPosition, destPosition) {
            if (targetPosition > destPosition) {
                var temp = list[destPosition];
                list[destPosition] = list[targetPosition];
                list.splice(targetPosition, 1);
                list.splice(destPosition + 1, 0, temp);
            }
            if (targetPosition < destPosition) {
                var temp = list[destPosition];
                list[destPosition] = list[targetPosition];
                list.splice(targetPosition, 1);
                list.splice(destPosition - 1, 0, temp);
            }
        };
        ;
        jsonfactory.getObjFromList = function (list, keyField, valueField) {
            var retObj = {};
            for (var i = 0; i < list.length; i++) {
                retObj[list[i][keyField]] = list[i][valueField];
            }
            return retObj;
        };
        return jsonfactory;
    }());
    UtilsModule.jsonfactory = jsonfactory;
    var window = (function () {
        function window() {
        }
        window.openWindow = function ($mdDialog, template, controller, data) {
            data = data || {};
            return $mdDialog.show({
                controller: controller,
                templateUrl: template,
                locals: { data: data },
                clickOutsideToClose: true,
                fullscreen: false
            });
        };
        ;
        return window;
    }());
    UtilsModule.window = window;
    var processString = (function () {
        function processString() {
        }
        processString.stringEndsWith = function (str, suffix) {
            return str.match(suffix + "$") == suffix;
        };
        processString.countOcurrences = function (str, value) {
            var regExp = new RegExp(value, "gi");
            return (str.match(regExp) || []).length;
        };
        processString.removeLastLinefromString = function (str) {
            var strArray = str.split("\n");
            delete strArray[strArray.length - 1];
            return strArray.join("\n");
        };
        ;
        processString.removeCarriageReturn = function (str) {
            return str.replace(/\r/g, '');
        };
        processString.replaceStrAtPosition = function (str, start, end, strToReplace) {
            return str.substring(0, start) + strToReplace + str.substring(end, str.length);
        };
        return processString;
    }());
    UtilsModule.processString = processString;
    var processDOM = (function () {
        function processDOM() {
        }
        //requires JQuery library
        processDOM.removeSelectorsInsideElement = function (element, selector) {
            var elems = $(element).find('.ui-draggable');
            elems.remove();
        };
        processDOM.removeAllElementsWithClassName = function (className) {
            if (!className) {
                console.error('Give proper inputs , classname');
                return;
            }
            var b = document.getElementsByClassName(className);
            if (!b.length) {
                return;
            }
            while (b[0]) {
                b[0].parentNode.removeChild(b[0]);
            }
        };
        return processDOM;
    }());
    UtilsModule.processDOM = processDOM;
})(UtilsModule || (UtilsModule = {}));
//# sourceMappingURL=js_utils.js.map