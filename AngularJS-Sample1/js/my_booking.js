/**
 * Created by kalathilajay.menon on 7/31/2014.
 */
(function(){
    var app = angular.module('afls', []);

    app.controller('BookingController',function(){
        this.bookingLabels=sampleBookingLabels;
        this.bookingContent=bookingDetails;
    });

    var sampleBookingDetails = {
        booking_ref_id: '1234',
        flight_num: '777',
        arrival_dt: '26 Jan 2015'
    };
    var sampleBookingLabels = {
        l_booking_ref_id: '1234',
        l_flight_num: '777',
        l_arrival_dt: '26 Jan 2015'
    };
})();