sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("calculatedate1.calculatedateproject.controller.View1", {
            onInit: function () {

            },
            onPressDiff: function () {
                var olddat1 = this.getView().byId("inp1").getDateValue();
                var newdat2 = this.getView().byId("inp2").getDateValue();
                //   var newdat2 = this.getView().byId("inp2").getValue();

                //   var dat1 = new Date(olddat1);
                //   var dat2 = new Date(newdat2); 

                //   const dat1 = new Date('2020-01-01');
                //   const dat2 = new Date('2022-02-10');

                //    if(olddat1 === "" && newdat2 === "" ){
                if (olddat1 === null && newdat2 === null) {
                    alert("Please insert any date first");
                }
                /*  else if(olddat1 === '/^[A-Za-z]+$/' && newdat2 === '/^[A-Za-z]+$/'){
                      alert("String is not allowed!!");
                  }
                  else if(olddat1 === isNum && newdat2 === isNum){
                      alert("Number is not allowed!!");
                  }  */
                /* else if(olddat1 != "^\\d{2}-\\d{2}-\\d{4}$" && newdat2 != "^\\d{2}-\\d{2}-\\d{4}$"){
                     alert("Please insert date in correct format");
                 }  */

                else {
                    var dat1 = new Date(olddat1);
                    var dat2 = new Date(newdat2);

                    var diff = dat2.getTime() - dat1.getTime();

                    var diff_days = Math.floor(diff / (1000 * 3600 * 24));

                    var diff_months = Math.floor(diff_days / 30.44);

                    var diff_year = Math.floor(diff_months / 12);

                    var rem_days = Math.floor(diff_days % 30.44);
                    var rem_months = Math.floor(diff_months % 12);
                    //   var rem_year = (diff_year % 1);

                    alert("Difference of days,months and year :" + "\n" + rem_days + "days" + " " + rem_months + " " + "months" + " " + diff_year + "years");

                }
            }
        });
    });
