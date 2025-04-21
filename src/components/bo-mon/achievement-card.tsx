import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Users } from "lucide-react"

interface AchievementCardProps {
  title: string
  description: string
  year: string
  type: "award" | "project" | "publication"
  participants?: string[]
}

export function AchievementCard({ title, description, year, type, participants }: AchievementCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-full bg-primary/10 p-2">
            <Award className="h-5 w-5 text-primary" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>

            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{year}</span>
              </div>

              {type === "award" && <span className="text-green-600">Giải thưởng</span>}
              {type === "project" && <span className="text-blue-600">Dự án</span>}
              {type === "publication" && <span className="text-purple-600">Công bố khoa học</span>}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{description}</p>

            {participants && participants.length > 0 && (
              <div className="mt-2">
                <div className="flex items-center gap-1 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-medium">Thành viên:</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{participants.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
