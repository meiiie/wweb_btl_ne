"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Chapter {
  title: string
  topics: string[]
  description?: string
}

interface CourseSyllabusProps {
  chapters: Chapter[]
}

export function CourseSyllabus({ chapters }: CourseSyllabusProps) {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(0)

  const toggleChapter = (index: number) => {
    setExpandedChapter(expandedChapter === index ? null : index)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Nội dung môn học</h2>

      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleChapter(index)}
              className={cn(
                "flex items-center justify-between w-full p-4 text-left font-semibold transition-colors",
                expandedChapter === index ? "bg-primary-50 text-primary" : "hover:bg-gray-50",
              )}
              aria-expanded={expandedChapter === index}
              aria-controls={`chapter-content-${index}`}
            >
              <span>
                Chương {index + 1}: {chapter.title}
              </span>
              <ChevronDown
                className={cn("h-5 w-5 transition-transform", expandedChapter === index ? "transform rotate-180" : "")}
              />
            </button>

            <div
              id={`chapter-content-${index}`}
              className={cn(
                "transition-all duration-300 ease-in-out overflow-hidden",
                expandedChapter === index ? "max-h-96" : "max-h-0",
              )}
            >
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                {chapter.description && <p className="text-gray-600 mb-3">{chapter.description}</p>}
                <ul className="space-y-2">
                  {chapter.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-primary font-medium mr-2">
                        {index + 1}.{topicIndex + 1}.
                      </span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
