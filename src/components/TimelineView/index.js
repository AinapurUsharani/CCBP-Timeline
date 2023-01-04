import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div style={{width: '100%', height: '95vh'}} className="app-container">
      <h1 className="main-heading-1">
        MY JOURNEY OF <span className="main-heading-2"> CCBP 4.0</span>
      </h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',

          cardForeColor: 'violet',
          titleColor: ' #0967d2',
        }}
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'PROJECT') {
            return <ProjectTimelineCard key={each.id} projectDetails={each} />
          }
          return <CourseTimelineCard key={each.id} courseDetails={each} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
