import React, { useState, useEffect, useMemo } from "react"

import axios from "axios"

import {
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'

import { Header } from "./components/Header"
import { Table } from "./components/Table"

const App = () => {
  const PLANETS_PATH = "https://swapi.dev/api/planets/?page="
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])

  const columns = useMemo(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
        cell: info => info.getValue(),
      },
      {
        header: 'Rotation Period',
        accessorKey: 'rotation_period',
        cell: info => info.getValue(),
      },
      {
        header: 'Orbital period',
        accessorKey: 'orbital_period',
        cell: info => info.getValue(),
      },
      {
        header: 'Diameter',
        accessorKey: 'diameter',
        cell: info => info.getValue(),
      },
      {
        header: 'Climate',
        accessorKey: 'climate',
        cell: info => info.getValue(),
      },
      {
        header: 'Gravity',
        accessorKey: 'gravity',
        cell: info => info.getValue(),
      },
      {
        header: 'Terrain',
        accessorKey: 'terrain',
        cell: info => info.getValue(),
      },
      {
        header: 'Surface water',
        accessorKey: 'surface_water',
        cell: info => info.getValue(),
      },
      {
        header: 'Population',
        accessorKey: 'population',
        cell: info => info.getValue(),
      },
    ],
    []
  )

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        for (let i = 1; i <= 6; i++) {
          const result = await axios(PLANETS_PATH + i)
          setData(data => [...data, ...result.data.results])
        }
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  })
  const column = table.getHeaderGroups()[0].headers[0].column

  return (
    <React.Fragment>
      <Header column={column} />
      {isLoading ? <div>Loading ...</div> : <Table table={table} sorting={sorting} />}
      {isError && <div>Something went wrong ...</div>}
    </React.Fragment>
  )
}

export { App }
