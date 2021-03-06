import React, { useContext, useEffect, useState } from 'react'
import { database } from '../firebase'

const TaskContext = React.createContext();

function useTask() {
    return useContext(TaskContext);
}

function TaskProvider({children}) {
    const [loadingTasks, setLoadingTasks] = useState(false);
    const [tasks, setTasks] = useState([]);

    async function loadTasks(battleName = "default") {
        try {
            setLoadingTasks(true);
            await database.games
            .doc(`Repair-Merchant`)
            .collection("battlefield")
            .doc(`${battleName}`)
            .get().then( doc => {
                setTasks(doc.data().tasks );
            }).catch(() => {});
        } catch (error) {
            alert(error);
        } finally {
            setLoadingTasks(false);
        }
    }

    const isEmpty = () => {
        if  (!tasks) {
            return true;
        }
        return (tasks.length === 0);
    }

    const refresh = () => {
        loadTasks();
    }

    const removeTask = (index) => {
        const key = index.replace("task-", "");
        setTasks(tasks.filter((task) => {
            return (task.nombre !== parseInt(key) );
        }) );
    }

    const value = {
        tasks,
        loadTasks,
        isEmpty,
        refresh,
        removeTask
    }

    useEffect(() => {
        loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TaskContext.Provider value={value}>
          {!loadingTasks && children}
        </TaskContext.Provider>
      )
}

export {
    TaskProvider,
    useTask
}