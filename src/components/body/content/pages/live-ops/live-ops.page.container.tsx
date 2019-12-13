import React from "react";
import { LiveOpsPage } from "./live-ops.page";

export const LiveOpsPageConatiner = () => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ): any {
    return { name, calories, fat, carbs, protein, selected: false };
  }

  const [rows, setRows] = React.useState([
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Donut", 452, 25.0, 51, 4.9),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Honeycomb", 408, 3.2, 87, 6.5),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Jelly Bean", 375, 0.0, 94, 0.0),
    createData("KitKat", 518, 26.0, 65, 7.0),
    createData("Lollipop", 392, 0.2, 98, 0.0),
    createData("Marshmallow", 318, 0, 81, 2.0),
    createData("Nougat", 360, 19.0, 9, 37.0),
    createData("Oreo", 437, 18.0, 63, 4.0)
  ]);

  const select = selectedRows =>
    setRows(
      rows.map(row =>
        selectedRows.indexOf(row) > -1
          ? { ...row, selected: !row.selected }
          : row
      )
    );

  return <LiveOpsPage rows={rows} select={select} />;
};
