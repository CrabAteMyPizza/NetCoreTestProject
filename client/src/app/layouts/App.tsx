import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import {useEffect, useState } from "react";
import Navbar from "./navbar";
import AcitivitiesDashboard from "../../features/acitivities/Dashboard/AcitivitiesDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/activities")
      .then(response => setActivities(response.data));
  }, []);

  const handleSelectAct = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id))
  }

  const handleCancelSelectAct = () => {
    setSelectedActivity(undefined)
  }

  const handleEditForm = (id? : string) => {
    if(id) {
      handleSelectAct(id);
    }
    else {
      handleCancelSelectAct();
    }
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
    if(activity.id) {
      setActivities(activities.map((x : Activity) => x.id === activity.id ? activity : x));
    }
    else {
      const newActivity = {...activity, id: activities.length.toString()};
      setSelectedActivity(newActivity);
      setActivities([...activities, newActivity]);
    }
    setEditMode(false);
  }

  const handleDelete = (id : string) => {
    setActivities(activities.filter(x => x.id !== id));
  }

  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
      <CssBaseline />
      <Navbar openForm={handleEditForm}/>
      <Container maxWidth='xl' sx={{mt: 3}}>
        <AcitivitiesDashboard activities={activities} 
        selectActivity={handleSelectAct} 
        selectCancel={handleCancelSelectAct}
        selectedActivity={selectedActivity}
        openForm={handleEditForm}
        closeForm={handleFormClose}
        editMode={editMode}
        handleSubmit={handleSubmitForm}
        handleDelete={handleDelete}
        />
      </Container>
    </Box>
  )
}

export default App
