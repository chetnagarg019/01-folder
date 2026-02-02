import Card from "./components/Card"
import jobsData from "./data/jobsData"

const App = () => {
  return (
    <div className="min-h-screen bg-orange-200 p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobsData.map((job) => (
          <Card
            key={job.id}
            company={job.company}
            title={job.title}
            type={job.type}
            salary={job.salary}
            location={job.location}
          />
        ))}
      </div>
    </div>
  )
}

export default App
