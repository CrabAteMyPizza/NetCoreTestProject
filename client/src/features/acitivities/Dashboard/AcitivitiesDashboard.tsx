import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../formActivities/ActivityForm";

type Props = {
    activities: Activity[];
    selectActivity: (id : string) => void;
    selectCancel: () => void;
    selectedActivity: Activity | undefined;
    openForm: (id : string) => void;
    closeForm: () => void;
    editMode: boolean;
} 

export default function AcitivitiesDashboard({editMode, openForm, closeForm, activities, selectActivity, selectCancel, selectedActivity} : Props) {
  return (
    <Grid2 container spacing={3}>
        <Grid2 size={7}>
            <ActivityList activities={activities} selectActivity={selectActivity} />
        </Grid2>
        <Grid2 size={5}>
            {selectedActivity && !editMode && <ActivityDetails openForm={openForm} selectedActivity={selectedActivity} 
              selectCancel={selectCancel}
            />}
            {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity}></ActivityForm>}
        </Grid2>
    </Grid2>
  )
}