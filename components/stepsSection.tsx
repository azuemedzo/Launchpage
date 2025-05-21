'use client'

import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { format } from "date-fns"

export default function HowItWorks() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string>("")
  const [showTimeSelector, setShowTimeSelector] = useState(false)

  const times = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "01:00 PM", "02:00 PM", "03:00 PM",
  ]

  const steps = [
    {
      title: "Create a project",
      desc: "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      title: "Assign related people",
      desc: "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      title: "Make it done on-time",
      desc: "With lots of unique blocks, you can easily build a page without coding.",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Calendar */}
      <div className="relative">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate)
            setShowTimeSelector(true)
          }}
          className="rounded-md border shadow"
        />

        {/* Time Selection Box */}
        {showTimeSelector && date && (
          <div className="absolute top-4 left-4 bg-indigo-800 text-white p-4 rounded-lg shadow-lg w-64 z-10 animate-fade-in">
            <p className="text-sm mb-1">Selected Date: {format(date, "PPP")}</p>
            <h4 className="font-semibold text-lg mb-2">Pick a Time</h4>

            <div className="grid grid-cols-2 gap-2">
              {times.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setTime(t)}
                  className={`px-2 py-1 rounded text-sm ${
                    time === t ? "bg-white text-indigo-800 font-bold" : "bg-indigo-700 hover:bg-indigo-600"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {time && (
              <p className="mt-4 text-sm text-indigo-100">
                🕒 You selected: <strong>{time}</strong>
              </p>
            )}
          </div>
        )}
      </div>

      {/* Steps */}
      <div>
        <Badge variant="outline" className="text-green-700 border-green-300 mb-4">Steps</Badge>
        <h2 className="text-3xl font-bold mb-2">How it works ?</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-lg font-medium">{step.title}</h4>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
