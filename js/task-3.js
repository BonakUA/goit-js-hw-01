function getElementWidth(content, padding, border) {
    const a = Number.parseFloat(content);
    const b = Number.parseFloat(padding);
    const c = Number.parseFloat(border);
    return a + (b * 2) + (c * 2);
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");