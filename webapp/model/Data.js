sap.ui.define([], function () {
  "use strict";

  return {
    getData: function () {
      return {
        header: "PROJECT MIS REPORT – Management Information System",
        header1:"Project: PROJ-2024-001  |  WBS: WBS-PROJ-001  |  Report Date: 20-Mar-2026  |  Prepared By: Project Controller",

        kpi: [
          {
            "title": "Total WBS Elements",
            "value": "24",
            "desc": "Across all Levels"
          },
          {
            "title": "Production Orders",
            "value": "18",
            "desc": "12 Done | 4 In-Prog | 2 Open"
          },
          {
            "title": "Materials – To Purchase",
            "value": "47",
            "desc": "Total line items pending PO"
          },
          {
            "title": "Materials – Purchased",
            "value": "83",
            "desc": "PO Issued / GR Done"
          },
          {
            "title": "Components",
            "value": "130",
            "desc": "Across all Prod. Orders"
          }
        ]
      };
    }
  };
});