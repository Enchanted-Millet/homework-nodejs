var list = readHugeList();

var nextListItem = function () {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
        // setTimeout(nextListItem, 0);
    }
};
