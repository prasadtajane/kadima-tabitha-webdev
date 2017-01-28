/**
 * Created by tabitha on 1/27/17.
 */
if (!isTouchDevice()) {
    $('[data-toggle*="tooltip"]').tooltip();
}

// utility

function isTouchDevice() {
    return !!('ontouchstart' in window || navigator.msMaxTouchPoints);
}