import React from 'react'
import { Box, Typography, Stack } from "@mui/material"
import Loader from './Loader'
import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {

  return (
    <Box sx={{ mt: {lg: "100px", xs: "0"}}} p="20px">
      <Typography variant="h3" mb={5} mt={5}>
        <strong>Exercises that target the same muscle group</strong>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/> }
      </Stack>

      <Typography variant="h3" mb={5} mt={5}>
        <strong>Exercises that use the same equipment</strong>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative"}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/> }
      </Stack>

    </Box>
  )
}

export default SimilarExercises