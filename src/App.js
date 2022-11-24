import React, { useState, useEffect, useMemo } from "react"

import axios from "axios"

import {
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Header } from "./components/Header"
import { Table } from "./components/Table"

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

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
        const result = await axios("https://swapi.dev/api/planets")
        setData(result.data.results)
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
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  })

  console.log("data", data)

  return (
    <React.Fragment>
      <Header />
      {isLoading ? <div>Loading ...</div> : <Table table={table} />}
      {isError && <div>Something went wrong ...</div>}
    </React.Fragment>
  )
}

export { App }
