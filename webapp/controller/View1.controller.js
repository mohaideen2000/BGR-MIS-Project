sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "projectmisreport/model/Data"
], function (Controller, JSONModel, Data) {
    "use strict";

    return Controller.extend("projectmisreport.controller.View1", {

        onInit: function () {
            const oData = Data.getData();
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        
        onTilePress: function (oEvent) {
            const oData = oEvent.getSource()
                .getBindingContext()
                .getObject();

            sap.m.MessageToast.show(oData.title);
        }
    });
});