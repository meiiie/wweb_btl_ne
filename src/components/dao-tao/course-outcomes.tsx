import { CheckCircle2 } from "lucide-react"

interface Outcome {
  id: string
  description: string
}

interface CourseOutcomesProps {
  outcomes: Outcome[]
}

export function CourseOutcomes({ outcomes }: CourseOutcomesProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Chuẩn đầu ra</h2>

      <p className="text-gray-600 mb-6">Sau khi hoàn thành môn học này, sinh viên sẽ có khả năng:</p>

      <div className="grid gap-4">
        {outcomes.map((outcome) => (
          <div key={outcome.id} className="flex items-start">
            <div className="mr-3 mt-0.5">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-gray-800 mr-2">{outcome.id}:</span>
                <span className="text-gray-700">{outcome.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
