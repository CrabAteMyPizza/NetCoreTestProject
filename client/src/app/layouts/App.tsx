import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "./navbar";
import AcitivitiesDashboard from "../../features/acitivities/Dashboard/AcitivitiesDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities, isPending} = useActivities();

  const handleSelectAct = (id: string) => {
    setSelectedActivity(activities!.find(x => x.id === id))
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

  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
      <CssBaseline />
      <Navbar openForm={handleEditForm}/>
      <Container maxWidth='xl' sx={{mt: 3}}>
        {!activities || isPending ? <Typography>Loading...</Typography> : 
          <AcitivitiesDashboard activities={activities} 
          selectActivity={handleSelectAct} 
          selectCancel={handleCancelSelectAct}
          selectedActivity={selectedActivity}
          openForm={handleEditForm}
          closeForm={handleFormClose}
          editMode={editMode}
          />
        }
      </Container>
    </Box>
  )
}

export default App
