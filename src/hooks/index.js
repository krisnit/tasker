import {useState , useEffect } from 'react';

const collatedTasksExist=() => [];

export const useTasks = selectedProject =>{
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', 'krisnit123')

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
        (unsubscribe= unsubscribe.where('projectId','==', selectedProject))
        : selectedProject === 'Today'
        ? (unsubscribe= unsubscribe.where(
            'date', '==', moment().format('DD/MM/YYY')
        ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

    }, [selectedProject])
}