import React, { useReducer } from "react"

import { flexRender } from "@tanstack/react-table"
import { ReactTableDevtools } from "@tanstack/react-table-devtools"

import MaUTable from '@mui/material/Table'
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"

const Table = ({ table }) => {
  const rerender = useReducer(() => ({}), {})[1]

  return (
    <React.Fragment>
      <MaUTable>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <React.Fragment key={headerGroup.id}>
              <TableRow>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell key={header.id} sx={{ fontWeight: '600' }}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            </React.Fragment>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MaUTable>
      <div>{table.getRowModel().rows.length} Rows</div>
      <div>
        <button onClick={() => rerender()}>Rerender</button>
      </div>
      <ReactTableDevtools table={table} initialIsOpen />
    </React.Fragment>
  )
}

export { Table }
