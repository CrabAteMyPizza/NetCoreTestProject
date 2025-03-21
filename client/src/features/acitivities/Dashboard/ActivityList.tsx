import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[];
    selectActivity: (id : string) => void;
    handleDelete: (id : string) => void;
}

export default function ActivityList({activities, selectActivity, handleDelete} : Props) {
  return (
    <Box display="flex" sx={{gap: 3, flexDirection: "column"}}>
        {activities.map(activity => (
            <ActivityCard key={activity.id} handleDelete={handleDelete} activity={activity} selectActivity={selectActivity}/>
        ))}
    </Box>
  )
}