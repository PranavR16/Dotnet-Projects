(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accommodation/accommodation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/accommodation/accommodation.component.ts ***!
  \**********************************************************/
/*! exports provided: AccommodationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccommodationComponent", function() { return AccommodationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AccommodationComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r139);
} }
function AccommodationComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccommodationComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rating_r140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", rating_r140, "-star");
} }
function AccommodationComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rating is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccommodationComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hotel_r141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r141);
} }
function AccommodationComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hotel is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccommodationComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Room Type is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccommodationComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number of rooms is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AccommodationComponent {
    constructor(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.showDiv = false;
    }
    ngOnInit() {
        this.bookingId = sessionStorage.getItem('bookingId');
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Customer") {
            this.router.navigate(['/login/1']);
        }
        this.getCitiesByBookingId(this.bookingId);
    }
    getCitiesByBookingId(bookingId) {
        this.userService.getCitiesByBookId(bookingId).subscribe(responseCitiesStatus => {
            this.rawcities = responseCitiesStatus;
            this.cities = this.rawcities.split(",");
        }, responseCitiesError => {
            this.errorMsg = responseCitiesError;
        }, () => console.log("GetCity method executed successfully"));
    }
    searchrating(city) {
        this.userService.getHotelRatingByCity(city).subscribe(responseCitiesStatus => {
            this.ratings = responseCitiesStatus;
        }, responseCitiesError => {
            this.errorMsg = responseCitiesError;
        }, () => console.log("HotelRating method executed successfully"));
    }
    searchhotel(rating, city) {
        this.userService.getHotelsByCityAndRating(city, rating).subscribe(responseCitiesStatus => {
            this.hotels = responseCitiesStatus;
        }, responseCitiesError => {
            this.errorMsg = responseCitiesError;
        }, () => console.log("SearchHotel method executed successfully"));
    }
    getCost(hotelName, roomtype) {
        this.userService.getCost(hotelName, roomtype).subscribe(responseCitiesStatus => {
            this.cost = responseCitiesStatus * this.rooms;
            //console.log("Cost:", this.cost * this.rooms);
        }, responseCitiesError => {
            this.errorMsg = responseCitiesError;
        }, () => console.log("Cost method executed successfully"));
    }
    submitaccodForm(form) {
        var accommodation = {
            bookingId: parseInt(form.value.bookingid),
            hotelName: form.value.hotelName,
            city: form.value.city,
            noOfRooms: parseInt(form.value.rooms),
            hotelRating: parseInt(form.value.rating),
            price: parseInt(form.value.estimatedcost),
            roomType: form.value.roomtype
        };
        this.userService.bookAccommodation(accommodation).subscribe(responseAccommodationStatus => {
            this.status = responseAccommodationStatus;
            if (this.status) {
                if (confirm("Accommodation details added successfully.Do you want to continue for payment?")) {
                    this.router.navigate(['/payment']);
                }
                else {
                    this.router.navigate(['/viewbookings']);
                }
            }
            else {
                this.showDiv = true;
                this.msg = "Accommodation details not added.Try Again";
            }
        }, responseAccommodationError => {
            this.errorMsg = responseAccommodationError;
        }, () => console.log("Book Accommodation method executed successfully"));
    }
}
AccommodationComponent.ɵfac = function AccommodationComponent_Factory(t) { return new (t || AccommodationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AccommodationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccommodationComponent, selectors: [["app-accommodation"]], decls: 79, vars: 12, consts: [[1, "content"], [1, "accommodation"], [3, "ngSubmit"], ["accodForm", "ngForm"], [1, "row", "frow"], [1, "col-md-6"], [1, "form-group"], ["for", "bookingid"], ["type", "text", "name", "bookingid", "ngModel", "", "readonly", "", 1, "form-control", "forminputs", 3, "ngModel", "ngModelChange"], ["bookingRef", "ngModel"], ["for", "city"], ["name", "city", "ngModel", "", "required", "", 1, "form-control", "forminputs", 3, "change"], ["cityRef", "ngModel"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], ["for", "rating"], ["name", "rating", "ngModel", "", "required", "", 1, "form-control", "forminputs", 3, "change"], ["ratingRef", "ngModel"], ["for", "hotels"], ["name", "hotelName", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["hotelRef", "ngModel"], ["for", "roomtype"], ["name", "roomtype", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["roomtypeRef", "ngModel"], ["value", "Single"], ["value", "Double"], ["value", "Deluxe"], ["value", "Suite"], ["for", "rooms"], ["type", "number", "name", "rooms", "ngModel", "", "required", "", 1, "form-control", "forminputs", 3, "ngModel", "ngModelChange", "keyup"], ["roomsRef", "ngModel"], [1, "col-12"], ["for", "estimatedcost"], ["type", "text", "name", "estimatedcost", "ngModel", "", "required", "", "readonly", "", 1, "form-control", "forminputs", 3, "ngModel", "ngModelChange"], ["costRef", "ngModel"], ["type", "submit", "id", "formsubmit", 3, "disabled"], [3, "value"], [1, "error-message"]], template: function AccommodationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Accommodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccommodationComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.submitaccodForm(_r123); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Booking ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccommodationComponent_Template_input_ngModelChange_12_listener($event) { return ctx.bookingId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccommodationComponent_Template_select_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.searchrating(_r125.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AccommodationComponent_option_22_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AccommodationComponent_div_23_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Hotel Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccommodationComponent_Template_select_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.searchhotel(_r128.value, _r125.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select hotel rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AccommodationComponent_option_33_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AccommodationComponent_div_34_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Select hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AccommodationComponent_option_43_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AccommodationComponent_div_44_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Room Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Select Room type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Single Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Double Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Deluxe Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AccommodationComponent_div_62_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Number of Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccommodationComponent_Template_input_ngModelChange_67_listener($event) { return ctx.rooms = $event; })("keyup", function AccommodationComponent_Template_input_keyup_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); return ctx.getCost(_r131.value, _r134.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AccommodationComponent_div_69_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Estimated Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccommodationComponent_Template_input_ngModelChange_75_listener($event) { return ctx.cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
        const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r125.errors && (_r125.dirty || _r125.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r128.errors && (_r128.dirty || _r128.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r131.errors && (_r131.dirty || _r131.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r134.errors && (_r134.dirty || _r134.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r136.errors && (_r136.dirty || _r136.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r123.form.valid);
    } }, directives: [_layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_3__["UserLayoutComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.accommodation[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  min-width: 300px;\r\n  background-color: rgba(255, 255, 255, 0.414);\r\n  border-radius: 20px;\r\n  padding: 30px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); \r\n  text-align: center;\r\n  margin: 100px auto 20px auto;\r\n}\r\n\r\n.accommodation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px black;\r\n  margin-bottom: 20px;\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.frow[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-align: left;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.forminputs[_ngcontent-%COMP%]:focus {\r\n  border-color: #007bff;\r\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\r\n  outline: none;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  margin-bottom: 5px;\r\n  display: block;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: red;\r\n  font-size: 0.93rem;\r\n  font-weight: 500;\r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  padding: 10px 20px;\r\n  background-color: yellow;\r\n  box-shadow: 2px 2px 2px #000000;\r\n  font-size: 1.2rem;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, transform 0.2s ease;\r\n}\r\n#formsubmit[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffc107;\r\n  transform: translateY(-2px);\r\n}\r\n#formsubmit[_ngcontent-%COMP%]:disabled {\r\n  background-color: #cccccc;\r\n  cursor: not-allowed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb21tb2RhdGlvbi9hY2NvbW1vZGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix3Q0FBd0MsRUFBRSw0QkFBNEI7RUFDdEUsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5QjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsOENBQThDO0VBQzlDLHdEQUF3RDtBQUMxRDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxhQUFhO0FBQ2Y7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJEQUEyRDtBQUM3RDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FjY29tbW9kYXRpb24vYWNjb21tb2RhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhbCBjb250ZW50IHN0eWxpbmcgKi9cclxuLmNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBBY2NvbW1vZGF0aW9uIGNvbnRhaW5lciBzdHlsaW5nICovXHJcbi5hY2NvbW1vZGF0aW9uIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIFN1YnRsZSBzaGFkb3cgZm9yIGRlcHRoICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTAwcHggYXV0byAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi8qIEZvcm0gdGl0bGUgc3R5bGluZyAqL1xyXG4uYWNjb21tb2RhdGlvbiBoMSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogRm9ybSByb3cgc3R5bGluZyAqL1xyXG4uZnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBGb3JtIGlucHV0IHN0eWxpbmcgKi9cclxuLmZvcm1pbnB1dHMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmZvcm1pbnB1dHM6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuNSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogTGFiZWwgc3R5bGluZyAqL1xyXG5sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogRXJyb3IgbWVzc2FnZSBzdHlsaW5nICovXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAwLjkzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFN1Ym1pdCBidXR0b24gc3R5bGluZyAqL1xyXG4jZm9ybXN1Ym1pdCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbiNmb3Jtc3VibWl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuI2Zvcm1zdWJtaXQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccommodationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accommodation',
                templateUrl: './accommodation.component.html',
                styleUrls: ['./accommodation.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/add-hotel/add-hotel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-hotel/add-hotel.component.ts ***!
  \**************************************************/
/*! exports provided: AddHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHotelComponent", function() { return AddHotelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/employee-layout/employee-layout.component */ "./src/app/layouts/employee-layout/employee-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AddHotelComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hotel Name is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r107.errors.required);
} }
function AddHotelComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hotel Rating is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r109.errors.required);
} }
function AddHotelComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Price is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r111.errors.required);
} }
function AddHotelComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Price is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r113.errors.required);
} }
function AddHotelComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Price is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r115.errors.required);
} }
function AddHotelComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Price is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r117.errors.required);
} }
function AddHotelComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "City is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r119.errors.required);
} }
function AddHotelComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r121.msg, " ");
} }
class AddHotelComponent {
    constructor(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Employee") {
            this.router.navigate(['/login/2']);
        }
    }
    submithotelForm(form) {
        var hotel = {
            hotelName: form.value.hotelname,
            hotelRating: parseInt(form.value.hotelType),
            singleRoomPrice: parseInt(form.value.singleprice),
            doubleRoomPrice: parseInt(form.value.doubleprice),
            deluxeeRoomPrice: parseInt(form.value.deluxeprice),
            suiteRoomPrice: parseInt(form.value.suiteprice),
            city: form.value.city
        };
        console.log(hotel);
        this.userService.addHotel(hotel).subscribe(responseHotelStatus => {
            this.status = responseHotelStatus;
            this.showDiv = true;
            if (this.status) {
                this.msg = "Hotel added successfully";
            }
            else {
                this.msg = "Hotel not added";
            }
        }, responseHotelError => {
            this.errorMsg = responseHotelError;
        }, () => console.log("AddHotel method executed successfully"));
    }
}
AddHotelComponent.ɵfac = function AddHotelComponent_Factory(t) { return new (t || AddHotelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AddHotelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddHotelComponent, selectors: [["app-add-hotel"]], decls: 59, vars: 9, consts: [[1, "content"], [1, "addhotel"], [1, "form-title"], [3, "ngSubmit"], ["hotelForm", "ngForm"], [1, "row", "frow"], [1, "col-md-12"], [1, "form-group"], ["type", "text", "name", "hotelname", "placeholder", "Hotel Name", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["hotelRef", "ngModel"], ["class", "error-message", 4, "ngIf"], ["name", "hotelType", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["hoteltypeRef", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["type", "number", "name", "singleprice", "placeholder", "Single Room Price (in INR)", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["singleRef", "ngModel"], ["type", "number", "name", "doubleprice", "placeholder", "Double Room Price (in INR)", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["doubleRef", "ngModel"], ["type", "number", "name", "suiteprice", "placeholder", "Suite Price (in INR)", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["suiteRef", "ngModel"], ["type", "number", "name", "deluxeprice", "placeholder", "Deluxe Price (in INR)", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["deluxeRef", "ngModel"], ["type", "text", "name", "city", "placeholder", "City Name", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["cityRef", "ngModel"], ["type", "submit", "id", "formsubmit", 3, "disabled"], ["class", "submission-message", 4, "ngIf"], [1, "error-message"], [3, "hidden"], [1, "submission-message"]], template: function AddHotelComponent_Template(rf, ctx) { if (rf & 1) {
        const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-employee-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddHotelComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.submithotelForm(_r106); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddHotelComponent_div_12_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hotel Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddHotelComponent_div_27_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddHotelComponent_div_33_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddHotelComponent_div_38_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddHotelComponent_div_44_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AddHotelComponent_div_49_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AddHotelComponent_div_55_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AddHotelComponent_div_58_Template, 3, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r107.errors && (_r107.dirty || _r107.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r109.errors && (_r109.dirty || _r109.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r111.errors && (_r111.dirty || _r111.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r113.errors && (_r113.dirty || _r113.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r115.errors && (_r115.dirty || _r115.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r117.errors && (_r117.dirty || _r117.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r119.errors && (_r119.dirty || _r119.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r106.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDiv);
    } }, directives: [_layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeLayoutComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.addhotel[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  min-width: 400px;\r\n  background-color: rgba(255, 255, 255, 0.414);\r\n  border-radius: 15px;\r\n  padding: 30px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  -webkit-backdrop-filter: blur(10px);\r\n          backdrop-filter: blur(10px);\r\n}\r\n\r\n.form-title[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px black;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n  background-color: rgba(255, 255, 255, 0.768);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.forminputs[_ngcontent-%COMP%]:focus {\r\n  border-color: #007bff;\r\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\r\n  outline: none;\r\n}\r\n\r\n.frow[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: red;\r\n  font-size: 0.93rem;\r\n  font-weight: 500;\r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 25px;\r\n  padding: 15px 30px;\r\n  background-color: #007bff;\r\n  color: #ffffff;\r\n  font-size: 1.2rem;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, transform 0.2s ease;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\r\n}\r\n#formsubmit[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n  transform: translateY(-2px);\r\n}\r\n#formsubmit[_ngcontent-%COMP%]:disabled {\r\n  background-color: #cccccc;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.submission-message[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWhvdGVsL2FkZC1ob3RlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLDhDQUE4QztFQUM5Qyx3REFBd0Q7QUFDMUQ7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsYUFBYTtBQUNmO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyREFBMkQ7RUFDM0Qsd0NBQXdDO0FBQzFDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ob3RlbC9hZGQtaG90ZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYWwgY29udGVudCBzdHlsaW5nICovXHJcbi5jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLyogRm9ybSBjb250YWluZXIgc3R5bGluZyAqL1xyXG4uYWRkaG90ZWwge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE0KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbn1cclxuXHJcbi8qIEZvcm0gdGl0bGUgc3R5bGluZyAqL1xyXG4uZm9ybS10aXRsZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLyogRm9ybSBpbnB1dCBzdHlsaW5nICovXHJcbi5mb3JtaW5wdXRzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzY4KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZm9ybWlucHV0czpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBGb3JtIHJvdyBzdHlsaW5nICovXHJcbi5mcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi8qIEVycm9yIG1lc3NhZ2Ugc3R5bGluZyAqL1xyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBTdWJtaXQgYnV0dG9uIHN0eWxpbmcgKi9cclxuI2Zvcm1zdWJtaXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuI2Zvcm1zdWJtaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4jZm9ybXN1Ym1pdDpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4vKiBTdWJtaXNzaW9uIG1lc3NhZ2Ugc3R5bGluZyAqL1xyXG4uc3VibWlzc2lvbi1tZXNzYWdlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddHotelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-hotel',
                templateUrl: './add-hotel.component.html',
                styleUrls: ['./add-hotel.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/add-vehicle/add-vehicle.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-vehicle/add-vehicle.component.ts ***!
  \******************************************************/
/*! exports provided: AddVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/employee-layout/employee-layout.component */ "./src/app/layouts/employee-layout/employee-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AddVehicleComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vehicle Name is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r94.errors.required);
} }
function AddVehicleComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vehicle Type is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r96.errors.required);
} }
function AddVehicleComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rate is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r98.errors.required);
} }
function AddVehicleComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rate is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r100.errors.required);
} }
function AddVehicleComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Base Price is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r102.errors.required);
} }
function AddVehicleComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r104.msg, " ");
} }
class AddVehicleComponent {
    constructor(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Employee") {
            this.router.navigate(['/login/2']);
        }
    }
    submitvehicleForm(form) {
        var vehicle = {
            vehicleName: form.value.vehicleName,
            vehicleType: form.value.vehicleType,
            ratePerHour: parseInt(form.value.rateperhr),
            ratePerKm: parseInt(form.value.rateperkm),
            basePrice: parseInt(form.value.basePrice)
        };
        this.userService.addVehicle(vehicle).subscribe(responseHotelStatus => {
            this.status = responseHotelStatus;
            this.showDiv = true;
            if (this.status) {
                this.msg = "Vehicle added successfully";
            }
            else {
                this.msg = "Vehicle not added";
            }
        }, responseHotelError => {
            this.errorMsg = responseHotelError;
        }, () => console.log("AddVehicle method executed successfully"));
    }
}
AddVehicleComponent.ɵfac = function AddVehicleComponent_Factory(t) { return new (t || AddVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AddVehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddVehicleComponent, selectors: [["app-add-vehicle"]], decls: 38, vars: 7, consts: [[1, "content"], [1, "addveh"], [1, "form-title"], [3, "ngSubmit"], ["vehicleForm", "ngForm"], [1, "form-group"], ["type", "text", "name", "vehicleName", "placeholder", "Vehicle Name", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["vehicleRef", "ngModel"], ["class", "error-message", 4, "ngIf"], ["name", "vehicleType", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["vehicletypeRef", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "Two-Wheeler"], ["value", "Four-Wheeler"], ["value", "Mini-Bus"], ["type", "number", "name", "rateperhr", "placeholder", "Rate per hour", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["ratehrRef", "ngModel"], ["type", "number", "name", "rateperkm", "placeholder", "Rate per km", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["ratekmRef", "ngModel"], ["type", "number", "name", "basePrice", "placeholder", "Base Price", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["basePriceRef", "ngModel"], ["type", "submit", "id", "formsubmit", 3, "disabled"], ["class", "submission-message", 4, "ngIf"], [1, "error-message"], [3, "hidden"], [1, "submission-message"]], template: function AddVehicleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-employee-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddVehicleComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.submitvehicleForm(_r93); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddVehicleComponent_div_10_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Vehicle Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Two-Wheeler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Four-Wheeler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mini-Bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddVehicleComponent_div_22_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddVehicleComponent_div_26_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddVehicleComponent_div_30_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddVehicleComponent_div_34_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddVehicleComponent_div_37_Template, 3, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r94.errors && (_r94.dirty || _r94.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r96.errors && (_r96.dirty || _r96.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r98.errors && (_r98.dirty || _r98.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r100.errors && (_r100.dirty || _r100.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r102.errors && (_r102.dirty || _r102.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r93.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDiv);
    } }, directives: [_layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeLayoutComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.addveh[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  min-width: 300px;\r\n  background-color: rgba(255, 255, 255, 0.414);\r\n  border-radius: 20px;\r\n  padding: 30px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); \r\n}\r\n\r\n.form-title[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px black;\r\n  margin-bottom: 20px;\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n  background-color: rgba(255, 255, 255, 0.488);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.forminputs[_ngcontent-%COMP%]:focus {\r\n  border-color: #007bff;\r\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\r\n  outline: none;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: red;\r\n  font-size: 0.93rem;\r\n  font-weight: 500;\r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  padding: 10px 20px;\r\n  background-color: yellow;\r\n  box-shadow: 2px 2px 2px #000000;\r\n  font-size: 1.2rem;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, transform 0.2s ease;\r\n}\r\n#formsubmit[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffc107;\r\n  transform: translateY(-2px);\r\n}\r\n#formsubmit[_ngcontent-%COMP%]:disabled {\r\n  background-color: #cccccc;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.submission-message[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEJBQTRCO0FBQzVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix3Q0FBd0MsRUFBRSw0QkFBNEI7QUFDeEU7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1Qyw4Q0FBOEM7RUFDOUMsd0RBQXdEO0FBQzFEO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLGFBQWE7QUFDZjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJEQUEyRDtBQUM3RDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUVBLCtCQUErQjtBQUMvQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkZC12ZWhpY2xlL2FkZC12ZWhpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogR2VuZXJhbCBjb250ZW50IHN0eWxpbmcgKi9cclxuLmNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBGb3JtIGNvbnRhaW5lciBzdHlsaW5nICovXHJcbi5hZGR2ZWgge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLyogU3VidGxlIHNoYWRvdyBmb3IgZGVwdGggKi9cclxufVxyXG5cclxuLyogRm9ybSB0aXRsZSBzdHlsaW5nICovXHJcbi5mb3JtLXRpdGxlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBGb3JtIGlucHV0IHN0eWxpbmcgKi9cclxuLmZvcm1pbnB1dHMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODgpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtaW5wdXRzOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDEyMywgMjU1LCAwLjUpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEVycm9yIG1lc3NhZ2Ugc3R5bGluZyAqL1xyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBTdWJtaXQgYnV0dG9uIHN0eWxpbmcgKi9cclxuI2Zvcm1zdWJtaXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG59XHJcblxyXG4jZm9ybXN1Ym1pdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbiNmb3Jtc3VibWl0OmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi8qIFN1Ym1pc3Npb24gbWVzc2FnZSBzdHlsaW5nICovXHJcbi5zdWJtaXNzaW9uLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddVehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-vehicle',
                templateUrl: './add-vehicle.component.html',
                styleUrls: ['./add-vehicle.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'TravelAwayApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-packages/view-packages.component */ "./src/app/view-packages/view-packages.component.ts");
/* harmony import */ var _view_package_details_view_package_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-package-details/view-package-details.component */ "./src/app/view-package-details/view-package-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../travelAway-services/package-service/package.service */ "./src/travelAway-services/package-service/package.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/common-layout/common-layout.component */ "./src/app/layouts/common-layout/common-layout.component.ts");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");
/* harmony import */ var _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/employee-layout/employee-layout.component */ "./src/app/layouts/employee-layout/employee-layout.component.ts");
/* harmony import */ var _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-details/edit-details.component */ "./src/app/edit-details/edit-details.component.ts");
/* harmony import */ var _customer_care_customer_care_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer-care/customer-care.component */ "./src/app/customer-care/customer-care.component.ts");
/* harmony import */ var _book_package_book_package_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./book-package/book-package.component */ "./src/app/book-package/book-package.component.ts");
/* harmony import */ var _accommodation_accommodation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./accommodation/accommodation.component */ "./src/app/accommodation/accommodation.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-hotel/add-hotel.component */ "./src/app/add-hotel/add-hotel.component.ts");
/* harmony import */ var _view_bookings_view_bookings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view-bookings/view-bookings.component */ "./src/app/view-bookings/view-bookings.component.ts");
/* harmony import */ var _view_hotels_view_hotels_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./view-hotels/view-hotels.component */ "./src/app/view-hotels/view-hotels.component.ts");
/* harmony import */ var _view_vehicles_view_vehicles_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view-vehicles/view-vehicles.component */ "./src/app/view-vehicles/view-vehicles.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _travelAway_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../travelAway-services/auth.interceptor */ "./src/travelAway-services/auth.interceptor.ts");
/* harmony import */ var _travelAway_services_auth_service_authservice__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../travelAway-services/auth-service/authservice */ "./src/travelAway-services/auth-service/authservice.ts");
/* harmony import */ var _protected_protected_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./protected/protected.component */ "./src/app/protected/protected.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _popular_packages_popular_packages_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./popular-packages/popular-packages.component */ "./src/app/popular-packages/popular-packages.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








































function tokenGetter() {
    return localStorage.getItem('authToken'); // Or your preferred storage key
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_10__["PackageService"], _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _travelAway_services_auth_service_authservice__WEBPACK_IMPORTED_MODULE_29__["AuthService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _travelAway_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__["AuthInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot({
                timeOut: 2000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    whitelistedDomains: ['localhost:5001'],
                    blacklistedRoutes: ['/api/auth/'],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        _view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_6__["ViewPackagesComponent"],
        _view_package_details_view_package_details_component__WEBPACK_IMPORTED_MODULE_7__["ViewPackageDetailsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_13__["CommonLayoutComponent"],
        _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_14__["UserLayoutComponent"],
        _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeLayoutComponent"],
        _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_16__["EditDetailsComponent"],
        _customer_care_customer_care_component__WEBPACK_IMPORTED_MODULE_17__["CustomerCareComponent"],
        _book_package_book_package_component__WEBPACK_IMPORTED_MODULE_18__["BookPackageComponent"],
        _accommodation_accommodation_component__WEBPACK_IMPORTED_MODULE_19__["AccommodationComponent"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_20__["PaymentComponent"],
        _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_21__["AddVehicleComponent"],
        _add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_22__["AddHotelComponent"],
        _view_bookings_view_bookings_component__WEBPACK_IMPORTED_MODULE_23__["ViewBookingsComponent"],
        _view_hotels_view_hotels_component__WEBPACK_IMPORTED_MODULE_24__["ViewHotelsComponent"],
        _view_vehicles_view_vehicles_component__WEBPACK_IMPORTED_MODULE_25__["ViewVehiclesComponent"],
        _protected_protected_component__WEBPACK_IMPORTED_MODULE_30__["ProtectedComponent"],
        _popular_packages_popular_packages_component__WEBPACK_IMPORTED_MODULE_32__["PopularPackagesComponent"],
        _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_33__["BreadcrumbComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                    _view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_6__["ViewPackagesComponent"],
                    _view_package_details_view_package_details_component__WEBPACK_IMPORTED_MODULE_7__["ViewPackageDetailsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_13__["CommonLayoutComponent"],
                    _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_14__["UserLayoutComponent"],
                    _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeLayoutComponent"],
                    _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_16__["EditDetailsComponent"],
                    _customer_care_customer_care_component__WEBPACK_IMPORTED_MODULE_17__["CustomerCareComponent"],
                    _book_package_book_package_component__WEBPACK_IMPORTED_MODULE_18__["BookPackageComponent"],
                    _accommodation_accommodation_component__WEBPACK_IMPORTED_MODULE_19__["AccommodationComponent"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_20__["PaymentComponent"],
                    _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_21__["AddVehicleComponent"],
                    _add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_22__["AddHotelComponent"],
                    _view_bookings_view_bookings_component__WEBPACK_IMPORTED_MODULE_23__["ViewBookingsComponent"],
                    _view_hotels_view_hotels_component__WEBPACK_IMPORTED_MODULE_24__["ViewHotelsComponent"],
                    _view_vehicles_view_vehicles_component__WEBPACK_IMPORTED_MODULE_25__["ViewVehiclesComponent"],
                    _protected_protected_component__WEBPACK_IMPORTED_MODULE_30__["ProtectedComponent"],
                    _popular_packages_popular_packages_component__WEBPACK_IMPORTED_MODULE_32__["PopularPackagesComponent"],
                    _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_33__["BreadcrumbComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot({
                        timeOut: 2000,
                        positionClass: 'toast-top-right',
                        preventDuplicates: true,
                    }),
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: tokenGetter,
                            whitelistedDomains: ['localhost:5001'],
                            blacklistedRoutes: ['/api/auth/'],
                        },
                    }),
                ],
                providers: [_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_10__["PackageService"], _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _travelAway_services_auth_service_authservice__WEBPACK_IMPORTED_MODULE_29__["AuthService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _travelAway_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__["AuthInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-packages/view-packages.component */ "./src/app/view-packages/view-packages.component.ts");
/* harmony import */ var _view_package_details_view_package_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-package-details/view-package-details.component */ "./src/app/view-package-details/view-package-details.component.ts");
/* harmony import */ var _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-details/edit-details.component */ "./src/app/edit-details/edit-details.component.ts");
/* harmony import */ var _customer_care_customer_care_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-care/customer-care.component */ "./src/app/customer-care/customer-care.component.ts");
/* harmony import */ var _book_package_book_package_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-package/book-package.component */ "./src/app/book-package/book-package.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-hotel/add-hotel.component */ "./src/app/add-hotel/add-hotel.component.ts");
/* harmony import */ var _accommodation_accommodation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accommodation/accommodation.component */ "./src/app/accommodation/accommodation.component.ts");
/* harmony import */ var _view_bookings_view_bookings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-bookings/view-bookings.component */ "./src/app/view-bookings/view-bookings.component.ts");
/* harmony import */ var _view_hotels_view_hotels_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-hotels/view-hotels.component */ "./src/app/view-hotels/view-hotels.component.ts");
/* harmony import */ var _view_vehicles_view_vehicles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-vehicles/view-vehicles.component */ "./src/app/view-vehicles/view-vehicles.component.ts");
















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { breadcrumb: 'Home' } },
    { path: 'viewPackages', component: _view_packages_view_packages_component__WEBPACK_IMPORTED_MODULE_4__["ViewPackagesComponent"], data: { breadcrumb: 'viewPackages' } },
    { path: 'login/:loginRole', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { breadcrumb: 'login' } },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], data: { breadcrumb: 'register' } },
    { path: 'viewPackageDetails/:packageId/:packageName', component: _view_package_details_view_package_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewPackageDetailsComponent"] },
    { path: 'viewPackageDetails/:packageId/:packageName', component: _view_package_details_view_package_details_component__WEBPACK_IMPORTED_MODULE_5__["ViewPackageDetailsComponent"] },
    { path: 'editDetails', component: _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_6__["EditDetailsComponent"], data: { breadcrumb: 'editDetails' } },
    { path: 'custcare', component: _customer_care_customer_care_component__WEBPACK_IMPORTED_MODULE_7__["CustomerCareComponent"], data: { breadcrumb: 'custcare' } },
    { path: 'bookpkg/:packageId', component: _book_package_book_package_component__WEBPACK_IMPORTED_MODULE_8__["BookPackageComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"], data: { breadcrumb: 'payment' } },
    { path: 'addvehicle', component: _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_10__["AddVehicleComponent"], data: { breadcrumb: 'addvehicle' } },
    { path: 'addhotel', component: _add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_11__["AddHotelComponent"], data: { breadcrumb: 'addhotel' } },
    { path: 'accommodation', component: _accommodation_accommodation_component__WEBPACK_IMPORTED_MODULE_12__["AccommodationComponent"], data: { breadcrumb: 'accommodation' } },
    { path: 'viewbookings', component: _view_bookings_view_bookings_component__WEBPACK_IMPORTED_MODULE_13__["ViewBookingsComponent"], data: { breadcrumb: 'viewbookings' } },
    { path: 'viewhotels', component: _view_hotels_view_hotels_component__WEBPACK_IMPORTED_MODULE_14__["ViewHotelsComponent"], data: { breadcrumb: 'viewhotels' } },
    { path: 'viewvehicles', component: _view_vehicles_view_vehicles_component__WEBPACK_IMPORTED_MODULE_15__["ViewVehiclesComponent"], data: { breadcrumb: 'viewvehicles' } },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/book-package/book-package.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-package/book-package.component.ts ***!
  \********************************************************/
/*! exports provided: BookPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPackageComponent", function() { return BookPackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/package-service/package.service */ "./src/travelAway-services/package-service/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










const _c0 = ["confirmationDialogTemplate"];
function BookPackageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Contact is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0Contact number should be of 10 digits, 0 not as first digit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r72.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r72.errors.pattern);
} }
function BookPackageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Address is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r74.errors.required);
} }
function BookPackageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Date of Travel is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r76.errors.required);
} }
function BookPackageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0No. of Adults is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r78.errors.required);
} }
function BookPackageComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0No. of children is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r80.errors.required);
} }
function BookPackageComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookPackageComponent_ng_template_31_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.closeDialog(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookPackageComponent_ng_template_31_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.closeDialog(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r83.dialogTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r83.dialogMessage);
} }
class BookPackageComponent {
    constructor(packageService, router, route, tostr, dialog) {
        this.packageService = packageService;
        this.router = router;
        this.route = route;
        this.tostr = tostr;
        this.dialog = dialog;
        this.dialogTitle = '';
        this.dialogMessage = '';
    }
    ngOnInit() {
        this.packageId = parseInt(this.route.snapshot.params['packageId']);
        this.packageName = this.route.snapshot.queryParams['name'];
        console.log(this.packageName);
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Customer") {
            this.router.navigate(['/login/1']);
        }
    }
    ngAfterViewInit() {
    }
    submitBookForm(form) {
        var email = sessionStorage.getItem("userName");
        var bookpkg = {
            contactNumber: parseInt(form.value.contactNumber), emailId: email, address: form.value.address, dateOfTravel: new Date(form.value.dateOfTravel), numberOfAdults: parseInt(form.value.adults),
            numberOfChildren: parseInt(form.value.children), status: "Booked", packageId: this.packageId
        };
        console.log(bookpkg);
        this.packageService.bookPackage(bookpkg).subscribe(responseRegisterStatus => {
            this.bookingId = responseRegisterStatus;
            if (this.bookingId > 0) {
                sessionStorage.setItem('bookingId', this.bookingId.toString());
                this.tostr.success('Booking Done successfully', 'Success');
                // this.dialogTitle = 'Continue to Accommodation?';
                // this.dialogMessage = 'Do you want to proceed to book accommodation?';
                // this.dialogRef = this.dialog.open(this.confirmationDialogTemplate,{width: '400px',panelClass: 'custom-dialog-top-center'});
                // this.dialogRef.afterClosed().subscribe((result: boolean) => {
                // if (result) {this.router.navigate(['/accommodation']);}
                // else {this.router.navigate(['/viewbookings']);}
                //});
                if (confirm("Booking Done successfully.Do you want to continue to book accommodation?")) {
                    this.router.navigate(['/accommodation']);
                }
                else {
                    this.router.navigate(['/viewbookings']);
                }
            }
            else {
                this.tostr.error('Booking Failed', 'Error');
            }
        }, responseRegisterError => {
            this.errorMsg = responseRegisterError;
        }, () => console.log("BookingPackage method executed successfully"));
    }
    closeDialog(result) {
        this.dialogRef.close(result);
    }
}
BookPackageComponent.ɵfac = function BookPackageComponent_Factory(t) { return new (t || BookPackageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
BookPackageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookPackageComponent, selectors: [["app-book-package"]], viewQuery: function BookPackageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmationDialogTemplate = _t.first);
    } }, decls: 33, vars: 7, consts: [[1, "content"], [1, "bookpkg"], [3, "ngSubmit"], ["bookForm", "ngForm"], [1, "form-group"], ["type", "text", "name", "contactNumber", "placeholder", "Contact Number", "ngModel", "", "required", "", "pattern", "[1-9]{1}[0-9]{9}", 1, "form-control", "forminputs"], ["contactNumberRef", "ngModel"], ["class", "error-message", 4, "ngIf"], ["name", "address", "placeholder", "Residential Address", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["addressRef", "ngModel"], ["type", "text", "name", "dateOfTravel", "placeholder", "Date of Travel", "onfocus", "(this.type='date')", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["dotRef", "ngModel"], ["type", "number", "name", "adults", "placeholder", "Number of adults", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["adultRef", "ngModel"], ["type", "number", "name", "children", "placeholder", "Number of children", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["childrenRef", "ngModel"], ["type", "submit", "id", "formsubmit", 3, "disabled"], ["confirmationDialogTemplate", ""], [1, "error-message"], [3, "hidden"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function BookPackageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Book Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BookPackageComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.submitBookForm(_r71); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookPackageComponent_div_12_Template, 7, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BookPackageComponent_div_16_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BookPackageComponent_div_20_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BookPackageComponent_div_24_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BookPackageComponent_div_28_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Book now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BookPackageComponent_ng_template_31_Template, 10, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.packageName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r72.errors && (_r72.dirty || _r72.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r74.errors && (_r74.dirty || _r74.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r76.errors && (_r76.dirty || _r76.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r78.errors && (_r78.dirty || _r78.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r80.errors && (_r80.dirty || _r80.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r71.form.valid);
    } }, directives: [_layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_5__["UserLayoutComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  position: relative;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.bookpkg[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  min-width: 300px;\r\n  min-height: 300px;\r\n  position: relative;\r\n  margin: 100px auto 20px auto;\r\n  background-color: rgba(255, 255, 255, 0.364); \r\n  border-radius: 20px;\r\n  padding: 30px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); \r\n  -webkit-backdrop-filter: blur(10px);\r\n          backdrop-filter: blur(10px); \r\n}\r\n\r\n.bookpkg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.553); \r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border: 1px solid #cccccc77; \r\n  border-radius: 5px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  margin-bottom: 15px; \r\n  background-color: rgba(255, 255, 255, 0.533); \r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); \r\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.forminputs[_ngcontent-%COMP%]:focus {\r\n  border-color: #007bff; \r\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); \r\n  outline: none; \r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: red;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  padding: 15px 30px;\r\n  background-color: #007bff; \r\n  color: #ffffff; \r\n  font-size: 1.2rem;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, transform 0.2s ease;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); \r\n}\r\n#formsubmit[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3; \r\n  transform: translateY(-2px); \r\n}\r\n#formsubmit[_ngcontent-%COMP%]:disabled {\r\n  background-color: #cccccc; \r\n  cursor: not-allowed;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.553); \r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n}\r\n.mat-dialog-container[_ngcontent-%COMP%] {\r\n      display: flex !important;\r\n      flex-direction: column !important;\r\n      align-items: center !important;\r\n      justify-content: center !important;\r\n      height: 100vh !important; \r\n      width: 100vw !important;  \r\n      max-width: 80vw;\r\n      max-height: 80vh;\r\n      box-sizing: border-box; \r\n      padding: 24px;\r\n    }\r\n.mat-dialog-content[_ngcontent-%COMP%] {\r\n      margin-bottom: 20px;\r\n      max-height: 60vh;\r\n      overflow-y: auto;\r\n      width: 100%; \r\n    }\r\n.mat-dialog-actions[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      margin-top: auto;\r\n      width: 100%; \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1wYWNrYWdlL2Jvb2stcGFja2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDRDQUE0QyxFQUFFLGlDQUFpQztFQUMvRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHdDQUF3QyxFQUFFLDRCQUE0QjtFQUN0RSxtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUUsaUNBQWlDO0FBQ2hFO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsVUFBVTtFQUNWLDZDQUE2QyxFQUFFLHdCQUF3QjtFQUN2RSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCLEVBQUUsNkJBQTZCO0VBQzFELGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUUsK0JBQStCO0VBQ3BELDRDQUE0QyxFQUFFLCtCQUErQjtFQUM3RSw4Q0FBOEMsRUFBRSwyQkFBMkI7RUFDM0Usd0RBQXdEO0FBQzFEO0FBRUE7RUFDRSxxQkFBcUIsRUFBRSx5QkFBeUI7RUFDaEQsMENBQTBDLEVBQUUseUJBQXlCO0VBQ3JFLGFBQWEsRUFBRSwyQkFBMkI7QUFDNUM7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFFLHNCQUFzQjtFQUNqRCxjQUFjLEVBQUUsZUFBZTtFQUMvQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkRBQTJEO0VBQzNELHdDQUF3QyxFQUFFLDRCQUE0QjtBQUN4RTtBQUVBO0VBQ0UseUJBQXlCLEVBQUUseUJBQXlCO0VBQ3BELDJCQUEyQixFQUFFLHlCQUF5QjtBQUN4RDtBQUVBO0VBQ0UseUJBQXlCLEVBQUUsa0NBQWtDO0VBQzdELG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLDZDQUE2QyxFQUFFLHdCQUF3QjtFQUN2RSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtNQUNNLHdCQUF3QjtNQUN4QixpQ0FBaUM7TUFDakMsOEJBQThCO01BQzlCLGtDQUFrQztNQUNsQyx3QkFBd0I7TUFDeEIsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLGFBQWE7SUFDZjtBQUVBO01BQ0UsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsV0FBVztJQUNiO0FBRUE7TUFDRSxhQUFhO01BQ2IseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixXQUFXO0lBQ2IiLCJmaWxlIjoic3JjL2FwcC9ib29rLXBhY2thZ2UvYm9vay1wYWNrYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIGNvbnRlbnQgc3R5bGluZyAqL1xyXG4uY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8qIEZvcm0gY29udGFpbmVyIHN0eWxpbmcgKi9cclxuLmJvb2twa2cge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDIwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzY0KTsgLyogVHJhbnNwYXJlbnQgd2hpdGUgYmFja2dyb3VuZCAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogQmx1ciBlZmZlY3QgZm9yIHRyYW5zcGFyZW5jeSAqL1xyXG59XHJcblxyXG4vKiBGb3JtIGhlYWRpbmcgc3R5bGluZyAqL1xyXG4uYm9va3BrZyBoMSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjU1Myk7IC8qIFNoYWRvdyBmb3IgZW1waGFzaXMgKi9cclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIEZvcm0gaW5wdXQgc3R5bGluZyAqL1xyXG4uZm9ybWlucHV0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYzc3OyAvKiBTdWJ0bGUgYm9yZGVyIGZvciBpbnB1dHMgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IC8qIEFkZCBzcGFjaW5nIGJldHdlZW4gaW5wdXRzICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUzMyk7IC8qIFNsaWdodGx5IG9wYXF1ZSBiYWNrZ3JvdW5kICovXHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogSW5uZXIgc2hhZG93IGZvciBkZXB0aCAqL1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZm9ybWlucHV0czpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyAvKiBCbHVlIGJvcmRlciBvbiBmb2N1cyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAxMjMsIDI1NSwgMC41KTsgLyogR2xvdyBlZmZlY3Qgb24gZm9jdXMgKi9cclxuICBvdXRsaW5lOiBub25lOyAvKiBSZW1vdmUgZGVmYXVsdCBvdXRsaW5lICovXHJcbn1cclxuXHJcbi8qIEVycm9yIG1lc3NhZ2Ugc3R5bGluZyAqL1xyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4vKiBTdWJtaXQgYnV0dG9uIHN0eWxpbmcgKi9cclxuI2Zvcm1zdWJtaXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvKiBNb2Rlcm4gYmx1ZSBjb2xvciAqL1xyXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xyXG59XHJcblxyXG4jZm9ybXN1Ym1pdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMzsgLyogRGFya2VyIGJsdWUgb24gaG92ZXIgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IC8qIExpZnQgZWZmZWN0IG9uIGhvdmVyICovXHJcbn1cclxuXHJcbiNmb3Jtc3VibWl0OmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBHcmF5IGNvbG9yIGZvciBkaXNhYmxlZCBzdGF0ZSAqL1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNTUzKTsgLyogU2hhZG93IGZvciBlbXBoYXNpcyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7IFxyXG4gICAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDsgIFxyXG4gICAgICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgbWF4LWhlaWdodDogNjB2aDtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICB9IFxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookPackageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-package',
                templateUrl: './book-package.component.html',
                styleUrls: ['./book-package.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { confirmationDialogTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['confirmationDialogTemplate']
        }] }); })();


/***/ }),

/***/ "./src/app/customer-care/customer-care.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-care/customer-care.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerCareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCareComponent", function() { return CustomerCareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function CustomerCareComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r69.msg, " !! ");
} }
class CustomerCareComponent {
    constructor(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.showDiv = false;
    }
    ngOnInit() {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Customer") {
            this.router.navigate(['/login/1']);
        }
        this.bookingId = parseInt(sessionStorage.getItem('bookingId'));
        this.getAssignee();
    }
    submitCompForm(form) {
        var query = {
            bookingId: this.bookingId,
            query: form.value.query,
            queryStatus: "Assigned",
            assignee: this.assignee
        };
        console.log(query);
        this.userService.custCare(query).subscribe(responsecustCareStatus => {
            this.status = responsecustCareStatus;
            if (this.status) {
                this.showDiv = true;
                this.msg = "We will answer you soon";
            }
            else {
                this.msg = "Some error occured. Query not sent";
            }
        }, responseHotelError => {
            this.errorMsg = responseHotelError;
        }, () => console.log("CustomerCare method executed successfully"));
    }
    getAssignee() {
        this.userService.getassignee().subscribe(responseassignee => {
            this.assignee = responseassignee;
            // console.log(this.assignee, typeof (this.assignee));
        }, responseassigneeError => {
            this.assignee = null;
        }, () => console.log("GetAssignee method executed successfully"));
    }
}
CustomerCareComponent.ɵfac = function CustomerCareComponent_Factory(t) { return new (t || CustomerCareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CustomerCareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerCareComponent, selectors: [["app-customer-care"]], decls: 16, vars: 2, consts: [[1, "content"], [1, "inner-content"], ["src", "./assets/customer-service.png", "alt", "Customer Service Image"], [3, "ngSubmit"], ["compForm", "ngForm"], [1, "form-group"], ["name", "query", "placeholder", "Enter your complaint here", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["compRef", "ngModel"], ["type", "submit", "id", "formsubmit", 3, "disabled"], ["class", "message", 4, "ngIf"], [1, "message"]], template: function CustomerCareComponent_Template(rf, ctx) { if (rf & 1) {
        const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Customer Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Thanks for writing to us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerCareComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.submitCompForm(_r67); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CustomerCareComponent_div_15_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r67.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDiv);
    } }, directives: [_layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_3__["UserLayoutComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 310px;\r\n  height: auto;\r\n  width: 50%;\r\n  min-width: 300px;\r\n  background-color: rgba(255, 255, 255, 0.703); \r\n  border-radius: 20px;\r\n  text-align: center;\r\n  padding: 20px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); \r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: -30px;\r\n  top: -30px;\r\n  border-radius: 40%;\r\n  width: 80px;\r\n  height: 80px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); \r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px black;\r\n  margin-bottom: 20px;\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n  color: #333;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  width: 80%;\r\n  margin: 0 auto 20px auto;\r\n  height: 100px;\r\n  padding: 10px;\r\n  background-color: white;\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.forminputs[_ngcontent-%COMP%]:focus {\r\n  border-color: #007bff;\r\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\r\n  outline: none;\r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  padding: 10px 20px;\r\n  background-color: yellow;\r\n  box-shadow: 2px 2px 2px #000000;\r\n  font-size: 1.2rem;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, transform 0.2s ease;\r\n}\r\n#formsubmit[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffc107;\r\n  transform: translateY(-2px);\r\n}\r\n#formsubmit[_ngcontent-%COMP%]:disabled {\r\n  background-color: #cccccc;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItY2FyZS9jdXN0b21lci1jYXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDRDQUE0QyxFQUFFLHFDQUFxQztFQUNuRixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3Q0FBd0MsRUFBRSw0QkFBNEI7QUFDeEU7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBd0MsRUFBRSwrQkFBK0I7QUFDM0U7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsd0RBQXdEO0FBQzFEO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLGFBQWE7QUFDZjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJEQUEyRDtBQUM3RDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1jYXJlL2N1c3RvbWVyLWNhcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYWwgY29udGVudCBzdHlsaW5nICovXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIElubmVyIGNvbnRlbnQgc3R5bGluZyAqL1xyXG4uaW5uZXItY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDMxMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwMyk7IC8qIFNsaWdodGx5IG9wYXF1ZSB3aGl0ZSBiYWNrZ3JvdW5kICovXHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xyXG59XHJcblxyXG4vKiBDdXN0b21lciBzZXJ2aWNlIGltYWdlIHN0eWxpbmcgKi9cclxuLmlubmVyLWNvbnRlbnQgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTMwcHg7XHJcbiAgdG9wOiAtMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIFN1YnRsZSBzaGFkb3cgZm9yIGVtcGhhc2lzICovXHJcbn1cclxuXHJcbi8qIEhlYWRpbmcgc3R5bGluZyAqL1xyXG4uaW5uZXItY29udGVudCBoMSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogUGFyYWdyYXBoIHN0eWxpbmcgKi9cclxuLmlubmVyLWNvbnRlbnQgcCB7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4vKiBGb3JtIGlucHV0IHN0eWxpbmcgKi9cclxuLmZvcm1pbnB1dHMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtaW5wdXRzOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDEyMywgMjU1LCAwLjUpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFN1Ym1pdCBidXR0b24gc3R5bGluZyAqL1xyXG4jZm9ybXN1Ym1pdCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbiNmb3Jtc3VibWl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuI2Zvcm1zdWJtaXQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLyogTWVzc2FnZSBzdHlsaW5nICovXHJcbi5pbm5lci1jb250ZW50IC5tZXNzYWdlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerCareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-care',
                templateUrl: './customer-care.component.html',
                styleUrls: ['./customer-care.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit-details/edit-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-details/edit-details.component.ts ***!
  \********************************************************/
/*! exports provided: EditDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailsComponent", function() { return EditDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/common-layout/common-layout.component */ "./src/app/layouts/common-layout/common-layout.component.ts");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");








function EditDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-common-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditDetailsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0First Name is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0First Name is not entered in proper format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r54.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r54.errors.pattern);
} }
function EditDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Last Name is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0Last Name is not entered in proper format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r56.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r56.errors.pattern);
} }
function EditDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Contact is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0Contact number should be of 10 digits, 0 not as first digit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r59.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r59.errors.pattern);
} }
function EditDetailsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Date of birth is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r61.errors.required);
} }
function EditDetailsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Address is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r63.errors.required);
} }
function EditDetailsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r65.msg, " ");
} }
class EditDetailsComponent {
    constructor(router, userService, ac) {
        this.router = router;
        this.userService = userService;
        this.ac = ac;
        this.showDiv = true;
        this.customerLayout = false;
        this.commonLayout = false;
        this.emailId = sessionStorage.getItem("userName");
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Customer") {
            this.router.navigate(['/login/1']);
        }
        else if (this.userRole == "Customer") {
            this.customerLayout = true;
        }
    }
    ngOnInit() {
        this.getCustomerDetails(this.emailId);
    }
    getCustomerDetails(emailId) {
        this.userService.getCustomerById(emailId).subscribe(responseRegisterStatus => {
            this.customer = responseRegisterStatus;
            this.firstName = this.customer['firstName'];
            this.lastName = this.customer['lastName'];
            this.gender = this.customer['gender'];
            this.Address = this.customer['address'];
            this.contact = this.customer['contactNumber'];
            this.dob = this.customer['dateOfBirth'].substring(0, 10);
            console.log(this.firstName, this.lastName);
        }, responseRegisterError => {
            this.errorMsg = responseRegisterError;
        }, () => console.log("cutomer details method executed successfully"));
    }
    SubmitForm(form) {
        this.userService.updateUserDetails(form.value.firstName, form.value.lastName, this.emailId, null, parseInt(form.value.contactNumber), form.value.address, form.value.gender, new Date(form.value.dateOfBirth), 1).subscribe(responseUpdateStatus => {
            this.status = responseUpdateStatus;
            this.showDiv = true;
            if (this.status == true) {
                this.msg = "Updation Successfully";
            }
            else {
                this.msg = "Not able to update";
            }
        }, responseUpdateError => {
            this.errorMsg = responseUpdateError;
        }, () => console.log("Updated method executed successfully"));
    }
}
EditDetailsComponent.ɵfac = function EditDetailsComponent_Factory(t) { return new (t || EditDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
EditDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditDetailsComponent, selectors: [["app-edit-details"]], decls: 40, vars: 14, consts: [[4, "ngIf"], [1, "content"], [1, "signup"], [2, "text-align", "left"], [3, "ngSubmit"], ["updateForm", "ngForm"], [1, "form-group", 2, "margin-top", "20px"], ["type", "text", "placeholder", "First Name", "name", "firstName", "ngModel", "", "required", "", "pattern", "[a-zA-z]{1,}", 1, "form-control", "forminputs", 3, "value"], ["firstNameRef", "ngModel"], ["style", "text-align:left; color:red;", 4, "ngIf"], [1, "form-group"], ["type", "text", "name", "lastName", "placeholder", "Last Name", "ngModel", "", "required", "", "pattern", "[a-zA-z]{1,}", 1, "form-control", "forminputs", 3, "value"], ["lastNameRef", "ngModel"], ["style", "text-align:left;color:red;", 4, "ngIf"], ["name", "gender", "ngModel", "", "required", "", 1, "form-control", 3, "value"], ["genderRef", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "M"], ["value", "F"], ["type", "text", "name", "contactNumber", "placeholder", "Contact Number", "ngModel", "", "required", "", "pattern", "[1-9]{1}[0-9]{9}", 1, "form-control", "forminputs", 3, "value"], ["contactNumberRef", "ngModel"], ["type", "text", "name", "dateOfBirth", "placeholder", "Date of birth", "onfocus", "(this.type='date')", "ngModel", "", "required", "", 1, "form-control", "forminputs", 3, "value"], ["dobRef", "ngModel"], ["placeholder", "Address", "name", "address", "ngModel", "", "required", "", 1, "form-control", "forminputs", 3, "value"], ["addressRef", "ngModel"], ["type", "submit", "id", "formsubmit"], ["style", "color:red;text-align:center;", 4, "ngIf"], [2, "text-align", "left", "color", "red"], [3, "hidden"], [2, "color", "red", "text-align", "center"]], template: function EditDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditDetailsComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditDetailsComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditDetailsComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.SubmitForm(_r53); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditDetailsComponent_div_11_Template, 7, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditDetailsComponent_div_15_Template, 7, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditDetailsComponent_div_28_Template, 7, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditDetailsComponent_div_32_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EditDetailsComponent_div_36_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EditDetailsComponent_div_39_Template, 3, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commonLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r54.errors && (_r54.dirty || _r54.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r56.errors && (_r56.dirty || _r56.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r59.errors && (_r59.dirty || _r59.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r61.errors && (_r61.dirty || _r61.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r63.errors && (_r63.dirty || _r63.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDiv);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__["CommonLayoutComponent"], _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_6__["UserLayoutComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  position: relative;\r\n  text-align: center;\r\n  padding-top: 20px; \r\n  box-sizing: border-box; \r\n}\r\n\r\n.signup[_ngcontent-%COMP%] {\r\n  width: 40%; \r\n  min-width: 350px; \r\n  margin: 30px auto 20px auto; \r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border-radius: 15px;\r\n  padding: 30px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  text-align: left;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1.8em;\r\n  color: #333;\r\n  margin-bottom: 25px;\r\n  text-align: left; \r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px; \r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block; \r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  color: #555;\r\n  margin-bottom: 8px; \r\n  text-align: left;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%] {\r\n  width: calc(100% - 16px); \r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: normal; \r\n  font-size: 1em;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #999; \r\n  font-weight: normal;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%]::placeholder {\r\n  color: #999; \r\n  font-weight: normal;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] { \r\n  width: calc(100% - 16px);\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: normal;\r\n  font-size: 1em;\r\n  box-sizing: border-box;\r\n  color: #333;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:first-child {\r\n  color: #999; \r\n}\r\n\r\ntextarea.forminputs[_ngcontent-%COMP%] {\r\n  min-height: 100px; \r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  padding: 12px 25px; \r\n  background-color: yellow;\r\n  box-shadow: 2px 2px 2px #000000;\r\n  font-size: 1.1em; \r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  display: block;\r\n  margin: 25px auto 0 auto; \r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%]:hover {\r\n  background-color: #e0a800;\r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 5px #007bff;\r\n}\r\n\r\ndiv[style*=\"text-align[_ngcontent-%COMP%]:left; color[_ngcontent-%COMP%]:red;\"][_ngcontent-%COMP%] { \r\n  text-align: left;\r\n  color: red;\r\n  margin-top: 5px;\r\n  font-size: 0.9em;\r\n}\r\n\r\ndiv[style*=\"color[_ngcontent-%COMP%]:red;text-align[_ngcontent-%COMP%]:center;\"][_ngcontent-%COMP%] { \r\n  color: red;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  font-size: 0.95em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1kZXRhaWxzL2VkaXQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFFLDhEQUE4RDtFQUNqRixzQkFBc0IsRUFBRSwwQ0FBMEM7QUFDcEU7O0FBRUE7RUFDRSxVQUFVLEVBQUUsMkJBQTJCO0VBQ3ZDLGdCQUFnQixFQUFFLCtDQUErQztFQUNqRSwyQkFBMkIsRUFBRSxzQkFBc0I7RUFDbkQsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBRSw0QkFBNEI7QUFDaEQ7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSwwQ0FBMEM7QUFDakU7O0FBRUE7RUFDRSxjQUFjLEVBQUUsZ0NBQWdDO0VBQ2hELG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQixFQUFFLGtDQUFrQztFQUN0RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0IsRUFBRSxtQ0FBbUM7RUFDN0QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLG1CQUFtQixFQUFFLGtDQUFrQztFQUN2RCxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVyxFQUFFLGdDQUFnQztFQUM3QyxtQkFBbUI7QUFDckI7O0FBSEE7RUFDRSxXQUFXLEVBQUUsZ0NBQWdDO0VBQzdDLG1CQUFtQjtBQUNyQjs7QUFFQSxnQkFBZ0IsaUNBQWlDO0VBQy9DLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVyxFQUFFLHVDQUF1QztBQUN0RDs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLDBDQUEwQztBQUMvRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUUsMEJBQTBCO0VBQzlDLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsZ0JBQWdCLEVBQUUsaUNBQWlDO0VBQ25ELG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCx3QkFBd0IsRUFBRSx1Q0FBdUM7QUFDbkU7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBLDRDQUE0Qyw2QkFBNkI7RUFDdkUsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLDZDQUE2QyxxQ0FBcUM7RUFDaEYsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1kZXRhaWxzL2VkaXQtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDsgLyogQWRkIHNvbWUgdG9wIHBhZGRpbmcgdG8gYXZvaWQgY29udGVudCBzdGlja2luZyB0byB0aGUgdG9wICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHVkZSBwYWRkaW5nIGluIGhlaWdodCBjYWxjdWxhdGlvbiAqL1xyXG59XHJcblxyXG4uc2lnbnVwIHtcclxuICB3aWR0aDogNDAlOyAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXHJcbiAgbWluLXdpZHRoOiAzNTBweDsgLyogU2xpZ2h0bHkgd2lkZXIgbWluLXdpZHRoIGZvciBiZXR0ZXIgbGF5b3V0ICovXHJcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweCBhdXRvOyAvKiBBZGp1c3QgdG9wIG1hcmdpbiAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2lnbnVwIGgxIHtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IC8qIEtlZXAgdGl0bGUgYWxpZ25lZCBsZWZ0ICovXHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBJbmNyZWFzZWQgc3BhY2luZyBiZXR3ZWVuIGZvcm0gZ3JvdXBzICovXHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jazsgLyogTWFrZSBsYWJlbHMgdGFrZSBmdWxsIHdpZHRoICovXHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDsgLyogU3BhY2UgYmV0d2VlbiBsYWJlbCBhbmQgaW5wdXQgKi9cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZm9ybWlucHV0cyB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpOyAvKiBBY2NvdW50IGZvciBwYWRkaW5nIGFuZCBib3JkZXIgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbm9ybWFsOyAvKiBLZWVwIGlucHV0IHRleHQgbm9ybWFsIHdlaWdodCAqL1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtaW5wdXRzOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5OTk7IC8qIFNsaWdodGx5IGRhcmtlciBwbGFjZWhvbGRlciAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wgeyAvKiBTdHlsZSBmb3IgdGhlIHNlbGVjdCBlbGVtZW50ICovXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCBvcHRpb246Zmlyc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjOTk5OyAvKiBTdHlsZSB0aGUgZGlzYWJsZWQgXCJHZW5kZXJcIiBvcHRpb24gKi9cclxufVxyXG5cclxudGV4dGFyZWEuZm9ybWlucHV0cyB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7IC8qIEdpdmUgdGhlIHRleHRhcmVhIHNvbWUgaW5pdGlhbCBoZWlnaHQgKi9cclxufVxyXG5cclxuI2Zvcm1zdWJtaXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjVweDsgLyogQWRqdXN0IGJ1dHRvbiBwYWRkaW5nICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxLjFlbTsgLyogU2xpZ2h0bHkgc21hbGxlciBidXR0b24gZm9udCAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMCBhdXRvOyAvKiBDZW50ZXIgYnV0dG9uIHdpdGggbW9yZSB0b3AgbWFyZ2luICovXHJcbn1cclxuXHJcbiNmb3Jtc3VibWl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBhODAwO1xyXG59XHJcblxyXG4jZm9ybXN1Ym1pdDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDdiZmY7XHJcbn1cclxuXHJcbmRpdltzdHlsZSo9XCJ0ZXh0LWFsaWduOmxlZnQ7IGNvbG9yOnJlZDtcIl0geyAvKiBTdHlsZSBmb3IgZXJyb3IgbWVzc2FnZXMgKi9cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbmRpdltzdHlsZSo9XCJjb2xvcjpyZWQ7dGV4dC1hbGlnbjpjZW50ZXI7XCJdIHsgLyogU3R5bGUgZm9yIHRoZSBzdWJtaXNzaW9uIG1lc3NhZ2UgKi9cclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-details',
                templateUrl: './edit-details.component.html',
                styleUrls: ['./edit-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _popular_packages_popular_packages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popular-packages/popular-packages.component */ "./src/app/popular-packages/popular-packages.component.ts");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/common-layout/common-layout.component */ "./src/app/layouts/common-layout/common-layout.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");
/* harmony import */ var _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/employee-layout/employee-layout.component */ "./src/app/layouts/employee-layout/employee-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-common-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-employee-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Packages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Hotel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.customerLayout = false;
        this.commonLayout = false;
        this.employeeLayout = false;
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole == "Customer") {
            this.customerLayout = true;
        }
        else if (this.userRole == "Employee") {
            this.employeeLayout = true;
        }
        else {
            this.commonLayout = true;
        }
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 21, vars: 5, consts: [[4, "ngIf"], [1, "content"], ["id", "popular"], [1, "inner-content"], ["routerLink", "/viewPackages", 4, "ngIf"], ["routerLink", "/addhotel", 4, "ngIf"], ["id", "footer"], ["id", "social_media"], [1, "fa", 2, "font-size", "50px"], ["routerLink", "/viewPackages"], ["routerLink", "/addhotel"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-popular-packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "TravelAway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_button_9_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_button_10_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Explore this beautiful world with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\uF082");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uF16D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\uF081");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commonLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employeeLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerLayout || ctx.commonLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employeeLayout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _popular_packages_popular_packages_component__WEBPACK_IMPORTED_MODULE_2__["PopularPackagesComponent"], _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_5__["UserLayoutComponent"], _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeLayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-family: 'Quicksand', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh; \r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  min-height: calc(100vh - [height of common-layout]); \r\n  width: 100%;\r\n  position: relative; \r\n  text-align: center;\r\n  min-height: 100vh; \r\n  width: 100%;\r\n  position: relative;\r\n  text-align: center;\r\n  \r\n  background-size: cover;\r\n  background-position: center;\r\n  color: #333; \r\n  flex-grow: 1;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n  width: 80%; \r\n  max-width: 600px; \r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%); \r\n  padding: 20px; \r\n  margin-top: 40px;\r\n}\r\n.inner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .signup[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: 'Architects Daughter', cursive; \r\n  color: #fff; \r\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); \r\n}\r\n.inner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  letter-spacing: 1px;\r\n  font-size: 2.5em; \r\n  margin-bottom: 20px;\r\n  \r\n}\r\n.inner-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 15px 30px; \r\n  border-radius: 10px;\r\n  border: none;\r\n  margin: 10px;\r\n  background-color: #ffc107; \r\n  color: #fff; \r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n  font-family: 'Quicksand', sans-serif;\r\n  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.3); \r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease; \r\n}\r\n.inner-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #e0a800; \r\n}\r\n.inner-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\r\n  outline: none; \r\n  box-shadow: 0 0 5px #007bff; \r\n}\r\n\r\n#footer[_ngcontent-%COMP%] {\r\n  position: fixed; \r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 15px 0;\r\n  z-index: 10; \r\n}\r\n#footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  margin-bottom: 15px;\r\n}\r\n#social_media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin: 0 15px;\r\n  font-size: 1.5em;\r\n  color: #fff;\r\n  transition: color 0.3s ease;\r\n}\r\n#social_media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n  color: #ddd;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .inner-content[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding: 15px;\r\n  }\r\n\r\n \r\n\r\n  .inner-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 12px 25px;\r\n    font-size: 1em;\r\n    margin: 8px;\r\n  }\r\n\r\n  #footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  #social_media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 1.3em;\r\n    margin: 0 10px;\r\n  }\r\n}\r\n#popular[_ngcontent-%COMP%]{\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 60%; \r\n    margin: auto;\r\n    overflow: hidden;\r\n    padding-top: 100px;\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0VBQ0UsU0FBUztFQUNULG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFFLG9EQUFvRDtBQUN6RTtBQUNBO0VBQ0UsbURBQW1ELEVBQUUsMEJBQTBCO0VBQy9FLFdBQVc7RUFDWCxrQkFBa0IsRUFBRSx3Q0FBd0M7RUFDNUQsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFFLG9DQUFvQztFQUN2RCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwyRkFBMkY7RUFDM0Ysc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixXQUFXLEVBQUUsdUJBQXVCO0VBQ3BDLFlBQVk7QUFDZDtBQUVBLHdDQUF3QztBQUN4QztFQUNFLFVBQVUsRUFBRSxvQ0FBb0M7RUFDaEQsZ0JBQWdCLEVBQUUsb0NBQW9DO0VBQ3RELGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQyxFQUFFLHVCQUF1QjtFQUN6RCxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLGdCQUFnQjtBQUNsQjtBQUVBOzs7O0VBSUUsMkNBQTJDLEVBQUUseUJBQXlCO0VBQ3RFLFdBQVcsRUFBRSxxQ0FBcUM7RUFDbEQsMkNBQTJDLEVBQUUsNkNBQTZDO0FBQzVGO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUUsb0NBQW9DO0VBQ3RELG1CQUFtQjs7QUFFckI7QUFFQTtFQUNFLGtCQUFrQixFQUFFLG1DQUFtQztFQUN2RCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUIsRUFBRSxrQkFBa0I7RUFDN0MsV0FBVyxFQUFFLHNCQUFzQjtFQUNuQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQywwQ0FBMEMsRUFBRSx1QkFBdUI7RUFDbkUsZUFBZTtFQUNmLHNDQUFzQyxFQUFFLDRCQUE0QjtBQUN0RTtBQUVBO0VBQ0UseUJBQXlCLEVBQUUsMkJBQTJCO0FBQ3hEO0FBRUE7RUFDRSxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELDJCQUEyQixFQUFFLDZCQUE2QjtBQUM1RDtBQUVBLFdBQVc7QUFDWDtFQUNFLGVBQWUsRUFBRSwwQkFBMEI7RUFDM0MsU0FBUztFQUNULFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVyxFQUFFLHdDQUF3QztBQUN2RDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7Ozs7RUFJQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDRjtBQUNBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVUsRUFBRSw0QkFBNEI7SUFDeEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0EsbUVBQW1FO0FBQ25FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3QkMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYWwgU3R5bGVzICovXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBFbnN1cmUgYm9keSB0YWtlcyBhdCBsZWFzdCBmdWxsIHZpZXdwb3J0IGhlaWdodCAqL1xyXG59XHJcbi5jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gW2hlaWdodCBvZiBjb21tb24tbGF5b3V0XSk7IC8qIEFkanVzdCBjb250ZW50IGhlaWdodCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogS2VlcCBmb3IgaW5uZXIgYWJzb2x1dGUgcG9zaXRpb25pbmcgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7IC8qIEZpbGwgdGhlIGVudGlyZSB2aWV3cG9ydCBoZWlnaHQgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIEFkZCB5b3VyIGJhY2tncm91bmQgaW1hZ2UgdXNpbmcgaW5saW5lIHN0eWxlcyBpbiB0aGUgSFRNTCBvciBhIHNlcGFyYXRlIHJ1bGUgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMzMzM7IC8qIERlZmF1bHQgdGV4dCBjb2xvciAqL1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLyogSW5uZXIgQ29udGVudCAoSGVhZGxpbmUgYW5kIEJ1dHRvbikgKi9cclxuLmlubmVyLWNvbnRlbnQge1xyXG4gIHdpZHRoOiA4MCU7IC8qIEFkanVzdCB3aWR0aCBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cclxuICBtYXgtd2lkdGg6IDYwMHB4OyAvKiBNYXhpbXVtIHdpZHRoIG9uIGxhcmdlciBzY3JlZW5zICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogQ2VudGVyIHRoZSBjb250ZW50ICovXHJcbiAgcGFkZGluZzogMjBweDsgLyogQWRkIHNvbWUgcGFkZGluZyAqL1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IGgxLFxyXG4jZm9vdGVyIGgyLFxyXG4ubG9naW4gaDEsXHJcbi5zaWdudXAgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcicsIGN1cnNpdmU7IC8qIEN1c3RvbSBoZWFkbGluZSBmb250ICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIGhlYWRsaW5lIHRleHQgZm9yIGNvbnRyYXN0ICovXHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQWRkIGEgdGV4dCBzaGFkb3cgZm9yIGJldHRlciByZWFkYWJpbGl0eSAqL1xyXG59XHJcblxyXG4uaW5uZXItY29udGVudCBoMSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6IDIuNWVtOyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBwcm9taW5lbmNlICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBcclxufVxyXG5cclxuLmlubmVyLWNvbnRlbnQgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7IC8qIEFkanVzdCBwYWRkaW5nIGZvciBidXR0b24gc2l6ZSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3OyAvKiBZZWxsb3cgYnV0dG9uICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIGJ1dHRvbiB0ZXh0ICovXHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvKiBNb3JlIHN1YnRsZSBzaGFkb3cgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCBob3ZlciB0cmFuc2l0aW9uICovXHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYTgwMDsgLyogRGFya2VyIHllbGxvdyBvbiBob3ZlciAqL1xyXG59XHJcblxyXG4uaW5uZXItY29udGVudCBidXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGZvY3VzIG91dGxpbmUgKi9cclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDdiZmY7IC8qIEFkZCBhIGN1c3RvbSBmb2N1cyBzdHlsZSAqL1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuI2Zvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBGaXhlZCB0byB0aGUgdmlld3BvcnQgKi9cclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBpdCBzdGF5cyBhYm92ZSBvdGhlciBjb250ZW50ICovXHJcbn1cclxuXHJcbiNmb290ZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuI3NvY2lhbF9tZWRpYSBpIHtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuI3NvY2lhbF9tZWRpYSBpOmhvdmVyIHtcclxuICBjb2xvcjogI2RkZDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlubmVyLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICAuaW5uZXItY29udGVudCBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTJweCAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW46IDhweDtcclxuICB9XHJcblxyXG4gICNmb290ZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICB9XHJcblxyXG4gICNzb2NpYWxfbWVkaWEgaSB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfVxyXG59XHJcbiNwb3B1bGFye1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlOyAvKiBBZGp1c3QgZm9yIGNvbXBhY3Qgc2l6ZSAqL1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLyogRm9udCBMb2FkaW5nIChFeGFtcGxlIC0gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIGZvbnQgbG9hZGluZykgKi9cclxuLypcclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcclxuICBzcmM6IHVybCgnYXJjaGl0ZWN0cy1kYXVnaHRlci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgIHVybCgnYXJjaGl0ZWN0cy1kYXVnaHRlci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcclxuICBzcmM6IHVybCgncXVpY2tzYW5kLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICB1cmwoJ3F1aWNrc2FuZC1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnO1xyXG4gIHNyYzogdXJsKCdxdWlja3NhbmQtYm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgIHVybCgncXVpY2tzYW5kLWJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/common-layout/common-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/common-layout/common-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: CommonLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function() { return CommonLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return { exact: true }; };
const _c1 = function () { return ["/login", 1]; };
const _c2 = function () { return ["/login", 2]; };
class CommonLayoutComponent {
    constructor(route) {
        this.route = route;
        this.userType = ''; // '1' for Customer, '2' for Employee
    }
    ngOnInit() {
        // Subscribe to param changes to handle dynamic navigation like /login/1 or /login/2
        this.route.paramMap.subscribe(params => {
            this.userType = params.get('loginRole') || '';
            this.updateForm();
            //console.log('User type:', this.userType);
        });
    }
    updateForm() {
        // Logic to handle changes in form based on user type
        if (this.userType === '1') {
            // Configure UI or form fields for Customer Login
            console.log('Displaying Customer Login');
        }
        else if (this.userType === '2') {
            // Configure UI or form fields for Employee Login
            console.log('Displaying Employee Login');
        }
        else {
            // Optional fallback
            console.warn('Unknown login type');
        }
    }
}
CommonLayoutComponent.ɵfac = function CommonLayoutComponent_Factory(t) { return new (t || CommonLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CommonLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonLayoutComponent, selectors: [["app-common-layout"]], decls: 28, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../assets/logo.png", "alt", "Logo", "width", "40", "height", "40"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/viewPackages", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "loginDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "loginDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"]], template: function CommonLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TravelAway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Customer Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Employee Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav.navbar[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 0.95rem;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\r\n  z-index: 999;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 1.5rem;\r\n  color: #040404; \r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]:hover {\r\n  color: #0b5ed7;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  padding: 0.75rem 1rem;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n  color: #0d6efd;\r\n  font-weight: 500;\r\n  text-decoration: underline;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\r\n  margin-top: 0.5rem;\r\n  min-width: 200px;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 1.25rem;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9jb21tb24tbGF5b3V0L2NvbW1vbi1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9jb21tb24tbGF5b3V0L2NvbW1vbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdi5uYXZiYXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICMwNDA0MDQ7IFxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICBjb2xvcjogIzBiNWVkNztcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlcixcclxuLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwZDZlZmQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-common-layout',
                templateUrl: './common-layout.component.html',
                styleUrls: ['./common-layout.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layouts/employee-layout/employee-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/employee-layout/employee-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeLayoutComponent", function() { return EmployeeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return { exact: true }; };
class EmployeeLayoutComponent {
    constructor(router) {
        this.router = router;
        this.userRole = sessionStorage.getItem('userRole');
    }
    ngOnInit() {
    }
    logOut() {
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userRole');
        this.router.navigate(['/login/2']);
    }
}
EmployeeLayoutComponent.ɵfac = function EmployeeLayoutComponent_Factory(t) { return new (t || EmployeeLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EmployeeLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeLayoutComponent, selectors: [["app-employee-layout"]], decls: 20, vars: 2, consts: [["id", "nbar", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../assets/logo.png", "alt", "Logo", "width", "40", "height", "40"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], ["id", "nitems", 1, "navbar-nav"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/addhotel", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/addvehicle", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/viewhotels", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/viewvehicles", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["href", "#", 1, "nav-item", "nav-link", 3, "click"]], template: function EmployeeLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TravelAway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "AddHotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AddVehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ViewHotels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ViewVehicles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeLayoutComponent_Template_a_click_18_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav.navbar[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 0.95rem;\r\n  background-color: #ffffff; \r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); \r\n  z-index: 999;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 1.5rem;\r\n  color: #040404; \r\n}\r\n.navbar-brand[_ngcontent-%COMP%]:hover {\r\n  color: #0b5ed7; \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  margin-left: auto; \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: #333; \r\n  padding: 0.75rem 1rem; \r\n  transition: all 0.2s ease-in-out; \r\n  \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n  color: #0d6efd; \r\n  font-weight: 500;\r\n  text-decoration: underline; \r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  border-radius: 8px; \r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); \r\n  margin-top: 0.5rem;\r\n  min-width: 200px; \r\n  background-color: #ffffff; \r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 1.25rem; \r\n  font-size: 0.9rem; \r\n  color: #333; \r\n  transition: background-color 0.2s, color 0.2s; \r\n}\r\n.dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa; \r\n  color: #0d6efd; \r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n}\r\n.navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9lbXBsb3llZS1sYXlvdXQvZW1wbG95ZWUtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQseUNBQXlDLEVBQUUsNEJBQTRCO0VBQ3ZFLFlBQVk7QUFDZDtBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYyxFQUFFLDhCQUE4QjtBQUNoRDtBQUVBO0VBQ0UsY0FBYyxFQUFFLHdCQUF3QjtBQUMxQztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQixFQUFFLHVDQUF1QztBQUM1RDtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLFdBQVcsRUFBRSx1QkFBdUI7RUFDcEMscUJBQXFCLEVBQUUsc0JBQXNCO0VBQzdDLGdDQUFnQyxFQUFFLHdCQUF3Qjs7QUFFNUQ7QUFFQSxrQ0FBa0M7QUFDbEM7O0VBRUUsY0FBYyxFQUFFLDJDQUEyQztFQUMzRCxnQkFBZ0I7RUFDaEIsMEJBQTBCLEVBQUUsMkJBQTJCO0FBQ3pEO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0Usa0JBQWtCLEVBQUUsb0JBQW9CO0VBQ3hDLHlDQUF5QyxFQUFFLGtCQUFrQjtFQUM3RCxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUUsK0JBQStCO0VBQ2pELHlCQUF5QixFQUFFLHFCQUFxQjtBQUNsRDtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLHVCQUF1QixFQUFFLCtCQUErQjtFQUN4RCxpQkFBaUIsRUFBRSwrQkFBK0I7RUFDbEQsV0FBVyxFQUFFLHVCQUF1QjtFQUNwQyw2Q0FBNkMsRUFBRSx3QkFBd0I7QUFDekU7QUFFQTtFQUNFLHlCQUF5QixFQUFFLG1DQUFtQztFQUM5RCxjQUFjLEVBQUUsdUJBQXVCO0FBQ3pDO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsNFBBQTRQO0FBQzlQIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9lbXBsb3llZS1sYXlvdXQvZW1wbG95ZWUtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOYXZiYXIgc3R5bGluZyAqL1xyXG5uYXYubmF2YmFyIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kICovXHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IC8qIFN1YnRsZSBzaGFkb3cgZm9yIGRlcHRoICovXHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4vKiBCcmFuZCBzdHlsaW5nICovXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogIzA0MDQwNDsgLyogQmxhY2sgY29sb3IgZm9yIHRoZSBicmFuZCAqL1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICBjb2xvcjogIzBiNWVkNzsgLyogQmx1ZSBjb2xvciBvbiBob3ZlciAqL1xyXG59XHJcblxyXG4vKiBOYXZiYXIgbGlua3MgYWxpZ25tZW50ICovXHJcbi5uYXZiYXItbmF2IHtcclxuICBtYXJnaW4tbGVmdDogYXV0bzsgLyogUHVzaCBuYXZpZ2F0aW9uIGl0ZW1zIHRvIHRoZSByaWdodCAqL1xyXG59XHJcblxyXG4vKiBOYXZiYXIgbGlua3Mgc3R5bGluZyAqL1xyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBEZWZhdWx0IHRleHQgY29sb3IgKi9cclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07IC8qIFNwYWNpbmcgZm9yIGxpbmtzICovXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7IC8qIFNtb290aCBob3ZlciBlZmZlY3QgKi9cclxuICBcclxufVxyXG5cclxuLyogSG92ZXIgYW5kIGFjdGl2ZSBsaW5rIHN0eWxpbmcgKi9cclxuLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogIzBkNmVmZDsgLyogQmx1ZSBjb2xvciBmb3IgYWN0aXZlIGFuZCBob3ZlciBzdGF0ZXMgKi9cclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiBVbmRlcmxpbmUgZm9yIGVtcGhhc2lzICovXHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIG1lbnUgc3R5bGluZyAqL1xyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cclxuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU3VidGxlIHNoYWRvdyAqL1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtaW4td2lkdGg6IDIwMHB4OyAvKiBNaW5pbXVtIHdpZHRoIGZvciBkcm9wZG93biAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgKi9cclxufVxyXG5cclxuLyogRHJvcGRvd24gaXRlbSBzdHlsaW5nICovXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTsgLyogU3BhY2luZyBmb3IgZHJvcGRvd24gaXRlbXMgKi9cclxuICBmb250LXNpemU6IDAuOXJlbTsgLyogU2xpZ2h0bHkgc21hbGxlciBmb250IHNpemUgKi9cclxuICBjb2xvcjogIzMzMzsgLyogRGVmYXVsdCB0ZXh0IGNvbG9yICovXHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzOyAvKiBTbW9vdGggaG92ZXIgZWZmZWN0ICovXHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhOyAvKiBMaWdodCBncmF5IGJhY2tncm91bmQgb24gaG92ZXIgKi9cclxuICBjb2xvcjogIzBkNmVmZDsgLyogQmx1ZSB0ZXh0IG9uIGhvdmVyICovXHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgbmF2YmFyIHRvZ2dsZXIgKi9cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnJTNlJTNjcGF0aCBzdHJva2U9J3JnYmElMjgwLCAwLCAwLCAwLjUlMjknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-layout',
                templateUrl: './employee-layout.component.html',
                styleUrls: ['./employee-layout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layouts/user-layout/user-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/user-layout/user-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: UserLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLayoutComponent", function() { return UserLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return { exact: true }; };
class UserLayoutComponent {
    constructor(router) {
        this.router = router;
        this.userRole = sessionStorage.getItem('userRole');
    }
    ngOnInit() {
    }
    logOut() {
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userRole');
        this.router.navigate(['/login/1']);
    }
}
UserLayoutComponent.ɵfac = function UserLayoutComponent_Factory(t) { return new (t || UserLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLayoutComponent, selectors: [["app-user-layout"]], decls: 18, vars: 2, consts: [["id", "nbar", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../assets/logo.png", "alt", "Logo", "width", "40", "height", "40"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], ["id", "nitems", 1, "navbar-nav"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/viewPackages", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/editDetails", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/viewbookings", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["href", "#", 1, "nav-item", "nav-link", 3, "click"]], template: function UserLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TravelAway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ViewPackages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EditProfile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLayoutComponent_Template_a_click_16_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav.navbar[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 0.95rem;\r\n  background-color: #ffffff; \r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); \r\n  z-index: 999;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 1.5rem;\r\n  color: #040404; \r\n}\r\n.navbar-brand[_ngcontent-%COMP%]:hover {\r\n  color: #0b5ed7; \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  margin-left: auto; \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: #333; \r\n  padding: 0.75rem 1rem; \r\n  transition: all 0.2s ease-in-out; \r\n  \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n  color: #0d6efd; \r\n  font-weight: 500;\r\n  text-decoration: underline; \r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  border-radius: 8px; \r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); \r\n  margin-top: 0.5rem;\r\n  min-width: 200px; \r\n  background-color: #ffffff; \r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 1.25rem; \r\n  font-size: 0.9rem; \r\n  color: #333; \r\n  transition: background-color 0.2s, color 0.2s; \r\n}\r\n.dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa; \r\n  color: #0d6efd; \r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n}\r\n.navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy91c2VyLWxheW91dC91c2VyLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQjtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELHlDQUF5QyxFQUFFLDRCQUE0QjtFQUN2RSxZQUFZO0FBQ2Q7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBRSw4QkFBOEI7QUFDaEQ7QUFFQTtFQUNFLGNBQWMsRUFBRSx3QkFBd0I7QUFDMUM7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUIsRUFBRSx1Q0FBdUM7QUFDNUQ7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxXQUFXLEVBQUUsdUJBQXVCO0VBQ3BDLHFCQUFxQixFQUFFLHNCQUFzQjtFQUM3QyxnQ0FBZ0MsRUFBRSx3QkFBd0I7O0FBRTVEO0FBRUEsa0NBQWtDO0FBQ2xDOztFQUVFLGNBQWMsRUFBRSwyQ0FBMkM7RUFDM0QsZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFFLDJCQUEyQjtBQUN6RDtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQixFQUFFLG9CQUFvQjtFQUN4Qyx5Q0FBeUMsRUFBRSxrQkFBa0I7RUFDN0Qsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFFLCtCQUErQjtFQUNqRCx5QkFBeUIsRUFBRSxxQkFBcUI7QUFDbEQ7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSx1QkFBdUIsRUFBRSwrQkFBK0I7RUFDeEQsaUJBQWlCLEVBQUUsK0JBQStCO0VBQ2xELFdBQVcsRUFBRSx1QkFBdUI7RUFDcEMsNkNBQTZDLEVBQUUsd0JBQXdCO0FBQ3pFO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxtQ0FBbUM7RUFDOUQsY0FBYyxFQUFFLHVCQUF1QjtBQUN6QztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLDRQQUE0UDtBQUM5UCIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvdXNlci1sYXlvdXQvdXNlci1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5hdmJhciBzdHlsaW5nICovXHJcbm5hdi5uYXZiYXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgKi9cclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgLyogU3VidGxlIHNoYWRvdyBmb3IgZGVwdGggKi9cclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi8qIEJyYW5kIHN0eWxpbmcgKi9cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiAjMDQwNDA0OyAvKiBCbGFjayBjb2xvciBmb3IgdGhlIGJyYW5kICovXHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGI1ZWQ3OyAvKiBCbHVlIGNvbG9yIG9uIGhvdmVyICovXHJcbn1cclxuXHJcbi8qIE5hdmJhciBsaW5rcyBhbGlnbm1lbnQgKi9cclxuLm5hdmJhci1uYXYge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyAvKiBQdXNoIG5hdmlnYXRpb24gaXRlbXMgdG8gdGhlIHJpZ2h0ICovXHJcbn1cclxuXHJcbi8qIE5hdmJhciBsaW5rcyBzdHlsaW5nICovXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICMzMzM7IC8qIERlZmF1bHQgdGV4dCBjb2xvciAqL1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTsgLyogU3BhY2luZyBmb3IgbGlua3MgKi9cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDsgLyogU21vb3RoIGhvdmVyIGVmZmVjdCAqL1xyXG4gIFxyXG59XHJcblxyXG4vKiBIb3ZlciBhbmQgYWN0aXZlIGxpbmsgc3R5bGluZyAqL1xyXG4ubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIsXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQ2ZWZkOyAvKiBCbHVlIGNvbG9yIGZvciBhY3RpdmUgYW5kIGhvdmVyIHN0YXRlcyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIFVuZGVybGluZSBmb3IgZW1waGFzaXMgKi9cclxufVxyXG5cclxuLyogRHJvcGRvd24gbWVudSBzdHlsaW5nICovXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTdWJ0bGUgc2hhZG93ICovXHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7IC8qIE1pbmltdW0gd2lkdGggZm9yIGRyb3Bkb3duICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgYmFja2dyb3VuZCAqL1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBpdGVtIHN0eWxpbmcgKi9cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtOyAvKiBTcGFjaW5nIGZvciBkcm9wZG93biBpdGVtcyAqL1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtOyAvKiBTbGlnaHRseSBzbWFsbGVyIGZvbnQgc2l6ZSAqL1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBEZWZhdWx0IHRleHQgY29sb3IgKi9cclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7IC8qIFNtb290aCBob3ZlciBlZmZlY3QgKi9cclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7IC8qIExpZ2h0IGdyYXkgYmFja2dyb3VuZCBvbiBob3ZlciAqL1xyXG4gIGNvbG9yOiAjMGQ2ZWZkOyAvKiBCbHVlIHRleHQgb24gaG92ZXIgKi9cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBuYXZiYXIgdG9nZ2xlciAqL1xyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMCAzMCclM2UlM2NwYXRoIHN0cm9rZT0ncmdiYSUyODAsIDAsIDAsIDAuNSUyOScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIik7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-layout',
                templateUrl: './user-layout.component.html',
                styleUrls: ['./user-layout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_travelAway_services_auth_service_authservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/travelAway-services/auth-service/authservice */ "./src/travelAway-services/auth-service/authservice.ts");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/common-layout/common-layout.component */ "./src/app/layouts/common-layout/common-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email address is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Please enter a valid email address format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.errors.pattern);
} }
function LoginComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Password must be between 8 and 16 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r3.errors.minlength || !_r3.errors.maxlength);
} }
function LoginComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.msg, " ");
} }
class LoginComponent {
    constructor(userService, router, route, toastr, authService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.authService = authService;
        this.showDiv = false;
    }
    ngOnInit() {
        this.routeSubscription = this.route.paramMap.subscribe((params) => {
            const role = params.get('loginRole');
            if (role === '1') {
                this.loginRole = 1;
                this.rolename = "Customer";
            }
            else if (role === '2') {
                this.loginRole = 2;
                this.rolename = "Employee";
            }
            else {
                this.loginRole = 0;
                this.rolename = '';
            }
            console.log('Login Role Updated:', this.loginRole, 'Rolename:', this.rolename);
            // You might want to update any UI elements that depend on rolename here
        });
    }
    submitLoginForm(form) {
        console.log(form.value.email, form.value.password);
        this.authService.login(form.value.email, form.value.password, this.loginRole).subscribe({
            next: (response) => {
                this.showDiv = true;
                this.toastr.success("Login Successful");
                this.msg = "Login Successful";
                const role = this.authService.getRole();
                //console.log('User Role:', role);
                if (role == "Customer") {
                    sessionStorage.setItem('userName', form.value.email);
                    sessionStorage.setItem('userRole', "Customer");
                }
                else if (role == "Employee") {
                    sessionStorage.setItem('userName', form.value.email);
                    sessionStorage.setItem('userRole', "Employee");
                }
                this.router.navigate(['/home']);
                console.log('Login successful', response);
            },
            error: (error) => {
                console.error('Login failed', error);
                this.errorMsg = 'Invalid username or password.';
            },
        });
        // this.userService.validateCredentials(form.value.email, form.value.password, this.loginRole).subscribe(
        //   responseLoginStatus => {
        //     this.status = responseLoginStatus;
        //     this.showDiv = true;
        //     if (this.status==1) {
        //       this.toastr.success("Login Successful");
        //       this.msg = "Login Successful";
        //       sessionStorage.setItem('userName', form.value.email);
        //       sessionStorage.setItem('userRole', "Customer");
        //       this.router.navigate(['/home']);
        //     }
        //     else if (this.status == 2) {
        //       this.toastr.success("Login Successful");
        //       this.msg = "Login Successful";
        //       sessionStorage.setItem('userName', form.value.email);
        //       sessionStorage.setItem('userRole', "Employee");
        //       this.router.navigate(['/home']);
        //     }
        //   else {
        //     this.toastr.success("Try again with valid credentials.");
        //     this.msg = "Try again with valid credentials.";
        //   }
        // },
        // responseLoginError => {
        //   this.errorMsg = responseLoginError;
        // },
        //   () => console.log("SubmitLoginForm method executed successfully")
        // );
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_travelAway_services_auth_service_authservice__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 31, vars: 5, consts: [[1, "content"], [1, "login"], [2, "font-size", "40px"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "placeholder", "Your Email", "name", "email", "pattern", "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["emailRef", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Your Password", "name", "password", "minlength", "8", "maxlength", "16", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["passwordRef", "ngModel"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "rememberMe", "name", "rememberMe", "ngModel", "", 1, "form-check-input"], ["for", "rememberMe", 1, "form-check-label"], ["type", "submit", "id", "formsubmit", 3, "disabled"], [1, "form-group", "forgot-password"], ["routerLink", "/forgot-password"], ["class", "login-message", 4, "ngIf"], [1, "error-message"], [3, "hidden"], [1, "login-message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-common-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.submitLoginForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 3, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.rolename, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDiv);
    } }, directives: [_layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__["CommonLayoutComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  position: relative;\r\n  text-align: center;\r\n  \r\n  \r\n}\r\n\r\n.login[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  min-width: 320px; \r\n  height: auto; \r\n  min-height: 320px; \r\n  position: absolute;\r\n  top: 50%; \r\n  left: 50%; \r\n  transform: translate(-50%, -50%); \r\n  background-color: rgba(255, 255, 255, 0.8); \r\n  border-radius: 15px; \r\n  padding: 30px;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); \r\n  text-align: center; \r\n}\r\n\r\n.login[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { \r\n  font-size: 2.2em;\r\n  font-weight: bold;\r\n  color: #333;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { \r\n  font-size: 1.1em;\r\n  color: #666;\r\n  margin-bottom: 25px;\r\n  font-weight: normal; \r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] { \r\n  margin-bottom: 20px;\r\n  text-align: left; \r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  color: #555;\r\n  font-weight: bold; \r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%] {\r\n  width: calc(100% - 20px); \r\n  padding: 10px;\r\n  border: 1px solid #ccc; \r\n  border-radius: 8px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: normal; \r\n  font-size: 1em;\r\n  box-sizing: border-box; \r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%]:focus {\r\n  border-color: #007bff; \r\n  outline: none; \r\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25); \r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 25px; \r\n  padding: 12px 30px; \r\n  background-color: #ffc107; \r\n  color: #fff; \r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); \r\n  font-size: 1.1em; \r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; \r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%]:hover {\r\n  background-color: #e0a800; \r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); \r\n}\r\n\r\n\r\n\r\n.login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n\r\n.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child {\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding-top: 5px;\r\n  color: red;\r\n}\r\n\r\n\r\n\r\n.login-message[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  font-weight: bold; \r\n  color: #333;\r\n  text-align: left; \r\n}\r\n\r\n.form-check[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  text-align: left;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  text-align: right;\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #007bff; \r\n  text-decoration: none;\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5RUFBeUU7RUFDekUsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQixFQUFFLG1EQUFtRDtFQUNyRSxZQUFZLEVBQUUsbUNBQW1DO0VBQ2pELGlCQUFpQixFQUFFLHdCQUF3QjtFQUMzQyxrQkFBa0I7RUFDbEIsUUFBUSxFQUFFLHNDQUFzQztFQUNoRCxTQUFTLEVBQUUsd0NBQXdDO0VBQ25ELGdDQUFnQyxFQUFFLDhCQUE4QjtFQUNoRSwwQ0FBMEMsRUFBRSwrQkFBK0I7RUFDM0UsbUJBQW1CLEVBQUUsb0NBQW9DO0VBQ3pELGFBQWE7RUFDYiwwQ0FBMEMsRUFBRSxtQ0FBbUM7RUFDL0Usa0JBQWtCLEVBQUUsbUNBQW1DO0FBQ3pEOztBQUVBLFlBQVksZ0NBQWdDO0VBQzFDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQSxZQUFZLDBDQUEwQztFQUNwRCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBRSwyQkFBMkI7QUFDbEQ7O0FBRUEsY0FBYyx3Q0FBd0M7RUFDcEQsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFFLDZCQUE2QjtBQUNqRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQixFQUFFLGdDQUFnQztBQUNyRDs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLDZCQUE2QjtFQUN2RCxhQUFhO0VBQ2Isc0JBQXNCLEVBQUUsc0JBQXNCO0VBQzlDLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUJBQW1CLEVBQUUscUNBQXFDO0VBQzFELGNBQWM7RUFDZCxzQkFBc0IsRUFBRSwwQ0FBMEM7QUFDcEU7O0FBRUE7RUFDRSxxQkFBcUIsRUFBRSxxQkFBcUI7RUFDNUMsYUFBYSxFQUFFLDJCQUEyQjtFQUMxQywyQ0FBMkMsRUFBRSx3QkFBd0I7QUFDdkU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CLEVBQUUsd0JBQXdCO0VBQzdDLGtCQUFrQixFQUFFLHFCQUFxQjtFQUN6Qyx5QkFBeUIsRUFBRSxvQkFBb0I7RUFDL0MsV0FBVyxFQUFFLG1DQUFtQztFQUNoRCx3Q0FBd0MsRUFBRSxrQ0FBa0M7RUFDNUUsZ0JBQWdCLEVBQUUsZ0NBQWdDO0VBQ2xELG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDBFQUEwRSxFQUFFLHVCQUF1QjtBQUNyRzs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLDJCQUEyQjtFQUN0RCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx3Q0FBd0MsRUFBRSxnQ0FBZ0M7QUFDNUU7O0FBSUEsaUNBQWlDOztBQUNqQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsa0RBQWtEOztBQUNsRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSw4Q0FBOEM7O0FBQzlDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUEsdUNBQXVDOztBQUN2QztFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBSUEsOEJBQThCOztBQUU5QjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUUsMEJBQTBCO0VBQzdDLFdBQVc7RUFDWCxnQkFBZ0IsRUFBRSw2QkFBNkI7QUFDakQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWMsRUFBRSx1QkFBdUI7RUFDdkMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLDBEQUEwRDs7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7O0FBRUgsMEVBQTBFOztBQUMxRTs7Ozs7Ozs7Ozs7Ozs7R0FjRyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIENvbnNpZGVyIGFkZGluZyBhIHN1YnRsZSBiYWNrZ3JvdW5kIG92ZXJsYXkgaWYgdGhlIGltYWdlIGlzIHRvbyBidXN5ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpOyAqL1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWluLXdpZHRoOiAzMjBweDsgLyogU2xpZ2h0bHkgYWRqdXN0ZWQgbWluLXdpZHRoIGZvciBiZXR0ZXIgc3BhY2luZyAqL1xyXG4gIGhlaWdodDogYXV0bzsgLyogQWRqdXN0IGhlaWdodCBiYXNlZCBvbiBjb250ZW50ICovXHJcbiAgbWluLWhlaWdodDogMzIwcHg7IC8qIEFkanVzdGVkIG1pbi1oZWlnaHQgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7IC8qIENlbnRlciB2ZXJ0aWNhbGx5IHVzaW5nIHRyYW5zZm9ybSAqL1xyXG4gIGxlZnQ6IDUwJTsgLyogQ2VudGVyIGhvcml6b250YWxseSB1c2luZyB0cmFuc2Zvcm0gKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogVGhlIG1hZ2ljIGNlbnRlcmluZyB0cmljayAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgLyogU2xpZ2h0bHkgaW5jcmVhc2VkIG9wYWNpdHkgKi9cclxuICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiBTbGlnaHRseSBhZGp1c3RlZCBib3JkZXItcmFkaXVzICovXHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7IC8qIE1vcmUgcHJvbm91bmNlZCwgc29mdGVyIHNoYWRvdyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogRW5zdXJlIHRleHQgaW5zaWRlIGlzIGNlbnRlcmVkICovXHJcbn1cclxuXHJcbi5sb2dpbiBoMiB7IC8qIFN0eWxlIHRoZSBtYWluIFwiTG9naW5cIiB0ZXh0ICovXHJcbiAgZm9udC1zaXplOiAyLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubG9naW4gaDMgeyAvKiBTdHlsZSB0aGUgXCJhcyBDdXN0b21lci9FbXBsb3llZVwiIHRleHQgKi9cclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgLyogTWFrZSBpdCBsZXNzIHByb21pbmVudCAqL1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7IC8qIEFkZCBhIGNsYXNzIGZvciBiZXR0ZXIgb3JnYW5pemF0aW9uICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBBbGlnbiBsYWJlbHMgdG8gdGhlIGxlZnQgKi9cclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXdlaWdodDogYm9sZDsgLyogTWFrZSBsYWJlbHMgc3RhbmQgb3V0IGEgYml0ICovXHJcbn1cclxuXHJcbi5mb3JtaW5wdXRzIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7IC8qIEFkanVzdCB3aWR0aCBmb3IgcGFkZGluZyAqL1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogTGlnaHQgZ3JheSBib3JkZXIgKi9cclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IC8qIFVzZSBub3JtYWwgd2VpZ2h0IGZvciBpbnB1dCB0ZXh0ICovXHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogRW5zdXJlIHBhZGRpbmcgZG9lc24ndCBpbmNyZWFzZSB3aWR0aCAqL1xyXG59XHJcblxyXG4uZm9ybWlucHV0czpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyAvKiBCbHVlIGZvY3VzIGNvbG9yICovXHJcbiAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgb3V0bGluZSAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7IC8qIFN1YnRsZSBmb2N1cyBzaGFkb3cgKi9cclxufVxyXG5cclxuI2Zvcm1zdWJtaXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4OyAvKiBNb3JlIHJvdW5kZWQgYnV0dG9uICovXHJcbiAgcGFkZGluZzogMTJweCAzMHB4OyAvKiBBZGp1c3RlZCBwYWRkaW5nICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgLyogS2VlcCB0aGUgeWVsbG93ICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIHRleHQgZm9yIGJldHRlciBjb250cmFzdCAqL1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIFNvZnRlciwgbW9yZSByZWFsaXN0aWMgc2hhZG93ICovXHJcbiAgZm9udC1zaXplOiAxLjFlbTsgLyogU2xpZ2h0bHkgYWRqdXN0ZWQgZm9udCBzaXplICovXHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dDsgLyogU21vb3RoIHRyYW5zaXRpb25zICovXHJcbn1cclxuXHJcbiNmb3Jtc3VibWl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBhODAwOyAvKiBEYXJrZXIgeWVsbG93IG9uIGhvdmVyICovXHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4jZm9ybXN1Ym1pdDphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIEluc2V0LWxpa2UgZWZmZWN0IG9uIGFjdGl2ZSAqL1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFN0eWxpbmcgZm9yIHRoZSA8aDE+IGVsZW1lbnQgKi9cclxuLmxvZ2luIGgxIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubG9naW4gaDEgc3BhbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4vKiBTdHlsaW5nIGZvciB0aGUgZmlyc3QgZm9ybS1ncm91cCAobWFyZ2luLXRvcCkgKi9cclxuLmxvZ2luIGZvcm0gLmZvcm0tZ3JvdXA6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgZm9yIHRoZSB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzICovXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLyogU3R5bGluZyBmb3IgdGhlIHBvc3QtbG9naW4gbWVzc2FnZSAqL1xyXG4ubG9naW4tbWVzc2FnZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLi4uIHlvdXIgZXhpc3RpbmcgQ1NTIC4uLiAqL1xyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDsgLyogTWFrZSBsYWJlbHMgc3RhbmQgb3V0ICovXHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gbGFiZWxzIHRvIHRoZSBsZWZ0ICovXHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCBhIHtcclxuICBjb2xvcjogIzAwN2JmZjsgLyogRXhhbXBsZSBsaW5rIGNvbG9yICovXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4vKiBTdHlsZSBmb3IgcG90ZW50aWFsIHNvY2lhbCBsb2dpbiBhcmVhIChpZiB5b3UgYWRkIGl0KSAqL1xyXG4vKiAuc29jaWFsLWxvZ2luIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjY3QjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWdvb2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCNDQzNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcbi8qIEV4YW1wbGUgbG9hZGluZyBzcGlubmVyICh5b3UnbGwgbmVlZCB0byBpbXBsZW1lbnQgdGhlIGFjdHVhbCBzcGlubmVyKSAqL1xyXG4vKiAubG9hZGluZy1zcGlubmVyIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_travelAway_services_auth_service_authservice__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PaymentComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r91.msg, " ");
} }
class PaymentComponent {
    constructor(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.bookingId = sessionStorage.getItem('bookingId');
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Customer") {
            this.router.navigate(['/login/1']);
        }
        this.getTotal(this.bookingId);
    }
    //filldefaultfields(id: number, cost: string) {
    //  this.bookingId = id;
    //  this.cost = cost;
    //}
    getTotal(bookingid) {
        this.userService.getTotal(bookingid).subscribe(responseTotalStatus => {
            this.total = responseTotalStatus;
        }, responseTotalError => {
            this.errorMsg = responseTotalError;
        }, () => console.log("GetTotal method executed successfully"));
    }
    submitpayForm(form) {
        var pay = {
            bookingId: parseInt(form.value.bookid),
            paymentStatus: "Confirmed",
            totalAmount: parseInt(form.value.amount),
        };
        this.userService.makePayment(pay).subscribe(responseHotelStatus => {
            this.status = responseHotelStatus;
            this.showDiv = true;
            if (this.status) {
                alert("Payment Done successfully");
                sessionStorage.removeItem('bookingId');
                this.router.navigate(['/']);
            }
            else {
                this.msg = "Payment not done.Try Again";
            }
        }, responseHotelError => {
            this.errorMsg = responseHotelError;
        }, () => console.log("AddVehicle method executed successfully"));
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 22, vars: 5, consts: [[1, "content"], [1, "inner-content"], [2, "color", "red", "text-shadow", "2px 2px 2px black"], [3, "ngSubmit"], ["payForm", "ngForm"], ["for", "bookid", 2, "text-align", "left", "width", "70%", "margin", "0 auto", "margin-bottom", "2px"], [1, "form-group"], ["type", "number", "name", "bookid", "ngModel", "", "readonly", "", 1, "form-control", "forminputs", 3, "ngModel", "ngModelChange"], ["bookRef", "ngModel"], ["for", "amount", 2, "text-align", "left", "width", "70%", "margin", "0 auto", "margin-bottom", "2px"], ["type", "text", "name", "amount", "ngModel", "", "readonly", "", 1, "form-control", "forminputs", 3, "value", "ngModel", "ngModelChange"], ["amountRef", "ngModel"], ["type", "submit", "id", "formsubmit", 3, "disabled"], ["style", "color:red;text-align:center;", 4, "ngIf"], [2, "color", "red", "text-align", "center"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payment Gateway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Complete the payment to confirm booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PaymentComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.submitpayForm(_r88); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Booking ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_12_listener($event) { return ctx.bookingId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_17_listener($event) { return ctx.total = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PaymentComponent_div_21_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r88.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDiv);
    } }, directives: [_layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_3__["UserLayoutComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".inner-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  min-height: 350px;\r\n  height: 350px;\r\n  width: 30%;\r\n  min-width: 300px;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  background-color: rgba(255, 255, 255,0.6);\r\n  border-radius: 20px;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bolder;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n.forminputs[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  background-color: white;\r\n}\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 20px;\r\n  padding: 10px 20px;\r\n  background-color: yellow;\r\n  box-shadow: 2px 2px 2px #000000;\r\n  font-size: 25px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LDAuNik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uZm9ybWlucHV0cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2Zvcm1zdWJtaXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDAwMDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/popular-packages/popular-packages.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/popular-packages/popular-packages.component.ts ***!
  \****************************************************************/
/*! exports provided: PopularPackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularPackagesComponent", function() { return PopularPackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/package-service/package.service */ "./src/travelAway-services/package-service/package.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PopularPackagesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r165 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", package_r165.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", package_r165.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r165.packageName);
} }
class PopularPackagesComponent {
    constructor(packageService) {
        this.packageService = packageService;
        this.popularPackages = [];
        this.topPackages = [];
    }
    ngOnInit() {
        this.loadPopularPackages();
        if (this.popularPackages == null) {
            this.showMsg = true;
        }
        this.imagePath = "src/assets/";
    }
    loadPopularPackages() {
        this.packageService.getPackages().subscribe(responseGet => {
            this.showMsg = false;
            this.popularPackages = responseGet;
            this.topPackages = this.popularPackages.slice(0, 5);
        }, resonseError => {
            this.showMsg = true;
            this.popularPackages = null;
            this.errorMsg = resonseError;
        }, () => console.log("GetPackage method executed"));
    }
}
PopularPackagesComponent.ɵfac = function PopularPackagesComponent_Factory(t) { return new (t || PopularPackagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"])); };
PopularPackagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopularPackagesComponent, selectors: [["app-popular-packages"]], decls: 2, vars: 1, consts: [[1, "package-container"], ["class", "package-card", 4, "ngFor", "ngForOf"], [1, "package-card"], [3, "src", "alt"], ["id", "h5"]], template: function PopularPackagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopularPackagesComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topPackages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".package-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 20px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    animation: scroll 20s linear infinite;\r\n}\r\n\r\n.package-container[_ngcontent-%COMP%]:hover {\r\n    animation-play-state: paused;\r\n}\r\n\r\n.package-card[_ngcontent-%COMP%] {\r\n    \r\n    padding: 10px;\r\n    text-align: center;\r\n    flex-shrink: 0; \r\n    width: 200px; \r\n}\r\n\r\n.package-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 200px;  \r\n    height: 150px;  \r\n    -o-object-fit: cover;\r\n       object-fit: cover; \r\n    border-radius: 5px; \r\n}\r\n\r\n#h5[_ngcontent-%COMP%]\r\n{\r\n  font-family: 'Architects Daughter', cursive; \r\n  color: #fff; \r\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\r\n  font-size: x-large\r\n}\r\n\r\n@keyframes scroll {\r\n    from {\r\n        transform: translateX(100%);\r\n    }\r\n    to {\r\n        transform: translateX(-100%);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdWxhci1wYWNrYWdlcy9wb3B1bGFyLXBhY2thZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYyxFQUFFLHdCQUF3QjtJQUN4QyxZQUFZLEVBQUUsaUJBQWlCO0FBQ25DOztBQUNBO0lBQ0ksWUFBWSxHQUFHLHNCQUFzQjtJQUNyQyxhQUFhLEdBQUcsdUJBQXVCO0lBQ3ZDLG9CQUFpQjtPQUFqQixpQkFBaUIsRUFBRSxnQ0FBZ0M7SUFDbkQsa0JBQWtCLEVBQUUsbUNBQW1DO0FBQzNEOztBQUNBOztFQUVFLDJDQUEyQyxFQUFFLHlCQUF5QjtFQUN0RSxXQUFXLEVBQUUscUNBQXFDO0VBQ2xELDJDQUEyQztFQUMzQztBQUNGOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvcG9wdWxhci1wYWNrYWdlcy9wb3B1bGFyLXBhY2thZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFja2FnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYW5pbWF0aW9uOiBzY3JvbGwgMjBzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnBhY2thZ2UtY29udGFpbmVyOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuXHJcbi5wYWNrYWdlLWNhcmQge1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDsgLyogUHJldmVudHMgY29sbGFwc2luZyAqL1xyXG4gICAgd2lkdGg6IDIwMHB4OyAvKiBBZGp1c3Qgd2lkdGggKi9cclxufVxyXG4ucGFja2FnZS1jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7ICAvKiBTZXQgZGVzaXJlZCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxNTBweDsgIC8qIFNldCBkZXNpcmVkIGhlaWdodCAqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7IC8qIEVuc3VyZXMgdGhlIGltYWdlIGZpdHMgd2VsbCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBPcHRpb25hbDogQWRkcyByb3VuZGVkIGNvcm5lcnMgKi9cclxufVxyXG4jaDVcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcicsIGN1cnNpdmU7IC8qIEN1c3RvbSBoZWFkbGluZSBmb250ICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIGhlYWRsaW5lIHRleHQgZm9yIGNvbnRyYXN0ICovXHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBmb250LXNpemU6IHgtbGFyZ2VcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY3JvbGwge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularPackagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popular-packages',
                templateUrl: './popular-packages.component.html',
                styleUrls: ['./popular-packages.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/protected/protected.component.ts":
/*!**************************************************!*\
  !*** ./src/app/protected/protected.component.ts ***!
  \**************************************************/
/*! exports provided: ProtectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedComponent", function() { return ProtectedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
// protected.component.ts




function ProtectedComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r162.data.message, " - User: ", ctx_r162.data.user, "");
} }
function ProtectedComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r163.error);
} }
class ProtectedComponent {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:44393/api/TravelAway'; // Replace with your .NET API URL
    }
    ngOnInit() {
        this.http.get(this.apiUrl).subscribe({
            next: (response) => (this.data = response),
            error: (err) => (this.error = 'Failed to load protected data.'),
        });
    }
}
ProtectedComponent.ɵfac = function ProtectedComponent_Factory(t) { return new (t || ProtectedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProtectedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProtectedComponent, selectors: [["app-protected"]], decls: 4, vars: 2, consts: [[4, "ngIf"]], template: function ProtectedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Protected Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProtectedComponent_div_2_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProtectedComponent_div_3_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtectedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-protected',
                template: `
    <h2>Protected Data</h2>
    <div *ngIf="data">{{ data.message }} - User: {{ data.user }}</div>
    <div *ngIf="error">{{ error }}</div>
  `,
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/user-service/user.service */ "./src/travelAway-services/user-service/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/common-layout/common-layout.component */ "./src/app/layouts/common-layout/common-layout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "First Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name should only contain letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r8.errors.pattern);
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Last Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last Name should only contain letters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r10.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r10.errors.pattern);
} }
function RegisterComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please enter a valid email address format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r12.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r12.errors.pattern);
} }
function RegisterComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Password must be between 8 and 16 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r14.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r14.errors.minlength || !_r14.errors.maxlength);
} }
function RegisterComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select your gender.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r16.errors.required);
} }
function RegisterComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Passwords do not match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r18.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r18.value !== _r14.value && !(_r18.errors == null ? null : _r18.errors.required));
} }
function RegisterComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact number should be 10 digits and not start with 0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r20.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r20.errors.pattern);
} }
function RegisterComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date of birth is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r22.errors.required);
} }
function RegisterComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r24.errors.required);
} }
function RegisterComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You must agree to the terms and conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(_r7.controls["termsAndConditions"] == null ? null : _r7.controls["termsAndConditions"].errors == null ? null : _r7.controls["termsAndConditions"].errors.required));
} }
function RegisterComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.msg, " ");
} }
class RegisterComponent {
    constructor(userService, formBuilder, router) {
        //this.registerForm = this.formBuilder.group({
        //  firstName: ['', [Validators.required, Validators.pattern("[a-zA-z]{1,}")]],
        //  lastName: ['', [Validators.required, Validators.pattern("[a-zA-z]{1,}")]],
        //  emailId: ['', [Validators.required, Validators.pattern("^[a-zA-z0-9+_.-]+@[a-zA-z0-9+_.-]+$")]],
        //  gender: ['', Validators.required],
        //  password: ['', [Validators.required,Validators.maxLength(16)]],
        //  confirmpassword: ['', Validators.required, Validators.minLength(8), Validators.maxLength(16)],
        //  dateOfbirth: ['', [Validators.required, checkDate]],
        //  address: ['', Validators.required],
        //  contactNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("[1-9]{1}[0-9]{9}")]]
        //});
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
    }
    SubmitForm(form) {
        var email = form.value.emailId;
        this.userService.addUserDetails(form.value.firstName, form.value.lastName, form.value.emailId, form.value.password, parseInt(form.value.contactNumber), form.value.address, form.value.gender, new Date("1999-08-23"), 1).subscribe(responseRegisterStatus => {
            this.status = responseRegisterStatus;
            this.showDiv = true;
            if (this.status == 1) {
                this.msg = "Registered Successfully";
                sessionStorage.setItem('userName', email);
                sessionStorage.setItem('userRole', "Customer");
                this.router.navigate(['/home']);
            }
            else {
                this.msg = "Not able to register";
            }
        }, responseRegisterError => {
            this.errorMsg = responseRegisterError;
        }, () => console.log("SubmitLoginForm method executed successfully"));
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 83, vars: 12, consts: [[1, "content"], [1, "signup"], [3, "ngSubmit"], ["signupForm", "ngForm"], [1, "name-group"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "placeholder", "Enter your first name", "name", "firstName", "ngModel", "", "required", "", "pattern", "[a-zA-z]{1,}", 1, "form-control", "forminputs"], ["firstNameRef", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "placeholder", "Enter your last name", "name", "lastName", "ngModel", "", "required", "", "pattern", "[a-zA-z]{1,}", 1, "form-control", "forminputs"], ["lastNameRef", "ngModel"], ["for", "emailId"], ["type", "email", "id", "emailId", "placeholder", "Enter your email address", "name", "emailId", "ngModel", "", "required", "", "pattern", "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", 1, "form-control", "forminputs"], ["emailRef", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Enter your password", "name", "password", "minlength", "8", "maxlength", "16", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["passwordRef", "ngModel"], ["for", "gender"], ["id", "gender", "name", "gender", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["genderRef", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "M"], ["value", "F"], ["value", "O"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "placeholder", "Confirm your password", "name", "cpassword", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["confirmPasswordRef", "ngModel"], ["for", "contactNumber"], ["type", "text", "id", "contactNumber", "placeholder", "Enter your contact number", "name", "contactNumber", "ngModel", "", "required", "", "pattern", "[1-9]{1}[0-9]{9}", 1, "form-control", "forminputs"], ["contactNumberRef", "ngModel"], ["for", "dateOfBirth"], ["type", "date", "id", "dateOfBirth", "name", "dateOfBirth", "placeholder", "Select your date of birth", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["dobRef", "ngModel"], ["for", "address"], ["id", "address", "placeholder", "Enter your address", "name", "address", "ngModel", "", "required", "", 1, "form-control", "forminputs"], ["addressRef", "ngModel"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "termsAndConditions", "name", "termsAndConditions", "ngModel", "", "required", "", 1, "form-check-input"], ["for", "termsAndConditions", 1, "form-check-label"], ["href", "/terms", "target", "_blank"], ["href", "/privacy", "target", "_blank"], ["type", "submit", "id", "formsubmit", 3, "disabled"], ["class", "signup-message", 4, "ngIf"], [1, "error-message"], [3, "hidden"], [1, "signup-message"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-common-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.SubmitForm(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_div_31_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select your gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RegisterComponent_div_45_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RegisterComponent_div_51_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RegisterComponent_div_57_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RegisterComponent_div_63_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "textarea", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, RegisterComponent_div_69_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "I agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, RegisterComponent_div_79_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, RegisterComponent_div_82_Template, 3, 1, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors && (_r10.dirty || _r10.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors && (_r12.dirty || _r12.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors && (_r14.dirty || _r14.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.errors && (_r16.dirty || _r16.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.errors && (_r18.dirty || _r18.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r20.errors && (_r20.dirty || _r20.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r22.errors && (_r22.dirty || _r22.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.errors && (_r24.dirty || _r24.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.controls["termsAndConditions"] == null ? null : _r7.controls["termsAndConditions"].invalid) && ((_r7.controls["termsAndConditions"] == null ? null : _r7.controls["termsAndConditions"].dirty) || (_r7.controls["termsAndConditions"] == null ? null : _r7.controls["termsAndConditions"].touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r7.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDiv);
    } }, directives: [_layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_4__["CommonLayoutComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  position: relative;\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  min-width: 300px;\r\n  margin: 20px auto 15px auto; \r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border-radius: 15px;\r\n  padding: 15px;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\r\n  text-align: center;\r\n  max-width: 500px;\r\n  min-height: auto;\r\n  font-size: 1.0em; \r\n}\r\n\r\n.signup[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: #333;\r\n  margin-bottom: 15px;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  text-align: left;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 2px;\r\n  font-weight: bold;\r\n  color: #555;\r\n  font-size: 0.85em;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%] {\r\n  width: calc(100% - 16px);\r\n  padding: 6px 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: normal;\r\n  font-size: 0.9em;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #777;\r\n  opacity: 1;\r\n  font-weight: normal;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%]::placeholder {\r\n  color: #777;\r\n  opacity: 1;\r\n  font-weight: normal;\r\n}\r\n\r\n.forminputs[_ngcontent-%COMP%]:focus {\r\n  border-color: #007bff;\r\n  outline: none;\r\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: red;\r\n  padding-top: 2px;\r\n  font-size: 0.75em;\r\n}\r\n\r\n#formsubmit[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 25px;\r\n  padding: 8px 20px;\r\n  background-color: #ffc107;\r\n  color: #fff;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n  font-size: 0.95em;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\r\n  margin-top: 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  min-width: auto;\r\n}\r\n\r\n.signup-message[_ngcontent-%COMP%] {\r\n  color: red;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  padding-left: 1.5em;\r\n  text-align: left;\r\n  font-size: 0.88em;\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-left: -1.5em;\r\n}\r\n\r\n.form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  text-decoration: none;\r\n}\r\n\r\n.form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n\r\n.name-group[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.name-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 0; \r\n}\r\n\r\n.name-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 2px; \r\n  font-weight: bold;\r\n  color: #555;\r\n  font-size: 0.85em; \r\n  width: 100%;\r\n}\r\n\r\n.name-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .forminputs[_ngcontent-%COMP%] {\r\n  width: calc(100% - 16px); \r\n  font-size: 0.9em; \r\n}\r\n\r\n.name-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\r\n  margin-top: 2px; \r\n  font-size: 0.75em; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiwyQkFBMkIsRUFBRSxnQ0FBZ0M7RUFDN0QsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFFLDRDQUE0QztBQUNoRTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUpBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwwRUFBMEU7RUFDMUUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSwwRUFBMEU7O0FBQzFFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCLEVBQUUsbURBQW1EO0FBQ3ZFOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQixFQUFFLG9DQUFvQztFQUN4RCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQixFQUFFLHVEQUF1RDtFQUMxRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0IsRUFBRSx5QkFBeUI7RUFDbkQsZ0JBQWdCLEVBQUUsNkJBQTZCO0FBQ2pEOztBQUVBO0VBQ0UsZUFBZSxFQUFFLDRDQUE0QztFQUM3RCxpQkFBaUIsRUFBRSxxQ0FBcUM7QUFDMUQiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNpZ251cCB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvIDE1cHggYXV0bzsgLyogQ29uc2lzdGVudCBzaG9ydGhhbmQgbWFyZ2luICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWluLWhlaWdodDogYXV0bztcclxuICBmb250LXNpemU6IDEuMGVtOyAvKiBCYXNlIGZvbnQgc2l6ZSBmb3IgdGhlIHNpZ251cCBjb250YWluZXIgKi9cclxufVxyXG5cclxuLnNpZ251cCBoMSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZm9udC1zaXplOiAwLjg1ZW07XHJcbn1cclxuXHJcbi5mb3JtaW5wdXRzIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XHJcbiAgcGFkZGluZzogNnB4IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtaW5wdXRzOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZm9ybWlucHV0czpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG59XHJcblxyXG4jZm9ybXN1Ym1pdCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uc2lnbnVwLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2sge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMC44OGVtO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xLjVlbTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2stbGFiZWwgYSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1sYWJlbCBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLyogU3R5bGVzIGZvciB0d28tY29sdW1uIGxheW91dCAoRmlyc3QgTmFtZSwgTGFzdCBOYW1lOyBFbWFpbCwgUGFzc3dvcmQpICovXHJcbi5uYW1lLWdyb3VwIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5hbWUtZ3JvdXAgLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7IC8qIE92ZXJyaWRlIGRlZmF1bHQgZm9ybS1ncm91cCBtYXJnaW4gd2l0aGluIGdyaWQgKi9cclxufVxyXG5cclxuLm5hbWUtZ3JvdXAgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDsgLyogQWRqdXN0IGxhYmVsIG1hcmdpbiB3aXRoaW4gZ3JpZCAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGZvbnQtc2l6ZTogMC44NWVtOyAvKiBBZGp1c3QgbGFiZWwgZm9udCBzaXplIHdpdGhpbiBncmlkIGZvciBjb25zaXN0ZW5jeSAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmFtZS1ncm91cCAuZm9ybS1ncm91cCAuZm9ybWlucHV0cyB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpOyAvKiBNYWludGFpbiBpbnB1dCB3aWR0aCAqL1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07IC8qIE1haW50YWluIGlucHV0IGZvbnQgc2l6ZSAqL1xyXG59XHJcblxyXG4ubmFtZS1ncm91cCAuZm9ybS1ncm91cCAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMnB4OyAvKiBBZGp1c3QgZXJyb3IgbWVzc2FnZSBtYXJnaW4gd2l0aGluIGdyaWQgKi9cclxuICBmb250LXNpemU6IDAuNzVlbTsgLyogTWFpbnRhaW4gZXJyb3IgbWVzc2FnZSBmb250IHNpemUgKi9cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
function checkDate(control) {
    var currentDate = new Date();
    var givenDate = new Date(control.value);
    console.log(currentDate);
    console.log(givenDate);
    if (givenDate <= currentDate || givenDate == null) {
        return null;
    }
    else {
        return {
            dateError: {
                message: "Enter a date less than today's date"
            }
        };
    }
}


/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r167.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r167.label);
} }
function BreadcrumbComponent_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r167.label);
} }
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_li_2_a_1_Template, 2, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const last_r168 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", last_r168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r168);
} }
class BreadcrumbComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.breadcrumbs = [];
    }
    // ngOnInit(): void {
    //   this.router.events
    //     .pipe(
    //       filter((event) => event instanceof NavigationEnd),
    //       map(() => this.buildBreadcrumb(this.activatedRoute.root))
    //     )
    //     .subscribe((breadcrumbs) => {
    //       this.breadcrumbs = breadcrumbs;
    //     });
    // }
    ngOnInit() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.buildBreadcrumb(this.activatedRoute.root)))
            .subscribe((breadcrumbs) => {
            console.log('Breadcrumbs:', breadcrumbs); // Debugging
            this.breadcrumbs = breadcrumbs;
        });
    }
    buildBreadcrumb(route, url = '', breadcrumbs = []) {
        const children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            const routeURL = child.snapshot.url.map((segment) => segment.path).join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;
            }
            const label = child.snapshot.data['breadcrumb'];
            if (label) {
                breadcrumbs.push({ label, url });
            }
            return this.buildBreadcrumb(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 3, vars: 1, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["class", "breadcrumb-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 3, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".breadcrumb[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  padding: 10px 15px;\r\n  margin: 0;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.breadcrumb-item[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  color: #007bff;\r\n}\r\n\r\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #007bff;\r\n}\r\n\r\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.breadcrumb-item.active[_ngcontent-%COMP%] {\r\n  color: #6c757d;\r\n  pointer-events: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iLWl0ZW0gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-bookings/view-bookings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-bookings/view-bookings.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookingsComponent", function() { return ViewBookingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/package-service/package.service */ "./src/travelAway-services/package-service/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ViewBookingsComponent_div_6_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const booking_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", booking_r145.hotelName, " (", booking_r145.noOfRooms, " rooms)");
} }
function ViewBookingsComponent_div_6_i_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const booking_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", booking_r145.totalAmount, "");
} }
function ViewBookingsComponent_div_6_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Book hotel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewBookingsComponent_div_6_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hotel Not Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewBookingsComponent_div_6_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Make Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewBookingsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Package:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Places to visit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Days/Nights:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Date of Travel:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hotel:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewBookingsComponent_div_6_i_23_Template, 2, 2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Not Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Total Adults/children:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ViewBookingsComponent_div_6_i_34_Template, 2, 1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Not Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBookingsComponent_div_6_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); const booking_r145 = ctx.$implicit; const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r153.gohotelbook(booking_r145.bookingId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ViewBookingsComponent_div_6_span_39_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hotel Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ViewBookingsComponent_div_6_span_42_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBookingsComponent_div_6_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); const booking_r145 = ctx.$implicit; const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r155.gocustcare(booking_r145.bookingId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Customer Care");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBookingsComponent_div_6_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); const booking_r145 = ctx.$implicit; const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r156.gopayment(booking_r145.bookingId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ViewBookingsComponent_div_6_span_46_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Payment done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const booking_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", booking_r145.packageName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", booking_r145.placesToVisit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u00A0\u00A0\u00A0", booking_r145.noOfDays, "/", booking_r145.noOfNights, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", booking_r145.dateOfTravel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r145.noOfRooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", booking_r145.noOfRooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u00A0\u00A0\u00A0", booking_r145.numberOfAdults, "/", booking_r145.numberOfChildren, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r145.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", booking_r145.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", booking_r145.noOfRooms || booking_r145.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !booking_r145.noOfRooms && !booking_r145.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !booking_r145.noOfRooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !booking_r145.noOfRooms && booking_r145.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", booking_r145.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !booking_r145.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !booking_r145.totalAmount);
} }
function ViewBookingsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No bookings available...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewBookingsComponent {
    constructor(packageService, router, route) {
        this.packageService = packageService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.userRole = sessionStorage.getItem('userRole');
        this.userName = sessionStorage.getItem('userName');
        if (this.userRole != "Customer") {
            this.router.navigate(['/login/1']);
        }
        this.getBookings();
    }
    getBookings() {
        this.packageService.getBookings(this.userName).subscribe(responseTotalStatus => {
            this.rawbookings = responseTotalStatus;
            for (let booking of this.rawbookings) {
                if (booking['hotelName'] == 'N/A') {
                    booking['noOfRooms'] = 0;
                }
                if (booking['totalAmount'] < 0) {
                    booking['totalAmount'] = 0;
                }
                booking['dateOfTravel'] = booking['dateOfTravel'].substring(0, 10);
            }
            this.bookings = this.rawbookings;
        }, responseTotalError => {
            this.errorMsg = responseTotalError;
        }, () => console.log("ViewBookings method executed successfully"));
    }
    gocustcare(bookingid) {
        if (sessionStorage.getItem('bookingId')) {
            sessionStorage.removeItem('bookingId');
        }
        sessionStorage.setItem('bookingId', bookingid);
        this.router.navigate(['/custcare']);
    }
    gohotelbook(bookingid) {
        if (sessionStorage.getItem('bookingId')) {
            sessionStorage.removeItem('bookingId');
        }
        sessionStorage.setItem('bookingId', bookingid);
        this.router.navigate(['/accommodation']);
    }
    gopayment(bookingid) {
        if (sessionStorage.getItem('bookingId')) {
            sessionStorage.removeItem('bookingId');
        }
        sessionStorage.setItem('bookingId', bookingid);
        this.router.navigate(['/payment']);
    }
}
ViewBookingsComponent.ɵfac = function ViewBookingsComponent_Factory(t) { return new (t || ViewBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewBookingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewBookingsComponent, selectors: [["app-view-bookings"]], decls: 8, vars: 2, consts: [[1, "content"], ["id", "packages"], ["id", "pkgheading"], [1, "bookings-container"], ["class", "row pkgrow", 4, "ngFor", "ngForOf"], ["id", "nobooking", 4, "ngIf"], [1, "row", "pkgrow"], [1, "col-md-5", "col-12", "pkgdelcol"], [4, "ngIf"], [3, "hidden"], [1, "col-md-2", "col-12", "pkgdelcol", "img-container"], [1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["routerLink", "/payment", 1, "btn", "btn-success", "btn-sm", 3, "disabled", "click"], ["id", "nobooking"]], template: function ViewBookingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewBookingsComponent_div_6_Template, 49, 18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewBookingsComponent_div_7_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bookings.length);
    } }, directives: [_layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_3__["UserLayoutComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n#packages[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  min-height: 400px;\r\n  background-color: rgba(255, 255, 255, 0.429); \r\n  margin: 50px auto 20px auto;\r\n  padding: 20px;\r\n  border-radius: 15px; \r\n}\r\n\r\n#nobooking[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'Quicksand', sans-serif;\r\n  background-color: rgba(255, 255, 255, 0.8); \r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  border-radius: 10px; \r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n#nobooking[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem; \r\n  font-weight: bold; \r\n  color: #333; \r\n  margin: 0; \r\n}\r\n\r\n.pkgrow[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 49%;\r\n  background-color: rgba(255, 255, 255, 0.477); \r\n  padding: 15px; \r\n  margin-bottom: 10px; \r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n.pkgdelcol[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.pkgdelcol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-family:  sans-serif;\r\n  font-weight: bold;\r\n  color: #333; \r\n}\r\n.pkgdelcol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: rgb(111, 111, 111);\r\n}\r\n\r\nbutton.btn[_ngcontent-%COMP%] {\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: bold;\r\n  padding: 8px 12px;\r\n  border-radius: 5px;\r\n  transition: background-color 0.3s ease, transform 0.2s ease;\r\n}\r\nbutton.btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px); \r\n}\r\nbutton.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n}\r\nbutton.btn-primary[_ngcontent-%COMP%]:disabled {\r\n  background-color: #cccccc;\r\n  color: #666;\r\n  cursor: not-allowed;\r\n}\r\nbutton.btn-danger[_ngcontent-%COMP%] {\r\n  background-color: #dc3545;\r\n  color: #fff;\r\n}\r\nbutton.btn-success[_ngcontent-%COMP%] {\r\n  background-color: #28a745;\r\n  color: #fff;\r\n}\r\nbutton.btn-success[_ngcontent-%COMP%]:disabled {\r\n  background-color: #cccccc;\r\n  color: #666;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n  justify-content: space-around;\r\n}\r\n.pkgimg[_ngcontent-%COMP%] {\r\n  height: 140px;\r\n  width: 100%;\r\n  min-height: 140px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n#pkgheading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 2rem; \r\n  margin-bottom: 20px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1ib29raW5ncy92aWV3LWJvb2tpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0Q0FBNEMsRUFBRSxxQ0FBcUM7RUFDbkYsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUIsRUFBRSxzQ0FBc0M7QUFDN0Q7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLDBDQUEwQyxFQUFFLDZDQUE2QztFQUN6RixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUIsRUFBRSxvQkFBb0I7RUFDekMsOENBQThDLEVBQUUsMkJBQTJCO0FBQzdFO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsaUJBQWlCLEVBQUUsNENBQTRDO0VBQy9ELGlCQUFpQixFQUFFLDJCQUEyQjtFQUM5QyxXQUFXLEVBQUUsbUNBQW1DO0VBQ2hELFNBQVMsRUFBRSwwQkFBMEI7QUFDdkM7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLDRDQUE0QyxFQUFFLHdDQUF3QztFQUN0RixhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELG1CQUFtQixFQUFFLG9DQUFvQztFQUN6RCxtQkFBbUI7RUFDbkIsd0NBQXdDLEVBQUUsNEJBQTRCO0FBQ3hFO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBRSxzQ0FBc0M7QUFDckQ7QUFFQTtFQUNFLHlCQUF5QixDQUFDLDRCQUE0QjtBQUN4RDtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkRBQTJEO0FBQzdEO0FBRUE7RUFDRSwyQkFBMkIsRUFBRSx5QkFBeUI7QUFDeEQ7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHdDQUF3QyxFQUFFLCtCQUErQjtBQUMzRTtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBRSxrQ0FBa0M7RUFDbkQsbUJBQW1CLEVBQUUsa0NBQWtDO0FBQ3pEIiwiZmlsZSI6InNyYy9hcHAvdmlldy1ib29raW5ncy92aWV3LWJvb2tpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIGNvbnRlbnQgc3R5bGluZyAqL1xyXG4uY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8qIFBhY2thZ2VzIGNvbnRhaW5lciBzdHlsaW5nICovXHJcbiNwYWNrYWdlcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDI5KTsgLyogU2xpZ2h0bHkgb3BhcXVlIHdoaXRlIGJhY2tncm91bmQgKi9cclxuICBtYXJnaW46IDUwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGEgbW9kZXJuIGxvb2sgKi9cclxufVxyXG5cclxuLyogTm8gYm9va2luZ3MgYXZhaWxhYmxlIHNlY3Rpb24gKi9cclxuI25vYm9va2luZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyAvKiBTb2Z0ZXIgYmFja2dyb3VuZCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIElubmVyIHNoYWRvdyBmb3IgZGVwdGggKi9cclxufVxyXG5cclxuLyogTm8gYm9va2luZ3MgdGV4dCBzdHlsaW5nICovXHJcbiNub2Jvb2tpbmcgaDEge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtOyAvKiBMYXJnZXIgZm9udCBzaXplIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cclxuICBmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCB0ZXh0IGZvciBlbXBoYXNpcyAqL1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBEYXJrZXIgdGV4dCBjb2xvciBmb3IgY29udHJhc3QgKi9cclxuICBtYXJnaW46IDA7IC8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xyXG59XHJcblxyXG4vKiBCb29raW5nIHJvdyBzdHlsaW5nICovXHJcbi5wa2dyb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQ5JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDc3KTsgLyogU29mdGVyIHllbGxvdyBmb3IgYmV0dGVyIGFlc3RoZXRpY3MgKi9cclxuICBwYWRkaW5nOiAxNXB4OyAvKiBJbmNyZWFzZWQgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIENvbnNpc3RlbnQgc3BhY2luZyBiZXR3ZWVuIHJvd3MgKi9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFN1YnRsZSBzaGFkb3cgZm9yIGRlcHRoICovXHJcbn1cclxuXHJcbi8qIEJvb2tpbmcgZGV0YWlscyBjb2x1bW4gc3R5bGluZyAqL1xyXG4ucGtnZGVsY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wa2dkZWxjb2wgcCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzMzM7IC8qIERhcmtlciB0ZXh0IGNvbG9yIGZvciByZWFkYWJpbGl0eSAqL1xyXG59XHJcblxyXG4ucGtnZGVsY29sIHAgc3BhbiB7XHJcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMTExKTsvKiBCbHVlIGNvbG9yIGZvciBlbXBoYXNpcyAqL1xyXG59XHJcblxyXG4vKiBCdXR0b25zIHN0eWxpbmcgKi9cclxuYnV0dG9uLmJ0biB7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuYnV0dG9uLmJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyAvKiBMaWZ0IGVmZmVjdCBvbiBob3ZlciAqL1xyXG59XHJcblxyXG5idXR0b24uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBjb2xvcjogIzY2NjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG5idXR0b24uYnRuLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5idXR0b24uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLyogSW1hZ2UgY29udGFpbmVyIHN0eWxpbmcgKi9cclxuLmltZy1jb250YWluZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucGtnaW1nIHtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU3VidGxlIHNoYWRvdyBmb3IgZW1waGFzaXMgKi9cclxufVxyXG5cclxuLyogSGVhZGluZyBzdHlsaW5nICovXHJcbiNwa2doZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTsgLyogTGFyZ2VyIGZvbnQgc2l6ZSBmb3IgZW1waGFzaXMgKi9cclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBZGQgc3BhY2luZyBiZWxvdyB0aGUgaGVhZGluZyAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewBookingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-bookings',
                templateUrl: './view-bookings.component.html',
                styleUrls: ['./view-bookings.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-hotels/view-hotels.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-hotels/view-hotels.component.ts ***!
  \******************************************************/
/*! exports provided: ViewHotelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHotelsComponent", function() { return ViewHotelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/package-service/package.service */ "./src/travelAway-services/package-service/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/employee-layout/employee-layout.component */ "./src/app/layouts/employee-layout/employee-layout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ViewHotelsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotel Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hotel Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Single Room Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Double Room Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Deluxe Room Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Suite Room Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", hotel_r158.hotelName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", hotel_r158.hotelRating, "-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u20B9", hotel_r158.singleRoomPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u20B9", hotel_r158.doubleRoomPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u20B9", hotel_r158.deluxeeRoomPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u20B9", hotel_r158.suiteRoomPrice, "");
} }
class ViewHotelsComponent {
    constructor(packageService, router, route) {
        this.packageService = packageService;
        this.router = router;
        this.route = route;
        this.hotels = [];
    }
    ngOnInit() {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Employee") {
            this.router.navigate(['/login/2']);
        }
        this.getHotels();
    }
    getHotels() {
        this.packageService.getHotels().subscribe(responseHotelStatus => {
            this.hotels = responseHotelStatus;
            console.log(this.hotels);
        }, responseHotelError => {
            this.errorMsg = responseHotelError;
        }, () => console.log("ViewHotels method executed successfully"));
    }
}
ViewHotelsComponent.ɵfac = function ViewHotelsComponent_Factory(t) { return new (t || ViewHotelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewHotelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewHotelsComponent, selectors: [["app-view-hotels"]], decls: 10, vars: 2, consts: [[1, "content"], ["id", "packages"], ["id", "pkgheading"], [1, "hotels-container"], ["class", "row pkgrow", 4, "ngFor", "ngForOf"], ["id", "nohotel", 3, "hidden"], [1, "row", "pkgrow"], [1, "col-md-5", "col-12", "pkgdelcol"], [1, "col-md-2", "col-12", "pkgdelcol", "img-container"], ["src", "../assets/hotels.png", "alt", "Hotel Image", 1, "pkgimg"]], template: function ViewHotelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-employee-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Hotels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewHotelsComponent_div_6_Template, 29, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No hotels available...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hotels == null ? null : ctx.hotels.length);
    } }, directives: [_layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeLayoutComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  display: flex; \r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n#packages[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  min-height: 400px;\r\n  background-color: #ffffff00; \r\n  margin: 50px auto 20px auto;\r\n  padding: 20px; \r\n}\r\n\r\n#nohotel[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'Quicksand', sans-serif;\r\n  background-color: rgba(255, 255, 255, 0.563); \r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px; \r\n  border-radius: 10px; \r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n#nohotel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem; \r\n  font-weight: bold; \r\n  color: #333; \r\n  margin: 0; \r\n}\r\n\r\n.pkgrow[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 49%;\r\n  background-color: rgba(255, 255, 255, 0.477); \r\n  padding: 15px; \r\n  margin-bottom: 10px; \r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n.pkgdelcol[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.pkgdelcol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-family:  sans-serif;\r\n  font-weight: bold;\r\n  color: #333; \r\n}\r\n.pkgdelcol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: rgb(111, 111, 111);\r\n\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n  justify-content: space-around;\r\n}\r\n.pkgimg[_ngcontent-%COMP%] {\r\n  height: 140px;\r\n  width: 100%;\r\n  min-height: 140px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n#pkgheading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-family: sans-serif;\r\n  font-weight: bold;\r\n  font-size: 1.5rem; \r\n  margin-bottom: 20px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1ob3RlbHMvdmlldy1ob3RlbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWEsRUFBRSx1QkFBdUI7RUFDdEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiwyQkFBMkIsRUFBRSx5Q0FBeUM7RUFDdEUsMkJBQTJCO0VBQzNCLGFBQWEsRUFBRSx5Q0FBeUM7QUFDMUQ7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLDRDQUE0QyxFQUFFLDZDQUE2QztFQUMzRixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBRSw0QkFBNEI7RUFDM0MsbUJBQW1CLEVBQUUsb0JBQW9CO0VBQ3pDLDhDQUE4QyxFQUFFLDJCQUEyQjtBQUM3RTtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQixFQUFFLDRDQUE0QztFQUMvRCxpQkFBaUIsRUFBRSwyQkFBMkI7RUFDOUMsV0FBVyxFQUFFLG1DQUFtQztFQUNoRCxTQUFTLEVBQUUsMEJBQTBCO0FBQ3ZDO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZiw0Q0FBNEMsRUFBRSx3Q0FBd0M7RUFDdEYsYUFBYSxFQUFFLGtDQUFrQztFQUNqRCxtQkFBbUIsRUFBRSxvQ0FBb0M7RUFDekQsbUJBQW1CO0VBQ25CLHdDQUF3QyxFQUFFLDRCQUE0QjtBQUN4RTtBQUVBLG1DQUFtQztBQUNuQztFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixXQUFXLEVBQUUsc0NBQXNDO0FBQ3JEO0FBRUE7RUFDRSx5QkFBeUI7O0FBRTNCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0NBQXdDLEVBQUUsK0JBQStCO0FBQzNFO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUUsOEJBQThCO0VBQ2pELG1CQUFtQixFQUFFLGtDQUFrQztBQUN6RCIsImZpbGUiOiJzcmMvYXBwL3ZpZXctaG90ZWxzL3ZpZXctaG90ZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIGNvbnRlbnQgc3R5bGluZyAqL1xyXG4uY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4OyAvKiBDZW50ZXIgdGhlIGNvbnRlbnQgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBQYWNrYWdlcyBjb250YWluZXIgc3R5bGluZyAqL1xyXG4jcGFja2FnZXMge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kIGZvciBiZXR0ZXIgY29udHJhc3QgKi9cclxuICBtYXJnaW46IDUwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDsgLyogSW5jcmVhc2VkIHBhZGRpbmcgZm9yIGJldHRlciBzcGFjaW5nICovXHJcbn1cclxuXHJcbi8qIE5vIGhvdGVscyBhdmFpbGFibGUgc2VjdGlvbiAqL1xyXG4jbm9ob3RlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2Myk7IC8qIFNvZnRlciBiYWNrZ3JvdW5kIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7IC8qIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogUm91bmRlZCBjb3JuZXJzICovXHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogSW5uZXIgc2hhZG93IGZvciBkZXB0aCAqL1xyXG59XHJcblxyXG4vKiBObyBob3RlbHMgdGV4dCBzdHlsaW5nICovXHJcbiNub2hvdGVsIGgxIHtcclxuICBmb250LXNpemU6IDEuNXJlbTsgLyogTGFyZ2VyIGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIEJvbGQgdGV4dCBmb3IgZW1waGFzaXMgKi9cclxuICBjb2xvcjogIzMzMzsgLyogRGFya2VyIHRleHQgY29sb3IgZm9yIGNvbnRyYXN0ICovXHJcbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cclxufVxyXG5cclxuLyogUGFja2FnZSByb3cgc3R5bGluZyAqL1xyXG4ucGtncm93IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0OSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3Nyk7IC8qIFNvZnRlciB5ZWxsb3cgZm9yIGJldHRlciBhZXN0aGV0aWNzICovXHJcbiAgcGFkZGluZzogMTVweDsgLyogSW5jcmVhc2VkIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBDb25zaXN0ZW50IHNwYWNpbmcgYmV0d2VlbiByb3dzICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xyXG59XHJcblxyXG4vKiBQYWNrYWdlIGRldGFpbHMgY29sdW1uIHN0eWxpbmcgKi9cclxuLnBrZ2RlbGNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGtnZGVsY29sIHAge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBEYXJrZXIgdGV4dCBjb2xvciBmb3IgcmVhZGFiaWxpdHkgKi9cclxufVxyXG5cclxuLnBrZ2RlbGNvbCBwIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDExMSk7XHJcblxyXG59XHJcblxyXG4vKiBJbWFnZSBjb250YWluZXIgc3R5bGluZyAqL1xyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5wa2dpbWcge1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBlbXBoYXNpcyAqL1xyXG59XHJcblxyXG4vKiBIZWFkaW5nIHN0eWxpbmcgKi9cclxuI3BrZ2hlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTsgLyogU2xpZ2h0bHkgbGFyZ2VyIGZvbnQgc2l6ZSAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFkZCBzcGFjaW5nIGJlbG93IHRoZSBoZWFkaW5nICovXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewHotelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-hotels',
                templateUrl: './view-hotels.component.html',
                styleUrls: ['./view-hotels.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-package-details/view-package-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/view-package-details/view-package-details.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewPackageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPackageDetailsComponent", function() { return ViewPackageDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/package-service/package.service */ "./src/travelAway-services/package-service/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/common-layout/common-layout.component */ "./src/app/layouts/common-layout/common-layout.component.ts");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");







function ViewPackageDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-common-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewPackageDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewPackageDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Places to visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Package Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Days/Nights: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Accommodation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPackageDetailsComponent_div_8_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const packageDetail_r43 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.navigateToBookPackage(packageDetail_r43.packageDetailsId, packageDetail_r43.placesToVisit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const packageDetail_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](packageDetail_r43.placesToVisit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", packageDetail_r43.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](packageDetail_r43.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", packageDetail_r43.noOfDays, " / ", packageDetail_r43.noOfNights, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](packageDetail_r43.pricePerAdult);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](packageDetail_r43.accomodation);
} }
class ViewPackageDetailsComponent {
    constructor(packageService, router, route) {
        this.packageService = packageService;
        this.router = router;
        this.route = route;
        this.showMsgDiv = false;
        this.customerLayout = false;
        this.commonLayout = false;
    }
    ngOnInit() {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Customer") {
            this.router.navigate(['/login/1']);
        }
        else if (this.userRole == "Customer") {
            this.customerLayout = true;
        }
        this.packageId = this.route.snapshot.params['packageId'];
        this.packageName = this.route.snapshot.params['packageName'];
        this.getPackageDetails(this.packageId);
        if (this.packageDetails == null) {
            this.showMsgDiv = true;
        }
    }
    getPackageDetails(packageId) {
        this.packageService.getPackageDetails(packageId).subscribe(responseData => {
            this.packageDetails = responseData;
            console.log(this.packageDetails);
            this.showMsgDiv = false;
        }, responseError => {
            this.packageDetails = null;
            this.errMsg = responseError;
            console.log(this.errMsg);
        }, () => console.log("GetPackageDetails method excuted successfully"));
    }
    // navigateToBookPackage(packageDetailsId: number) {
    //   this.router.navigate(['bookpkg', packageDetailsId]);
    // }
    navigateToBookPackage(packageDetailsId, packageName) {
        this.router.navigate(['bookpkg', packageDetailsId], { queryParams: { name: packageName } });
    }
}
ViewPackageDetailsComponent.ɵfac = function ViewPackageDetailsComponent_Factory(t) { return new (t || ViewPackageDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewPackageDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewPackageDetailsComponent, selectors: [["app-view-package-details"]], decls: 9, vars: 4, consts: [[4, "ngIf"], [1, "content"], ["id", "packages"], ["id", "pkgheading"], ["class", "pkgrow", 4, "ngFor", "ngForOf"], [1, "pkgrow"], [1, "col-md-3", "col-12", "pkgdelcol"], ["alt", "image", "id", "pkgdis", 1, "img-thumbnail", "pkgimg", 3, "src"], [1, "col-md-6", "col-12", "pkgdelcol"], [1, "boldtext"], ["type", "button", "id", "bookingbtn", 3, "click"]], template: function ViewPackageDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewPackageDetailsComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewPackageDetailsComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Package Details: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewPackageDetailsComponent_div_8_Template, 32, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commonLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.packageName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.packageDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_4__["CommonLayoutComponent"], _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_5__["UserLayoutComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  position: relative;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n#packages[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  min-height: 400px;\r\n  background-color: rgba(255, 255, 255, 0.096); \r\n  margin: 20px auto;\r\n  padding: 20px;\r\n  border-radius: 15px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); \r\n  -webkit-backdrop-filter: blur(10px);\r\n          backdrop-filter: blur(10px); \r\n}\r\n\r\n#pkgheading[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  color: #333;\r\n  margin-bottom: 20px;\r\n}\r\n#pkgheading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #e63946; \r\n}\r\n\r\n.pkgrow[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap; \r\n  gap: 20px; \r\n  width: 100%;\r\n  background-color: rgba(255, 255, 255, 0.182); \r\n  padding: 20px;\r\n  margin-bottom: 20px;\r\n  border-radius: 15px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1); \r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); \r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px); \r\n}\r\n\r\n.pkgdelcol[_ngcontent-%COMP%] {\r\n  flex: 1; \r\n  min-width: 250px; \r\n}\r\n.pkgdelcol[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 1.rem;\r\n  color: #e63946; \r\n  background-color: rgba(255, 255, 255, 0.505); \r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  margin-bottom: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n.pkgdelcol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 1.4rem;\r\n  color: #555;\r\n  line-height: 1.6; \r\n  margin-bottom: 10px;\r\n}\r\n\r\n.boldtext[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n#bookingbtn[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n  background-color: #007bff;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n#bookingbtn[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wYWNrYWdlLWRldGFpbHMvdmlldy1wYWNrYWdlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0Q0FBNEMsRUFBRSxpQ0FBaUM7RUFDL0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0NBQXdDLEVBQUUsNEJBQTRCO0VBQ3RFLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBRSxpQ0FBaUM7QUFDaEU7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYyxFQUFFLDJCQUEyQjtBQUM3QztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixlQUFlLEVBQUUsMEJBQTBCO0VBQzNDLFNBQVMsRUFBRSwwQkFBMEI7RUFDckMsV0FBVztFQUNYLDRDQUE0QyxFQUFFLGlDQUFpQztFQUMvRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQ0FBb0MsRUFBRSxrQkFBa0I7RUFDeEQsd0NBQXdDLEVBQUUsNEJBQTRCO0VBQ3RFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBRSxpQ0FBaUM7QUFDL0Q7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxPQUFPLEVBQUUsZ0NBQWdDO0VBQ3pDLGdCQUFnQixFQUFFLHlDQUF5QztBQUM3RDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBRSwyQkFBMkI7RUFDM0MsNENBQTRDLEVBQUUsaUNBQWlDO0VBQy9FLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdDQUF3QyxFQUFFLCtCQUErQjtBQUMzRTtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQixFQUFFLHdCQUF3QjtFQUMxQyxtQkFBbUI7QUFDckI7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSx5QkFBeUI7QUFDdEQiLCJmaWxlIjoic3JjL2FwcC92aWV3LXBhY2thZ2UtZGV0YWlscy92aWV3LXBhY2thZ2UtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhbCBjb250ZW50IHN0eWxpbmcgKi9cclxuLmNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBQYWNrYWdlIGNvbnRhaW5lciBzdHlsaW5nICovXHJcbiNwYWNrYWdlcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDk2KTsgLyogVHJhbnNwYXJlbnQgd2hpdGUgYmFja2dyb3VuZCAqL1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogQmx1ciBlZmZlY3QgZm9yIHRyYW5zcGFyZW5jeSAqL1xyXG59XHJcblxyXG4vKiBQYWNrYWdlIGhlYWRpbmcgc3R5bGluZyAqL1xyXG4jcGtnaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNwa2doZWFkaW5nIHNwYW4ge1xyXG4gIGNvbG9yOiAjZTYzOTQ2OyAvKiBSZWQgY29sb3IgZm9yIGVtcGhhc2lzICovXHJcbn1cclxuXHJcbi8qIFBhY2thZ2Ugcm93IHN0eWxpbmcgKi9cclxuLnBrZ3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7IC8qIEVuc3VyZSByZXNwb25zaXZlbmVzcyAqL1xyXG4gIGdhcDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBjb2x1bW5zICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4Mik7IC8qIFRyYW5zcGFyZW50IHdoaXRlIGJhY2tncm91bmQgKi9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFN1YnRsZSBib3JkZXIgKi9cclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpOyAvKiBCbHVyIGVmZmVjdCBmb3IgdHJhbnNwYXJlbmN5ICovXHJcbn1cclxuXHJcbi8qIFBhY2thZ2UgY29sdW1uIHN0eWxpbmcgKi9cclxuLnBrZ2RlbGNvbCB7XHJcbiAgZmxleDogMTsgLyogRXF1YWwgd2lkdGggZm9yIGFsbCBjb2x1bW5zICovXHJcbiAgbWluLXdpZHRoOiAyNTBweDsgLyogRW5zdXJlIGNvbHVtbnMgZG9uJ3Qgc2hyaW5rIHRvbyBtdWNoICovXHJcbn1cclxuXHJcbi5wa2dkZWxjb2wgaDUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS5yZW07XHJcbiAgY29sb3I6ICNlNjM5NDY7IC8qIFJlZCBjb2xvciBmb3IgaGVhZGluZ3MgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTA1KTsgLyogVHJhbnNwYXJlbnQgd2hpdGUgYmFja2dyb3VuZCAqL1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU3VidGxlIHNoYWRvdyBmb3IgaGVhZGluZ3MgKi9cclxufVxyXG5cclxuLnBrZ2RlbGNvbCBwIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBjb2xvcjogIzU1NTtcclxuICBsaW5lLWhlaWdodDogMS42OyAvKiBJbXByb3ZlIHJlYWRhYmlsaXR5ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogQm9sZCB0ZXh0IHN0eWxpbmcgKi9cclxuLmJvbGR0ZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLyogQm9va2luZyBidXR0b24gc3R5bGluZyAqL1xyXG4jYm9va2luZ2J0biB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuI2Jvb2tpbmdidG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIERhcmtlciBibHVlIG9uIGhvdmVyICovXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPackageDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-package-details',
                templateUrl: './view-package-details.component.html',
                styleUrls: ['./view-package-details.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-packages/view-packages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-packages/view-packages.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewPackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPackagesComponent", function() { return ViewPackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/package-service/package.service */ "./src/travelAway-services/package-service/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/common-layout/common-layout.component */ "./src/app/layouts/common-layout/common-layout.component.ts");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/user-layout/user-layout.component */ "./src/app/layouts/user-layout/user-layout.component.ts");








function ViewPackagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-common-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewPackagesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewPackagesComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r34.packageCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r34.packageCategoryName, " ");
} }
function ViewPackagesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPackagesComponent_div_17_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const package_r35 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.viewPackageDetails(package_r35.packageId, package_r35.packageName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewPackagesComponent_div_17_Template_h3_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const package_r35 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.viewPackageDetails(package_r35.packageId, package_r35.packageName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const package_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", package_r35.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r35.packageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Explore the ", package_r35.packageName, " with us! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](package_r35.description);
} }
class ViewPackagesComponent {
    constructor(packageService, router) {
        this.packageService = packageService;
        this.router = router;
        this.customerLayout = false;
        this.commonLayout = false;
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Customer") {
            this.router.navigate(['/login/1']);
        }
        else if (this.userRole == "Customer") {
            this.customerLayout = true;
        }
    }
    ngOnInit() {
        this.getPackages();
        this.getCategories();
        if (this.packages == null) {
            this.showMsg = true;
        }
        this.filteredPackages = this.packages;
        this.imagePath = "src/assets/";
    }
    getPackages() {
        this.packageService.getPackages().subscribe(responseGet => {
            this.showMsg = false;
            this.packages = responseGet;
            this.filteredPackages = responseGet;
        }, resonseError => {
            this.showMsg = true;
            this.packages = null;
            this.errorMsg = resonseError;
        }, () => console.log("GetPackage method executed", this.packages));
    }
    getCategories() {
        this.packageService.getCategories().subscribe(responseGet => {
            this.categories = responseGet;
            console.log(this.categories);
        }, responseError => {
            this.errorMsg = responseError;
            this.categories = null;
        }, () => console.log("Get categories executed"));
    }
    searchPackageByCategory(categoryId) {
        //console.log(categoryId)
        this.filteredPackages = this.packages;
        //if (categoryId == "100") {
        //  this.filteredPackages = this.packages;
        //}
        //else {
        var catid = parseInt(categoryId);
        if (catid > 0) {
            this.filteredPackages = this.filteredPackages.filter(prod => prod.packageCategoryId == catid);
        }
        console.log(this.filteredPackages);
        //}
    }
    viewPackageDetails(packageId, packageName) {
        console.log(packageId);
        this.router.navigate(['viewPackageDetails', packageId, packageName]);
    }
}
ViewPackagesComponent.ɵfac = function ViewPackagesComponent_Factory(t) { return new (t || ViewPackagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ViewPackagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewPackagesComponent, selectors: [["app-view-packages"]], decls: 18, vars: 4, consts: [[4, "ngIf"], [1, "content"], ["id", "packages"], ["id", "pkgheading"], [1, "row", 2, "padding-bottom", "5px"], ["id", "filter", 1, "col-md-10", "filter"], [1, "col-md-2", "filter"], ["id", "cat", 1, "form-control", 3, "change"], ["categorydrop", ""], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "row pkgrow", 4, "ngFor", "ngForOf"], [3, "value"], [1, "row", "pkgrow"], [1, "col-md-3", "col-sm-4", "col-0"], ["alt", "image", "id", "pkgdis", 1, "img-thumbnail", "pkgimg", 3, "src", "click"], [1, "col-md-9", "col-sm-8", "col-12", "pkgcol"], [3, "click"]], template: function ViewPackagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewPackagesComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewPackagesComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter packages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewPackagesComponent_Template_select_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.searchPackageByCategory(_r31.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ViewPackagesComponent_option_15_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ViewPackagesComponent_div_17_Template, 10, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commonLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredPackages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__["CommonLayoutComponent"], _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_6__["UserLayoutComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n#packages[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  min-height: 400px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  margin: 50px auto 20px auto;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  position:relative;\r\n}\r\n.pkgcol[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color:red;\r\n}\r\n.pkgimg[_ngcontent-%COMP%]:hover{\r\n    cursor:pointer;\r\n}\r\n.pkgrow[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 49%;\r\n  background-color: rgba(243, 243, 70, 0.207);\r\n  padding: 10px;\r\n  margin-bottom: 1%;\r\n  border-radius: 10px;\r\n  margin-left: 0px;\r\n}\r\n.pkgcol[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: left;\r\n}\r\n.pkgcol[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n  }\r\n.pkgcol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: cursive;\r\n  }\r\n#pkgheading[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-family: '', sans-serif;\r\n  font-weight: bold;\r\n}\r\n#filter[_ngcontent-%COMP%] {\r\n  text-align:right;\r\n  margin-top: 7px;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  font-family: 'Quicksand', sans-serif;\r\n}\r\n#cat[_ngcontent-%COMP%] {\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n  padding: 6px; \r\n  border-radius: 4px; \r\n}\r\n#cat[_ngcontent-%COMP%]:hover {\r\n  border-color: #000000; \r\n  background-color: #ffffffc4; \r\n  cursor: pointer;\r\n}\r\n#pkgdis[_ngcontent-%COMP%]{\r\n  height:140px;\r\n  width:100%;\r\n  min-height:140px;\r\n}\r\n.row.align-items-center[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wYWNrYWdlcy92aWV3LXBhY2thZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFFRTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcGFja2FnZXMvdmlldy1wYWNrYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jcGFja2FnZXMge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBtYXJnaW46IDUwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5wa2djb2wgaDM6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5wa2dpbWc6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLnBrZ3JvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNDklO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDMsIDcwLCAwLjIwNyk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5wa2djb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4gIC5wa2djb2wgaDN7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnBrZ2NvbCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIH1cclxuXHJcbiNwa2doZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jZmlsdGVyIHtcclxuICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuI2NhdCB7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDZweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4OyBcclxufVxyXG5cclxuI2NhdDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYzQ7IFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jcGtnZGlze1xyXG4gIGhlaWdodDoxNDBweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6MTQwcHg7XHJcbn1cclxuLnJvdy5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewPackagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-packages',
                templateUrl: './view-packages.component.html',
                styleUrls: ['./view-packages.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-vehicles/view-vehicles.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-vehicles/view-vehicles.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewVehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVehiclesComponent", function() { return ViewVehiclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../travelAway-services/package-service/package.service */ "./src/travelAway-services/package-service/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/employee-layout/employee-layout.component */ "./src/app/layouts/employee-layout/employee-layout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ViewVehiclesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vehicle Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vehicle Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rate Per Km:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rate Per Hour:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Base Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r161 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", vehicle_r161.vehicleName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", vehicle_r161.vehicleType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u20B9", vehicle_r161.ratePerKm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u20B9", vehicle_r161.ratePerHour, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u20B9", vehicle_r161.basePrice, "");
} }
function ViewVehiclesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No vehicles available...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewVehiclesComponent {
    constructor(packageService, router, route) {
        this.packageService = packageService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole != "Employee") {
            this.router.navigate(['/login/2']);
        }
        this.getVehicles();
    }
    getVehicles() {
        this.packageService.getVehicles().subscribe(responseVehicleStatus => {
            this.vehicles = responseVehicleStatus;
        }, responseVehicleError => {
            this.errorMsg = responseVehicleError;
        }, () => console.log("ViewVehicles method executed successfully"));
    }
}
ViewVehiclesComponent.ɵfac = function ViewVehiclesComponent_Factory(t) { return new (t || ViewVehiclesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewVehiclesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewVehiclesComponent, selectors: [["app-view-vehicles"]], decls: 8, vars: 2, consts: [[1, "content"], ["id", "packages"], ["id", "pkgheading"], [1, "vehicles-container"], ["class", "row pkgrow", 4, "ngFor", "ngForOf"], ["id", "novehicle", 4, "ngIf"], [1, "row", "pkgrow"], [1, "col-md-5", "col-12", "pkgdelcol"], [1, "col-md-2", "col-12", "pkgdelcol", "img-container"], ["src", "../assets/car.png", "alt", "Vehicle Image", 1, "pkgimg"], ["id", "novehicle"]], template: function ViewVehiclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-employee-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Vehicles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewVehiclesComponent_div_6_Template, 25, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewVehiclesComponent_div_7_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vehicles.length);
    } }, directives: [_layouts_employee_layout_employee_layout_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeLayoutComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\r\n  min-height: 90vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n#packages[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  min-height: 400px;\r\n  background-color: #ffffff00;  \r\n  margin: 50px auto 20px auto;\r\n  padding: 20px;\r\n  border-radius: 15px; \r\n}\r\n\r\n#novehicle[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'Quicksand', sans-serif;\r\n  background-color: rgba(255, 255, 255, 0.8); \r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  border-radius: 10px; \r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n#novehicle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem; \r\n  font-weight: bold; \r\n  color: #333; \r\n  margin: 0; \r\n}\r\n\r\n.pkgrow[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 49%;\r\n  background-color: rgba(255, 255, 255, 0.477); \r\n  padding: 15px; \r\n  margin-bottom: 10px; \r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n.pkgdelcol[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.pkgdelcol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-family:  sans-serif;\r\n  font-weight: bold;\r\n  color: #333; \r\n}\r\n.pkgdelcol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: rgb(111, 111, 111);\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n  justify-content: space-around;\r\n}\r\n.pkgimg[_ngcontent-%COMP%] {\r\n  height: 140px;\r\n  width: 100%;\r\n  min-height: 140px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \r\n}\r\n\r\n#pkgheading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-family:  sans-serif;\r\n  font-weight: bold;\r\n  font-size: 2rem; \r\n  margin-bottom: 20px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy12ZWhpY2xlcy92aWV3LXZlaGljbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiwyQkFBMkIsR0FBRyx5Q0FBeUM7RUFDdkUsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUIsRUFBRSxzQ0FBc0M7QUFDN0Q7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLDBDQUEwQyxFQUFFLDZDQUE2QztFQUN6RixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUIsRUFBRSxvQkFBb0I7RUFDekMsOENBQThDLEVBQUUsMkJBQTJCO0FBQzdFO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsaUJBQWlCLEVBQUUsNENBQTRDO0VBQy9ELGlCQUFpQixFQUFFLDJCQUEyQjtFQUM5QyxXQUFXLEVBQUUsbUNBQW1DO0VBQ2hELFNBQVMsRUFBRSwwQkFBMEI7QUFDdkM7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLDRDQUE0QyxFQUFFLHdDQUF3QztFQUN0RixhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELG1CQUFtQixFQUFFLG9DQUFvQztFQUN6RCxtQkFBbUI7RUFDbkIsd0NBQXdDLEVBQUUsNEJBQTRCO0FBQ3hFO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBRSxzQ0FBc0M7QUFDckQ7QUFFQTtFQUNFLHlCQUF5QixDQUFDLDRCQUE0QjtBQUN4RDtBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHdDQUF3QyxFQUFFLCtCQUErQjtBQUMzRTtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBRSxrQ0FBa0M7RUFDbkQsbUJBQW1CLEVBQUUsa0NBQWtDO0FBQ3pEIiwiZmlsZSI6InNyYy9hcHAvdmlldy12ZWhpY2xlcy92aWV3LXZlaGljbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIGNvbnRlbnQgc3R5bGluZyAqL1xyXG4uY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogOTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8qIFBhY2thZ2VzIGNvbnRhaW5lciBzdHlsaW5nICovXHJcbiNwYWNrYWdlcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7ICAvKiBXaGl0ZSBiYWNrZ3JvdW5kIGZvciBiZXR0ZXIgY29udHJhc3QgKi9cclxuICBtYXJnaW46IDUwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGEgbW9kZXJuIGxvb2sgKi9cclxufVxyXG5cclxuLyogTm8gdmVoaWNsZXMgYXZhaWxhYmxlIHNlY3Rpb24gKi9cclxuI25vdmVoaWNsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyAvKiBTb2Z0ZXIgYmFja2dyb3VuZCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIElubmVyIHNoYWRvdyBmb3IgZGVwdGggKi9cclxufVxyXG5cclxuLyogTm8gdmVoaWNsZXMgdGV4dCBzdHlsaW5nICovXHJcbiNub3ZlaGljbGUgaDEge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtOyAvKiBMYXJnZXIgZm9udCBzaXplIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cclxuICBmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCB0ZXh0IGZvciBlbXBoYXNpcyAqL1xyXG4gIGNvbG9yOiAjMzMzOyAvKiBEYXJrZXIgdGV4dCBjb2xvciBmb3IgY29udHJhc3QgKi9cclxuICBtYXJnaW46IDA7IC8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xyXG59XHJcblxyXG4vKiBQYWNrYWdlIHJvdyBzdHlsaW5nICovXHJcbi5wa2dyb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQ5JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDc3KTsgLyogU29mdGVyIHllbGxvdyBmb3IgYmV0dGVyIGFlc3RoZXRpY3MgKi9cclxuICBwYWRkaW5nOiAxNXB4OyAvKiBJbmNyZWFzZWQgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIENvbnNpc3RlbnQgc3BhY2luZyBiZXR3ZWVuIHJvd3MgKi9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFN1YnRsZSBzaGFkb3cgZm9yIGRlcHRoICovXHJcbn1cclxuXHJcbi8qIFBhY2thZ2UgZGV0YWlscyBjb2x1bW4gc3R5bGluZyAqL1xyXG4ucGtnZGVsY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wa2dkZWxjb2wgcCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzMzM7IC8qIERhcmtlciB0ZXh0IGNvbG9yIGZvciByZWFkYWJpbGl0eSAqL1xyXG59XHJcblxyXG4ucGtnZGVsY29sIHAgc3BhbiB7XHJcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMTExKTsvKiBCbHVlIGNvbG9yIGZvciBlbXBoYXNpcyAqL1xyXG59XHJcblxyXG4vKiBJbWFnZSBjb250YWluZXIgc3R5bGluZyAqL1xyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5wa2dpbWcge1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBlbXBoYXNpcyAqL1xyXG59XHJcblxyXG4vKiBIZWFkaW5nIHN0eWxpbmcgKi9cclxuI3BrZ2hlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAycmVtOyAvKiBMYXJnZXIgZm9udCBzaXplIGZvciBlbXBoYXNpcyAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFkZCBzcGFjaW5nIGJlbG93IHRoZSBoZWFkaW5nICovXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewVehiclesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-vehicles',
                templateUrl: './view-vehicles.component.html',
                styleUrls: ['./view-vehicles.component.css']
            }]
    }], function () { return [{ type: _travelAway_services_package_service_package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/travelAway-services/auth-service/authservice.ts":
/*!*************************************************************!*\
  !*** ./src/travelAway-services/auth-service/authservice.ts ***!
  \*************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");






class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.apiUrl = 'https://localhost:44393/api/auth'; // Replace with your .NET API URL
        //private apiUrl ='https://localhost:44393/api/Auth/customer/login/CustomerLogin';
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.getToken());
        this.token$ = this.tokenSubject.asObservable();
    }
    login(EmailId, UserPassword, loginRole) {
        const Password = UserPassword;
        if (loginRole == 1) {
            return this.http.post(`${this.apiUrl}/customer/login`, { EmailId: EmailId, UserPassword: UserPassword }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => this.saveToken(response.token)));
        }
        if (loginRole == 2) {
            return this.http.post(`${this.apiUrl}/employee/login`, { EmailId: EmailId, Password: Password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => this.saveToken(response.token)));
        }
    }
    logout() {
        this.clearToken();
        this.tokenSubject.next(null);
        // Optionally redirect the user to the login page
    }
    getToken() {
        return localStorage.getItem('authToken');
    }
    saveToken(token) {
        localStorage.setItem('authToken', token);
        this.tokenSubject.next(token);
    }
    decodeToken() {
        const token = this.getToken();
        if (token) {
            return this.jwtHelper.decodeToken(token);
        }
        return null;
    }
    getRole() {
        const decodedToken = this.decodeToken();
        console.log("decode", decodedToken);
        return decodedToken ? decodedToken['role'] : null; // Assuming your role claim is named 'role'
    }
    clearToken() {
        localStorage.removeItem('authToken');
    }
    isAuthenticated() {
        return !!this.getToken();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "./src/travelAway-services/auth.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/travelAway-services/auth.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service_authservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-service/authservice */ "./src/travelAway-services/auth-service/authservice.ts");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //   return next.handle(request);
    // }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        if (authToken) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${authToken}`),
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_authservice__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service_authservice__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/travelAway-services/package-service/package.service.ts":
/*!********************************************************************!*\
  !*** ./src/travelAway-services/package-service/package.service.ts ***!
  \********************************************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class PackageService {
    constructor(http) {
        this.http = http;
    }
    getPackages() {
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetPackages').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getVehicles() {
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetVehicles').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getHotels() {
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetHotels').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getCategories() {
        return this.http.get('https://localhost:44393/api/TravelAway/GetPackageCategories').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    }
    getPackageDetails(packageId) {
        let PackageId = { packageId: packageId };
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetPackageDetailsByPackageId', { params: PackageId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    bookPackage(bookedpkg) {
        let temp = this.http.post('https://localhost:44393/api/TravelAway/AddBookPackage', bookedpkg).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getBookings(email) {
        let Email = { email: email };
        let temp = this.http.get('https://localhost:44393/api/TravelAway/ViewBookedPackages', { params: Email }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    errorHandler(error) {
        console.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message || "Server Error");
    }
}
PackageService.ɵfac = function PackageService_Factory(t) { return new (t || PackageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PackageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PackageService, factory: PackageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/travelAway-services/user-service/user.service.ts":
/*!**************************************************************!*\
  !*** ./src/travelAway-services/user-service/user.service.ts ***!
  \**************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UserService {
    constructor(http) {
        this.http = http;
    }
    //for login
    validateCredentials(email, password, loginRole) {
        let temp;
        if (loginRole == 1) {
            var custObj;
            // custObj = { EmailId: email, UserPassword: password, FirstName:null,LastName:null,RoleId: null,Gender:null,DateOfBirth: null, Address: null,ContactNumber:null};
            temp = this.http.post('https://localhost:44393/api/TravelAway/ValidateLoginCustomer', { EmailId: email, UserPassword: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
        else if (loginRole == 2) {
            var EmpObj;
            EmpObj = { EmailId: email, Password: password, FirstName: null, LastName: null, RoleId: null };
            temp = this.http.post('https://localhost:44393/api/TravelAway/ValidateLoginEmployee', EmpObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
        return temp;
    }
    //for register
    addUserDetails(firstName, lastName, emailId, password, contactNumber, address, gender, dateOfBirth, roleId) {
        var custObj;
        custObj = { EmailId: emailId, UserPassword: password, FirstName: firstName, LastName: lastName, RoleId: roleId, Gender: gender, DateOfBirth: dateOfBirth, Address: address, ContactNumber: contactNumber };
        let temp = this.http.post('https://localhost:44393/api/TravelAway/AddCustomer', custObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    updateUserDetails(firstName, lastName, emailId, password, contactNumber, address, gender, dateOfBirth, roleId) {
        var custObj;
        custObj = { EmailId: emailId, UserPassword: password, FirstName: firstName, LastName: lastName, RoleId: roleId, Gender: gender, DateOfBirth: dateOfBirth, Address: address, ContactNumber: contactNumber };
        let temp = this.http.put('https://localhost:44393/api/TravelAway/UpdateProfile', custObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getCustomerById(emailId) {
        let CustId = { emailId: emailId };
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetCustomerDetails', { params: CustId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    addHotel(hotel) {
        let temp = this.http.post('https://localhost:44393/api/TravelAway/AddHotel', hotel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    addVehicle(vehicle) {
        let temp = this.http.post('https://localhost:44393/api/TravelAway/AddVehicle', vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    custCare(query) {
        let temp = this.http.post('https://localhost:44393/api/TravelAway/AddCustomerCare', query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getassignee() {
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetAssignee').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getTotal(bookingId) {
        let BookId = { bookingId: bookingId };
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetTotal', { params: BookId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getCitiesByBookId(bookingId) {
        let BookId = { bookingId: bookingId };
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetCityByPackageDetailsId', { params: BookId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getHotelRatingByCity(city) {
        let City = { city: city };
        let temp = this.http.get('https://localhost:44393/api/TravelAway/GetHotelRatingsByCity', { params: City }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getHotelsByCityAndRating(city, rating) {
        // let CityandRating = { city: city,rating: rating};
        //let params = new HttpParams().set('city', city).set('rating', rating);
        //console.log("mayank",params);
        let address = 'https://localhost:44393/api/TravelAway/GetHotelsByCityAndRating?city=' + city + '&rating=' + rating;
        let temp = this.http.get(address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    getCost(hotelName, roomtype) {
        let address = 'https://localhost:44393/api/TravelAway/GetHotelCost?hotelName=' + hotelName + '&roomtype=' + roomtype;
        let temp = this.http.get(address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    bookAccommodation(accommodation) {
        let temp = this.http.post('https://localhost:44393/api/TravelAway/AddAccomodationDetails', accommodation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    makePayment(pay) {
        let temp = this.http.post('https://localhost:44393/api/TravelAway/Payment', pay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        return temp;
    }
    errorHandler(error) {
        console.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message || "Server Error");
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Prana\source\repos\PranavR16\Dotnet-Projects\TravelAway Web Application\TravelAway-Frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map