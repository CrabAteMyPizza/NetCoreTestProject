import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

type Props = {
  activity?: Activity;
  closeForm: () => void;
  handleSubmit: (activity : Activity) => void;
}

export default function ActivityForm({activity, closeForm, handleSubmit} : Props) {

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data: {[key: string]: FormDataEntryValue} = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if(activity) {
      data.id = activity.id;
    }

    handleSubmit(data as unknown as Activity);
  }

  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
        <Typography variant='h5' gutterBottom color="primary">
            Create Activity
        </Typography>
        <Box component='form' onSubmit={submitForm} display='flex' flexDirection='column' gap={3}>
            <TextField name='title' label='Title' defaultValue={activity?.title}/>
            <TextField name='description' label='Description' defaultValue={activity?.description} multiline rows={3}/>
            <TextField name='category' label='Category' defaultValue={activity?.category} />
            <TextField name='date' label='Date' type='date' defaultValue={activity?.date} />
            <TextField name='city' label='City' defaultValue={activity?.city} />
            <TextField name='venue' label='Venue' defaultValue={activity?.venue} />
            <Box display='flex' justifyContent='end' gap={3}>
                <Button color='inherit' onClick={closeForm}>Cancel</Button>
                <Button color='success' type='submit' variant='contained'>Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}