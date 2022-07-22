import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
  Sort,
  CommandColumn,
  DetailRow,
  Edit,
  Filter,
} from "@syncfusion/ej2-react-grids";

import {
  employeesData,
  studentProfileTemplate,
  /* studentProfileTemplate, */
  teachersGrid,
  teachersProfileTemplate,
} from "../data/dummy";
import { Header } from "../components";

const CheckCourses = () => {
  const toolbarOptions = ["Search"];
  const filterSettings = {
    type: "Menu",
  };
  const selectionsettings = { type: "Single", mode: "Row" };
  const editing = {
    allowDeleting: true,
    allowEditing: true,
    showDeleteConfirmDialog: true,
    mode: "Dialog",
  };
  const commands = [
    {
      type: "Edit",
      buttonOption: { iconCss: "e-icons e-edit", cssClass: "e-flat" },
    },
    {
      type: "Delete",
      buttonOption: { iconCss: "e-icons e-delete", cssClass: "e-flat" },
    },
    {
      type: "Save",
      buttonOption: { iconCss: "e-icons e-update", cssClass: "e-flat" },
    },
    {
      type: "Cancel",
      buttonOption: { iconCss: "e-icons e-cancel-icon", cssClass: "e-flat" },
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Courses" title="Check Courses" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        // ref={(grid) => (grid = grid)}
        allowPaging
        allowSorting
        allowFiltering
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        selectionSettings={selectionsettings}
        filterSettings={filterSettings}
        detailTemplate={teachersProfileTemplate}
      >
        <ColumnsDirective>
          {teachersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <ColumnDirective
            headerText="Manage Records"
            width="160"
            commands={commands}
          />
        </ColumnsDirective>
        <Inject
          services={[
            Search,
            Toolbar,
            CommandColumn,
            DetailRow,
            Edit,
            Filter,
            Sort,
            Page,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default CheckCourses;
