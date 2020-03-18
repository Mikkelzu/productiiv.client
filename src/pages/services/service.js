import React from 'react';
import { useParams } from 'react-router-dom';

import BreakScheduler from './service-items/break-scheduler';
import ActivityTimeTracker from './service-items/activity-time-tracker';

export default function Service() {
    let {topicId} = useParams();

    if (topicId === 'break-scheduler') {
        return <BreakScheduler />
    } else if (topicId === 'activity-time-tracker') {
        return <ActivityTimeTracker />
    } else {
        return <h2>Service doesnt exist.</h2>
    }
}