import { DebouncedInput } from '../DebouncedInput'

const Filter = ({ column }) => {
  const columnFilterValue = column.getFilterValue()

  return (
    <>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '')}
        onChange={value => column.setFilterValue(value)}
        list={column.id + 'list'}
      />
    </>
  )
}

export { Filter }