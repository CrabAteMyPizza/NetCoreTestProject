import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activity: Activity;
    selectCancel: () => void;
    openForm: (id : string) => void;
}

export default function ActivityDetails({openForm, activity, selectCancel} : Props) {
  return (
    <Card>
        <CardMedia 
            component={'img'}
            src={`/images/categoryImages/${activity.category}.jpg`}
        />
        <CardContent>
            <Typography variant='h5'>{activity.title}</Typography>
            <Typography variant='subtitle1' fontWeight='light'>{activity.date}</Typography>
            <Typography variant='body1'>{activity.description}</Typography>
        </CardContent>
        <CardActions>
            <Button color='primary' onClick={() => openForm(activity.id)}>Edit</Button>
            <Button color='inherit' onClick={selectCancel}>Cancel</Button>
        </CardActions>
    </Card>
  )
}