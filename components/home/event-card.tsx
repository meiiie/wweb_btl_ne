import Link from "next/link"

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    time: string
    location: string
    link: string
  }
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        {/* Date box */}
        <div className="flex-shrink-0 bg-primary text-white rounded-lg p-3 text-center mr-4 w-16">
          <div className="text-2xl font-bold">{event.date.split("/")[0]}</div>
          <div className="text-sm">{`Tháng ${event.date.split("/")[1]}`}</div>
        </div>

        {/* Event details */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
            <Link href={event.link}>{event.title}</Link>
          </h3>
          <div className="flex flex-col space-y-1 text-gray-600 mb-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>
          <Link href={event.link} className="text-primary hover:text-primary-light font-medium flex items-center">
            Chi tiết
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
