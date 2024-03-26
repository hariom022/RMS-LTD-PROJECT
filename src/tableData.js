
export const columns = [
  { id: "ProductCode", label: "Product Code", minWidth: 100, align: "center" },
  { id: "Description", label: " Description", minWidth: 100, align: "center" },
  {
    id: "UOM",
    label: "UOM",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Site",
    label: "Site/Hospital Id",
    minWidth: 100,
    align: "center",
  },
  {
    id: "Consumption",
    label: "Consumption",
    minWidth: 100,
    align: "center",
  },
  {
    id: "OpenStock",
    label: "Open Stock",
    minWidth: 100,
    align: "center",
  },
];
export function createData(
  ProductCode,
  Description,
  UOM,
  OpenStock,
  Consumption,
  Site
) {
  return {
    ProductCode,
    Description,
    UOM,
    OpenStock,
    Consumption,
    Site,
  };
}

export const rows = [
  createData("ABC123", "Product A", "EA", 100, 30, "Site 1"),
  createData("ZAS123", "Product B", "KG", 200, 10, "Site 1"),
  createData("DFF123", "Product C", "KG", 400, 11, "Site 1"),
  createData("MHG123", "Product D", "KG", 100, 23, "Site 1"),

];