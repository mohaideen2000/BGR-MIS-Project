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

        var sProject_id = 'TEST11';
        var oTable = this.byId("idTable");
        oTable.setModel(this.getOwnerComponent().getModel());
        oTable.bindRows({
            path: `/ZCB_I_PROJECT_MIS1(P_PROJECT='${sProject_id}')/Set`
        });
    }

    });
});