sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "projectmisreport/model/data"
], (UIComponent, models, Data) => {
    "use strict";

    return UIComponent.extend("projectmisreport.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            

            // enable routing
            this.getRouter().initialize();
        }
    });
});