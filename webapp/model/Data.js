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
        ],

        orders: [
          {
            wbs: "WBS-001-01",
            desc: "Civil Foundation",
            orderNo: "PRD-10001",
            header: "MAT-CONC-001",
            qty: "50 MT",
            status: "COMPLETED",
            percent: 100
          },
          {
            wbs: "WBS-001-02",
            desc: "Steel Fabrication",
            orderNo: "PRD-10002",
            header: "MAT-STEEL-002",
            qty: "150 RI",
            status: "COMPLETED",
            percent: 100
          },
          {
            wbs: "WBS-001-03",
            desc: "Electrical Wiring",
            orderNo: "PRD-10003",
            header: "MAT-CABLE-003",
            qty: "30 NOS",
            status: "IN PROGRESS",
            percent: 45
          },
          {
            wbs: "WBS-001-04",
            desc: "Piping Works",
            orderNo: "PRD-10004",
            header: "MAT-PIPE-004",
            qty: "30 NOS",
            status: "IN PROGRESS",
            percent: 65
          },
          {
            wbs: "WBS-001-05",
            desc: "Instrumentation",
            orderNo: "PRD-10005",
            header: "MAT-INST-005",
            qty: "30 NOS",
            status: "NOT STARTED",
            percent: 0
          },
          {
            wbs: "WBS-001-06",
            desc: "HVAC Installation",
            orderNo: "PRD-10006",
            header: "MAT-HVAC-006",
            qty: "30 NOS",
            status: "NOT STARTED",
            percent: 0
          },
          {
            wbs: "WBS-001-07",
            desc: "Painting & Coating",
            orderNo: "PRD-10007",
            header: "MAT-PAINT-007",
            qty: "30 NOS",
            status: "COMPLETED",
            percent: 100
          },
          {
            wbs: "WBS-001-08",
            desc: "Insulation",
            orderNo: "PRD-10008",
            header: "MAT-INSL-008",
            qty: "30 NOS",
            status: "COMPLETED",
            percent: 100
          }
        ]
      };
    }
  };
});