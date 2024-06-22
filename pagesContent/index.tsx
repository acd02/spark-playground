import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { Select } from '@spark-ui/select'
import { useRef } from 'react'

import themes from '../themes'

const themeOptions = Object.keys(themes).map(key => ({ label: key, value: key }))

export function MainContent() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="grid h-full place-items-center gap-y-3xl p-lg">
      <div className="flex flex-col gap-xl">
        <FormField>
          <FormField.Label>Active theme</FormField.Label>
          <Select
            onValueChange={theme => {
              containerRef.current?.setAttribute('data-theme', theme)
            }}
          >
            <Select.Trigger aria-label="Book">
              <Select.Value placeholder="Pick a book" />
            </Select.Trigger>
            <Select.Items>
              {themeOptions.map(({ value, label }) => (
                <Select.Item key={value} value={value}>
                  {label}
                </Select.Item>
              ))}
            </Select.Items>
          </Select>
        </FormField>

        <Button>hello</Button>
      </div>
    </div>
  )
}
