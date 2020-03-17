import React from 'react';
import { useParams } from 'react-router-dom';

export default function Service() {
    let {topicId} = useParams();
    return <h3>requested id: {topicId}</h3>
}