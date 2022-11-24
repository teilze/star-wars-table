import React from "react"

import { flexRender } from "@tanstack/react-table"
import { ReactTableDevtools } from "@tanstack/react-table-devtools"

import MaUTable from '@mui/material/Table'
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"

import { css } from '@emotion/css'

import { useStyles } from './Table.styles'

const Table = ({ table, sorting }) => {
  const styles = useStyles()

  return (
    <React.Fragment>
      <MaUTable>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <React.Fragment key={headerGroup.id}>
              <TableRow>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell key={header.id} colSpan={header.colSpan} sx={{ fontWeight: '600' }}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? css(styles.cursorPointer)
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      </>
                    )}
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
      <pre>{JSON.stringify(sorting, null, 2)}</pre>
      <ReactTableDevtools table={table} initialIsOpen />
    </React.Fragment>
  )
}

export { Table }
